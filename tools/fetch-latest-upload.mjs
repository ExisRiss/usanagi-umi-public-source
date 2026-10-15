#!/usr/bin/env node
/**
 * Ambil berkas terbaru dari bucket `umi-files` (halaman Upload ZIP) ke
 * /home/user/incoming/ memakai kunci service_role Supabase.
 *
 * Pakai: node tools/fetch-latest-upload.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const keys = JSON.parse(fs.readFileSync('/home/user/.secrets/sb-keys.json', 'utf8'))
const service = (Array.isArray(keys) ? keys : []).find(k => k.id === 'service_role' || k.name === 'service_role')
if (!service) { console.error('kunci service_role tidak ditemukan'); process.exit(1) }
const BASE = 'https://tlcvkksfgdyeiypzcwdj.supabase.co'
const KEY = service.api_key
const H = { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' }
const BUCKET = 'umi-files'

const res = await fetch(`${BASE}/storage/v1/object/list/${BUCKET}`, { method: 'POST', headers: H, body: JSON.stringify({ prefix: 'owner', limit: 100, offset: 0, sortBy: { column: 'created_at', order: 'desc' } }) })
const rows = await res.json().catch(() => [])
const files = (Array.isArray(rows) ? rows : []).filter(r => r?.name && r.metadata)
if (!files.length) { console.error('Tidak ada file di bucket.'); process.exit(1) }

console.log('Berkas di bucket (terbaru dulu):')
for (const f of files.slice(0, 10)) console.log(`  ${f.created_at || ''}  ${f.name}  (${Number(f.metadata?.size) || 0} byte)`)

const newest = files[0]
const objectPath = `owner/${newest.name}`
const sign = await fetch(`${BASE}/storage/v1/object/sign/${BUCKET}/${objectPath}`, { method: 'POST', headers: H, body: JSON.stringify({ expiresIn: 600 }) })
const dl = await sign.json().catch(() => ({}))
const rawUrl = String(dl.signedURL || dl.signedUrl || dl.url || '')
const url = /^https?:\/\//.test(rawUrl) ? rawUrl : `${BASE}/storage/v1${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`
const got = await fetch(url)
if (!got.ok) { console.error('unduh gagal HTTP ' + got.status); process.exit(1) }
const buf = Buffer.from(await got.arrayBuffer())
fs.mkdirSync('/home/user/incoming', { recursive: true })
const dest = path.join('/home/user/incoming', newest.name.replace(/^\d{10,}_[a-f0-9]{8}_/, ''))
fs.writeFileSync(dest, buf)
console.log(`\nTerbaru tersimpan: ${dest} (${buf.length} byte, md5 ${await import('node:crypto').then(c => c.createHash('md5').update(buf).digest('hex'))})`)
