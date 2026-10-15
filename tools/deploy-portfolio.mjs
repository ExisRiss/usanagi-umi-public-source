#!/usr/bin/env node
/** Deploy website portofolio (statis) ke Vercel produksi lewat REST API.
 *  Pakai: node tools/deploy-portfolio.mjs */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const ROOT = '/home/user/portfolio'
const TEAM = 'team_TwCNMEAL8AoOA0whO30gFU4S'
const PROJECT = 'alzriss-portofolio'

const secretsRaw = fs.readFileSync('/home/user/.secrets/usanagi-credentials.env', 'utf8')
const tokens = [...secretsRaw.matchAll(/^VERCEL_TOKEN=(.+)$/gm)].map((m) => m[1].trim()).filter(Boolean)
const TOKEN = tokens[tokens.length - 1]
if (!TOKEN) { console.error('VERCEL_TOKEN tidak ditemukan'); process.exit(1) }
const H = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }

const files = []
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    const rel = path.relative(ROOT, full)
    if (e.isDirectory()) walk(full)
    else if (e.isFile()) {
      const buf = fs.readFileSync(full)
      files.push({ file: rel.split(path.sep).join('/'), sha: crypto.createHash('sha1').update(buf).digest('hex'), size: buf.length, buf })
    }
  }
}
walk(ROOT)
console.log(`==> ${files.length} berkas portofolio`)

const call = async (url, init = {}) => {
  const res = await fetch(`https://api.vercel.com${url}`, { headers: H, ...init })
  const text = await res.text()
  let json = null
  try { json = JSON.parse(text) } catch {}
  return { status: res.status, json, text }
}

async function createDeployment() {
  return call(`/v13/deployments?teamId=${TEAM}&forceNew=1`, {
    method: 'POST',
    body: JSON.stringify({
      name: PROJECT,
      target: 'production',
      files: files.map(({ file, sha, size }) => ({ file, sha, size })),
      projectSettings: { framework: null },
    }),
  })
}

let dep = await createDeployment()
let missing = dep.json?.error?.missing || dep.json?.missing || []
if (missing.length) {
  console.log(`==> mengunggah ${missing.length} berkas yang belum ada`)
  for (const sha of missing) {
    const f = files.find((x) => x.sha === sha)
    if (!f) continue
    const up = await fetch(`https://api.vercel.com/v2/files?teamId=${TEAM}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/octet-stream', 'x-vercel-digest': sha },
      body: f.buf,
    })
    if (!up.ok) { console.error(`gagal unggah ${f.file}: HTTP ${up.status}`); process.exit(1) }
    process.stdout.write('.')
  }
  console.log('\n==> membuat deployment lagi')
  dep = await createDeployment()
}
if (!dep.json?.id) { console.error('deployment gagal:', JSON.stringify(dep.json).slice(0, 500)); process.exit(1) }
console.log(`==> deployment ${dep.json.id} (${dep.json.url || ''})`)
for (let i = 0; i < 60; i++) {
  await new Promise((r) => setTimeout(r, 5000))
  const st = await call(`/v13/deployments/${dep.json.id}?teamId=${TEAM}`)
  const state = st.json?.readyState || st.json?.status
  process.stdout.write(`${state} `)
  if (state === 'READY') { console.log('\n✅ READY'); process.exit(0) }
  if (state === 'ERROR' || state === 'CANCELED') { console.error('\n❌ gagal:', JSON.stringify(st.json?.error || {}).slice(0, 400)); process.exit(1) }
}
console.error('\n⏱️ timeout menunggu deployment'); process.exit(1)
