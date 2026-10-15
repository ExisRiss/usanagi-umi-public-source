import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const out = '/home/user/shots-liquid'
fs.mkdirSync(out, { recursive: true })
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
})
const jobs = [
  { name: 'porto-desktop', url: 'http://127.0.0.1:8124/', w: 1366, h: 900 },
  { name: 'porto-mobile', url: 'http://127.0.0.1:8124/', w: 390, h: 844 },
  { name: 'web-landing', url: 'http://127.0.0.1:8125/', w: 1366, h: 900 },
  { name: 'web-mobile', url: 'http://127.0.0.1:8125/', w: 390, h: 844 },
]
for (const j of jobs) {
  const page = await browser.newPage()
  await page.setViewport({ width: j.w, height: j.h })
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)))
  try {
    await page.goto(j.url, { waitUntil: 'networkidle2', timeout: 45000 })
  } catch (e) { errors.push('goto: ' + String(e).slice(0, 160)) }
  await new Promise((r) => setTimeout(r, 1200))
  await page.screenshot({ path: `${out}/${j.name}.png` })
  if (j.name === 'porto-desktop' || j.name === 'web-landing') {
    await page.evaluate(() => window.scrollTo(0, Math.round(document.body.scrollHeight * 0.45)))
    await new Promise((r) => setTimeout(r, 700))
    await page.screenshot({ path: `${out}/${j.name}-mid.png` })
  }
  console.log(j.name, 'errors:', errors.length ? errors.join(' | ') : 'none')
  await page.close()
}
await browser.close()
console.log('DONE')
