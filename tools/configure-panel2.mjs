// Pasang provisioning + katalog Panel Auto Order ke bot (idempoten).
// Pakai: node tools/configure-panel2.mjs
import crypto from 'node:crypto'
import fs from 'node:fs'
const readEnv = (p) => Object.fromEntries(fs.readFileSync(p, 'utf8').split('\n').filter(l => l.includes('=') && !l.trim().startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }))
const relay = readEnv('/home/user/.secrets/upload/.owner-console-relay.env').UMI_CONSOLE_RELAY_SECRET
const b64 = (b) => Buffer.from(b).toString('base64url')
const ticket = (method = 'POST', target = '') => { const p = b64(JSON.stringify({ v: 1, aud: 'owner-panel', sub: 'cli-owner-0001', exp: Date.now() + 75000, nonce: crypto.randomBytes(8).toString('hex'), m: method, p: target })); return p + '.' + b64(crypto.createHmac('sha256', relay).update(p).digest()) }
const post = async (path, body) => {
  const res = await fetch('https://api.gwenna.my.id' + path, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-UMI-Panel-Ticket': ticket('POST', path.replace('/api/owner-panel/', '')) }, body: JSON.stringify(body) })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`${path} HTTP ${res.status}: ${json.error || ''}`)
  return json
}
const startup = fs.readFileSync('/tmp/egg-startup.txt', 'utf8')
const prov = await post('/api/owner-panel/settings', { provisioning: { eggId: 15, locationId: 1, dockerImage: 'ghcr.io/parkervcp/yolks:nodejs_24', startup, environment: { CMD_RUN: 'npm start' } } })
console.log('provisioning:', JSON.stringify(prov.provisioning))
const packages = []
for (let gb = 1; gb <= 10; gb++) packages.push({ id: `panel-${gb}gb`, name: `Panel ${gb} GB`, description: `Server panel RAM ${gb} GB untuk bot WhatsApp`, price: gb * 1000, memoryMb: gb * 1024, cpuPercent: 30 * gb + 10, diskMb: gb * 1024, enabled: true })
packages.push({ id: 'panel-unlimited', name: 'Panel Unlimited', description: 'Server panel spek besar fair-use untuk bot WhatsApp', price: 11000, memoryMb: 32768, cpuPercent: 400, diskMb: 51200, enabled: true })
const saved = await post('/api/owner-panel/packages', { packages })
console.log('checkoutReady:', saved.checkoutReady, '| paket:', (saved.packages || []).filter(p => p.enabled).length, 'aktif')
