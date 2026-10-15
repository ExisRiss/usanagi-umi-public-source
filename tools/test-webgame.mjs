// Smoke test Umi Web Games: buat room -> klaim -> verifikasi WA -> mulai -> aksi.
// Token bot JANGAN di-hardcode di sini (repo ini publik). Dibaca dari env
// UMI_GAME_TOKEN atau berkas /home/user/.secrets/game-token.env.
import fs from 'node:fs'
const BASE = process.env.UMI_GAME_BASE || 'https://game.gwenna.my.id'
const TOKEN = process.env.UMI_GAME_TOKEN || (() => {
  const file = process.env.UMI_GAME_TOKEN_FILE || '/home/user/.secrets/game-token.env'
  try { return (fs.readFileSync(file, 'utf8').match(/^UMI_GAME_TOKEN=(.+)$/m) || [])[1]?.trim() || '' } catch { return '' }
})()
if (!TOKEN) { console.error('Token game tidak ditemukan: isi UMI_GAME_TOKEN atau /home/user/.secrets/game-token.env'); process.exit(1) }
const AUTH = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
let pass = 0, fail = 0
const ok = (cond, label) => { if (cond) { pass++; console.log('  ✔', label) } else { fail++; console.log('  ✘ GAGAL:', label) } }
const post = async (path, body, headers) => {
  const res = await fetch(BASE + path, { method: 'POST', headers: headers || { 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}) })
  return { status: res.status, json: await res.json().catch(() => ({})) }
}
const get = async (path) => { const res = await fetch(BASE + path); return { status: res.status, json: await res.json().catch(() => ({})) } }
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// ---------- UNO: alur lengkap ----------
console.log('UNO:')
let r = await post('/api/rooms', { game: 'uno', name: 'Pemilik', number: '628111111111' }, AUTH)
ok(r.status === 200 && r.json.roomId, 'buat room via bot')
const unoId = r.json.roomId, hostToken = r.json.token
r = await post(`/api/rooms/${unoId}/claim`, { name: 'Teman', number: '628222222222' })
ok(r.status === 200 && r.json.status === 'pending', 'klaim kursi web = pending')
const friendToken = r.json.token
r = await post(`/api/rooms/${unoId}/action`, { token: friendToken, action: { type: 'chat', text: 'halo' } })
ok(r.status === 403, 'kursi pending tidak bisa bertindak')
r = await post(`/api/rooms/${unoId}/verify`, { name: 'Teman', number: '628222222222' }, AUTH)
ok(r.status === 200 && r.json.entryCode, 'verifikasi via WA dapat kode masuk')
const code = r.json.entryCode
r = await post(`/api/rooms/${unoId}/enter`, { entryCode: code })
ok(r.status === 200 && r.json.token === friendToken, 'kode masuk -> token kursi sama')
r = await post(`/api/rooms/${unoId}/start-dummy`, {})
r = await post(`/api/rooms/${unoId}/action`, { token: hostToken, action: { type: 'start', fillBots: true, targetPlayers: 3 } })
ok(r.status === 200, 'host mulai + isi bot (3 pemain)')
let st = (await get(`/api/rooms/${unoId}/state?token=${hostToken}`)).json
ok(st.status === 'playing' && st.seats.length === 3 && st.state.hand.length === 7, 'state UNO: 3 kursi, host 7 kartu')
const otherView = (await get(`/api/rooms/${unoId}/state?token=${friendToken}`)).json
ok(!otherView.state.hand || otherView.state.counts[0] === 7, 'tangan pemain lain tersembunyi (hanya jumlah)')
// main beberapa giliran: siapa pun yang sedang giliran & manusia -> draw saja
for (let turn = 0; turn < 4; turn++) {
  st = (await get(`/api/rooms/${unoId}/state?token=${hostToken}`)).json
  if (st.state.winner !== null) break
  const turnIdx = st.state.turn
  const tokenX = turnIdx === 0 ? hostToken : turnIdx === 1 ? friendToken : null
  if (tokenX) await post(`/api/rooms/${unoId}/action`, { token: tokenX, action: { type: 'draw' } })
  await sleep(1100) // beri kesempatan bot AI jalan
}
st = (await get(`/api/rooms/${unoId}/state?token=${hostToken}`)).json
ok(st.log.length > 3, 'log UNO berjalan (' + st.log.length + ' entri)')

// ---------- CATUR ----------
console.log('CATUR:')
r = await post('/api/rooms', { game: 'chess', name: 'Putih', number: '628111111111' }, AUTH)
const chessId = r.json.roomId, chessHost = r.json.token
await post(`/api/rooms/${chessId}/verify`, { name: 'Hitam', number: '628333333333' }, AUTH)
r = await post(`/api/rooms/${chessId}/action`, { token: chessHost, action: { type: 'start', fillBots: false } })
ok(r.status === 200, 'catur mulai 2 pemain')
st = (await get(`/api/rooms/${chessId}/state?token=${chessHost}`)).json
ok(st.state.board.filter(Boolean).length === 32 && st.state.legal.length === 20, 'papan catur penuh, 20 langkah sah')
const e2 = st.state.legal.find(m => m.from === 52)
r = await post(`/api/rooms/${chessId}/action`, { token: chessHost, action: { type: 'move', from: e2.from, to: e2.to } })
ok(r.status === 200, 'putih e2-e4')
await sleep(150)
st = (await get(`/api/rooms/${chessId}/state?token=${chessHost}`)).json
ok(st.state.turn === 'b', 'giliran hitam')
r = await post(`/api/rooms/${chessId}/action`, { token: chessHost, action: { type: 'move', from: 12, to: 28 } })
ok(r.status === 400, 'langkah di luar giliran ditolak')

// ---------- ULAR TANGGA + bot ----------
console.log('ULAR TANGGA:')
r = await post('/api/rooms', { game: 'snakes', name: 'S1', number: '628111111111' }, AUTH)
const snId = r.json.roomId, snHost = r.json.token
r = await post(`/api/rooms/${snId}/action`, { token: snHost, action: { type: 'start', fillBots: true, targetPlayers: 2 } })
ok(r.status === 200, 'ular tangga mulai vs bot')
r = await post(`/api/rooms/${snId}/action`, { token: snHost, action: { type: 'roll' } })
ok(r.status === 200, 'host lempar dadu')
await sleep(2500)
st = (await get(`/api/rooms/${snId}/state?token=${snHost}`)).json
ok(st.state.pos.some(p => p > 0) || st.log.length > 2, 'dadu bergulir (log ' + st.log.length + ')')

// ---------- MONOPOLI ----------
console.log('MONOPOLI:')
r = await post('/api/rooms', { game: 'monopoly', name: 'M1', number: '628111111111' }, AUTH)
const moId = r.json.roomId, moHost = r.json.token
r = await post(`/api/rooms/${moId}/action`, { token: moHost, action: { type: 'start', fillBots: true, targetPlayers: 3 } })
ok(r.status === 200, 'monopoli mulai 3 pemain (2 bot)')
for (let i = 0; i < 3; i++) {
  st = (await get(`/api/rooms/${moId}/state?token=${moHost}`)).json
  if (st.state.pendingBuy === 0) await post(`/api/rooms/${moId}/action`, { token: moHost, action: { type: 'buy' } })
  else if (st.state.turn === 0) await post(`/api/rooms/${moId}/action`, { token: moHost, action: { type: 'roll' } })
  await sleep(1200)
}
st = (await get(`/api/rooms/${moId}/state?token=${moHost}`)).json
ok(st.log.length > 3, 'monopoli berjalan (log ' + st.log.length + ')')

// ---------- WEREWOLF ----------
console.log('WEREWOLF:')
r = await post('/api/rooms', { game: 'werewolf', name: 'W1', number: '628111111111' }, AUTH)
const wwId = r.json.roomId, wwHost = r.json.token
r = await post(`/api/rooms/${wwId}/action`, { token: wwHost, action: { type: 'start', fillBots: true, targetPlayers: 5 } })
ok(r.status === 200, 'werewolf mulai 5 pemain (4 bot)')
st = (await get(`/api/rooms/${wwId}/state?token=${wwHost}`)).json
ok(st.state.myRole && st.state.phase === 'night', 'peran host terbit: ' + st.state.myRole)
if (['werewolf', 'seer', 'doctor'].includes(st.state.myRole)) {
  const target = st.state.alive.findIndex((a, i) => a && i !== 0)
  r = await post(`/api/rooms/${wwId}/action`, { token: wwHost, action: { type: 'night', target } })
  ok(r.status === 200, 'aksi malam host diterima')
  st = (await get(`/api/rooms/${wwId}/state?token=${wwHost}`)).json
  ok(st.state.phase === 'day', 'malam selesai -> siang (voting)')
  const vTarget = st.state.alive.findIndex((a, i) => a && i !== 0)
  r = await post(`/api/rooms/${wwId}/action`, { token: wwHost, action: { type: 'vote', target: vTarget } })
  ok(r.status === 200, 'voting host diterima')
} else ok(true, 'host warga — malam dilewati (AI yang beraksi)')

// ---------- UNO FLIP ----------
console.log('UNO FLIP:')
r = await post('/api/rooms', { game: 'unoflip', name: 'F1', number: '628111111111' }, AUTH)
const flId = r.json.roomId, flHost = r.json.token
r = await post(`/api/rooms/${flId}/action`, { token: flHost, action: { type: 'start', fillBots: true, targetPlayers: 2 } })
st = (await get(`/api/rooms/${flId}/state?token=${flHost}`)).json
ok(r.status === 200 && st.state.side === 'light', 'uno flip mulai sisi terang')

console.log(`\nTOTAL: ${pass} lolos, ${fail} gagal`)
process.exit(fail ? 1 : 0)
