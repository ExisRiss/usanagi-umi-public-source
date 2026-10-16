#!/usr/bin/env node
/**
 * Seni banner / ilustrasi aset UMI GAMES & UMI TRADE (SVG, hasil gambar sendiri).
 *
 *   node tools/make-art.mjs [--dir db-mirror/assets]
 *
 * Menghasilkan berkas di db-mirror/assets (dipakai halaman /game):
 *   kartu-uno.svg, papan-catur.svg, papan-ular-tangga.svg, papan-monopoli.svg, werewolf.svg
 *
 * Semua SVG berukuran viewBox 480x160 (banner kartu game, object-fit:cover).
 * Tantangan: sandbox tidak punya konverter gambar — SVG ditulis langsung, lalu
 * diperiksa dengan `convert` (librsvg) ke PNG untuk dicek mata.
 * By AlzRiss - Usanagi Umi AI
 */
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const dirIndex = args.indexOf('--dir')
const dir = path.resolve(process.cwd(), dirIndex >= 0 ? args[dirIndex + 1] : 'db-mirror/assets')
fs.mkdirSync(dir, { recursive: true })

const W = 480, H = 160
const head = (id, accent, accent2) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="UMI Games">
<defs>
  <linearGradient id="bg-${id}" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#2c2150"/><stop offset="0.55" stop-color="#1d1638"/><stop offset="1" stop-color="#130e26"/>
  </linearGradient>
  <radialGradient id="glow-${id}" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="${accent}" stop-opacity="0.42"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow2-${id}" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="${accent2}" stop-opacity="0.34"/><stop offset="1" stop-color="${accent2}" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg-${id})"/>
${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${i * 60 + 30}" y="0" width="1" height="${H}" fill="#ffffff" opacity="0.035"/>`).join('\n')}
<ellipse cx="${W * 0.78}" cy="${H * 0.2}" rx="${H * 0.85}" ry="${H * 0.9}" fill="url(#glow-${id})"/>
<ellipse cx="${W * 0.16}" cy="${H * 0.9}" rx="${H * 0.75}" ry="${H * 0.8}" fill="url(#glow2-${id})"/>`

const foot = '</svg>\n'
const write = (name, body) => {
  const file = path.join(dir, name)
  fs.writeFileSync(file, body + foot)
  console.log(`✅ ${name} — ${fs.statSync(file).size} byte`)
}

/* ── 1) Kartu UNO: tiga kartu dikipas ── */
function kartuUno() {
  const card = (cx, cy, rot, fill, ink, label, small) => `
<g transform="translate(${cx} ${cy}) rotate(${rot})">
  <rect x="-38" y="-54" width="76" height="108" rx="11" fill="${fill}"/>
  <rect x="-38" y="-54" width="76" height="108" rx="11" fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="2"/>
  <rect x="-31" y="-47" width="62" height="94" rx="7" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.2"/>
  <ellipse cx="0" cy="0" rx="21" ry="31" fill="#fdfcff"/>
  <text x="0" y="10" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="${small ? 16 : 28}" font-weight="bold" fill="${ink}">${label}</text>
  <text x="-25" y="-36" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">${label}</text>
  <text x="25" y="46" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">${label}</text>
</g>`
  return head('uno', '#e5484d', '#5b7cfa') + `
${card(154, 84, -16, '#d8353f', '#b01824', '9', false)}
${card(228, 80, -3, '#2fbf7d', '#0b6b45', '+2', true)}
${card(302, 84, 14, '#4f6cf0', '#22309e', '7', false)}
<g>
  <rect x="352" y="34" width="104" height="26" rx="13" fill="#0d0a1c" stroke="#ffd166" stroke-width="1.6"/>
  <text x="404" y="52" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffd166">10 KURSI</text>
  <text x="404" y="86" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f3effb">Kartu +2, skip,</text>
  <text x="404" y="104" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="13" font-weight="bold" fill="#f3effb">reverse, wild</text>
  <text x="404" y="128" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="11" fill="#8a7faa">2 – 10 pemain</text>
</g>`
}

/* ── 2) Papan catur + bidak ── */
function papanCatur() {
  const cell = 16, x0 = 32, y0 = 18
  const cx = (c) => x0 + c * cell + cell / 2
  const cy = (r) => y0 + r * cell + cell / 2
  let squares = ''
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const light = (r + c) % 2 === 0
    squares += `<rect x="${x0 + c * cell}" y="${y0 + r * cell}" width="${cell}" height="${cell}" fill="${light ? '#eef2ff' : '#4a3d6e'}"/>`
  }
  const mark = (r, c) => `<rect x="${x0 + c * cell}" y="${y0 + r * cell}" width="${cell}" height="${cell}" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.85"/>`
  const size = cell * 8
  const king = (x, y) => `<g transform="translate(${x} ${y})">
    <rect x="-7" y="8" width="14" height="7" rx="2" fill="#ffffff"/>
    <path d="M-6 8 L-4 0 L4 0 L6 8 Z" fill="#ffffff"/>
    <rect x="-5.5" y="-7" width="11" height="7.5" rx="1.5" fill="#ffffff"/>
    <rect x="-1.6" y="-14" width="3.2" height="7" fill="#ffffff"/>
    <rect x="-4.6" y="-11.5" width="9.2" height="2.6" fill="#ffffff"/>
  </g>`
  const rook = (x, y) => `<g transform="translate(${x} ${y})">
    <rect x="-7" y="8" width="14" height="7" rx="2" fill="#16112c"/>
    <rect x="-6" y="0" width="12" height="8" fill="#16112c"/>
    <rect x="-6.5" y="-7" width="4" height="7" fill="#16112c"/><rect x="-1.6" y="-7" width="3.2" height="7" fill="#16112c"/><rect x="2.5" y="-7" width="4" height="7" fill="#16112c"/>
    <rect x="-7" y="-2.6" width="14" height="2.6" fill="#16112c"/>
  </g>`
  return head('catur', '#c4cfe8', '#5b7cfa') + `
<rect x="${x0 - 7}" y="${y0 - 7}" width="${size + 14}" height="${size + 14}" rx="10" fill="#0f0b1f" stroke="#a99ad6" stroke-width="2.5"/>
${squares}
${mark(3, 4)}${mark(4, 2)}
${king(cx(4), cy(3))}
${rook(cx(2), cy(4))}
<rect x="196" y="30" width="254" height="28" rx="14" fill="#0d0a1c" stroke="#c4cfe8" stroke-width="1.6"/>
<text x="323" y="49" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="13" font-weight="bold" fill="#c4cfe8">SKAKMAT · ROKADE · EN PASSANT</text>
<g font-family="DejaVu Sans, system-ui, sans-serif">
  <text x="196" y="88" font-size="16" font-weight="bold" fill="#6ee7b7">1 lawan 1</text>
  <text x="196" y="110" font-size="12" fill="#b1a7cc">Kursi kosong bisa diisi bot AI</text>
  <text x="196" y="130" font-size="11" fill="#8a7faa">Aturan langkah dijaga server</text>
</g>`
}

/* ── 3) Papan ular tangga ── */
function ularTangga() {
  const n = 7, cell = 19, x0 = 28, y0 = 14
  let grid = ''
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    const shade = ((r + c) % 2 === 0) ? '#25405f' : '#16273c'
    grid += `<rect x="${x0 + c * cell}" y="${y0 + r * cell}" width="${cell}" height="${cell}" fill="${shade}"/>`
    const num = n * n - (r * n + c)
    grid += `<text x="${x0 + c * cell + cell / 2}" y="${y0 + r * cell + cell / 2 + 3}" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="7" fill="#7fa7c9" opacity="0.75">${num}</text>`
  }
  const size = cell * n
  const lx1 = x0 + 30, ly1 = y0 + size - 14, lx2 = x0 + size - 34, ly2 = y0 + 44
  const rail = (dx, dy) => `<path d="M${lx1 + dx} ${ly1 + dy} L${lx2 + dx} ${ly2 + dy}"/>`
  const rungs = [0.12, 0.32, 0.52, 0.72, 0.92].map((t) => {
    const ax = lx1 + (lx2 - lx1) * t, ay = ly1 + (ly2 - ly1) * t
    return `<path d="M${(ax - 4).toFixed(1)} ${(ay + 6).toFixed(1)} L${(ax + 10).toFixed(1)} ${(ay - 6).toFixed(1)}" stroke-width="3.4"/>`
  }).join('\n')
  return head('ular', '#3ddc9a', '#fbbf24') + `
<rect x="${x0 - 6}" y="${y0 - 6}" width="${size + 12}" height="${size + 12}" rx="10" fill="#0c1520" stroke="#3ddc9a" stroke-width="2.5"/>
${grid}
<g stroke="#fbbf24" stroke-width="4" stroke-linecap="round" opacity="0.95">${rail(-4, 2)}${rail(4, -2)}${rungs}</g>
<g stroke="#6ee7b7" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.98">
  <path d="M${x0 + 34} ${y0 + 24} C ${x0 + 6} ${y0 + 62}, ${x0 + 96} ${y0 + 54}, ${x0 + 70} ${y0 + 92} C ${x0 + 52} ${y0 + 116}, ${x0 + 108} ${y0 + 116}, ${x0 + 120} ${y0 + 128}"/>
</g>
<circle cx="${x0 + 34}" cy="${y0 + 24}" r="9" fill="#6ee7b7"/><circle cx="${x0 + 30}" cy="${y0 + 21}" r="2.6" fill="#0c1520"/>
<path d="M${x0 + 34} ${y0 + 15} L${x0 + 34} ${y0 + 6} M${x0 + 34} ${y0 + 6} L${x0 + 29} ${y0 + 1} M${x0 + 34} ${y0 + 6} L${x0 + 39} ${y0 + 1}" stroke="#6ee7b7" stroke-width="2" fill="none" stroke-linecap="round"/>
<g transform="translate(196 34)">
  <rect x="0" y="0" width="40" height="40" rx="9" fill="#f7f4ff" transform="rotate(-12 20 20)"/>
  <circle cx="13" cy="13" r="3.6" fill="#16273c"/><circle cx="27" cy="13" r="3.6" fill="#16273c"/><circle cx="13" cy="27" r="3.6" fill="#16273c"/><circle cx="27" cy="27" r="3.6" fill="#16273c"/><circle cx="20" cy="20" r="3.6" fill="#16273c"/>
  <rect x="58" y="20" width="40" height="40" rx="9" fill="#f7f4ff" transform="rotate(13 78 40)"/>
  <circle cx="70" cy="32" r="3.6" fill="#16273c"/><circle cx="86" cy="48" r="3.6" fill="#16273c"/>
</g>
<g font-family="DejaVu Sans, system-ui, sans-serif">
  <text x="196" y="112" font-size="16" font-weight="bold" fill="#6ee7b7">BALAP KE 100</text>
  <text x="196" y="132" font-size="11.5" fill="#b1a7cc">Naik tangga, kabur dari ular.</text>
  <text x="392" y="132" font-size="12" font-weight="bold" fill="#fbbf24">2 – 6</text>
</g>`
}

/* ── 4) Papan monopoli ── */
function papanMonopoli() {
  const x0 = 26, y0 = 14, size = 132, strip = 20
  const colors = ['#e5484d', '#fbbf24', '#3ddc9a', '#5b7cfa']
  const edgeProps = []
  for (let i = 0; i < 5; i++) {
    edgeProps.push(`<rect x="${x0 + strip + i * 19}" y="${y0}" width="15" height="8" fill="${colors[i % 4]}"/>`)
    edgeProps.push(`<rect x="${x0 + strip + i * 19}" y="${y0 + size - 8}" width="15" height="8" fill="${colors[(i + 2) % 4]}"/>`)
    edgeProps.push(`<rect x="${x0}" y="${y0 + strip + i * 19}" width="8" height="15" fill="${colors[(i + 1) % 4]}"/>`)
    edgeProps.push(`<rect x="${x0 + size - 8}" y="${y0 + strip + i * 19}" width="8" height="15" fill="${colors[(i + 3) % 4]}"/>`)
  }
  const die = (cx, cy, rot, pips) => {
    const pos = { 1: [[0, 0]], 3: [[-7, -7], [0, 0], [7, 7]], 4: [[-7, -7], [7, -7], [-7, 7], [7, 7]], 5: [[-7, -7], [7, -7], [0, 0], [-7, 7], [7, 7]] }[pips]
    return `<g transform="translate(${cx} ${cy}) rotate(${rot})"><rect x="-17" y="-17" width="34" height="34" rx="8" fill="#f7f4ff" stroke="#c9c2e6" stroke-width="1.5"/>
${pos.map(([px, py]) => `<circle cx="${px}" cy="${py}" r="3.2" fill="#231a44"/>`).join('')}</g>`
  }
  return head('monopoli', '#5b7cfa', '#3ddc9a') + `
<rect x="${x0}" y="${y0}" width="${size}" height="${size}" rx="10" fill="#1b1436" stroke="#fbbf24" stroke-width="2.5"/>
<rect x="${x0 + strip}" y="${y0 + strip}" width="${size - strip * 2}" height="${size - strip * 2}" rx="6" fill="#241a48" stroke="#4a3d6e" stroke-width="1.5"/>
<g transform="translate(${x0 + size / 2} ${y0 + size / 2 - 12})">
  <text x="0" y="0" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="24" font-weight="bold" fill="#fbbf24">UMI</text>
  <text x="0" y="15" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="8" letter-spacing="2" fill="#b1a7cc">MONOPOLI</text>
  <text x="0" y="40" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="15" font-weight="bold" fill="#f3effb">16 PETAK</text>
</g>
${edgeProps.join('\n')}
<g transform="translate(${x0 + 24} ${y0 + size - 36})"><path d="M0 12 L10 0 L20 12 Z" fill="#6ee7b7"/><rect x="6" y="12" width="8" height="7" fill="#6ee7b7"/></g>
<g transform="translate(${x0 + size - 34} ${y0 + 24})"><path d="M0 12 L10 0 L20 12 Z" fill="#fb7185"/><rect x="6" y="12" width="8" height="7" fill="#fb7185"/></g>
${die(266, 124, -12, 5)}
${die(322, 120, 10, 3)}
<rect x="186" y="26" width="268" height="28" rx="14" fill="#0d0a1c" stroke="#8fb0ff" stroke-width="1.5"/>
<text x="320" y="45" text-anchor="middle" font-family="DejaVu Sans, system-ui, sans-serif" font-size="13" font-weight="bold" fill="#8fb0ff">VERSI RINGKAS · 16 PETAK</text>
<g font-family="DejaVu Sans, system-ui, sans-serif">
  <text x="186" y="80" font-size="12" fill="#b1a7cc">Beli petak, bangun rumah, kumpulkan sewa.</text>
  <text x="186" y="100" font-size="13" font-weight="bold" fill="#6ee7b7">2 – 4 pemain</text>
</g>`
}

/* ── 5) Werewolf: malam, bulan, serigala melolong ── */
function werewolf() {
  const stars = Array.from({ length: 30 }, (_, i) => {
    const x = ((i * 149) % 440) + 16, y = ((i * 67) % 84) + 10, r = (i % 4 === 0) ? 1.8 : 1.1
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${(0.3 + ((i % 5) * 0.13)).toFixed(2)}"/>`
  }).join('')
  const pines = [0, 1, 2, 3].map((i) => {
    const x = 22 + i * 26, h = 22 + (i % 2) * 7
    return `<g transform="translate(${x} 136)"><path d="M0 0 L8 -${h} L16 0 Z" fill="#0a0918"/><rect x="6" y="0" width="4" height="6" fill="#0a0918"/></g>`
  }).join('')
  return head('werewolf', '#9b6bff', '#7dd3fc') + `
${stars}
<circle cx="316" cy="60" r="44" fill="#f7f4e8"/>
<circle cx="303" cy="46" r="6.5" fill="#e4dfc9" opacity="0.8"/><circle cx="330" cy="74" r="10" fill="#e4dfc9" opacity="0.7"/><circle cx="336" cy="44" r="4.4" fill="#e4dfc9" opacity="0.65"/>
<path d="M0 118 L64 86 L124 114 L188 78 L252 118 L322 92 L392 120 L480 94 L480 160 L0 160 Z" fill="#150f2c"/>
<path d="M0 134 L70 110 L146 142 L226 114 L306 148 L386 118 L480 144 L480 160 L0 160 Z" fill="#0c0919"/>
${pines}
<g fill="#06050e">
  <!-- badan duduk -->
  <ellipse cx="300" cy="136" rx="30" ry="20"/>
  <path d="M282 150 L282 160 L292 160 L292 150 Z"/>
  <path d="M308 152 L308 160 L318 160 L318 152 Z"/>
  <!-- dada + leher -->
  <path d="M280 122 C 268 110 264 96 268 84 L288 84 C 284 96 288 108 296 118 Z"/>
  <!-- kepala melolong ke atas-kiri -->
  <ellipse cx="274" cy="76" rx="14" ry="13" transform="rotate(-20 274 76)"/>
  <path d="M268 70 C 258 60 246 50 232 42 C 234 52 240 62 252 72 C 258 76 264 78 268 78 Z"/>
  <path d="M270 74 C 260 70 246 64 234 52 C 240 62 250 72 264 80 Z" opacity="0.9"/>
  <path d="M264 64 L262 50 L274 60 Z"/>
  <path d="M278 64 L284 50 L288 62 Z"/>
  <circle cx="270" cy="72" r="2.4" fill="#ffd166"/>
  <path d="M232 42 C 228 38 226 34 228 30 C 233 34 237 39 239 43 Z" fill="#06050e"/>
</g>
<g font-family="DejaVu Sans, system-ui, sans-serif">
  <text x="24" y="48" font-size="16" font-weight="bold" fill="#c4b5fd">PERAN RAHASIA</text>
  <text x="24" y="70" font-size="12" fill="#b1a7cc">Siang voting, malam memangsa.</text>
  <text x="24" y="90" font-size="13" font-weight="bold" fill="#fb7185">5 – 12 pemain</text>
</g>`
}

write('kartu-uno.svg', kartuUno())
write('papan-catur.svg', papanCatur())
write('papan-ular-tangga.svg', ularTangga())
write('papan-monopoli.svg', papanMonopoli())
write('werewolf.svg', werewolf())
console.log(`\nSemua seni ditulis ke ${dir}`)
