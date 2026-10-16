import puppeteer from '/tmp/pptr2/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const BASE = process.env.TRADE_BASE || 'https://game.gwenna.my.id'
const TOKEN = fs.readFileSync('/tmp/owner-token.txt', 'utf8').trim()
const out = '/home/user/shots-trade'
fs.mkdirSync(out, { recursive: true })

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const page = await browser.newPage()
const problems = []
const requests = []
page.on('pageerror', (e) => problems.push('pageerror: ' + String(e).slice(0, 200)))
page.on('console', (m) => { if (m.type() === 'error') problems.push('console: ' + m.text().slice(0, 200)) })
page.on('response', (r) => { if (r.status() >= 400) requests.push(`${r.status()} ${r.url().slice(0, 120)}`) })
page.on('requestfailed', (r) => problems.push('reqfail: ' + r.url().slice(0, 120)))

await page.evaluateOnNewDocument((token) => { try { localStorage.setItem('umi-trade-token', token) } catch {} }, TOKEN)
await page.setViewport({ width: 1366, height: 1100, deviceScaleFactor: 1 })
await page.goto(BASE + '/trading', { waitUntil: 'networkidle2', timeout: 90000 })
await new Promise((r) => setTimeout(r, 6000))

const shot = async (name) => { await page.screenshot({ path: `${out}/${name}.png` }); console.log('  shot:', name) }
const tab = async (label, name) => {
  await page.evaluate((l) => { const b = [...document.querySelectorAll('#tabbar button')].find((x) => x.textContent.trim() === l); if (b) b.click() }, label)
  await new Promise((r) => setTimeout(r, 2200))
  await shot(name)
}

await shot('01-pasar')
await tab('Trading', '02-trading')
await tab('Traffic', '03-traffic')
await tab('Saldo', '04-saldo')
await tab('Profil', '05-profil')

// ui cek saldo & status di profil
const info = await page.evaluate(() => ({
  live: document.getElementById('liveText')?.textContent,
  cash: document.getElementById('pCash')?.textContent,
  wallet: document.getElementById('pWallet')?.textContent,
  net: document.getElementById('pNet')?.textContent,
  rowsMarket: document.querySelectorAll('#marketList .mkt').length,
  candles: document.querySelectorAll('#chart').length,
  trafficRows: document.querySelectorAll('#trafficBody tr').length,
  codes: [...document.querySelectorAll('#codeList .codechip b')].map((x) => x.textContent),
}))
console.log('  info:', JSON.stringify(info))

// uji order 5 lot lewat UI untuk membuktikan bug hilang
await page.evaluate(() => {
  const b = [...document.querySelectorAll('#tabbar button')].find((x) => x.textContent.trim() === 'Trading'); if (b) b.click()
})
await new Promise((r) => setTimeout(r, 1500))
await page.evaluate(() => { document.getElementById('qtyInput').value = '5'; document.getElementById('qtyInput').dispatchEvent(new Event('input', { bubbles: true })) })
await new Promise((r) => setTimeout(r, 500))
const before = await page.evaluate(() => document.getElementById('orderTotal')?.textContent)
await page.evaluate(() => document.getElementById('submitOrder').click())
await new Promise((r) => setTimeout(r, 3500))
const after = await page.evaluate(() => ({ toast: document.getElementById('toast')?.textContent, pos: document.getElementById('tPos')?.textContent, cash: document.getElementById('sCash')?.textContent }))
console.log('  order 5 lot — total sebelum klik:', before, '| sesudah:', JSON.stringify(after))
await shot('06-setelah-beli-17')

// balikkan posisi uji lewat UI (jual 5)
await page.evaluate(() => {
  const sell = [...document.querySelectorAll('#sideSeg button')].find((x) => x.dataset.side === 'sell'); if (sell) sell.click()
  const q = document.getElementById('qtyInput'); q.value = '5'; q.dispatchEvent(new Event('input', { bubbles: true }))
})
await new Promise((r) => setTimeout(r, 700))
await page.evaluate(() => document.getElementById('submitOrder').click())
await new Promise((r) => setTimeout(r, 3000))
const back = await page.evaluate(() => document.getElementById('toast')?.textContent)
console.log('  jual balik 5 lot:', back)
await shot('07-setelah-jual')

console.log('  masalah halaman:', problems.length ? problems.slice(0, 10) : 'TIDAK ADA')
console.log('  respons >=400:', requests.length ? requests.slice(0, 10) : 'TIDAK ADA')
await browser.close()
