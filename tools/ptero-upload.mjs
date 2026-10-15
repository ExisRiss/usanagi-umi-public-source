// Unggah berkas besar ke server Pterodactyl lewat signed URL Wings (multipart).
// Pakai: PTERO_ENV_FILE=... PTERO_SERVER=<id> node tools/ptero-upload.mjs <file-lokal> [nama-di-server]
import fs from 'node:fs'
import path from 'node:path'
const envFile = process.env.PTERO_ENV_FILE
const env = Object.fromEntries(fs.readFileSync(envFile, 'utf8').split('\n').filter(l => l.includes('=') && !l.trim().startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }))
const BASE = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY
const SERVER = process.env.PTERO_SERVER || env.PTERO_SERVER_ID
const [local, remoteName] = process.argv.slice(2)
const H = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }
let url = ''
for (let attempt = 1; attempt <= 8 && !url; attempt++) {
  const up = await fetch(`${BASE}/api/client/servers/${SERVER}/files/upload`, { headers: H }).catch(() => null)
  const uj = up ? await up.json().catch(() => ({})) : {}
  url = uj?.attributes?.url || ''
  if (!url) { console.log(`coba ${attempt}: HTTP ${up?.status} — tunggu…`); await new Promise(r => setTimeout(r, 4000)) }
}
if (!url) { console.error('gagal ambil signed url setelah 8x coba'); process.exit(1) }
const form = new FormData()
const buf = fs.readFileSync(local)
form.append('files', new Blob([buf]), remoteName || path.basename(local))
const started = Date.now()
const res = await fetch(url, { method: 'POST', body: form })
console.log('HTTP', res.status, `(${(buf.length / 1048576).toFixed(1)} MB dalam ${((Date.now() - started) / 1000).toFixed(1)}s)`)
if (!res.ok) console.error((await res.text()).slice(0, 300))
