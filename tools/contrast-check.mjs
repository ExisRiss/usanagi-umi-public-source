#!/usr/bin/env node
/**
 * Uji kontras teks di atas permukaan kaca transparan (WCAG 2.1).
 *
 * Cara kerja: setiap halaman dirender dua kali.
 *   1. normal            → untuk melihat hasilnya
 *   2. color:transparent → hanya teks disembunyikan; latar & kaca tetap utuh
 * Warna latar efektif di belakang tiap teks diambil dari gambar kedua, lalu
 * dihitung rasio kontrasnya terhadap warna teks asli.
 *
 * Ini pengaman utama ketika kaca dibuat lebih bening: teks tetap wajib terbaca.
 *
 * Pakai: node tools/contrast-check.mjs [baseUrl] [--shots <dir>] [--view <nama|all>]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'

const BASE = process.argv[2] || 'http://127.0.0.1:8080'
const SHOT_DIR = process.argv.includes('--shots')
  ? process.argv[process.argv.indexOf('--shots') + 1]
  : '/home/user/vendor/shot-glass'
const VIEW_ARG = process.argv.includes('--view')
  ? process.argv[process.argv.indexOf('--view') + 1]
  : 'all'

const PAGES = [
  { id: null, label: 'landing' },          // halaman publik
  { id: null, label: 'auth', hash: '#login' },
  { id: 'dashboardPage', label: 'dashboard' },
  { id: 'connectPage', label: 'pairing' },
  { id: 'settingsPage', label: 'settings' },
  { id: 'walletPage', label: 'wallet' },
  { id: 'pluginsPage', label: 'plugin' },
  { id: 'chatPage', label: 'chat' },
]

const SELECTED = VIEW_ARG === 'all' ? PAGES : PAGES.filter((p) => p.label === VIEW_ARG || p.id === VIEW_ARG)
if (!SELECTED.length) {
  console.error(`View "${VIEW_ARG}" tidak dikenal. Pilihan: ${PAGES.map((p) => p.label).join(', ')}`)
  process.exit(2)
}

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-color-profile=srgb'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
// Produksi memakai CSP yang memblokir <style> yang disuntikkan; hanya untuk
// pengukuran lokal ini, CSP dilewati.
await page.setBypassCSP(true)
await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 45000 })

fs.mkdirSync(SHOT_DIR, { recursive: true })

// Kumpulkan elemen teks yang benar-benar berada di atas permukaan kaca.
const COLLECT = (label) => {
  const SURFACE = '.panel, .glass-card, .stat, .cover, .session-card, .plugin-card, .tutorial-card, .workspace-head, .topbar, .notice, .auth-card'
  const parse = (c) => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/)
    return m ? [Math.round(+m[1]), Math.round(+m[2]), Math.round(+m[3]), m[4] === undefined ? 1 : +m[4]] : null
  }
  const out = []
  const seen = new Set()
  for (const host of document.querySelectorAll(SURFACE)) {
    if (host.offsetParent === null && host.tagName !== 'BODY') continue
    for (const el of host.querySelectorAll('*')) {
      const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1)
      if (!hasText) continue
      const s = getComputedStyle(el)
      if (s.visibility === 'hidden' || s.display === 'none') continue
      const rgb = parse(s.color)
      if (!rgb || rgb[3] < 0.4) continue
      const r = el.getBoundingClientRect()
      if (r.width < 8 || r.height < 7) continue
      if (r.top < 0 || r.bottom > innerHeight || r.left < 0 || r.right > innerWidth) continue
      const key = `${Math.round(r.x)},${Math.round(r.y)},${Math.round(r.width)}`
      if (seen.has(key)) continue
      seen.add(key)
      const size = parseFloat(s.fontSize)
      const weight = parseInt(s.fontWeight, 10) || 400
      out.push({
        view: label,
        label: el.tagName + (el.className ? '.' + String(el.className).trim().split(/\s+/)[0] : ''),
        text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 28),
        x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height),
        rgb: rgb.slice(0, 3),
        size, weight,
        large: size >= 24 || (size >= 18.66 && weight >= 700),
      })
    }
  }
  return out
}

const forceAppView = (pageId) =>
  page.evaluate((target) => {
    document.body.classList.add('app-mode')
    document.body.classList.remove('auth-mode')
    document.querySelectorAll('section.public-view').forEach((s) => s.classList.add('hidden'))
    document.getElementById('appView')?.classList.remove('hidden')
    document.querySelectorAll('.page').forEach((p) => p.classList.add('hidden'))
    if (target) document.getElementById(target)?.classList.remove('hidden')
    document.querySelectorAll('[data-stat], .stat b').forEach((el) => {
      if (!el.textContent.trim()) el.textContent = '0'
    })
    scrollTo(0, 0)
  }, pageId)

const allProbes = []
const plates = []

for (const view of SELECTED) {
  if (view.id) {
    await forceAppView(view.id)
  } else {
    await page.evaluate((hash) => {
      document.body.classList.remove('app-mode')
      document.querySelectorAll('section.public-view').forEach((s) => s.classList.remove('hidden'))
      document.getElementById('appView')?.classList.add('hidden')
      if (hash) location.hash = hash
      scrollTo(0, 0)
    }, view.hash || '')
    if (view.hash) {
      // Halaman publik memilih tampilan lewat hash; beri waktu router bekerja.
      await new Promise((r) => setTimeout(r, 500))
      await page.evaluate((hash) => {
        const target = document.querySelector(hash)
        if (target) target.classList.remove('hidden')
      }, view.hash)
    }
  }
  await new Promise((r) => setTimeout(r, 650))

  allProbes.push(...(await page.evaluate(COLLECT, view.label)))

  // Pelat latar: sembunyikan HANYA teks, sisakan kaca & latar.
  await page.addStyleTag({
    content: `*, *::before, *::after{
      color: transparent !important;
      -webkit-text-fill-color: transparent !important;
      text-shadow: none !important;
    }`,
  })
  await new Promise((r) => setTimeout(r, 350))
  const plate = `${SHOT_DIR}/_plate-${view.label}.png`
  await page.screenshot({ path: plate })
  plates.push({ view: view.label, plate })
  await page.evaluate(() => {
    document.querySelectorAll('style').forEach((s) => {
      if (s.textContent.includes('-webkit-text-fill-color: transparent')) s.remove()
    })
  })
  await new Promise((r) => setTimeout(r, 250))
}

await browser.close()

console.log(`\nUji kontras teks di atas kaca — ${BASE}`)
console.log(`${allProbes.length} elemen teks di ${SELECTED.length} halaman\n`)

fs.writeFileSync(`${SHOT_DIR}/_probes.json`, JSON.stringify(allProbes))
fs.writeFileSync(`${SHOT_DIR}/_plates.json`, JSON.stringify(plates))

const py = `
import json, sys
from PIL import Image
from statistics import median

probes = json.load(open(${JSON.stringify(`${SHOT_DIR}/_probes.json`)}))
plates = {p['view']: p['plate'] for p in json.load(open(${JSON.stringify(`${SHOT_DIR}/_plates.json`)}))}

def lum(r, g, b):
    def f(c):
        c /= 255.0
        return c/12.92 if c <= 0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b)

def ratio(fg, bg):
    l1, l2 = lum(*fg), lum(*bg)
    if l1 < l2: l1, l2 = l2, l1
    return (l1 + 0.05) / (l2 + 0.05)

imgs = {v: Image.open(p).convert('RGB') for v, p in plates.items()}
rows, fails = [], []
for p in probes:
    im = imgs.get(p['view'])
    if im is None: continue
    W, H = im.size
    x0, y0 = max(0, p['x']), max(0, p['y'])
    x1, y1 = min(W-1, p['x']+p['w']), min(H-1, p['y']+p['h'])
    if x1 <= x0 or y1 <= y0: continue
    px = im.load()
    step_x = max(1, (x1-x0)//12)
    step_y = max(1, (y1-y0)//6)
    samples = [px[xx, yy] for yy in range(y0, y1+1, step_y) for xx in range(x0, x1+1, step_x)]
    if not samples: continue
    bg = tuple(int(median([s[i] for s in samples])) for i in range(3))
    r = ratio(tuple(p['rgb']), bg)
    need = 3.0 if p['large'] else 4.5
    row = (r, need, r >= need, p, bg)
    rows.append(row)
    if not row[2]: fails.append(row)

rows.sort(key=lambda t: t[0])
by_view = {}
for r, need, ok, p, bg in rows:
    by_view.setdefault(p['view'], []).append(r)

for view, rs in sorted(by_view.items()):
    print(f"  {view:<11} {len(rs):>3} elemen · terendah {min(rs):>5.2f}:1 · rata-rata {sum(rs)/len(rs):>5.2f}:1")

print()
if fails:
    print("  Kontras di bawah ambang WCAG:")
    for r, need, ok, p, bg in fails[:14]:
        print(f"    {r:5.2f}:1 (butuh {need:.1f})  {p['view']:<10} {p['label']:<22} \\"{p['text'][:24]}\\"  {p['size']:.0f}px")
        print(f"           latar rgb{bg} · teks rgb{tuple(p['rgb'])}")
else:
    print("  Semua elemen lolos ambang WCAG AA.")

print()
print(f"  {len(rows)} elemen diukur · {len(fails)} gagal")
sys.exit(1 if fails else 0)
`

try {
  process.stdout.write(execFileSync('python3', ['-c', py], { encoding: 'utf8' }))
} catch (e) {
  process.stdout.write(e.stdout || '')
  process.exit(1)
}
