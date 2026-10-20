/**
 * Jembatan plugin WhatsApp → Telegram.
 *
 * Tujuannya BUKAN sistem kedua: plugin yang sama (`global.plugins`, dimuat
 * `main.js`) dijalankan dengan `m`/`conn` bergaya WhatsApp yang diterjemahkan ke
 * Telegram. Jadi fitur baru yang ditambah di `plugins/**` otomatis ikut muncul
 * di Telegram tanpa menulis ulang.
 *
 * Identitas: `m.sender` = JID yang dipakai mesin RPG bersama
 * (`rpg.rpgJidFor`), sehingga plugin RPG menulis ke baris data yang SAMA
 * dengan bot WhatsApp — bukan database kedua.
 *
 * Fitur yang benar-benar mustahil di Telegram (metadata grup WhatsApp, admin
 * grup, stiker WA asli) melempar error jelas — bukan tombol palsu.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import { audit } from '../audit.js'
import { rpgJidFor } from '../rpg.js'
import { findItem, handlerOf } from './catalog.js'

const COMMAND_TIMEOUT_MS = 45000
const MAX_TEXT = 3800

/** Perintah yang sudah ditangani platform (JANGAN dijalankan plugin). */
const PLATFORM_OWNED = new Set([
  'start', 'menu', 'allmenu', 'help', 'profile', 'status', 'jadibot', 'tourl', 'to-url',
  'server', 'saham', 'stock', 'rpg', 'panel', 'admin', 'reseller', 'link', 'unlink',
  'fitur', 'menu2', 'cari', 'kategori', 'health', 'files',
])

const ROLE_RANK = { owner: 0, developer: 1, admin: 2, reseller: 3, user: 4 }

/**
 * Ubah format WhatsApp (*tebal*, _miring_, `kode`) ke HTML Telegram.
 * Seluruh teks di-escape lebih dulu, jadi plugin tidak bisa menyuntik HTML.
 */
export function waToHtml(value) {
  let text = String(value ?? '')
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  text = text.replace(/```([\s\S]+?)```/g, (_, code) => `<pre>${code}</pre>`)
  text = text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>')
  text = text.replace(/\*([^*\n]{1,200})\*/g, '<b>$1</b>')
  text = text.replace(/_([^_\n]{1,200})_/g, '<i>$1</i>')
  text = text.replace(/`([^`\n]{1,200})`/g, '<code>$1</code>')
  return text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT)}…` : text
}

function senderJidFor(ctx) {
  return rpgJidFor(ctx.userId, ctx.platformUserId).jid
}

/* ─────────────────────────── pengiriman ─────────────────────────── */

async function sendMedia(ctx, kind, source, caption = '', filename = null) {
  const client = ctx.client
  if (!client) throw new Error('Klien Telegram tidak tersedia.')
  let buffer = null
  let name = filename
  const url = typeof source === 'string' ? source : source?.url
  if (Buffer.isBuffer(source)) buffer = source
  else if (url) {
    if (/^https?:\/\//i.test(url)) {
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
      if (!response.ok) throw new Error(`Media balas HTTP ${response.status}.`)
      buffer = Buffer.from(await response.arrayBuffer())
    } else {
      if (!fs.existsSync(url)) throw new Error('Berkas media tidak ditemukan.')
      buffer = fs.readFileSync(url)
    }
  }
  if (!buffer) throw new Error('Media tidak punya isi yang bisa dikirim.')
  if (buffer.length > 45 * 1024 * 1024) throw new Error('Media lebih dari 45 MB, Telegram menolak.')
  const ext = String(name || url || '').split('.').pop()?.toLowerCase() || ''
  const mime = kind === 'photo' ? 'image/jpeg'
    : kind === 'video' ? 'video/mp4'
    : /^audio|voice$/.test(kind) ? 'audio/mpeg'
    : ext === 'pdf' ? 'application/pdf'
    : ext === 'webp' ? 'image/webp'
    : 'application/octet-stream'
  return client.upload(kind === 'voice' ? 'document' : kind, ctx.chatId, buffer, {
    filename: name || `media.${ext || 'bin'}`,
    mime,
    caption,
  })
}

/**
 * Terima semua bentuk isi pesan Baileys yang dipakai plugin di repo ini.
 * Yang tidak mungkin (sticker WA, button native, viewOnce, dsb.) dijawab jelas.
 */
async function sendContent(ctx, content, options = {}) {
  if (content == null) return null
  if (typeof content === 'string' || typeof content === 'number') return ctx.send(waToHtml(content))
  if (Buffer.isBuffer(content.image) || Buffer.isBuffer(content.video) || Buffer.isBuffer(content.document)) {
    // buffer langsung
  }
  const caption = waToHtml(content.caption || content.text || '')
  if (content.react) {
    const emoji = String(content.react.text || content.react || '')
    if (ctx.messageId && emoji) await ctx.client?.setMessageReaction?.(ctx.chatId, ctx.messageId, emoji).catch(() => {})
    return null
  }
  if (content.delete) {
    if (ctx.messageId) await ctx.deleteMessage?.()
    return null
  }
  if (content.image) return sendMedia(ctx, 'photo', content.image, caption)
  if (content.video) return sendMedia(ctx, 'video', content.video, caption)
  if (content.document) return sendMedia(ctx, 'document', content.document, caption, content.fileName || content.filename)
  if (content.audio) return sendMedia(ctx, 'audio', content.audio, caption, content.fileName || 'audio.mp3')
  if (content.sticker || content.stickerPack) {
    throw new Error('Stiker WhatsApp tidak bisa dipakai di Telegram (format berbeda). Pakai /menu sticker versi gambar.')
  }
  if (content.text) return ctx.send(caption)
  if (content.buttons || content.templateButtons) {
    // Tombol native WhatsApp tidak punya padanan; teksnya tetap dikirim supaya
    // pengguna tidak kehilangan informasi.
    const body = content.text || content.caption || content.body || ''
    return ctx.send(waToHtml(body))
  }
  if (content.poll) {
    const question = content.poll.name || content.poll.question || 'Polling'
    const options_ = (content.poll.values || content.poll.options || []).map(String)
    return ctx.send(waToHtml(`${question}\n\n${options_.map((item, index) => `${index + 1}. ${item}`).join('\n')}`))
  }
  if (content.contacts) return ctx.send('<i>(kontak tidak bisa dikirim lewat jembatan Telegram)</i>')
  return ctx.send(waToHtml(JSON.stringify(content).slice(0, 400)))
}

/* ─────────────────────────── shim conn/m ─────────────────────────── */

function makeConn(ctx, message, jid) {
  const send = (chat, content, options) => sendContent(ctx, content, options)
  const conn = {
    user: { jid, id: jid, name: 'Usanagi Umi (Telegram)' },
    ev: { on: () => {}, off: () => {} },
    reply: (chat, content, quoted, options) => sendContent(ctx, content, options),
    sendMessage: (chat, content, options) => sendContent(ctx, content, options),
    sendFile: (chat, content, quoted, options) => sendContent(ctx, content, options),
    relayMessage: (chat, message_) => {
      const body = message_?.message || message_ || {}
      const inner = body.imageMessage || body.videoMessage || body.documentMessage || body.extendedTextMessage || body.conversation
      if (typeof inner === 'string') return ctx.send(waToHtml(inner))
      if (inner?.caption) return ctx.send(waToHtml(inner.caption))
      if (inner?.text) return ctx.send(waToHtml(inner.text))
      return ctx.send('<i>(pesan ini tidak bisa ditampilkan di Telegram)</i>')
    },
    sendSticker: async (chat, content) => {
      const url = content?.sticker?.url || content?.sticker
      if (!url) throw new Error('Stiker tidak punya sumber yang bisa dikirim.')
      return sendMedia(ctx, 'document', url, '', 'sticker.webp')
    },
    waUploadToServer: async () => ({ url: null }),
    getName: () => ctx.displayName || ctx.username || 'Pengguna',
    profilePictureUrl: async () => { throw new Error('Foto profil WhatsApp tidak tersedia di Telegram.') },
    groupMetadata: async (chat) => {
      if (!String(ctx.chatId || '').startsWith('-')) throw new Error('Perintah ini khusus grup WhatsApp.')
      // Metadata nyata grup Telegram tidak bisa dibaca lewat Bot API tanpa
      // hak admin, jadi yang dikirim hanya identitas chat — daftar anggota dan
      // status admin tetap kosong (bukan data karangan).
      return { id: String(chat || ctx.chatId), subject: ctx.chatTitle || 'Grup Telegram', participants: [], announce: false, restrict: false }
    },
    groupParticipantsUpdate: async () => { throw new Error('Kelola anggota WhatsApp tidak tersedia di Telegram.') },
    groupSettingUpdate: async () => { throw new Error('Pengaturan grup WhatsApp tidak tersedia di Telegram.') },
    presenceSubscribe: async () => {},
    readMessages: async () => {},
    chatRead: async () => {},
    sendPresenceUpdate: async () => {},
  }
  // Cache per-koneksi yang dipakai plugin game (conn.skata, conn.hangman, ...).
  return new Proxy(conn, {
    get(target, prop) {
      if (prop in target) return target[prop]
      if (typeof prop === 'symbol') return undefined
      // Objek cache otomatis: plugin melakukan `conn.skata = conn.skata || {}`.
      return undefined
    },
  })
}

export function makeMessage(ctx, message, { jid = null } = {}) {
  const sender = jid || senderJidFor(ctx)
  const isGroup = String(ctx.chatId || '').startsWith('-')
  const m = {
    key: { remoteJid: sender, fromMe: false, id: String(message?.message_id || crypto.randomBytes(6).toString('hex')) },
    chat: sender,
    sender,
    fromMe: false,
    isGroup,
    isBaileys: false,
    text: String(message?.text || ''),
    pushName: ctx.displayName || ctx.username || 'Pengguna',
    name: ctx.displayName || ctx.username || 'Pengguna',
    mentionedJid: [],
    quoted: null,
    messageTimestamp: Math.floor(Date.now() / 1000),
    reply: (content, options) => sendContent(ctx, content, options),
    react: emoji => (ctx.client?.setMessageReaction?.(ctx.chatId, ctx.messageId, String(emoji || '')).catch(() => {})),
    download: async () => {
      const fileId = message?.document?.file_id || message?.video?.file_id || message?.photo?.at(-1)?.file_id || message?.audio?.file_id
      if (!fileId) throw new Error('Tidak ada media pada pesan ini.')
      return ctx.downloadFile(fileId)
    },
    getQuotedObj: async () => { throw new Error('Balasan (quoted) WhatsApp tidak tersedia di Telegram.') },
    copy: async () => {},
  }
  // `mentionedJid` sering ditulis plugin; jaga dengan defineProperty agar tidak
  // memicu setter aneh (pola yang dipakai bot WhatsApp).
  try {
    Object.defineProperty(m, 'mentionedJid', { value: [], writable: true, configurable: true, enumerable: true })
  } catch {}
  return m
}

/* ─────────────────────────── eksekusi ─────────────────────────── */

function deny(ctx, key, name, reason) {
  audit({
    actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
    action: 'telegram.plugin.denied', resource: name, result: 'denied', meta: { role: ctx.role, reason },
  })
  return ctx.send(`⛔ ${reason}`).then(() => ({ handled: true, plugin: key, denied: true }))
}

/**
 * Jalankan plugin WhatsApp di Telegram.
 * @returns {Promise<{handled:boolean, plugin?:string, error?:string}>}
 */
export async function runPluginOnTelegram(ctx, parsed, { plugins = globalThis.plugins } = {}) {
  const name = String(parsed?.name || '').toLowerCase()
  if (!name || PLATFORM_OWNED.has(name)) return { handled: false }
  const item = findItem(name, plugins)
  if (!item) return { handled: false }
  const plugin = plugins?.[item.key]
  const handler = handlerOf(plugin)
  if (!handler) return { handled: false }

  const rank = ROLE_RANK[ctx.role] ?? 9
  if (plugin.owner && rank > 1) return deny(ctx, item.key, name, 'Fitur ini khusus owner/developer.')
  if (plugin.admin && rank > 2) return deny(ctx, item.key, name, 'Fitur ini khusus admin ke atas.')
  if (plugin.premium) return deny(ctx, item.key, name, 'Fitur premium belum tersedia untuk akun Telegram ini.')

  const jid = senderJidFor(ctx)
  const message = ctx.rawMessage || { message_id: ctx.messageId || null, text: `/${name} ${(parsed.args || []).join(' ')}`.trim() }
  const m = makeMessage(ctx, message, { jid })
  const conn = makeConn(ctx, message, jid)
  const options = {
    conn,
    m,
    text: (parsed.args || []).join(' '),
    args: parsed.args || [],
    usedPrefix: '/',
    command: name,
    prefix: '/',
    isOwner: rank <= 1,
    isROwner: ctx.role === 'owner',
    isAdmin: false,
    isBotAdmin: false,
    isPrems: rank <= 2,
    isCreator: ctx.role === 'owner',
    participants: [],
    groupMetadata: null,
    __telegram: true,
  }

  const started = Date.now()
  let timer = null
  try {
    await Promise.race([
      Promise.resolve(handler(m, options)),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(Object.assign(new Error('Fitur tidak selesai dalam 45 detik.'), { timeout: true })), COMMAND_TIMEOUT_MS)
        timer.unref?.()
      }),
    ])
    audit({
      actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'telegram.plugin.run', resource: name, meta: { plugin: item.key, ms: Date.now() - started },
    })
    return { handled: true, plugin: item.key }
  } catch (error) {
    const raw = String(error?.message || error || 'gagal')
    const waOnly = /WhatsApp|socket|Baileys|grup|group|whatsapp/i.test(raw)
    await ctx.send(waOnly
      ? `⚠️ <b>/${name}</b> butuh fitur WhatsApp yang tidak ada di Telegram.\nCoba dari bot WhatsApp.`
      : `❌ <b>/${name}</b> gagal.\n<code>${waToHtml(raw).slice(0, 300)}</code>`)
    audit({
      actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'telegram.plugin.run', resource: name, result: 'failed',
      meta: { plugin: item.key, error: raw.slice(0, 200), waOnly },
    })
    return { handled: true, plugin: item.key, error: raw }
  } finally {
    if (timer) clearTimeout(timer)
  }
}

/** Jalankan plugin RPG tertentu: dipakai `/rpg <perintah>`. */
export async function runRpgPlugin(ctx, name) {
  return runPluginOnTelegram(ctx, { name, args: [] })
}
