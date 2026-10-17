#!/usr/bin/env node
/**
 * Deploy modul bot + companion ke container bot (server b3f9c8df, panel
 * serverprivv) lewat File API panel.
 *
 *   node tools/deploy-bot.mjs               # backup + unggah + restart
 *   node tools/deploy-bot.mjs --no-restart  # hanya unggah
 *   node tools/deploy-bot.mjs --only <nama> # satu berkas saja
 *
 * Yang diunggah:
 *   bot/lib/wallet-core.js            -> /lib/wallet-core.js
 *   bot/lib/panel-autoorder.js        -> /lib/panel-autoorder.js
 *   bot/lib/jadibot-platform-api.js   -> /lib/jadibot-platform-api.js
 *   db-mirror/companion.js            -> /scripts/companion.js
 *
 * Setiap berkas lama disalin ke /backup/<nama>.<stamp> dulu supaya bisa
 * dikembalikan cepat kalau ada masalah setelah restart.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' // sertifikat panel kadang self-signed

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SECRETS = '/home/user/.secrets'
const args = process.argv.slice(2)
const NO_RESTART = args.includes('--no-restart')
const ONLY = args.includes('--only') ? args[args.indexOf('--only') + 1] : ''
const NO_BACKUP = args.includes('--no-backup')

const env = Object.fromEntries(
  fs.readFileSync(path.join(SECRETS, 'panel-new-credentials.env'), 'utf8')
    .split('\n').filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }),
)
const BASE = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY
const SERVER = process.env.PTERO_SERVER || 'b3f9c8df'
const API = `${BASE}/api/client/servers/${SERVER}`
const HEAD = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }
const STAMP = new Date().toISOString().replace(/[:.]/g, '-')

const FILES = [
  { local: 'bot/lib/wallet-core.js', remote: '/lib/wallet-core.js', dir: '/lib' },
  { local: 'bot/lib/panel-autoorder.js', remote: '/lib/panel-autoorder.js', dir: '/lib' },
  { local: 'bot/lib/jadibot-platform-api.js', remote: '/lib/jadibot-platform-api.js', dir: '/lib' },
  { local: 'bot/lib/auto-backup.js', remote: '/lib/auto-backup.js', dir: '/lib' },
  { local: 'bot/lib/jadibot.js', remote: '/lib/jadibot.js', dir: '/lib' },
  { local: 'bot/lib/jadibot-session-cleaner.js', remote: '/lib/jadibot-session-cleaner.js', dir: '/lib' },
  { local: 'bot/main.js', remote: '/main.js', dir: '/' },
  { local: 'db-mirror/companion.js', remote: '/scripts/companion.js', dir: '/scripts' },
]

const log = (message) => console.log(`[deploy-bot] ${message}`)

async function api(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, {
    ...init,
    headers: { ...HEAD, ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...(init.headers || {}) },
  })
  return { status: res.status, text: await res.text() }
}

async function download(remote) {
  const res = await fetch(`${API}/files/contents?file=${encodeURIComponent(remote)}`, { headers: HEAD })
  if (!res.ok) return null
  return Buffer.from(await res.arrayBuffer())
}

async function upload(buffer, remoteDir, name) {
  const res = await fetch(`${API}/files/upload?directory=${encodeURIComponent(remoteDir)}`, { headers: HEAD })
  if (!res.ok) throw new Error(`signed url gagal (${res.status})`)
  const { attributes } = await res.json()
  const form = new FormData()
  form.append('files', new Blob([buffer]), name)
  const put = await fetch(attributes.url, { method: 'POST', body: form })
  if (!put.ok) throw new Error(`unggah ${name} gagal (${put.status}) — ${(await put.text()).slice(0, 160)}`)
}

async function move(from, to) {
  await api('/files/delete', { method: 'POST', body: JSON.stringify({ root: '/', files: [to] }) })
  const { status } = await api('/files/rename', { method: 'PUT', body: JSON.stringify({ root: '/', files: [{ from, to }] }) })
  if (status >= 300) throw new Error(`gagal pindah ${from} -> ${to} (${status})`)
}

async function main() {
  await api('/files/create-folder', { method: 'POST', body: JSON.stringify({ root: '/', name: 'backup' }) })
  const targets = ONLY ? FILES.filter((f) => path.basename(f.local).includes(ONLY)) : FILES
  if (!targets.length) { log(`tidak ada berkas cocok dengan --only ${ONLY}`); return }

  for (const file of targets) {
    const localPath = path.join(REPO, file.local)
    if (!fs.existsSync(localPath)) { log(`lewat ${file.local} (tidak ada)`); continue }
    const next = fs.readFileSync(localPath)
    if (!NO_BACKUP) {
      const current = await download(file.remote)
      if (current) {
        const backupName = `${path.basename(file.remote)}.${STAMP}.bak`
        await upload(current, '/', backupName)
        await move(`/${backupName}`, `/backup/${backupName}`)
        log(`backup ${file.remote} (${current.length} byte) -> /backup/${backupName}`)
      } else log(`backup dilewati untuk ${file.remote} (belum ada di server)`)
    }
    const name = `${path.basename(file.local)}.up`
    await upload(next, '/', name)
    await move(`/${name}`, file.remote)
    log(`unggah ${file.local} (${next.length} byte) -> ${file.remote}`)
  }

  if (NO_RESTART) { log('selesai (tanpa restart)'); return }
  const power = await api('/power', { method: 'POST', body: JSON.stringify({ signal: 'restart' }) })
  log(`restart dikirim (${power.status}) — tunggu ~45 detik`)
}

main().catch((error) => { console.error('[deploy-bot] gagal:', error.message); process.exit(1) })
