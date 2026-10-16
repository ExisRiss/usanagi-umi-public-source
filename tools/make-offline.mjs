// Bundel trading-offline.html menjadi SATU berkas HTML mandiri (semua aset jadi data URI)
// → dipakai plugin bot `/tradingoffline` (dikirim sebagai dokumen HTML)
// Pakai: node tools/make-offline.mjs [--src db-mirror/trading-offline.html] [--dir db-mirror/assets] [--out FILE]
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'

const args = process.argv.slice(2)
const arg = (name, def) => {
  const i = args.indexOf('--' + name)
  return i >= 0 && args[i + 1] ? args[i + 1] : def
}
const ROOT = resolve(import.meta.dirname, '..')
const SRC = resolve(ROOT, arg('src', 'db-mirror/trading-offline.html'))
const ASSETS = resolve(ROOT, arg('dir', 'db-mirror/assets'))
const OUT = resolve(ROOT, arg('out', 'db-mirror/assets/trading-offline.bot.html'))

const MIME = {
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json',
}

const html = readFileSync(SRC, 'utf8')
const used = new Set()
const bundled = html.replace(/(src|href)="(?:\.\/|\/)?assets\/([\w.-]+)"/g, (m, attr, file) => {
  const path = join(ASSETS, file)
  let buf
  try { buf = readFileSync(path) } catch { console.warn('⚠️  aset hilang:', file); return m }
  used.add(file)
  const ext = file.slice(file.lastIndexOf('.'))
  const b64 = buf.toString('base64')
  return `${attr}="data:${MIME[ext] || 'application/octet-stream'};base64,${b64}"`
})

const stamp = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' WITA-ish'
const out = bundled
  .replace('<html lang="id">', '<html lang="id" data-build="offline-bundle">')
  .replace('</body>', `<!-- bundel mandiri dibuat tools/make-offline.mjs · ${stamp} · aset inline: ${[...used].join(', ') || '-'} -->\n</body>`)
  .replace('<title>UMI TRADE OFFLINE — Pasar $AS (localStorage)</title>', '<title>UMI TRADE OFFLINE — Pasar $AS</title>')

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, out)
const kb = (n) => (n / 1024).toFixed(1) + ' KB'
console.log(`✅ bundel: ${OUT.replace(ROOT + '/', '')} — ${kb(Buffer.byteLength(out))} (sumber ${kb(statSync(SRC).size)})`)
console.log(`   aset inline (${used.size}): ${[...used].sort().join(', ')}`)
if (/assets\//.test(out)) console.warn('⚠️  masih ada referensi assets/ yang belum ter-inline')
