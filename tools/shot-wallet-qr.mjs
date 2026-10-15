import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'
const out = '/home/user/shots-wallet'
fs.mkdirSync(out, { recursive: true })
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
for (const w of [390, 360, 320]) {
  const page = await browser.newPage()
  await page.setViewport({ width: w, height: 844 })
  await page.goto('http://127.0.0.1:8126/', { waitUntil: 'networkidle2', timeout: 60000 })
  await new Promise(r => setTimeout(r, 700))
  await page.evaluate(() => {
    document.body.classList.add('app-mode')
    for (const id of ['landingView', 'authView', 'tutorialView']) { const el = document.getElementById(id); if (el) el.classList.add('hidden') }
    document.getElementById('appView').classList.remove('hidden')
    document.querySelectorAll('#appView .page').forEach(p => p.classList.add('hidden'))
    document.getElementById('walletPage').classList.remove('hidden')
    const n = document.getElementById('walletTopupNotice')
    n.innerHTML = '<b>DANA MANUAL</b><br>1. Scan QR DANA di bawah dan lakukan pembayaran sesuai nominal.<br>2. Setelah pembayaran berhasil, tekan <b>KONFIRMASI SUDAH BAYAR</b>.<br>3. Owner memeriksa mutasi DANA lalu menambahkan saldo.<br>'
      + '<img class="wallet-qr" src="/assets/dana-manual-qr.png" alt="QR pembayaran DANA">'
    n.scrollIntoView()
  })
  await new Promise(r => setTimeout(r, 900))
  await page.screenshot({ path: out + '/wallet-qr-' + w + '.png' })
  await page.close()
}
await browser.close()
console.log('DONE')
