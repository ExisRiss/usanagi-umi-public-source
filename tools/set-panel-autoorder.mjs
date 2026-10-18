#!/usr/bin/env node
/** Pasang/uji konfigurasi Panel Auto Order lewat API owner-panel bot.
 *  Kunci dibaca dari .secrets/panel2-credentials.env — tidak pernah ditulis di repo/log. */
import crypto from 'node:crypto'
import fs from 'node:fs'

const BASE = 'https://api.gwenna.my.id'
const readEnv = (p) => Object.fromEntries(fs.readFileSync(p, 'utf8').split('\n').filter(l => l.includes('=') && !l.trim().startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }))
const keys = readEnv('/home/user/.secrets/panel2-credentials.env')
const relay = readEnv('/home/user/.secrets/upload/.owner-console-relay.env').UMI_CONSOLE_RELAY_SECRET

function ticket(method = 'GET', target = '') {
  const b64 = (b) => Buffer.from(b).toString('base64url')
  const payload = b64(JSON.stringify({ v: 1, aud: 'owner-panel', sub: 'cli-owner-0001', exp: Date.now() + 75000, nonce: crypto.randomBytes(8).toString('hex'), m: method, p: target }))
  return payload + '.' + b64(crypto.createHmac('sha256', relay).update(payload).digest())
}
async function call(path, method, body) {
  const res = await fetch(BASE + path, { method, headers: { 'Content-Type': 'application/json', 'X-UMI-Panel-Ticket': ticket(method, path.replace('/api/owner-panel/', '')) }, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(45000) })
  const json = await res.json().catch(() => ({}))
  return { status: res.status, json }
}

console.log('status awal:', JSON.stringify((await call('/api/owner-panel/status', 'GET')).json).slice(0, 400))
const set = await call('/api/owner-panel/settings', 'POST', {
  panelUrl: keys.PANEL2_URL,
  siteUrl: 'https://jadibot-alzriss.gwenna.my.id',
  plta: keys.PANEL2_PLTA,
  pltc: keys.PANEL2_PLTC,
  paymentMode: 'manual_dana',
  tripayChannel: 'DANA',
})
console.log('simpan pengaturan: HTTP', set.status, JSON.stringify(set.json).slice(0, 400))
const test = await call('/api/owner-panel/test-connection', 'POST')
console.log('tes koneksi: HTTP', test.status, JSON.stringify(test.json).slice(0, 600))
const after = await call('/api/owner-panel/status', 'GET')
console.log('status akhir:', JSON.stringify(after.json).slice(0, 500))
