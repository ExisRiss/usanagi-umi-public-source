/**
 * Local preview server for the Usanagi Umi Jadibot website.
 *
 * Mirrors how Vercel serves the project:
 *   - /index.html and any root file  -> website/index.html (project root)
 *   - /assets/*                      -> website/public/assets/*
 *   - /api/*                         -> 503 JSON stub (no backend in this sandbox)
 *
 * Usage: node tools/dev-preview-server.mjs [port]
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
// Folder repo bisa bernama apa saja saat di-clone (mis. `repo`), jadi cari
// beberapa kandidat sebelum menyerah.
const WEBSITE = [
  path.resolve(HERE, '..', 'website'),
  path.resolve(HERE, '..', 'usanagi-umi-public-source', 'website'),
].find(dir => fs.existsSync(path.join(dir, 'index.html')))
const PUBLIC_DIR = path.join(WEBSITE, 'public')
const PORT = Number(process.argv[2] || 8080)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.sql': 'text/plain; charset=utf-8',
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0])
  const rel = clean.replace(/^\/+/, '')

  // Urutan: berkas persis dulu (root project, lalu public/), baru index.html.
  // PENTING: index.html hanya dipakai untuk permintaan direktori ('' atau
  // diakhiri '/'). Kalau tidak, /assets/apa-saja.css akan salah mengembalikan
  // index.html, bukan 404.
  const candidates = [path.join(WEBSITE, rel), path.join(PUBLIC_DIR, rel)]

  const isDirectoryRequest = rel === '' || rel.endsWith('/')
  if (isDirectoryRequest) {
    candidates.push(path.join(PUBLIC_DIR, rel, 'index.html'), path.join(WEBSITE, 'index.html'))
  }
  for (const candidate of candidates) {
    const normalized = path.normalize(candidate)
    const inWebsite = normalized.startsWith(WEBSITE + path.sep) || normalized === WEBSITE
    if (!inWebsite) continue
    if (fs.existsSync(normalized) && fs.statSync(normalized).isFile()) return normalized
  }
  return null
}

const server = http.createServer((req, res) => {
  const url = req.url || '/'

  if (url.startsWith('/api/')) {
    res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(
      JSON.stringify({
        ok: false,
        error: 'Backend belum terhubung di preview lokal ini.',
        hint: 'Route /api/* dijalankan oleh Vercel Functions. Untuk deploy, ikuti website/DEPLOYMENT.md.',
        path: url,
      })
    )
    return
  }

  const file = resolveFile(url)
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('404 Not Found: ' + url)
    return
  }

  const ext = path.extname(file).toLowerCase()
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  })
  fs.createReadStream(file).pipe(res)
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Usanagi Umi Jadibot preview  ->  http://0.0.0.0:${PORT}`)
  console.log(`root: ${WEBSITE}`)
})
