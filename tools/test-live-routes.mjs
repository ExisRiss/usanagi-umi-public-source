import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844 })
const errs = []
page.on('pageerror', e => errs.push(e.message.slice(0, 140)))
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
for (const target of ['topup', 'shop', 'acctopup', 'panel', 'wallet']) {
  await page.goto('https://jadibot-alzriss.gwenna.my.id/#' + target, { waitUntil: 'networkidle2', timeout: 60000 })
  await new Promise(r => setTimeout(r, 1800))
  const state = await page.evaluate((t) => ({
    hash: location.hash,
    visible: [...document.querySelectorAll('#appView .page')].filter(p => !p.classList.contains('hidden')).map(p => p.id),
    title: document.getElementById('pageTitle')?.textContent,
  }), target)
  console.log('#' + target, '→ hash:', state.hash, '| tampil:', state.visible.join(','), '| judul:', state.title)
}
console.log('PAGEERROR:', errs.length ? errs.slice(0, 4).join(' | ') : 'tidak ada')
await browser.close()
