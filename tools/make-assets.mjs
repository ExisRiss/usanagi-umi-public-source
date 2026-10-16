#!/usr/bin/env node
/**
 * Pembuat aset UMI GAMES / UMI TRADE — semuanya digambar program (tanpa
 * dependensi luar, tanpa font eksternal) supaya hasilnya kecil, konsisten,
 * dan bisa dibangun ulang kapan saja:
 *
 *   node tools/make-assets.mjs            # tulis ke db-mirror/assets
 *   node tools/make-assets.mjs --dir X    # tulis ke folder lain
 *
 * Yang dihasilkan:
 *   logo-umi-games.svg, logo-umi-trade.svg, logo-mark.svg
 *   icon.svg, favicon.svg, manifest.webmanifest
 *   icon-32.png, icon-180.png, icon-192.png, icon-512.png
 *   og-umi-trade.png (1200x630), coin.svg, trophy.svg, google.svg, whatsapp.svg
 *
 * PNG ditulis manual (zlib + CRC) karena sandbox tidak punya ImageMagick.
 */
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const OUT = path.isAbsolute(args[args.indexOf('--dir') + 1] || '')
  ? args[args.indexOf('--dir') + 1]
  : path.join(REPO, args.indexOf('--dir') >= 0 ? args[args.indexOf('--dir') + 1] : 'db-mirror/assets')
fs.mkdirSync(OUT, { recursive: true })

/* ── warna tema ─────────────────────────────────────────────────────────── */
const INK = [10, 14, 26], CARD = [18, 26, 43], LINE = [40, 57, 92]
const ACCENT = [91, 124, 250], UP = [34, 214, 127], DOWN = [255, 77, 109], GOLD = [255, 204, 87]

/* ── kanvas RGBA sederhana ──────────────────────────────────────────────── */
function canvas(w, h, bg) {
  const px = new Uint8Array(w * h * 4)
  const put = (x, y, c, a = 255) => {
    x = Math.round(x); y = Math.round(y)
    if (x < 0 || y < 0 || x >= w || y >= h) return
    const i = (y * w + x) * 4
    if (a >= 255) { px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255; return }
    const t = a / 255, inv = 1 - t
    px[i] = c[0] * t + px[i] * inv; px[i + 1] = c[1] * t + px[i + 1] * inv; px[i + 2] = c[2] * t + px[i + 2] * inv
    px[i + 3] = Math.max(px[i + 3], a)
  }
  if (bg) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) put(x, y, bg)
  return {
    w, h, px, put,
    /** persegi panjang dengan sudut membulat */
    roundRect(x0, y0, ww, hh, r, color, alpha = 255, stroke = null, sw = 1) {
      for (let y = 0; y < hh; y++) for (let x = 0; x < ww; x++) {
        const dx = Math.min(x, ww - 1 - x), dy = Math.min(y, hh - 1 - y)
        if (dx < r && dy < r) {
          const d = Math.hypot(r - dx, r - dy)
          if (d > r) continue
          if (d > r - 1 && alpha >= 255) { /* tepi */ }
        }
        put(x0 + x, y0 + y, color, alpha)
      }
      if (stroke) {
        for (let x = 0; x < ww; x++) { put(x0 + x, y0, stroke, 255); put(x0 + x, y0 + hh - 1, stroke, 255) }
        for (let y = 0; y < hh; y++) { put(x0, y0 + y, stroke, 255); put(x0 + ww - 1, y0 + y, stroke, 255) }
      }
    },
    /** garis tebal */
    line(x1, y1, x2, y2, color, width = 1, alpha = 255) {
      const steps = Math.max(2, Math.ceil(Math.hypot(x2 - x1, y2 - y1) * 2))
      for (let i = 0; i <= steps; i++) {
        const t = i / steps, cx = x1 + (x2 - x1) * t, cy = y1 + (y2 - y1) * t
        for (let ox = -width / 2; ox <= width / 2; ox += 0.5)
          for (let oy = -width / 2; oy <= width / 2; oy += 0.5)
            if (ox * ox + oy * oy <= (width / 2) ** 2) put(cx + ox, cy + oy, color, alpha)
      }
    },
    /** gradien linear dua warna */
    gradient(x0, y0, ww, hh, c1, c2, diagonal = true) {
      for (let y = 0; y < hh; y++) for (let x = 0; x < ww; x++) {
        const t = diagonal ? (x / ww + y / hh) / 2 : x / ww
        put(x0 + x, y0 + y, [c1[0] + (c2[0] - c1[0]) * t, c1[1] + (c2[1] - c1[1]) * t, c1[2] + (c2[2] - c1[2]) * t])
      }
    },
    /** titik (dipakai untuk lingkaran kasat mata / bintang) */
    dot(cx, cy, r, color, alpha = 255) {
      for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++)
        if (x * x + y * y <= r * r) put(cx + x, cy + y, color, alpha)
    },
  }
}

/* ── font bitmap 5x7 untuk teks pada gambar PNG ─────────────────────────── */
const FONT = {
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  '$': ['00100', '01111', '10100', '01110', '00101', '11110', '00100'],
  '%': ['11001', '11010', '00100', '01011', '10011', '00000', '00000'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01110'],
  N: ['10001', '11001', '11001', '10101', '10011', '10011', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
}
function text(cv, str, x0, y0, scale, color, spacing = 2) {
  let x = x0
  for (const ch of String(str).toUpperCase()) {
    const glyph = FONT[ch]
    if (!glyph) { x += 6 * scale; continue }
    glyph.forEach((row, ry) => row.split('').forEach((bit, rx) => {
      if (bit === '1') for (let dy = 0; dy < scale; dy++) for (let dx = 0; dx < scale; dx++)
        cv.put(x + rx * scale + dx, y0 + ry * scale + dy, color)
    }))
    x += (5 + spacing) * scale
  }
  return x
}

/* ── penulis PNG ────────────────────────────────────────────────────────── */
function crc32(buf) {
  let c, crc = 0xffffffff
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    crc = c ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}
function writePng(file, cv) {
  const { w, h, px } = cv
  const raw = Buffer.alloc((w * 4 + 1) * h)
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0
    Buffer.from(px.buffer, px.byteOffset + y * w * 4, w * 4).copy(raw, y * (w * 4 + 1) + 1)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
  fs.writeFileSync(file, png)
  return png.length
}

/* ── gambar ikon (kotak gradien + grafik lilin + koin) ──────────────────── */
function drawIcon(size) {
  const cv = canvas(size, size)
  const r = Math.round(size * 0.22)
  // latar gelap membulat
  cv.roundRect(0, 0, size, size, r, INK)
  // aksen gradien lembut di dalam kotak (masker kotak membulat)
  const inside = (x, y) => {
    const dx = Math.min(x, size - 1 - x), dy = Math.min(y, size - 1 - y)
    if (dx < r && dy < r) return Math.hypot(r - dx, r - dy) <= r
    return true
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (!inside(x, y)) { cv.put(x, y, [10, 14, 26]); continue }
    const t = (x / size + y / size) / 2
    cv.put(x, y, [26 + 24 * t, 36 + 22 * t, 84 + 8 * t], 46)
  }
  // kisi
  for (let i = 1; i <= 3; i++) cv.line(0, Math.round((size / 4) * i), size, Math.round((size / 4) * i), LINE, Math.max(1, size / 260), 120)
  // lilin: 5 batang naik, isi bidang bawah 65%
  const bodyW = size * 0.115, wickW = Math.max(1.5, size * 0.022)
  const xs = [0.19, 0.345, 0.5, 0.655, 0.81]
  const baseY = size * 0.86
  const heights = [0.26, 0.38, 0.50, 0.60, 0.70]      // puncak badan
  const lows = [0.04, 0.12, 0.20, 0.27, 0.34]           // dasar badan
  for (let i = 0; i < xs.length; i++) {
    const x = size * xs[i]
    const yBot = baseY - size * lows[i], yTop = baseY - size * heights[i]
    const color = UP
    cv.line(x, yTop - size * 0.06, x, yBot + size * 0.05, color, wickW)
    cv.roundRect(Math.round(x - bodyW / 2), Math.round(yTop), Math.round(bodyW), Math.round(yBot - yTop), Math.max(2, Math.round(size * 0.018)), color)
  }
  // koin
  const cr = size * 0.125, cx = size * 0.735, cy = size * 0.215
  cv.dot(cx, cy, cr, GOLD)
  cv.dot(cx, cy, cr * 0.84, [255, 233, 168])
  text(cv, '$', Math.round(cx - cr * 0.30), Math.round(cy - cr * 0.52), Math.max(1, Math.round(cr / 9)), [92, 64, 6])
  return cv
}

/* ── SVG (logo, favicon, ikon kecil) ────────────────────────────────────── */
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="UMI Trade">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5b7cfa"/><stop offset="1" stop-color="#22d67f"/>
    </linearGradient>
    <linearGradient id="coin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#ffb020"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="#0a0e1a"/>
  <rect x="10" y="10" width="492" height="492" rx="104" fill="url(#g)" opacity=".10"/>
  <g stroke="#28395c" stroke-width="2" opacity=".55">
    <line x1="0" y1="128" x2="512" y2="128"/><line x1="0" y1="256" x2="512" y2="256"/><line x1="0" y1="384" x2="512" y2="384"/>
  </g>
  <g fill="#22d67f" stroke="#22d67f" stroke-width="7" stroke-linecap="round">
    <line x1="126" y1="336" x2="126" y2="252"/><rect x="108" y="300" width="36" height="40" rx="4" stroke="none"/>
    <line x1="198" y1="300" x2="198" y2="212"/><rect x="180" y="248" width="36" height="46" rx="4" stroke="none"/>
    <line x1="270" y1="252" x2="270" y2="164"/><rect x="252" y="196" width="36" height="48" rx="4" stroke="none"/>
    <line x1="342" y1="196" x2="342" y2="118"/><rect x="324" y="146" width="36" height="44" rx="4" stroke="none"/>
    <line x1="414" y1="150" x2="414" y2="80"/><rect x="396" y="104" width="36" height="42" rx="4" stroke="none"/>
  </g>
  <circle cx="392" cy="132" r="60" fill="url(#coin)" stroke="#7a5205" stroke-width="6"/>
  <text x="392" y="164" text-anchor="middle" font-family="system-ui,sans-serif" font-size="76" font-weight="800" fill="#5c4006">$</text>
</svg>`

const svgWordmark = (sub) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 160" role="img" aria-label="UMI Trade">
  <defs><linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5b7cfa"/><stop offset="1" stop-color="#22d67f"/></linearGradient></defs>
  <rect x="4" y="4" width="152" height="152" rx="34" fill="#0a0e1a"/>
  <rect x="10" y="10" width="140" height="140" rx="28" fill="url(#m)" opacity=".12"/>
  <g fill="#22d67f">
    <line x1="42" y1="104" x2="42" y2="76" stroke="#22d67f" stroke-width="5"/><rect x="34" y="86" width="16" height="18" rx="3"/>
    <line x1="72" y1="92" x2="72" y2="62" stroke="#22d67f" stroke-width="5"/><rect x="64" y="72" width="16" height="20" rx="3"/>
    <line x1="102" y1="78" x2="102" y2="46" stroke="#22d67f" stroke-width="5"/><rect x="94" y="58" width="16" height="20" rx="3"/>
    <line x1="132" y1="64" x2="132" y2="34" stroke="#22d67f" stroke-width="5"/><rect x="124" y="44" width="16" height="20" rx="3"/>
  </g>
  <circle cx="132" cy="46" r="17" fill="#ffcc57" stroke="#7a5205" stroke-width="3"/>
  <text x="132" y="55" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="800" fill="#5c4006">$</text>
  <text x="180" y="78" font-family="system-ui,-apple-system,'Segoe UI',sans-serif" font-size="52" font-weight="800" fill="#eef3ff">UMI <tspan fill="#22d67f">TRADE</tspan></text>
  <text x="182" y="112" font-family="system-ui,sans-serif" font-size="21" letter-spacing="6" fill="#6b7c9c">${sub}</text>
</svg>`

const svgCoin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#ffb020"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="url(#c)" stroke="#7a5205" stroke-width="3"/><text x="32" y="44" text-anchor="middle" font-family="system-ui,sans-serif" font-size="34" font-weight="800" fill="#5c4006">$</text></svg>`
const svgTrophy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="#ffcc57" stroke="#7a5205" stroke-width="2.6" stroke-linejoin="round"><path d="M18 8h28v14a14 14 0 0 1-28 0z"/><path d="M18 12H9a9 9 0 0 0 9 12z"/><path d="M46 12h9a9 9 0 0 1-9 12z"/><path d="M28 36h8v8h-8z"/><path d="M18 52h28a4 4 0 0 1-4 6H22a4 4 0 0 1-4-6z"/><path d="M20 44h24v8H20z" fill="#e0a92c"/></g></svg>`
const svgWhatsapp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#25d366"/><path d="M20 46l3-9a16 16 0 1 1 6 6z" fill="#fff"/><path d="M27 26c1 5 5 9 10 10l3-3 5 2-2 5c-6 1-15-5-18-12z" fill="#25d366"/></svg>`

/* ── manifest PWA ───────────────────────────────────────────────────────── */
const manifest = {
  name: 'UMI TRADE — Pasar $AS',
  short_name: 'UMI TRADE',
  description: 'Pasar saham $AS Umi Games: harga real-time, order beli/jual, portofolio, top up, dan papan peringkat.',
  start_url: '/trading',
  scope: '/',
  display: 'standalone',
  background_color: '#0a0e1a',
  theme_color: '#0a0e1a',
  orientation: 'portrait-primary',
  lang: 'id',
  categories: ['finance', 'games', 'entertainment'],
  icons: [
    { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/assets/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
  ],
}

/* ── tulis semua ────────────────────────────────────────────────────────── */
const log = (name, bytes) => console.log(`  ${name.padEnd(24)} ${String(bytes).padStart(7)} byte`)

fs.writeFileSync(path.join(OUT, 'icon.svg'), svgIcon)
log('icon.svg', Buffer.byteLength(svgIcon))
fs.writeFileSync(path.join(OUT, 'favicon.svg'), svgIcon.replace('viewBox="0 0 512 512"', 'viewBox="0 0 512 512"'))
log('favicon.svg', Buffer.byteLength(svgIcon))
fs.writeFileSync(path.join(OUT, 'logo-mark.svg'), svgIcon)
log('logo-mark.svg', Buffer.byteLength(svgIcon))
fs.writeFileSync(path.join(OUT, 'logo-umi-trade.svg'), svgWordmark('PASAR $AS · REAL-TIME'))
log('logo-umi-trade.svg', Buffer.byteLength(svgWordmark('PASAR $AS · REAL-TIME')))
fs.writeFileSync(path.join(OUT, 'logo-umi-games.svg'), svgWordmark('MULTIPLAYER · WHATSAPP'))
log('logo-umi-games.svg', Buffer.byteLength(svgWordmark('MULTIPLAYER · WHATSAPP')))
for (const [name, svg] of [['coin.svg', svgCoin], ['trophy.svg', svgTrophy], ['whatsapp.svg', svgWhatsapp]]) {
  fs.writeFileSync(path.join(OUT, name), svg); log(name, Buffer.byteLength(svg))
}
fs.writeFileSync(path.join(OUT, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2))
log('manifest.webmanifest', Buffer.byteLength(JSON.stringify(manifest, null, 2)))

for (const size of [32, 180, 192, 512]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`
  log(name, writePng(path.join(OUT, name), drawIcon(size)))
}

/* OG image 1200x630 */
const og = canvas(1200, 630, INK)
og.gradient(0, 0, 1200, 630, [22, 34, 74], [12, 48, 58])
for (let i = 1; i < 5; i++) og.line(0, (630 / 5) * i, 1200, (630 / 5) * i, LINE, 2, 70)
// grafik lilin besar
const bars = [[150, 300, 420, 1], [260, 250, 380, 1], [370, 200, 340, 1], [480, 170, 300, 1], [590, 130, 250, 1], [700, 105, 210, 1], [810, 80, 170, 1]]
for (const [x, yTop, yBot, up] of bars) {
  const color = up ? UP : DOWN
  og.line(x, yTop - 34, x, yBot + 28, color, 11)
  og.roundRect(x - 26, yTop, 52, Math.max(20, yBot - yTop), 8, color)
}
// koin
og.dot(1010, 150, 76, GOLD)
og.dot(1010, 150, 62, [255, 232, 170])
text(og, '$', 986, 112, 7, [92, 64, 6])
// teks
text(og, 'UMI', 120, 468, 12, [238, 243, 255])
text(og, 'TRADE', 404, 468, 12, UP)
text(og, 'PASAR $AS', 122, 566, 5, [168, 182, 209])
text(og, 'UMI GAMES', 860, 566, 5, [107, 124, 156])
log('og-umi-trade.png', writePng(path.join(OUT, 'og-umi-trade.png'), og))

console.log(`\nselesai -> ${OUT}`)
