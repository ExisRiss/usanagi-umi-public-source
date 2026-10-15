#!/usr/bin/env node
/**
 * Deploy website ke Vercel produksi lewat REST API (tanpa Vercel CLI):
 * sinkronkan aset, unggah berkas yang berubah (sha1), buat deployment,
 * lalu tunggu sampai READY.
 *
 * Pakai: node tools/deploy-website.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { spawnSync } from 'node:child_process'

const WEB = '/home/user/usanagi-umi-public-source/website'
const TEAM = 'team_TwCNMEAL8AoOA0whO30gFU4S'
const PROJECT = 'alzriss-comunity'

const secretsRaw = fs.readFileSync('/home/user/.secrets/usanagi-credentials.env', 'utf8')
const tokens = [...secretsRaw.matchAll(/^VERCEL_TOKEN=(.+)$/gm)].map((m) => m[1].trim()).filter(Boolean)
const TOKEN = tokens[tokens.length - 1] // baris terakhir yang berlaku
if (!TOKEN) { console.error('VERCEL_TOKEN tidak ditemukan'); process.exit(1) }
const H = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }

console.log('==> sinkronkan aset publik')
const sync = spawnSync('/usr/bin/node', ['scripts/sync-public.mjs'], { cwd: WEB, stdio: 'inherit' })
if (sync.status !== 0) process.exit(1)

const skip = (rel) => /(^|\/)(node_modules|\.git)(\/|$)/.test(rel)
const files = []
const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name)
        const rel = path.relative(WEB, full)
        if (skip(rel)) continue
        if (e.isDirectory()) walk(full)
        else if (e.isFile()) {
            const buf = fs.readFileSync(full)
            files.push({ file: rel.split(path.sep).join('/'), sha: crypto.createHash('sha1').update(buf).digest('hex'), size: buf.length, buf })
        }
    }
}
walk(WEB)
console.log(`==> ${files.length} berkas`)

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
let missing = dep.json?.missing_files || dep.json?.error?.missing_files || dep.json?.error?.missing || []
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
    process.stdout.write(` ${state || '?'}`)
    if (state === 'READY') { console.log('\n✅ Produksi READY: https://alzriss-comunity.vercel.app'); process.exit(0) }
    if (state === 'ERROR' || state === 'CANCELED') { console.error('\n❌ deployment gagal:', JSON.stringify(st.json?.error || {}).slice(0, 400)); process.exit(1) }
}
console.error('\n⏱️ timeout menunggu deployment')
process.exit(1)
