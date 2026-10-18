#!/usr/bin/env node
/**
 * Boot wrapper untuk deploy di panel (Pterodactyl/Pelican).
 *
 * Kenapa ini ada:
 *   Banyak panel memakai npm yang memblokir lifecycle script demi keamanan
 *   ("allow-scripts"), sehingga paket native seperti better-sqlite3 dan canvas
 *   diinstal TANPA langkah kompilasi, dan @ffmpeg-installer tidak pernah
 *   di-chmod +x. Akibatnya bot bisa boot tapi fitur tertentu mati mendadak.
 *
 * Skrip ini memeriksa hal-hal itu dan hanya memperbaiki yang memang rusak,
 * jadi aman dijalankan setiap kali server dinyalakan.
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
process.chdir(ROOT)

const require = createRequire(import.meta.url)
const log = (...a) => console.log('[boot]', ...a)

/** Paket native yang harus bisa dimuat. */
const NATIVE = [
  { name: 'better-sqlite3', prebuildArgs: [] },
  { name: 'canvas', prebuildArgs: ['-r', 'napi'] },
]

function canLoad(pkg) {
  try {
    const loaded = require(pkg)
    // better-sqlite3 loads its native binding lazily, on construction.
    // A successful require alone falsely passes after npm blocks install scripts.
    if (pkg === 'better-sqlite3') {
      const probe = new loaded(':memory:')
      try { probe.prepare('SELECT 1 AS ok').get() } finally { probe.close() }
    } else if (pkg === 'canvas') {
      loaded.createCanvas(1, 1).getContext('2d')
    }
    return true
  } catch {
    return false
  }
}

function run(cmd, args, cwd) {
  const res = spawnSync(cmd, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env },
  })
  return res.status === 0
}

/** Perbaiki satu paket native: prebuild dulu, baru compile dari sumber. */
function repairNative({ name, prebuildArgs }) {
  const dir = path.join(ROOT, 'node_modules', name)
  if (!fs.existsSync(dir)) {
    log(`${name}: tidak terpasang, dilewati`)
    return false
  }

  const prebuild = path.join(ROOT, 'node_modules', '.bin', 'prebuild-install')

  if (fs.existsSync(prebuild)) {
    log(`${name}: mencoba mengunduh binary siap pakai...`)
    if (run(prebuild, prebuildArgs, dir)) {
      if (canLoad(name)) {
        log(`${name}: OK (binary siap pakai)`)
        return true
      }
    }
  }

  log(`${name}: compile dari sumber (butuh python3 + make + g++)...`)
  if (run('node-gyp', ['rebuild', '--release'], dir) && canLoad(name)) {
    log(`${name}: OK (hasil compile)`)
    return true
  }

  // Jalur terakhir: minta npm yang mengurus, siapa tahu policy-nya mengizinkan.
  log(`${name}: mencoba npm rebuild...`)
  if (run('npm', ['rebuild', name, '--foreground-scripts'], ROOT) && canLoad(name)) {
    log(`${name}: OK (npm rebuild)`)
    return true
  }

  log(`${name}: GAGAL diperbaiki — fitur yang bergantung padanya tidak akan jalan`)
  return false
}

/** @ffmpeg-installer butuh chmod +x yang dilakukan postinstall-nya. */
function ensureFfmpegExecutable() {
  const candidates = [
    '@ffmpeg-installer/linux-x64/ffmpeg',
    '@ffmpeg-installer/linux-arm64/ffmpeg',
    '@ffmpeg-installer/ffmpeg',
  ]
  let fixed = false
  for (const rel of candidates) {
    const bin = path.join(ROOT, 'node_modules', rel)
    if (!fs.existsSync(bin)) continue
    try {
      const mode = fs.statSync(bin).mode
      if (!(mode & 0o111)) {
        fs.chmodSync(bin, 0o755)
        log(`ffmpeg: izin eksekusi diperbaiki -> ${rel}`)
        fixed = true
      }
    } catch (error) {
      log(`ffmpeg: gagal chmod ${rel} (${error.message})`)
    }
  }
  if (!fixed) log('ffmpeg: tidak ada yang perlu diperbaiki')
}

/* ------------------------------------------------------------------ main */

log(`mulai di ${ROOT}`)
log(`node ${process.version}`)

const broken = []
for (const entry of NATIVE) {
  if (canLoad(entry.name)) {
    log(`${entry.name}: tersedia`)
  } else {
    log(`${entry.name}: TIDAK bisa dimuat -> memperbaiki`)
    if (!repairNative(entry)) broken.push(entry.name)
  }
}

ensureFfmpegExecutable()

if (broken.length) {
  log(`peringatan: masih rusak -> ${broken.join(', ')}`)
  log('bot tetap dijalankan; fitur terkait akan menolak dengan pesan jelas.')
}

// Pastikan folder runtime ada supaya tidak error ENOENT saat runtime.
for (const dir of ['sessions', 'tmp', 'jadibot']) {
  fs.mkdirSync(path.join(ROOT, dir), { recursive: true })
}

log('menyerahkan ke main.js...')
await import(path.join(ROOT, 'main.js'))
