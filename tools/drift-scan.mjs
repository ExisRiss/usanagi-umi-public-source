#!/usr/bin/env node
/**
 * Bandingkan isi bot di server Pterodactyl dengan salinan lokal di repo.
 *
 * BACKUP-MANIFEST.json di server bisa basi (dibuat saat backup jam terakhir),
 * jadi alat ini membaca daftar file LANGSUNG dari Client API per direktori,
 * lalu membandingkan ukuran byte dengan berkas lokal.
 *
 * Pakai:
 *   node tools/drift-scan.mjs                 # ringkasan drift
 *   node tools/drift-scan.mjs --json out.json # simpan daftar lengkap
 *   node tools/drift-scan.mjs --pull          # unduh file yang beda ke repo lokal
 *
 * Kredensial: PTERO_ENV_FILE (default /home/user/.secrets/beyy-new-panel-credentials.env)
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const CRED = process.env.PTERO_ENV_FILE || '/home/user/.secrets/beyy-new-panel-credentials.env'
const LOCAL = process.env.LOCAL_BOT || '/home/user/usanagi-umi-public-source/bot'
const SKIP = new Set(['node_modules', 'sessions', 'data', '.npm', 'tmp', '.git'])
// Berkas yang isinya memang beda antara server dan repo karena berisi keadaan
// runtime / rahasia — dilaporkan terpisah, JANGAN pernah di-pull ke repo publik.
const RUNTIME = new Set([
  'database.json',           // data pengguna & wallet (gitignored)
  'lib/chat.json',           // keadaan chat runtime (repo cuma punya placeholder "{}")
  'config.js',               // kredensial bot
  'lib/webgame.json',        // token Umi Web Games (gitignored, hanya di server)
  'BACKUP-MANIFEST.json',    // manifes generasi backup terakhir
  'cloudflared',             // biner 40 MB
  '.main-bot.env', '.tunnel.env', '.owner-console-relay.env',
  '.backup-export.env', '.error-report.env',
])

const env = Object.fromEntries(
  fs.readFileSync(CRED, 'utf8').split('\n')
    .filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)
const BASE = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY
const SERVER = process.env.PTERO_SERVER_ID || env.PTERO_SERVER_ID
if (!BASE || !KEY || !SERVER) { console.error('PTERO_PANEL_URL / PTERO_CLIENT_API_KEY / PTERO_SERVER_ID belum lengkap'); process.exit(1) }

const H = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }
const list = async (dir) => {
  const u = `${BASE}/api/client/servers/${SERVER}/files/list${dir ? `?directory=${encodeURIComponent('/' + dir)}` : ''}`
  const r = await fetch(u, { headers: H })
  if (!r.ok) throw new Error(`list ${dir || '/'} -> HTTP ${r.status}`)
  return (await r.json()).data.map((x) => x.attributes)
}

// Telusuri pohon direktori secara berurutan (panel tidak suka digasak paralel).
const remote = new Map()
async function walk(dir, depth = 0) {
  let entries
  try { entries = await list(dir) } catch (e) { console.error('  ! ' + e.message); return }
  const dirs = []
  for (const a of entries) {
    if (a.name === '.' || a.name === '..') continue
    const rel = dir ? `${dir}/${a.name}` : a.name
    if (!a.is_file) { if (SKIP.has(a.name) && depth === 0) continue; dirs.push(rel) }
    else remote.set(rel, { size: a.size, modified: a.modified_at })
  }
  for (const d of dirs) await walk(d, depth + 1)
}

console.log(`[drift] server ${SERVER} @ ${BASE}`)
console.log(`[drift] lokal  ${LOCAL}`)
await walk('')
console.log(`[drift] ${remote.size} file di server (di luar ${[...SKIP].join(', ')})`)

const drift = [], missing = [], localOnly = [], runtime = []
for (const [rel, info] of remote) {
  const lp = path.join(LOCAL, rel)
  if (!fs.existsSync(lp)) {
    if (RUNTIME.has(rel)) runtime.push({ path: rel, remote: info.size, why: 'hanya di server (runtime/rahasia)' })
    else missing.push({ path: rel, remote: info.size })
    continue
  }
  const ls = fs.statSync(lp).size
  if (ls !== info.size) {
    if (RUNTIME.has(rel)) runtime.push({ path: rel, remote: info.size, local: ls, why: 'berbeda (runtime/rahasia)' })
    else drift.push({ path: rel, remote: info.size, local: ls, delta: info.size - ls })
  }
}
const remoteSet = new Set(remote.keys())
function walkLocal(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith('.')) continue
    const abs = path.join(dir, e.name)
    const rel = path.relative(LOCAL, abs)
    if (e.isDirectory()) walkLocal(abs)
    else if (!remoteSet.has(rel)) localOnly.push(rel)
  }
}
if (fs.existsSync(LOCAL)) walkLocal(LOCAL)

console.log(`\n[drift] BEDA UKURAN : ${drift.length}`)
for (const d of drift) console.log(`   ${d.path}  server=${d.remote}  lokal=${d.local}  (${d.delta > 0 ? '+' : ''}${d.delta})`)
console.log(`[drift] HANYA DI SERVER : ${missing.length}`)
for (const m of missing.slice(0, 25)) console.log(`   ${m.path}  (${m.remote}B)`)
if (missing.length > 25) console.log(`   … dan ${missing.length - 25} lagi`)
console.log(`[drift] HANYA DI LOKAL  : ${localOnly.length}`)
for (const l of localOnly.slice(0, 15)) console.log(`   ${l}`)
console.log(`[drift] DATA RUNTIME (dilewati, jangan di-pull) : ${runtime.length}`)
for (const r of runtime) console.log(`   ${r.path}  server=${r.remote}${r.local ? ` lokal=${r.local}` : ''}  — ${r.why}`)

const out = { at: new Date().toISOString(), server: SERVER, drift, missing, localOnly, runtime }
const ji = process.argv.indexOf('--json')
if (ji >= 0) { fs.writeFileSync(process.argv[ji + 1], JSON.stringify(out, null, 2)); console.log(`\n[drift] tersimpan: ${process.argv[ji + 1]}`) }

if (process.argv.includes('--pull')) {
  const targets = [...drift.map((d) => d.path), ...missing.map((m) => m.path)]
  console.log(`\n[pull] mengunduh ${targets.length} file…`)
  let ok = 0
  for (const rel of targets) {
    const r = await fetch(`${BASE}/api/client/servers/${SERVER}/files/download?file=${encodeURIComponent('/' + rel)}`, { headers: H })
    if (!r.ok) { console.error(`   ! ${rel} HTTP ${r.status}`); continue }
    const url = (await r.json()).attributes.url
    const got = await fetch(url)
    if (!got.ok) { console.error(`   ! ${rel} wings HTTP ${got.status}`); continue }
    const buf = Buffer.from(await got.arrayBuffer())
    const dest = path.join(LOCAL, rel)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, buf)
    const h = crypto.createHash('sha256').update(buf).digest('hex').slice(0, 12)
    console.log(`   + ${rel}  (${buf.length}B, sha256:${h})`)
    ok++
  }
  console.log(`[pull] selesai: ${ok}/${targets.length} berkas diperbarui di ${LOCAL}`)
}
