#!/usr/bin/env node
/**
 * Audit material kaca: baca nilai computed style pada permukaan utama
 * untuk memastikan transparansi & bayangan benar-benar diterapkan.
 * Pakai: node tools/glass-audit.mjs [baseUrl]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'

const BASE = process.argv[2] || 'http://127.0.0.1:8082'

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(`${BASE}/`, { waitUntil: 'networkidle2', timeout: 45000 })

// Paksa tampilan dashboard supaya permukaan aplikasi ikut terukur.
await page.evaluate(() => {
  document.body.classList.add('app-mode')
  document.querySelectorAll('section.public-view').forEach(s => s.classList.add('hidden'))
  document.getElementById('appView')?.classList.remove('hidden')
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'))
  document.getElementById('dashboardPage')?.classList.remove('hidden')
})
await new Promise(r => setTimeout(r, 600))

const report = await page.evaluate(() => {
  const probe = (selector, label) => {
    const el = document.querySelector(selector)
    if (!el) return { label, found: false }
    const cs = getComputedStyle(el)
    const bf = cs.backdropFilter || cs.webkitBackdropFilter || 'none'
    const shadows = cs.boxShadow
    // hitung jumlah lapis bayangan (koma di level atas)
    let layers = 0
    if (shadows && shadows !== 'none') {
      let depth = 0
      layers = 1
      for (const ch of shadows) {
        if (ch === '(') depth++
        else if (ch === ')') depth--
        else if (ch === ',' && depth === 0) layers++
      }
    }
    // ambil bagian rgba dari background untuk menilai kepekatan
    const alphas = [...(cs.backgroundImage + ' ' + cs.backgroundColor).matchAll(/rgba?\([^)]*?([\d.]+)\s*\)/g)]
      .map(m => Number(m[1]))
      .filter(n => !Number.isNaN(n))
    return {
      label,
      found: true,
      backdrop: bf,
      blur: (bf.match(/blur\(([\d.]+)px\)/) || [])[1] || '-',
      // saturate bisa diserialisasi sebagai 1.8 (rasio) atau 180% — normalkan
      saturate: (() => {
        const raw = (bf.match(/saturate\(([\d.]+)(%?)\)/) || [])[1]
        if (!raw) return '-'
        const n = Number(raw)
        return n < 10 ? String(Math.round(n * 100)) : String(Math.round(n))
      })(),
      shadowLayers: layers,
      shadowLen: shadows.length,
      shadowHead: shadows.slice(0, 78),
      maxAlpha: alphas.length ? Math.max(...alphas) : null,
      minAlpha: alphas.length ? Math.min(...alphas) : null,
    }
  }

  return [
    probe('.workspace-head', 'Header workspace'),
    probe('.panel', 'Panel'),
    probe('.session-card', 'Kartu sesi'),
    probe('.stat', 'Kartu statistik'),
    probe('.messages', 'Area pesan'),
    probe('.list-item', 'Item daftar'),
    probe('.topbar nav a', 'Pil navigasi'),
  ]
})

console.log('AUDIT MATERIAL KACA\n')
console.log('permukaan          blur   saturasi  lapis bayangan  alpha latar maks')
console.log('─'.repeat(74))
for (const r of report) {
  if (!r.found) {
    console.log(`${r.label.padEnd(18)} (elemen tidak ada di halaman ini)`)
    continue
  }
  const blur = r.blur === '-' ? '-' : `${r.blur}px`
  const sat = r.saturate === '-' ? '-' : `${r.saturate}%`
  const alpha = r.maxAlpha === null ? '-' : r.maxAlpha.toFixed(3)
  console.log(`${r.label.padEnd(18)} ${blur.padEnd(6)} ${sat.padEnd(9)} ${String(r.shadowLayers).padEnd(15)} ${alpha}`)
}

console.log('\nContoh bayangan (Header workspace):')
const wh = report.find(r => r.label === 'Header workspace')
if (wh?.found) console.log('  ' + wh.shadowHead + '…')

console.log('\nContoh bayangan (Panel):')
const pn = report.find(r => r.label === 'Panel')
if (pn?.found) console.log('  ' + pn.shadowHead + '…')

await browser.close()
