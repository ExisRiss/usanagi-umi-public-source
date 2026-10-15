import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const out = '/home/user/shots-wallet'
fs.mkdirSync(out, { recursive: true })
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844 })
const errors = []
page.on('pageerror', e => errors.push(String(e).slice(0, 160)))
await page.goto('http://127.0.0.1:8126/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 800))

// Paksa tampil mode aplikasi + halaman Saldo (tanpa login, hanya uji tata letak)
const info = await page.evaluate(() => {
  document.body.classList.add('app-mode')
  for (const id of ['landingView', 'authView', 'tutorialView']) { const el = document.getElementById(id); if (el) el.classList.add('hidden') }
  const app = document.getElementById('appView'); app.classList.remove('hidden')
  document.querySelectorAll('#appView .page').forEach(p => p.classList.add('hidden'))
  const w = document.getElementById('walletPage'); w.classList.remove('hidden')
  const title = document.getElementById('pageTitle'); if (title) title.textContent = 'SALDO'
  // isi contoh katalog supaya mirip aslinya
  const pkgs = document.getElementById('walletShopPackages')
  if (pkgs) pkgs.innerHTML = Array.from({ length: 11 }, (_, i) => {
    const gb = i + 1
    return '<div class="list-item"><span><b>Panel ' + (gb <= 10 ? gb + ' GB' : 'Unlimited') + '</b><br><small>Server Node.js otomatis</small></span><span><b>Rp' + (gb * 1000).toLocaleString('id-ID') + '</b> <button class="mini" type="button">BELI</button></span></div>'
  }).join('')
  const r = {}
  const measure = (label) => {
    r[label] = {
      pageClient: w.clientHeight, pageScroll: w.scrollHeight, pageOverflowY: getComputedStyle(w).overflowY,
      workspaceH: document.querySelector('.workspace').clientHeight,
      appH: app.clientHeight, rootH: document.getElementById('root').clientHeight,
      docScroll: document.documentElement.scrollHeight,
    }
  }
  measure('awal')
  w.scrollTop = 99999
  r.scrollTopSetelah = w.scrollTop
  w.scrollTop = 0
  return r
})
console.log(JSON.stringify(info, null, 1))
await page.screenshot({ path: out + '/wallet-mobile-atas.png' })
await page.evaluate(() => { document.getElementById('walletPage').scrollTop = 700 })
await new Promise(r => setTimeout(r, 500))
await page.screenshot({ path: out + '/wallet-mobile-tengah.png' })
console.log('errors:', errors.length ? errors.join('|') : 'none')
await browser.close()
console.log('DONE')
