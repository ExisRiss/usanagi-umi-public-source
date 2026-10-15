#!/usr/bin/env node
/**
 * Ambil screenshot halaman website untuk verifikasi visual.
 * Pakai: node tools/shot.mjs [baseUrl] [outDir]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const BASE = process.argv[2] || 'http://127.0.0.1:8080'
const OUT = process.argv[3] || '/home/user/vendor/shot'
fs.mkdirSync(OUT, { recursive: true })

const shots = [
  { name: 'A-landing-desktop', hash: '', w: 1440, h: 900 },
  { name: 'B-auth-desktop', hash: '#login', w: 1440, h: 900 },
  { name: 'C-dashboard-desktop', hash: '', w: 1440, h: 900, forceApp: 'dashboardPage' },
  { name: 'D-settings-desktop', hash: '', w: 1440, h: 900, forceApp: 'settingsPage' },
  { name: 'E-owner-desktop', hash: '', w: 1440, h: 900, forceApp: 'ownerPage' },
  { name: 'I-mainbot-desktop', hash: '', w: 1440, h: 900, forceApp: 'main-consolePage' },
  { name: 'J-mainbot-mobile', hash: '', w: 390, h: 844, forceApp: 'main-consolePage' },
  { name: 'F-dashboard-mobile', hash: '', w: 390, h: 844, forceApp: 'dashboardPage' },
  { name: 'G-connect-mobile', hash: '', w: 390, h: 844, forceApp: 'connectPage' },
  { name: 'H-tutorial-desktop', hash: '#tutorial', w: 1440, h: 900 },
]

/**
 * Paksa tampilan dalam aplikasi (dashboard) tanpa login.
 * Hanya untuk memeriksa tampilan/ tema — tidak menyentuh data atau API.
 */
async function forceAppView(page, pageId) {
  await page.evaluate(target => {
    document.body.classList.add('app-mode')
    document.body.classList.remove('auth-mode')
    document.querySelectorAll('section.public-view').forEach(s => s.classList.add('hidden'))
    const app = document.getElementById('appView')
    if (app) app.classList.remove('hidden')
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'))
    const wanted = document.getElementById(target)
    if (wanted) wanted.classList.remove('hidden')
    // Isi contoh supaya tata letak statistik & kartu terlihat.
    document.querySelectorAll('[data-stat], .stat b').forEach(el => {
      if (!el.textContent.trim()) el.textContent = '0'
    })
  }, pageId)
}

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
})

for (const shot of shots) {
  const page = await browser.newPage()
  await page.setViewport({ width: shot.w, height: shot.h, deviceScaleFactor: 1 })

  const errors = []
  page.on('pageerror', e => errors.push(String(e.message).slice(0, 140)))
  page.on('console', m => {
    if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 140))
  })

  await page.goto(`${BASE}/${shot.hash}`, { waitUntil: 'networkidle2', timeout: 45000 })
  if (shot.forceApp) await forceAppView(page, shot.forceApp)
  // Biarkan animasi latar berjalan sedikit lalu bekukan supaya hasil konsisten.
  await new Promise(r => setTimeout(r, 1400))
  await page.evaluate(() => {
    document.querySelectorAll('.orb, .scene').forEach(el => {
      el.style.animationPlayState = 'paused'
    })
  })
  await new Promise(r => setTimeout(r, 300))

  const file = `${OUT}/${shot.name}.png`
  await page.screenshot({ path: file })

  // Info diagnostik
  const info = await page.evaluate(() => {
    const cs = getComputedStyle(document.body)
    const scene = document.querySelector('.scene')
    const active = document.querySelector('section.public-view:not(.hidden), section.app-view:not(.hidden)')
    return {
      bodyBg: cs.backgroundColor,
      bodyColor: cs.color,
      font: cs.fontFamily.split(',')[0],
      sceneBg: scene ? getComputedStyle(scene).backgroundImage.slice(0, 60) : '(tidak ada .scene)',
      visibleSection: active ? active.id : '(tidak terdeteksi)',
      cssLoaded: [...document.styleSheets].map(s => (s.href || '').split('/').pop()).filter(Boolean),
    }
  })

  console.log(`\n── ${shot.name}  (${shot.w}×${shot.h})`)
  console.log(`   bagian tampil : ${info.visibleSection}`)
  console.log(`   latar body    : ${info.bodyBg}`)
  console.log(`   warna teks    : ${info.bodyColor}`)
  console.log(`   font          : ${info.font}`)
  console.log(`   stylesheet    : ${info.cssLoaded.join(' + ')}`)
  if (errors.length) console.log(`   ⚠ error       : ${errors.slice(0, 3).join(' | ')}`)

  await page.close()
}

await browser.close()
console.log(`\nScreenshot tersimpan di ${OUT}`)
