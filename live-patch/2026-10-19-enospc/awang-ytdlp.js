/* By AlzRiss - Usanagi Umi AI */

import fs from 'fs-extra'
import path from 'node:path'
import os from 'node:os'
import crypto from 'node:crypto'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const LIB_DIR = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(LIB_DIR, '..')
const LOCAL_BIN_DIR = path.join(PROJECT_ROOT, 'bin')
const LOCAL_BIN_NAME = process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp'
const LOCAL_BIN_PATH = path.join(LOCAL_BIN_DIR, LOCAL_BIN_NAME)

const CONFIG_BIN = String(global.youtubeDownloader?.ytDlpPath || '').trim()
const YTDLP_TIMEOUT = Number(global.youtubeDownloader?.ytDlpTimeoutMs) || 180000

const FALLBACK_PATHS = [
  LOCAL_BIN_PATH,
  path.join(os.homedir(), '.local', 'bin', 'yt-dlp'),
  path.join(os.homedir(), 'Library', 'Python', '3.13', 'bin', 'yt-dlp'),
  '/usr/local/bin/yt-dlp',
]

const RELEASE_ASSETS = {
  linux: { x64: 'yt-dlp_linux', arm64: 'yt-dlp_linux_aarch64' },
  darwin: { x64: 'yt-dlp_macos', arm64: 'yt-dlp_macos' },
  win32: { x64: 'yt-dlp.exe' },
}
const RELEASE_ASSET = RELEASE_ASSETS[process.platform]?.[process.arch]

let readyPromise = null

function runCommand(command, args = [], timeoutMs = 120000) {
  return new Promise((resolve, reject) => {
    let proc
    try {
      proc = spawn(command, args, { windowsHide: true })
    } catch (err) {
      reject(err)
      return
    }

    let stdout = ''
    let stderr = ''

    const timer = setTimeout(() => {
      proc.kill('SIGKILL')
      reject(new Error(`${command} timeout.`))
    }, timeoutMs)

    proc.stdout?.on('data', chunk => { stdout += chunk.toString() })
    proc.stderr?.on('data', chunk => { stderr += chunk.toString() })

    proc.on('error', err => {
      clearTimeout(timer)
      reject(err)
    })

    proc.on('close', code => {
      clearTimeout(timer)
      if (code === 0) resolve({ stdout, stderr })
      else reject(new Error((stderr || stdout).trim().slice(-500) || `${command} keluar dengan kode ${code}`))
    })
  })
}

async function commandWorks(command, args = ['--version']) {
  try {
    await runCommand(command, args, 15000)
    return true
  } catch {
    return false
  }
}

async function downloadStandaloneBinary() {
  if (!RELEASE_ASSET) {
    throw new Error(`Tidak ada binary standalone yt-dlp untuk platform ${process.platform}/${process.arch}.`)
  }

  const url = `https://github.com/yt-dlp/yt-dlp/releases/latest/download/${RELEASE_ASSET}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 120000)

  let res
  try {
    res = await fetch(url, { redirect: 'follow', signal: controller.signal })
  } catch (e) {
    if (e?.name === 'AbortError') throw new Error('Unduhan yt-dlp timeout.')
    throw e
  } finally {
    clearTimeout(timer)
  }

  if (!res.ok) throw new Error(`Gagal mengunduh yt-dlp (HTTP ${res.status}).`)
  const buf = Buffer.from(await res.arrayBuffer())

  const targets = [
    LOCAL_BIN_PATH,
    path.join(os.tmpdir(), `usanagi-${LOCAL_BIN_NAME}`),
  ]

  let lastError = null
  for (const target of targets) {
    try {
      await fs.ensureDir(path.dirname(target))
      await fs.writeFile(target, buf, { mode: 0o755 })
      await fs.chmod(target, 0o755).catch(() => {})
      if (await commandWorks(target)) return target
      lastError = new Error('Binary hasil unduhan tidak bisa dijalankan.')
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('Gagal menyimpan binary yt-dlp.')
}

async function pipInstall() {
  const attempts = [
    ['pip', ['install', '--break-system-packages', '-U', 'yt-dlp']],
    ['pip', ['install', '--user', '--break-system-packages', '-U', 'yt-dlp']],
    ['pip3', ['install', '--break-system-packages', '-U', 'yt-dlp']],
    ['python3', ['-m', 'pip', 'install', '--break-system-packages', '-U', 'yt-dlp']],
    ['python', ['-m', 'pip', 'install', '--break-system-packages', '-U', 'yt-dlp']],
  ]

  let lastError = null

  for (const [command, args] of attempts) {
    try {
      await runCommand(command, args, 180000)

      if (await commandWorks('yt-dlp')) return 'yt-dlp'
      for (const candidate of FALLBACK_PATHS) {
        if (await commandWorks(candidate)) return candidate
      }
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('pip/python tidak tersedia di server ini.')
}

export function ensureYtDlp() {
  if (readyPromise) return readyPromise

  readyPromise = (async () => {
    if (CONFIG_BIN) {
      if (await commandWorks(CONFIG_BIN)) return CONFIG_BIN
      throw new Error(`yt-dlp tidak ditemukan pada path config.js: ${CONFIG_BIN}`)
    }

    if (await commandWorks('yt-dlp')) return 'yt-dlp'

    for (const candidate of FALLBACK_PATHS) {
      if (await commandWorks(candidate)) return candidate
    }

    try {
      return await downloadStandaloneBinary()
    } catch (standaloneError) {
      try {
        return await pipInstall()
      } catch (pipError) {
        throw new Error(
          `yt-dlp tidak tersedia & instalasi otomatis gagal. `
          + `Unduhan langsung: ${standaloneError.message} — `
          + `Lewat pip: ${pipError.message}`
        )
      }
    }
  })().catch(err => {
    readyPromise = null
    throw err
  })

  return readyPromise
}

export async function runYtDlp(args, timeoutMs = YTDLP_TIMEOUT, { signal } = {}) {
  if (signal?.aborted) throw new Error('yt-dlp dibatalkan.')
  const bin = await ensureYtDlp()
  if (signal?.aborted) throw new Error('yt-dlp dibatalkan.')

  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, { windowsHide: true })
    let stderr = ''
    let settled = false

    const finishReject = error => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      reject(error)
    }

    const timer = setTimeout(() => {
      proc.kill('SIGKILL')
      finishReject(new Error('yt-dlp timeout.'))
    }, timeoutMs)

    const abort = () => {
      proc.kill('SIGKILL')
      finishReject(new Error('yt-dlp dibatalkan.'))
    }

    if (signal) {
      if (signal.aborted) return abort()
      signal.addEventListener('abort', abort, { once: true })
    }

    proc.stderr?.on('data', chunk => { stderr += chunk.toString() })

    proc.on('error', err => {
      if (signal) signal.removeEventListener('abort', abort)
      if (settled) return
      finishReject(err.code === 'ENOENT' ? new Error('yt-dlp tidak terpasang.') : err)
    })

    proc.on('close', code => {
      if (signal) signal.removeEventListener('abort', abort)
      if (settled) return
      settled = true
      clearTimeout(timer)
      if (code === 0) resolve()
      else reject(new Error(stderr.trim().slice(-300) || `yt-dlp keluar dengan kode ${code}`))
    })
  })
}

let ffmpegInstallerPath = null

export async function getFfmpegBinPath() {
  if (ffmpegInstallerPath === null) {
    try {
      const { default: installer } = await import('@ffmpeg-installer/ffmpeg')
      ffmpegInstallerPath = installer.path
    } catch {
      ffmpegInstallerPath = ''
    }
  }

  return ffmpegInstallerPath
}

export async function getFfmpegLocationArgs() {
  const bin = await getFfmpegBinPath()
  return bin ? ['--ffmpeg-location', bin] : []
}

export function ytdlpSizeArg(bytes) {
  return `${Math.max(1, Math.floor(bytes / (1024 * 1024)))}M`
}

/* Setiap unduhan dapat folder kerja sendiri supaya berkas antara yt-dlp
 * (video .f137.mp4 + audio .f140.m4a sebelum digabung) ikut terhapus.
 * Dulu hanya file hasil akhir yang dibersihkan, sisa 60 MB + 38 MB menumpuk
 * di /tmp (tmpfs 100 MB) sampai seluruh bot kena ENOSPC. */
export function ytdlpTempBase(prefix = 'usanagi') {
  const dir = path.join(os.tmpdir(), `${prefix}-job-${Date.now()}-${crypto.randomBytes(5).toString('hex')}`)
  try { fs.mkdirSync(dir, { recursive: true }) } catch {}
  return path.join(dir, prefix)
}

/** Sisa ruang pada filesystem temp (byte) atau null kalau tidak didukung. */
export function tmpFreeBytes() {
  try {
    const stat = fs.statfsSync(os.tmpdir())
    return stat.bavail * stat.bsize
  } catch {
    return null
  }
}

function assertTmpSpace(max, label) {
  const free = tmpFreeBytes()
  if (free !== null && free < max + 20 * 1024 * 1024) {
    throw new Error(`Ruang penyimpanan sementara tidak cukup untuk ${label} (${(free / 1048576).toFixed(0)} MB tersisa).`)
  }
}

/** Hapus folder kerja yt-dlp untuk satu hasil unduhan. */
export async function cleanupYtDlpJob(file) {
  if (!file) return
  const dir = path.dirname(file)
  const base = path.basename(dir)
  if (!/^[A-Za-z0-9._-]+-job-\d+-[0-9a-f]{10}$/.test(base)) return
  if (path.resolve(path.dirname(dir)) !== path.resolve(os.tmpdir())) return
  await fs.remove(dir).catch(() => {})
}

export async function ytDlpExtractAudio(url, max, { prefix = 'usanagi' } = {}) {
  assertTmpSpace(max, 'unduhan')
  const base = ytdlpTempBase(prefix)
  try {
  const ffmpegArgs = await getFfmpegLocationArgs()

  await runYtDlp([
    url,
    '-x', '--audio-format', 'mp3', '--audio-quality', '128K',
    '-f', 'bestaudio/best',
    '--max-filesize', ytdlpSizeArg(max),
    '--no-playlist',
    '--retries', '8',
    '--fragment-retries', '8',
    '--extractor-retries', '3',
    '--file-access-retries', '3',
    '--concurrent-fragments', String(global.youtubeDownloader?.ytDlpConcurrentFragments || 4),
    '--socket-timeout', '30',
    '--no-warnings', '--quiet',
    ...ffmpegArgs,
    '-o', `${base}.%(ext)s`,
  ])

  const file = `${base}.mp3`
  if (!(await fs.pathExists(file))) throw new Error('yt-dlp tidak menghasilkan file audio.')

  const stat = await fs.stat(file)
  if (stat.size > max) {
    await fs.remove(file).catch(() => {})
    throw new Error('Ukuran audio terlalu besar.')
  }

  return file
  } catch (error) {
    // Jangan tinggalkan folder kerja kosong saat unduhan gagal.
    await fs.remove(path.dirname(base)).catch(() => {})
    throw error
  }
}

export async function ytDlpDownloadVideo(url, max, { prefix = 'usanagi', maxHeight = null } = {}) {
  assertTmpSpace(max, 'unduhan')
  const base = ytdlpTempBase(prefix)
  try {
  const ffmpegArgs = await getFfmpegLocationArgs()
  const format = maxHeight ? `bestvideo[height<=${maxHeight}]+bestaudio/best[height<=${maxHeight}]/best` : 'bv*+ba/b'

  await runYtDlp([
    url,
    '-f', format,
    '--merge-output-format', 'mp4',
    '--remux-video', 'mp4',
    '--max-filesize', ytdlpSizeArg(max),
    '--no-playlist',
    '--retries', '8',
    '--fragment-retries', '8',
    '--extractor-retries', '3',
    '--file-access-retries', '3',
    '--concurrent-fragments', String(global.youtubeDownloader?.ytDlpConcurrentFragments || 4),
    '--socket-timeout', '30',
    '--no-warnings', '--quiet',
    ...ffmpegArgs,
    '-o', `${base}.%(ext)s`,
  ])

  const file = `${base}.mp4`
  if (!(await fs.pathExists(file))) throw new Error('yt-dlp tidak menghasilkan file video.')

  const stat = await fs.stat(file)
  if (stat.size > max) {
    await fs.remove(file).catch(() => {})
    throw new Error('Ukuran video terlalu besar.')
  }

  return file
  } catch (error) {
    // Jangan tinggalkan folder kerja kosong saat unduhan gagal.
    await fs.remove(path.dirname(base)).catch(() => {})
    throw error
  }
}

export async function ytDlpDownloadBest(url, max, { prefix = 'usanagi' } = {}) {
  assertTmpSpace(max, 'unduhan')
  const base = ytdlpTempBase(prefix)
  try {
  const ffmpegArgs = await getFfmpegLocationArgs()

  await runYtDlp([
    url,
    '-f', 'bv*+ba/b',
    '--merge-output-format', 'mp4',
    '--remux-video', 'mp4',
    '--max-filesize', ytdlpSizeArg(max),
    '--no-playlist',
    '--retries', '8',
    '--fragment-retries', '8',
    '--extractor-retries', '3',
    '--file-access-retries', '3',
    '--concurrent-fragments', String(global.youtubeDownloader?.ytDlpConcurrentFragments || 4),
    '--socket-timeout', '30',
    '--no-warnings', '--quiet',
    ...ffmpegArgs,
    '-o', `${base}.%(ext)s`,
  ])

  const file = `${base}.mp4`
  if (!(await fs.pathExists(file))) throw new Error('yt-dlp tidak menghasilkan file output.')

  const stat = await fs.stat(file)
  if (stat.size > max) {
    await fs.remove(file).catch(() => {})
    throw new Error('Ukuran video terlalu besar.')
  }

  return file
  } catch (error) {
    // Jangan tinggalkan folder kerja kosong saat unduhan gagal.
    await fs.remove(path.dirname(base)).catch(() => {})
    throw error
  }
}
