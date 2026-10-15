#!/usr/bin/env node
/**
 * Uji responsif + deteksi overflow untuk tema liquid glass.
 * Memeriksa 7 viewport pada 4 halaman utama.
 *
 * Pakai: node tools/responsive-check.mjs [baseUrl]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'

const BASE = process.argv[2] || 'http://127.0.0.1:8080'

const VIEWPORTS = [
  { name: '360×740  (HP kecil)',   w: 360,  h: 740 },
  { name: '390×844  (iPhone 14)',  w: 390,  h: 844 },
  { name: '414×896  (iPhone Max)', w: 414,  h: 896 },
  { name: '768×1024 (Tablet)',     w: 768,  h: 1024 },
  { name: '1024×768 (Laptop sm)',  w: 1024, h: 768 },
  { name: '1280×800 (Laptop)',     w: 1280, h: 800 },
  { name: '1920×1080 (Desktop)',   w: 1920, h: 1080 },
]

const PAGES = [
  { id: 'landing',    hash: '',      forceApp: null },
  { id: 'auth',       hash: '#login', forceApp: null },
  { id: 'tutorial',   hash: '#tutorial', forceApp: null },
  { id: 'dashboard',  hash: '',      forceApp: 'dashboardPage' },
  { id: 'settings',   hash: '',      forceApp: 'settingsPage' },
  { id: 'connect',    hash: '',      forceApp: 'connectPage' },
]

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

let problems = 0
let checks = 0

console.log('Uji responsif tema liquid glass')
console.log(`Basis: ${BASE}\n`)

for (const vp of VIEWPORTS) {
  const row = []
  for (const pg of PAGES) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.w, height: vp.h })

    const jsErrors = []
    page.on('pageerror', e => jsErrors.push(e.message.slice(0, 80)))

    await page.goto(`${BASE}/${pg.hash}`, { waitUntil: 'domcontentloaded', timeout: 45000 })
    if (pg.forceApp) {
      await page.evaluate(target => {
        document.body.classList.add('app-mode')
        document.querySelectorAll('section.public-view').forEach(s => s.classList.add('hidden'))
        document.getElementById('appView')?.classList.remove('hidden')
        document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'))
        document.getElementById(target)?.classList.remove('hidden')
      }, pg.forceApp)
    }
    await new Promise(r => setTimeout(r, 220))

    const diag = await page.evaluate(() => {
      const de = document.documentElement
      const overflowX = de.scrollWidth - de.clientWidth

      // Cari elemen yang menembus tepi kanan viewport.
      // Elemen di dalam wadah ber-overflow:hidden (mis. blob latar .scene)
      // memang dipotong oleh wadahnya, jadi bukan masalah tata letak.
      const inClippedContainer = el => {
        let node = el.parentElement
        while (node && node !== document.body) {
          const s = getComputedStyle(node)
          if (/(hidden|clip)/.test(s.overflowX + s.overflow)) return true
          node = node.parentElement
        }
        return false
      }

      const offenders = []
      const vw = de.clientWidth
      for (const el of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(el)
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.position === 'fixed') continue
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        // Elemen yang bisa digulir horizontal memang boleh lebih lebar
        if (el.closest('.topbar nav, .owner-table-wrap, .messages, .terminal, .pair-log')) continue
        if (inClippedContainer(el)) continue
        if (r.right > vw + 1.5) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().split(' ').slice(0, 2).join('.'),
            over: Math.round(r.right - vw),
          })
        }
      }

      // Tombol di bawah ukuran sentuh minimum iOS (44px)
      let smallTaps = 0
      for (const el of document.querySelectorAll('button, .btn, a.nav-link, .mini')) {
        const cs = getComputedStyle(el)
        if (cs.display === 'none') continue
        const r = el.getBoundingClientRect()
        if (r.height > 0 && r.height < 40) smallTaps++
      }

      return {
        overflowX,
        offenders: offenders.slice(0, 3),
        offenderCount: offenders.length,
        smallTaps,
        jsErrors: [],
      }
    })

    checks++
    const issues = []
    if (diag.overflowX > 2) issues.push(`meluber ${diag.overflowX}px`)
    if (diag.offenderCount > 0) issues.push(`${diag.offenderCount} elemen lewat tepi`)
    if (jsErrors.length) issues.push(`${jsErrors.length} error JS`)
    if (issues.length) problems++

    row.push(`${pg.id}:${issues.length ? '✗' : '✓'}`)
    if (issues.length) {
      console.log(`  ✗ ${vp.name} · ${pg.id} → ${issues.join(', ')}`)
      for (const o of diag.offenders) console.log(`      <${o.tag} class="${o.cls}"> lewat ${o.over}px`)
    }

    await page.close()
  }
  console.log(`${vp.name.padEnd(22)} ${row.join('  ')}`)
}

await browser.close()

console.log(`\n${checks - problems}/${checks} kombinasi bersih`)
if (problems) {
  console.log(`${problems} kombinasi punya masalah tata letak.`)
  process.exit(1)
}
console.log('Tidak ada overflow horizontal yang terdeteksi.')
