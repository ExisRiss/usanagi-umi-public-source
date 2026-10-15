// Buat server uji panel2 (milik user uji) untuk membuktikan aksi client API.
// Pakai: node tools/panel-test-server.mjs create|status|clean
import fs from 'node:fs'
const env = Object.fromEntries(fs.readFileSync('/home/user/.secrets/panel2-keys-backup.txt', 'utf8').split('\n').filter(l => l.includes('=') && !l.trim().startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }))
const BASE = env.PANEL2_URL
const stateFile = '/tmp/panel-test-server.json'
const app = async (method, path, body) => { const r = await fetch(BASE + '/api/application' + path, { method, headers: { Authorization: 'Bearer ' + env.PANEL2_PLTA, Accept: 'application/json', 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined }); return { status: r.status, json: await r.json().catch(() => ({})) } }
const cmd = process.argv[2]
if (cmd === 'create') {
  const uname = 'umipanel' + Date.now().toString().slice(-6)
  const u = await app('POST', '/users', { username: uname, email: uname + '@users.umi.local', first_name: 'Umi', last_name: 'Panel', password: '[SECURITY_DATA]' })
  const userId = u.json?.attributes?.id
  const startup = fs.readFileSync('/tmp/egg-startup.txt', 'utf8')
  const s = await app('POST', '/servers', { name: 'umi-panel-test', user: userId, egg: 15, docker_image: 'ghcr.io/parkervcp/yolks:nodejs_24', startup, environment: { CMD_RUN: 'node -v' }, limits: { memory: 512, swap: 0, disk: 1024, io: 500, cpu: 30 }, feature_limits: { databases: 0, allocations: 1, backups: 0 }, deploy: { locations: [1], dedicated_ip: false, port_range: [] } })
  const st = { userId, serverId: s.json?.attributes?.id, identifier: s.json?.attributes?.identifier, uuid: s.json?.attributes?.uuid }
  fs.writeFileSync(stateFile, JSON.stringify(st))
  console.log('dibuat:', s.status, JSON.stringify(st))
} else if (cmd === 'status') {
  const st = JSON.parse(fs.readFileSync(stateFile, 'utf8'))
  const s = await app('GET', '/servers/' + st.serverId)
  console.log('status server:', s.json?.attributes?.status, '| identifier:', s.json?.attributes?.identifier)
} else if (cmd === 'clean') {
  const st = JSON.parse(fs.readFileSync(stateFile, 'utf8'))
  if (st.serverId) console.log('hapus server:', (await app('DELETE', '/servers/' + st.serverId)).status)
  if (st.userId) console.log('hapus user:', (await app('DELETE', '/users/' + st.userId)).status)
  fs.rmSync(stateFile, { force: true })
}
