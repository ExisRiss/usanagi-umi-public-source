#!/usr/bin/env node
/**
 * Audit kepatuhan UI terhadap aturan Agent Skills
 * (ui-skills, web-layout, web-interaction, web-color-depth, stylekit).
 *
 * Memeriksa nilai computed style di browser sungguhan, bukan membaca berkas CSS —
 * jadi yang terukur adalah hasil akhir setelah semua aturan bertumpuk.
 *
 * Pakai: node tools/ui-rules-check.mjs [baseUrl]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'

const BASE = process.argv[2] || 'http://127.0.0.1:8080'

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(`${BASE}/`, { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise((r) => setTimeout(r, 700))

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

const g = (sel, prop) =>
  page.evaluate(
    (s, p) => {
      const el = document.querySelector(s)
      return el ? getComputedStyle(el)[p] : null
    },
    sel,
    prop,
  )

// Baca nilai mentah dari stylesheet (getComputedStyle sudah me-resolve max() jadi px).
// Dua hal yang harus ditangani: (a) satu deklarasi bisa muncul di beberapa aturan,
// jadi yang diambil harus yang PALING AKHIR — itu yang menang; (b) selektor sering
// berupa daftar ("a:focus-visible, button:focus-visible, …"), jadi dicocokkan per bagian.
const rawRule = (selector, prop) =>
  page.evaluate(
    (sel, p) => {
      let found = null
      for (const sheet of document.styleSheets) {
        let rules
        try {
          rules = sheet.cssRules
        } catch {
          continue
        }
        for (const rule of rules) {
          if (!rule.selectorText || !rule.style) continue
          const parts = rule.selectorText.split(',').map((t) => t.trim())
          if (parts.includes(sel) && rule.style[p]) found = rule.style[p]
        }
      }
      return found
    },
    selector,
    prop,
  )

const r = await page.evaluate(() => {
  const g = (sel, prop) => {
    const el = document.querySelector(sel)
    return el ? getComputedStyle(el)[prop] : null
  }
  const anims = document.getAnimations().map((a) => {
    const t = a.effect?.target
    return {
      name: a.animationName || '?',
      cls: t?.className?.toString?.() || t?.tagName || '?',
      prop: a.transitionProperty || '',
    }
  })
  // Waktu transisi terpanjang yang dipakai di halaman.
  const durations = []
  for (const el of document.querySelectorAll('.panel, .btn, .mini, .stat, a, button')) {
    const d = getComputedStyle(el).transitionDuration
    for (const part of String(d).split(',')) {
      const v = parseFloat(part)
      if (v) durations.push(part.includes('ms') ? v : v * 1000)
    }
  }
  return {
    topbarZ: g('.topbar', 'zIndex'),
    toastZ: g('.toast', 'zIndex'),
    sceneAnim: g('.scene', 'animationName'),
    sceneBgPos: g('.scene', 'backgroundPosition'),
    statNums: g('.stat b', 'fontVariantNumeric'),
    terminalNums: g('.terminal', 'fontVariantNumeric'),
    orbTransform: g('.orb', 'transform'),
    miniMinH: g('.mini', 'minHeight'),
    panelBlur: g('.panel', 'backdropFilter'),
    panelShadow: g('.panel', 'boxShadow'),
    anims,
    maxDuration: durations.length ? Math.max(...durations) : 0,
  }
})

console.log(`\nAudit aturan UI — ${BASE}\n`)

console.log('── Skala z-index (web-layout) ─────────────')
check('.topbar z-index = 20 (sticky)', r.topbarZ === '20', `sekarang ${r.topbarZ}`)
check('.toast z-index = 50 (toast)', r.toastZ === '50', `sekarang ${r.toastZ}`)

console.log('\n── Animasi (ui-skills) ────────────────────')
check('.scene tidak dianimasikan', r.sceneAnim === 'none', `animation-name = ${r.sceneAnim}`)
check('.scene punya posisi gradasi tetap', !!r.sceneBgPos && r.sceneBgPos !== '0% 0%', String(r.sceneBgPos).slice(0, 44))
check('.orb bergerak via transform', !!r.orbTransform && r.orbTransform !== 'none', String(r.orbTransform).slice(0, 36))
const paint = r.anims.filter((a) => /background|color|filter/i.test(a.prop || ''))
check('tanpa animasi properti cat', paint.length === 0, paint.map((a) => a.name).join(', ') || 'bersih')
check('transisi ≤ 200ms', r.maxDuration <= 200, `terpanjang ${r.maxDuration}ms`)
check('backdrop-filter TIDAK dianimasikan', !r.anims.some((a) => /backdrop/i.test(a.prop || '')))

console.log('\n── Tipografi data (ui-skills) ─────────────')
check('.stat b pakai tabular-nums', String(r.statNums).includes('tabular-nums'), r.statNums)
check('.terminal pakai tabular-nums', String(r.terminalNums).includes('tabular-nums'), r.terminalNums)

console.log('\n── Material kaca (stylekit liquid-glass) ──')
check('.panel punya backdrop-filter', /blur/.test(String(r.panelBlur)), String(r.panelBlur).slice(0, 40))
check('blur ≥ 24px (bukan blur-sm)', /blur\((\d{2,})px\)/.test(String(r.panelBlur)) && parseInt(String(r.panelBlur).match(/blur\((\d+)px\)/)[1], 10) >= 24, String(r.panelBlur).slice(0, 30))
check('saturate dinaikkan', /saturate\((1\.[5-9]|2)/.test(String(r.panelBlur)), String(r.panelBlur).slice(-16))
const shLayers = (String(r.panelShadow).match(/rgba?\(/g) || []).length
check('bayangan berlapis ≥ 3', shLayers >= 3, `${shLayers} lapis`)

console.log('\n── Aksesibilitas (WCAG 2.2) ──────────────')
check('.mini min-height ≥ 24px', parseFloat(r.miniMinH) >= 24, r.miniMinH)
const safeTopbar = await rawRule('.topbar', 'paddingLeft')
check('.topbar pakai safe-area-inset', String(safeTopbar).includes('safe-area'), String(safeTopbar).slice(0, 44))
const safeToast = await rawRule('.toast', 'bottom')
check('.toast pakai safe-area-inset', String(safeToast).includes('safe-area'), String(safeToast).slice(0, 44))

await page.keyboard.press('Tab')
const focused = await page.evaluate(() => {
  const el = document.activeElement
  if (!el) return null
  const s = getComputedStyle(el)
  return { tag: el.tagName, outline: `${s.outlineWidth} ${s.outlineStyle}` }
})
check('elemen fokus punya outline', focused && focused.outline.includes('solid'), JSON.stringify(focused))

const focusRule = await rawRule('a:focus-visible', 'outline')
check('aturan :focus-visible ada', !!focusRule, String(focusRule || 'tidak ada').slice(0, 40))

console.log(`\n═══ ${pass} lulus, ${fail} gagal ═══`)
await browser.close()
process.exit(fail ? 1 : 0)
