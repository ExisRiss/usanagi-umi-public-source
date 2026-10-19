/**
 * Jembatan RPG untuk adapter Telegram.
 *
 * Sumber kebenaran = `rpg_users` (SQLite) yang dipakai bot WhatsApp lewat
 * `lib/rpg/unified-store.js`. Tidak ada salinan progres, tidak ada tabel RPG
 * kedua.
 *
 * Keputusan penting: Telegram TIDAK membuat identitas RPG sendiri. Perintah RPG
 * hanya jalan setelah akun Telegram ditautkan ke nomor WhatsApp, sehingga
 * progres di WhatsApp dan Telegram benar-benar satu baris data. (Menulis
 * identitas Telegram ke `rpg_unified_aliases` akan merusak invariant alias WA.)
 */
import { unifiedRpg } from '../rpg/unified-store.js'
import { platformDb } from './db.js'

export const DAILY = { koin: 500, exp: 250, cooldownMs: 22 * 60 * 60 * 1000 }

export function rpgStore() {
  return unifiedRpg()
}

export function rpgReady() {
  return Boolean(unifiedRpg())
}

export function storeStatus() {
  const store = unifiedRpg()
  if (!store) return { active: false }
  try { return { active: true, ...store.status() } } catch (error) { return { active: false, error: error.message } }
}

function requireStore() {
  const store = unifiedRpg()
  if (!store) throw Object.assign(new Error('Mesin RPG belum aktif di server.'), { status: 503 })
  return store
}

function hasProfileRow(id) {
  // Baris nyata di SQLite = sumber kebenaran "profil ada".
  // `store.read()` akan membuat profil dasar untuk nomor apa pun, jadi tidak
  // bisa dipakai sebagai bukti bahwa pengguna pernah bermain.
  return Boolean(platformDb().prepare('SELECT 1 FROM rpg_users WHERE jid = ?').get(String(id)))
}

function canonical(jid) {
  const store = requireStore()
  const id = store.identity(String(jid || ''))
  if (!id || !hasProfileRow(id)) {
    throw Object.assign(new Error('Nomor WhatsApp ini belum punya profil RPG.'), { status: 409 })
  }
  return id
}

export function profile(jid) {
  const store = requireStore()
  if (!jid) throw Object.assign(new Error('Akun WhatsApp belum ditautkan.'), { status: 409 })
  const id = store.identity(String(jid))
  if (!id || !hasProfileRow(id)) {
    return {
      linked: true,
      hasProfile: false,
      jid,
      message: 'Belum ada progres RPG untuk nomor ini. Mulai dari WhatsApp dulu (kirim pesan biasa agar profil dibuat).',
    }
  }
  const row = store.read(id)
  const inventory = Object.entries(row.inventory || {}).filter(([, count]) => Number(count) > 0).sort((a, b) => b[1] - a[1])
  return {
    linked: true,
    hasProfile: true,
    jid: id,
    koin: row.koin,
    exp: row.exp,
    level: Math.floor(row.exp / 10000) + 1,
    rpg: row.rpg || {},
    quest: row.quest || {},
    cooldowns: row.cooldowns || {},
    inventoryCount: inventory.length,
    inventory: inventory.slice(0, 15).map(([item, count]) => ({ item, count })),
    totalItems: inventory.reduce((sum, [, count]) => sum + Number(count), 0),
  }
}

export function leaderboard({ limit = 10, by = 'koin' } = {}) {
  const store = requireStore()
  const rows = store.allUsers()
    .filter(row => row && typeof row === 'object')
    .map(row => ({
      jid: row.jid,
      koin: Number(row.koin || 0),
      exp: Number(row.exp || 0),
      level: Math.floor(Number(row.exp || 0) / 10000) + 1,
    }))
    .sort((a, b) => (by === 'exp' ? b.exp - a.exp : b.koin - a.koin))
    .slice(0, Math.min(Math.max(Number(limit) || 10, 1), 25))
  return rows.map((row, index) => ({
    ...row,
    rank: index + 1,
    // Nomor disamarkan: papan peringkat dibaca banyak orang.
    masked: row.jid.replace(/(\d{4})\d+(\d{3})/, '$1***$2'),
  }))
}

/**
 * Klaim hadiah harian. Ditulis lewat `store.command(id)` sehingga:
 *  - berjalan dalam satu transaksi SQLite;
 *  - idempotent terhadap ID pesan/platform (retry tidak menggandakan hadiah);
 *  - cooldown dicek di dalam transaksi (bukan dari klien).
 */
export async function claimDaily(jid, { idempotencyKey, now = Date.now() } = {}) {
  const store = requireStore()
  if (!idempotencyKey) throw Object.assign(new Error('ID permintaan wajib untuk hadiah harian.'), { status: 400 })
  const id = canonical(jid)
  let outcome = null
  const result = await store.command(`tg-daily:${idempotencyKey}`, () => {
    const row = store.read(id)
    const last = Number(row?.cooldowns?.daily || 0)
    if (last && now - last < DAILY.cooldownMs) {
      outcome = { ok: false, reason: 'cooldown', nextAt: new Date(last + DAILY.cooldownMs).toISOString(), remainingMs: last + DAILY.cooldownMs - now }
      return { success: false }
    }
    row.koin = Number(row.koin || 0) + DAILY.koin
    row.exp = Number(row.exp || 0) + DAILY.exp
    row.cooldowns = { ...(row.cooldowns || {}), daily: now }
    store.write(id, row)
    outcome = { ok: true, koin: DAILY.koin, exp: DAILY.exp, totalKoin: row.koin, totalExp: row.exp, level: Math.floor(row.exp / 10000) + 1 }
    return { success: true }
  })
  if (result?.duplicate) return { ok: false, reason: 'duplicate', message: 'Hadiah ini sudah diproses.' }
  return outcome || { ok: false, reason: 'failed' }
}
