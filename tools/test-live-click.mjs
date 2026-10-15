import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844 })
page.on('pageerror', e => console.log('PAGEERROR:', e.message.slice(0, 140)))
await page.evaluateOnNewDocument(() => {
  localStorage.setItem('umi_studio_session_v2', JSON.stringify({ access_token: 'test-token-1234567890', refresh_token: 'test-refresh-1234567890', user: { id: 'u1', email: 'owner@example.com' } }))
})
await page.setRequestInterception(true)
page.on('request', req => {
  const u = req.url()
  const json = (o) => req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify(o) })
  if (!u.includes('jadibot-alzriss.gwenna.my.id')) return req.continue()
  if (u.includes('/api/platform/me')) return json({ user: { id: 'u1', email: 'owner@example.com', roles: ['owner'] } })
  if (u.includes('/api/wallet/status')) return json({ enabled: true, mode: 'manual_dana', balance: 25000, minimumTopupIdr: 10000, maximumTopupIdr: 5000000, manualPayment: { qrUrl: '' }, topups: [], ledger: [] })
  if (u.includes('/api/wallet/shop')) return json({ packages: [], products: [] })
  if (u.includes('/api/wallet/orders')) return json({ orders: [] })
  if (u.includes('/api/panel')) return json({ servers: [] })
  if (u.includes('/api/platform/panel/manual-topups')) return json({ topups: [] })
  if (u.includes('/api/')) return json({})
  req.continue()
})
await page.goto('https://jadibot-alzriss.gwenna.my.id/#wallet', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 1500))
// buka menu hamburger lalu klik Top Up, Shop, Panel persis seperti pengguna
for (const label of ['Top Up', 'Shop', 'Panel', 'ACC Top Up']) {
  await page.evaluate(() => document.getElementById('mainNav').classList.add('open'))
  const clicked = await page.evaluate((label) => {
    const a = [...document.querySelectorAll('#mainNav a')].find(x => x.textContent.trim() === label)
    if (!a) return 'MENU TIDAK ADA'
    a.click(); return a.getAttribute('href')
  }, label)
  await new Promise(r => setTimeout(r, 1700))
  const st = await page.evaluate(() => ({ hash: location.hash, visible: [...document.querySelectorAll('#appView .page')].filter(p => !p.classList.contains('hidden')).map(p => p.id) }))
  console.log(`klik "${label}" (${clicked}) →`, st.hash, '|', st.visible.join(','))
}
await browser.close()
