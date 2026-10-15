#!/usr/bin/env node
/**
 * Uji lapisan storage halaman Upload ZIP (bucket privat `umi-files`):
 * buat bucket → izin upload bertanda tangan → PUT zip → daftar → izin unduh
 * → unduh & bandingkan byte → hapus. Memakai kunci service_role Supabase dari
 * .secrets/sb-keys.json, persis seperti yang dilakukan api/platform.js.
 *
 * Pakai: node tools/test-files-storage.mjs
 */
import fs from 'node:fs'
import { spawnSync } from 'node:child_process'

let pass = 0, fail = 0
const check = (label, ok, detail = '') => { ok ? pass++ : fail++; console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + String(detail).slice(0, 100) : ''}`) }

const keys = JSON.parse(fs.readFileSync('/home/user/.secrets/sb-keys.json', 'utf8'))
const service = (Array.isArray(keys) ? keys : []).find(k => k.id === 'service_role' || k.name === 'service_role')
if (!service) { console.error('kunci service_role tidak ditemukan'); process.exit(1) }
const BASE = 'https://tlcvkksfgdyeiypzcwdj.supabase.co'
const KEY = service.api_key
const H = { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' }
const BUCKET = 'umi-files'

// buat file zip uji asli
fs.mkdirSync('/tmp/umi-filetest', { recursive: true })
fs.writeFileSync('/tmp/umi-filetest/halo.txt', 'Halo dari uji upload ZIP Umi Usanagi AI\n')
const zipRun = spawnSync('python3', ['-c', "import zipfile; z=zipfile.ZipFile('/tmp/umi-filetest/uji.zip','w'); z.write('/tmp/umi-filetest/halo.txt','halo.txt'); z.close()"])
if (zipRun.status !== 0) { console.error('gagal membuat zip uji'); process.exit(1) }
const zipBytes = fs.readFileSync('/tmp/umi-filetest/uji.zip')
check('zip uji dibuat', zipBytes.length > 50, `${zipBytes.length}B`)

// 1) bucket
let res = await fetch(`${BASE}/storage/v1/bucket/${BUCKET}`, { headers: H })
if (!res.ok) {
    res = await fetch(`${BASE}/storage/v1/bucket`, { method: 'POST', headers: H, body: JSON.stringify({ id: BUCKET, name: BUCKET, public: false }) })
}
check('bucket umi-files siap', res.ok, `HTTP ${res.status}`)

// 2) izin upload
const objectPath = `owner/${Date.now()}_a1b2c3d4_uji-upload.zip`
res = await fetch(`${BASE}/storage/v1/object/upload/sign/${BUCKET}/${objectPath}`, { method: 'POST', headers: H, body: '{}' })
const signed = await res.json().catch(() => ({}))
check('izin upload dibuat', res.ok && !!signed.url, `HTTP ${res.status}`)
const uploadUrl = /^https?:\/\//.test(String(signed.url || '')) ? signed.url : `${BASE}/storage/v1${signed.url}`

// 3) PUT file (seperti browser)
res = await fetch(uploadUrl, { method: 'PUT', headers: { 'Content-Type': 'application/zip', 'x-upsert': 'false' }, body: zipBytes })
check('PUT zip berhasil', res.ok, `HTTP ${res.status}`)

// 4) daftar
res = await fetch(`${BASE}/storage/v1/object/list/${BUCKET}`, { method: 'POST', headers: H, body: JSON.stringify({ prefix: 'owner', limit: 100, offset: 0, sortBy: { column: 'created_at', order: 'desc' } }) })
const rows = await res.json().catch(() => [])
const mine = (Array.isArray(rows) ? rows : []).find(r => r.name && r.name.endsWith('uji-upload.zip'))
check('file tampil di daftar dengan ukuran', !!mine && Number(mine.metadata?.size) === zipBytes.length, mine ? `size=${mine.metadata?.size}` : 'tidak ketemu')
const display = mine ? mine.name.replace(/^\d{10,}_[a-f0-9]{8}_/, '') : ''
check('nama tampilan bersih', display === 'uji-upload.zip', display)

// 5) izin unduh + unduh
res = await fetch(`${BASE}/storage/v1/object/sign/${BUCKET}/${objectPath}`, { method: 'POST', headers: H, body: JSON.stringify({ expiresIn: 3600 }) })
const dl = await res.json().catch(() => ({}))
const rawUrl = String(dl.signedURL || dl.signedUrl || dl.url || '')
const dlUrl = /^https?:\/\//.test(rawUrl) ? rawUrl : `${BASE}/storage/v1${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`
check('izin unduh dibuat', res.ok && rawUrl.includes('token'), `HTTP ${res.status}`)
const got = Buffer.from(await (await fetch(dlUrl)).arrayBuffer())
check('byte unduhan identik', got.equals(zipBytes), `${got.length}B`)

// 6) hapus
res = await fetch(`${BASE}/storage/v1/object/${BUCKET}`, { method: 'DELETE', headers: H, body: JSON.stringify({ prefixes: [objectPath] }) })
check('hapus berhasil', res.ok, `HTTP ${res.status}`)
res = await fetch(`${BASE}/storage/v1/object/list/${BUCKET}`, { method: 'POST', headers: H, body: JSON.stringify({ prefix: 'owner', limit: 100, offset: 0, sortBy: { column: 'created_at', order: 'desc' } }) })
const after = await res.json().catch(() => [])
check('daftar bersih setelah hapus', !(Array.isArray(after) ? after : []).some(r => r.name && r.name.endsWith('uji-upload.zip')))

console.log(`\n══ HASIL: ${pass} lolos, ${fail} gagal ══`)
process.exit(fail ? 1 : 0)
