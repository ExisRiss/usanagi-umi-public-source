/**
 * REST API ekosistem: `/api/platform-system/*`.
 *
 * Autentikasi:
 *  - `x-platform-secret` = `PLATFORM_API_SECRET` (dipakai website setelah
 *    memverifikasi sesi Supabase + role pengguna).
 *  - `x-platform-user-id` = identitas internal hasil bootstrap website.
 *  - Route publik hanya `/health` dan `/media/<id>` (bertanda tangan).
 *
 * Tidak ada route yang mengembalikan token bot utuh.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { platformDb, schemaInfo } from './db.js'
import { audit, listAudit, getHealth } from './audit.js'
import * as bots from './telegram/bots.js'
import * as servers from './servers.js'
import * as media from './media.js'
import * as chats from './chats.js'
import * as stock from './stock.js'
import * as rpg from './rpg.js'
import { mainBotState, listSessions } from './wa.js'
import { listUsers, setRole, createLinkCode, ensureUser, getUser, whatsappJidFor, whatsappNumbersForWebUser } from './identity.js'
import { can, permissionsOf, ROLES, normalizeRole, canAssignRole } from './roles.js'
import { hasSecretKey, redact } from './secrets.js'
import { platformSummary } from './index.js'

const MAX_JSON = 512 * 1024
const MAX_UPLOAD = 50 * 1024 * 1024

function send(res, status, body, headers = {}) {
  if (res.writableEnded) return
  const payload = Buffer.from(JSON.stringify(body ?? null))
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': payload.length,
    'Cache-Control': 'no-store',
    ...headers,
  })
  res.end(payload)
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ''))
  const right = Buffer.from(String(b || ''))
  if (!left.length || left.length !== right.length) return false
  return crypto.timingSafeEqual(left, right)
}

export function authorizedPlatformRequest(req, env = process.env) {
  const secret = String(env.PLATFORM_API_SECRET || '')
  if (!secret) return false
  return safeEqual(req.headers['x-platform-secret'], secret)
}

async function readJson(req, limit = MAX_JSON) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', chunk => {
      size += chunk.length
      if (size > limit) {
        reject(Object.assign(new Error('Body terlalu besar.'), { status: 413 }))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      if (!chunks.length) return resolve({})
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))) } catch {
        reject(Object.assign(new Error('Body JSON tidak valid.'), { status: 400 }))
      }
    })
    req.on('error', reject)
  })
}

async function readBinary(req, limit = MAX_UPLOAD) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', chunk => {
      size += chunk.length
      if (size > limit) {
        reject(Object.assign(new Error(`Berkas melebihi ${limit / 1048576} MB.`), { status: 413 }))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

function actorOf(req) {
  return {
    userId: String(req.headers['x-platform-user-id'] || 'system'),
    platform: 'web',
    platformUserId: String(req.headers['x-platform-user-id'] || 'system'),
  }
}

function roleOf(actorUserId) {
  return normalizeRole(getUser(actorUserId)?.role || 'user')
}

function requirePerm(actorUserId, permission) {
  const role = roleOf(actorUserId)
  if (!can(role, permission)) throw Object.assign(new Error('Akses ditolak untuk peran ini.'), { status: 403, permission })
  return role
}

const PUBLIC_BASE = () => process.env.PLATFORM_PUBLIC_BASE_URL || ''

export async function handlePlatformApi(req, res, pathname, search, env = process.env) {
  const route = pathname.replace(/^\/api\/platform-system/, '') || '/'
  const method = req.method || 'GET'

  if (route === '/health' && method === 'GET') {
    return send(res, 200, {
      ok: true,
      service: 'usanagi-platform',
      schema: schemaInfo().version,
      secretKey: hasSecretKey(env),
      telegramTokenConfigured: Boolean(env.TELEGRAM_BOT_TOKEN),
      time: new Date().toISOString(),
    })
  }

  // Media bertanda tangan: satu-satunya route baca tanpa secret header.
  const mediaMatch = route.match(/^\/media\/([a-f0-9]{24})$/)
  if (mediaMatch && method === 'GET') {
    let file
    try {
      file = media.resolveSigned(mediaMatch[1], {
        expiresAt: search.get('e'),
        userId: search.get('u'),
        signature: search.get('s'),
      })
    } catch (error) {
      return send(res, error.status || 403, { error: error.message })
    }
    const stat = fs.statSync(file.file)
    res.writeHead(200, {
      'Content-Type': file.row.mime,
      'Content-Length': stat.size,
      'Cache-Control': 'private, max-age=300',
      'Content-Disposition': `inline; filename="${path.basename(file.row.name || 'media')}"`,
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; sandbox",
    })
    // Batas upload 50 MB sehingga pembacaan penuh tetap wajar; menghindari
    // ketergantungan pada implementasi writable stream pemanggil.
    res.end(fs.readFileSync(file.file))
    return true
  }

  if (!authorizedPlatformRequest(req, env)) {
    send(res, 401, { error: 'Tidak diizinkan. Header x-platform-secret tidak valid.' })
    return true
  }

  try {
    const actor = actorOf(req)

    if (route === '/bootstrap' && method === 'POST') {
      // Dipanggil website setelah sesi Supabase diverifikasi. Role dipetakan
      // dari tabel profiles website (server-side), bukan dari klien anonim.
      const body = await readJson(req)
      const authId = String(body.authId || '').trim()
      const email = String(body.email || '').trim().toLowerCase()
      if (!authId) return send(res, 400, { error: 'authId wajib.' })
      const role = normalizeRole(body.role || 'user')
      const userId = `web:${authId}`
      const existing = getUser(userId)
      ensureUser({ id: userId, source: 'web', email, displayName: body.displayName || null, role })
      // Role owner hanya boleh turun/naik oleh owner; bootstrap tidak menurunkan owner.
      if (existing && existing.role === 'owner' && role !== 'owner') {
        audit({ actorUserId: userId, platform: 'web', action: 'platform.bootstrap.role.keep', resource: userId, meta: { requested: role } })
      } else if (!existing || existing.role !== role) {
        platformDb().prepare('UPDATE platform_users SET role = ?, email = COALESCE(email, ?), updated_at = ? WHERE id = ?')
          .run(role, email, Date.now(), userId)
      }
      const numbers = whatsappNumbersForWebUser(authId)
      return send(res, 200, {
        userId,
        role: getUser(userId)?.role || role,
        permissions: permissionsOf(getUser(userId)?.role || role),
        whatsapp: { numbers: numbers.map(row => row.number), jid: whatsappJidFor(userId) },
      })
    }

    if (route === '/session' && method === 'GET') {
      const user = getUser(actor.userId)
      if (!user) return send(res, 404, { error: 'Pengguna belum terdaftar. Muat ulang halaman.' })
      return send(res, 200, {
        user: { id: user.id, email: user.email, displayName: user.display_name, role: user.role, status: user.status },
        permissions: permissionsOf(user.role),
        whatsapp: { jid: whatsappJidFor(user.id), numbers: whatsappNumbersForWebUser(String(user.id).replace(/^web:/, '')) },
        telegramLinked: Boolean(platformDb().prepare("SELECT 1 FROM platform_identities WHERE user_id = ? AND platform = 'telegram'").get(user.id)),
      })
    }

    if (route === '/dashboard' && method === 'GET') {
      const summary = await platformSummary()
      const db = platformDb()
      const counts = {
        users: db.prepare('SELECT count(*) n FROM platform_users').get().n,
        identities: db.prepare('SELECT count(*) n FROM platform_identities').get().n,
        bots: db.prepare('SELECT count(*) n FROM telegram_bots').get().n,
        media: db.prepare('SELECT count(*) n FROM platform_media WHERE deleted_at IS NULL').get().n,
        auditToday: db.prepare('SELECT count(*) n FROM platform_audit WHERE at > ?').get(Date.now() - 86400000).n,
      }
      const configuredServers = servers.listSlots().filter(slot => slot.configured)
      return send(res, 200, {
        ...summary,
        whatsapp: { ...mainBotState(), sessions: listSessions().length },
        counts,
        servers: { configured: configuredServers.length, max: servers.MAX_SERVERS, slots: servers.listSlots() },
        recentAudit: listAudit({ limit: 8 }).items,
      })
    }

    if (route === '/telegram/bots' && method === 'GET') {
      requirePerm(actor.userId, 'telegram.status')
      return send(res, 200, { items: bots.listBots() })
    }

    if (route === '/telegram/bots' && method === 'POST') {
      requirePerm(actor.userId, 'telegram.manage')
      const body = await readJson(req)
      const record = await bots.saveBot({
        id: body.id || null,
        token: body.token || null,
        label: body.label || 'Bot Telegram',
        ownerUserId: actor.userId,
        scope: body.scope === 'platform' ? 'platform' : 'user',
        mode: body.mode === 'webhook' ? 'webhook' : 'polling',
        enabled: body.enabled ?? false,
        env,
      })
      return send(res, 201, { ok: true, bot: record })
    }

    const botAction = route.match(/^\/telegram\/bots\/([\w-]+)\/(validate|enable|disable|revoke)$/)
    if (botAction && method === 'POST') {
      requirePerm(actor.userId, 'telegram.manage')
      const [, id, action] = botAction
      if (action === 'validate') return send(res, 200, await bots.validateBot(id, env))
      if (action === 'enable') return send(res, 200, { ok: true, bot: bots.setBotEnabled(id, true, actor) })
      if (action === 'disable') return send(res, 200, { ok: true, bot: bots.setBotEnabled(id, false, actor) })
      return send(res, 200, { ok: true, bot: bots.revokeBot(id, actor) })
    }

    if (route === '/servers' && method === 'GET') {
      requirePerm(actor.userId, 'server.read')
      return send(res, 200, { max: servers.MAX_SERVERS, slots: servers.listSlots() })
    }

    const slotRoute = route.match(/^\/servers\/(\d+)$/)
    if (slotRoute && method === 'PUT') {
      requirePerm(actor.userId, 'telegram.manage')
      const body = await readJson(req)
      return send(res, 200, { ok: true, slot: servers.upsertSlot({ slot: Number(slotRoute[1]), ...body }, actor) })
    }
    if (slotRoute && method === 'DELETE') {
      requirePerm(actor.userId, 'telegram.manage')
      return send(res, 200, { ok: true, ...servers.deleteSlot(Number(slotRoute[1]), actor) })
    }

    const slotAction = route.match(/^\/servers\/(\d+)\/action$/)
    if (slotAction && method === 'POST') {
      const body = await readJson(req)
      const role = roleOf(actor.userId)
      const result = await servers.serverAction(Number(slotAction[1]), String(body.action || 'status'), { actor, role })
      return send(res, 200, { ok: true, result })
    }

    if (route === '/servers/overview' && method === 'GET') {
      requirePerm(actor.userId, 'server.read')
      return send(res, 200, await servers.serverOverview({ actor }))
    }

    if (route === '/chats' && method === 'GET') {
      // Chat yang pernah melihat bot (untuk mengarahkan arsip ke grup tertentu).
      requirePerm(actor.userId, 'platform.audit.read')
      return send(res, 200, { items: chats.listChats({ limit: Number(search.get('limit') || 50) }) })
    }

    if (route === '/users' && method === 'GET') {
      requirePerm(actor.userId, 'platform.users.read')
      return send(res, 200, listUsers({
        limit: Number(search.get('limit') || 50),
        offset: Number(search.get('offset') || 0),
        role: search.get('role') || undefined,
      }))
    }

    const roleRoute = route.match(/^\/users\/([^/]+)\/role$/)
    if (roleRoute && method === 'PATCH') {
      requirePerm(actor.userId, 'platform.roles.manage')
      const body = await readJson(req)
      const actorRole = roleOf(actor.userId)
      if (!ROLES.includes(normalizeRole(body.role))) return send(res, 400, { error: 'Role tidak valid.' })
      if (!canAssignRole(actorRole, body.role)) return send(res, 403, { error: 'Peran kamu tidak boleh memberi role itu.' })
      return send(res, 200, { ok: true, user: setRole(decodeURIComponent(roleRoute[1]), body.role, actor) })
    }

    if (route === '/audit' && method === 'GET') {
      requirePerm(actor.userId, 'platform.audit.read')
      return send(res, 200, listAudit({
        limit: Number(search.get('limit') || 50),
        offset: Number(search.get('offset') || 0),
        action: search.get('action') || undefined,
        actorUserId: search.get('actor') || undefined,
      }))
    }

    if (route === '/link/telegram' && method === 'POST') {
      const numbers = whatsappNumbersForWebUser(String(actor.userId).replace(/^web:/, ''))
      const jid = numbers.length ? `${numbers[0].number}@s.whatsapp.net` : null
      const created = createLinkCode(actor.userId, { label: 'dashboard', whatsappJid: jid })
      return send(res, 201, { ...created, whatsappJid: jid, instructions: `Kirim /link ${created.code} ke bot Telegram.` })
    }

    if (route === '/rpg/summary' && method === 'GET') {
      requirePerm(actor.userId, 'rpg.read')
      const jid = whatsappJidFor(actor.userId)
      if (!jid) return send(res, 200, { linked: false, rpg: rpg.storeStatus() })
      const profile = rpg.profile(jid)
      return send(res, 200, { linked: true, jid, profile, rpg: rpg.storeStatus(), leaderboard: rpg.leaderboard({ limit: 5 }) })
    }

    if (route === '/stock/status' && method === 'GET') {
      requirePerm(actor.userId, 'stock.read')
      try {
        const data = await stock.market()
        return send(res, 200, { ok: true, ...data })
      } catch (error) {
        return send(res, 200, { ok: false, error: error.message, ready: stock.stockReady() })
      }
    }

    if (route === '/media' && method === 'GET') {
      return send(res, 200, { items: media.listMedia({ userId: search.get('all') === '1' ? null : actor.userId, limit: Number(search.get('limit') || 50) }) })
    }

    if (route === '/media/upload' && method === 'POST') {
      requirePerm(actor.userId, 'media.upload')
      const buffer = await readBinary(req)
      const stored = media.storeMedia(buffer, {
        userId: actor.userId,
        platform: 'web',
        name: String(req.headers['x-file-name'] || ''),
        actor,
      })
      const url = media.mediaUrl(stored.id, { baseUrl: PUBLIC_BASE(), userId: actor.userId })
      return send(res, 201, { ok: true, media: { ...stored, url } })
    }

    const mediaLink = route.match(/^\/media\/([a-f0-9]{24})\/link$/)
    if (mediaLink && method === 'POST') {
      // Tautan dibuat ulang di sini agar panel bisa membagikan media miliknya
      // tanpa pernah menyimpan URL bertanda tangan di database.
      requirePerm(actor.userId, 'media.upload')
      const row = platformDb().prepare('SELECT user_id, name FROM platform_media WHERE id = ? AND deleted_at IS NULL').get(mediaLink[1])
      if (!row) return send(res, 404, { error: 'Media tidak ditemukan.' })
      const role = roleOf(actor.userId)
      if (String(row.user_id) !== String(actor.userId) && !['owner', 'developer', 'admin'].includes(role)) {
        return send(res, 403, { error: 'Anda tidak berhak membagikan media ini.' })
      }
      // Default permanen (e=0). Panel bisa minta tautan sementara dengan
      // ?permanent=0 supaya perilaku lama tetap tersedia.
      const permanent = search.get('permanent') !== '0'
      const ttlMs = permanent ? 0 : media.DEFAULT_TTL_MS
      const url = media.mediaUrl(mediaLink[1], { baseUrl: PUBLIC_BASE(), userId: actor.userId, ttlMs, permanent })
      audit({
        actorUserId: actor.userId,
        platform: 'web',
        platformUserId: actor.platformUserId,
        action: 'media.link.create',
        resource: `media:${mediaLink[1]}`,
        meta: { owner: row.user_id, permanent },
      })
      return send(res, 200, { ok: true, url, permanent, expiresAt: permanent ? null : new Date(Date.now() + ttlMs).toISOString() })
    }

    const mediaDelete = route.match(/^\/media\/([a-f0-9]{24})$/)
    if (mediaDelete && method === 'DELETE') {
      requirePerm(actor.userId, 'media.delete.own')
      return send(res, 200, { ok: true, ...media.deleteMedia(mediaDelete[1], { userId: actor.userId, role: roleOf(actor.userId), actor }) })
    }

    if (route === '/health/integrations' && method === 'GET') {
      requirePerm(actor.userId, 'monitor.read')
      return send(res, 200, { items: getHealth() })
    }

    return send(res, 404, { error: 'Endpoint platform tidak ditemukan.' })
  } catch (error) {
    const status = Number(error?.status) || 500
    if (status >= 500) console.error('[PLATFORM-API]', redact(error?.stack || error?.message || String(error)))
    return send(res, status, { error: redact(error?.message || 'Kesalahan internal.') })
  }
}
