/**
 * Deteksi fitur yang MUSTAHIL dijalankan di Telegram.
 *
 * Bot WhatsApp punya kemampuan yang tidak ada padanannya di Bot API Telegram:
 * pesan "rich response" (HTML/JS interaktif yang dirender aplikasi WhatsApp,
 * mis. papan catur, tetris, snake) dan pairing/sesi WhatsApp. Fitur seperti itu
 * tetap hidup di bot WhatsApp & jadibot, tetapi tidak ditampilkan di Telegram.
 *
 * Deteksi dilakukan dari isi berkas plugin (statis, tanpa menjalankan kode).
 * Kalau berkas tidak ditemukan, plugin dianggap didukung — lebih baik fitur
 * tampil daripada hilang karena gagal membaca berkas.
 */
import fs from 'node:fs'
import path from 'node:path'

/** Pola yang berarti fitur bergantung pada kemampuan khusus WhatsApp. */
const PATTERNS = [
  {
    test: /richResponseMessage|botForwardedMessage/,
    reason: 'memakai pesan rich HTML interaktif WhatsApp',
  },
  {
    test: /requestPairingCode|useMultiFileAuthState|waitForConnectionUpdate/,
    reason: 'butuh pairing/sesi WhatsApp',
  },
]

const cache = new Map()

function pluginRoot() {
  const candidates = [
    globalThis.__umiPluginRoot,
    path.resolve(process.cwd(), 'plugins'),
    path.resolve(process.cwd(), 'bot', 'plugins'),
    path.resolve(process.cwd(), '..', 'plugins'),
  ].filter(Boolean)
  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isDirectory()) return candidate
    } catch {}
  }
  return null
}

/**
 * Periksa satu plugin.
 * @param {string} key kunci plugin (mis. `game/game-chess.js`)
 * @returns {{waOnly: boolean, reason: string|null}}
 */
export function waOnlyInfo(key, { root = pluginRoot() } = {}) {
  const name = String(key || '')
  if (!name || !root) return { waOnly: false, reason: null }
  const file = path.join(root, name)
  let stat
  try {
    stat = fs.statSync(file)
  } catch {
    return { waOnly: false, reason: null }
  }
  const cached = cache.get(name)
  if (cached && cached.mtimeMs === stat.mtimeMs && cached.size === stat.size) return cached.result
  let result = { waOnly: false, reason: null }
  try {
    const text = fs.readFileSync(file, 'utf8')
    const hit = PATTERNS.find(pattern => pattern.test.test(text))
    if (hit) result = { waOnly: true, reason: hit.reason }
  } catch {
    // Berkas tidak bisa dibaca → anggap didukung (jangan hilangkan fitur).
  }
  cache.set(name, { mtimeMs: stat.mtimeMs, size: stat.size, result })
  return result
}

/** Bersihkan cache (dipakai tes dan saat plugin di-reload). */
export function resetWaOnlyCache() {
  cache.clear()
}

export default { waOnlyInfo, resetWaOnlyCache }
