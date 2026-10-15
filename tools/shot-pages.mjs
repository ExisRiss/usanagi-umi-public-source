import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'
const out = '/home/user/shots-pages'
fs.mkdirSync(out, { recursive: true })
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const errors = []
const page = await browser.newPage()
page.on('pageerror', e => errors.push('PAGEERROR ' + e.message.slice(0, 160)))
await page.evaluateOnNewDocument(() => {
  localStorage.setItem('umi_studio_session_v2', JSON.stringify({ access_token: 'test-token-1234567890', refresh_token: 'test-refresh-1234567890', user: { id: 'u1', email: 'owner@example.com' } }))
})
await page.setRequestInterception(true)
page.on('request', req => {
  const u = req.url()
  const json = (obj) => req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify(obj) })
  if (u.includes('/api/platform/me')) return json({ user: { id: 'u1', email: 'owner@example.com', roles: ['owner'] } })
  if (u.includes('/api/wallet/status')) return json({ enabled: true, mode: 'manual_dana', balance: 25000, channel: 'DANA', minimumTopupIdr: 10000, maximumTopupIdr: 5000000, manualPayment: { qrUrl: 'https://jadibot-alzriss.gwenna.my.id/assets/dana-manual-qr.png' }, topups: [], ledger: [{ type: 'TOPUP_MANUAL', description: 'Top up DANA manual', amount: 25000, balanceAfter: 25000, createdAt: '2026-10-15T08:00:00Z' }] })
  if (u.includes('/api/wallet/shop')) return json({ packages: [{ id: 'panel-1gb', name: 'Panel 1 GB', description: 'RAM 1 GB', price: 1000, enabled: true }], products: [] })
  if (u.includes('/api/wallet/orders')) return json({ orders: [] })
  if (u.includes('/api/platform/panel/manual-topups')) return json({ topups: [{ id: 'topup_abc', amount: 10000, createdAt: '2026-10-15T09:00:00Z', merchantRef: 'INV-1', userId: 'u2' }] })
  if (u.includes('/api/')) return json({})
  req.continue()
})
for (const [name, hash, w] of [['saldo', '#wallet', 390], ['topup', '#topup', 390], ['shop', '#shop', 390], ['acctopup', '#acctopup', 390], ['shop-desktop', '#shop', 1280]]) {
  await page.setViewport({ width: w, height: w === 390 ? 844 : 900 })
  await page.goto('http://127.0.0.1:8126/' + hash, { waitUntil: 'networkidle2', timeout: 60000 })
  await new Promise(r => setTimeout(r, 1700))
  await page.screenshot({ path: `${out}/${name}.png` })
  console.log('shot', name)
}
console.log('ERRORS:', errors.length ? errors.slice(0, 5).join(' | ') : 'tidak ada')
await browser.close()
