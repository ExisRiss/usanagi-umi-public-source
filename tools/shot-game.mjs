import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const BASE = 'https://game.gwenna.my.id'
const TOKEN = fs.readFileSync('/home/user/.secrets/game-server-token.txt', 'utf8').trim()
const out = '/home/user/shots-game'
fs.mkdirSync(out, { recursive: true })

// buat room UNO contoh via API bot (host) + 1 teman terverifikasi
const post = async (path, body, auth) => {
  const res = await fetch(BASE + path, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(auth ? { Authorization: 'Bearer ' + TOKEN } : {}) }, body: JSON.stringify(body || {}) })
  return res.json()
}
const room = await post('/api/rooms', { game: 'uno', name: 'Alzriss', number: '6282343823200' }, true)
await post(`/api/rooms/${room.roomId}/verify`, { name: 'Teman', number: '628111222333' }, true)
console.log('room contoh:', room.roomId)

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const page = await browser.newPage()
const errors = []
page.on('pageerror', e => errors.push(String(e).slice(0, 160)))

await page.setViewport({ width: 1366, height: 900 })
await page.goto(BASE + '/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 900))
await page.screenshot({ path: out + '/lobi-desktop.png' })

await page.goto(BASE + '/uno/' + room.roomId, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.evaluate((id, tok) => localStorage.setItem('umi-game-' + id, tok), room.roomId, room.token)
await page.reload({ waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 1500))
await page.screenshot({ path: out + '/room-uno-lobby.png' })

// mulai game (isi bot sampai 4) lalu screenshot meja bermain
await page.evaluate(async (id, tok) => {
  await fetch('/api/rooms/' + id + '/action', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: tok, action: { type: 'start', fillBots: true, targetPlayers: 4 } }) })
}, room.roomId, room.token)
await new Promise(r => setTimeout(r, 2500))
await page.screenshot({ path: out + '/room-uno-main.png' })

await page.setViewport({ width: 390, height: 844 })
await page.reload({ waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 1200))
await page.screenshot({ path: out + '/room-uno-mobile.png' })

console.log('page errors:', errors.length ? errors.join(' | ') : 'none')
await browser.close()
console.log('DONE')
