#!/usr/bin/env node
/**
 * Arsipkan workspace ke grup Telegram "BackUp".
 *
 * Tujuan: file yang dikerjakan di sandbox tidak hilang saat workspace kembali
 * ke snapshot lama. Satu tar.gz berisi source + catatan (+ kredensial bila
 * diminta) dikirim ke grup Telegram privat (owner + bot).
 *
 * Pakai:
 *   node tools/push-workspace-backup.mjs                # lengkap, termasuk .secrets
 *   node tools/push-workspace-backup.mjs --no-secrets   # tanpa .secrets
 *   node tools/push-workspace-backup.mjs --chat -1001234567890
 *   node tools/push-workspace-backup.mjs --root /path/workspace
 *
 * Env: TELEGRAM_BOT_TOKEN dari <root>/.secrets/task70-platform.env atau process.env.
 *      BACKUP_CHAT_ID menimpa chat tujuan.
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const argValue = (name, fallback = null) => {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : fallback
}

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ROOT = path.resolve(argValue('--root', path.dirname(REPO)))
const OUT_DIR = path.join(ROOT, 'backup-umi')
const ENV_FILE = path.join(ROOT, '.secrets', 'task70-platform.env')
const withSecrets = !args.includes('--no-secrets')
const CHAT_ID = argValue('--chat', process.env.BACKUP_CHAT_ID || '-1004393450575')
const KEEP = 3

function readEnv(file) {
  const out = {}
  try {
    for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
      if (m) out[m[1]] = m[2].trim()
    }
  } catch {}
  return out
}

const env = { ...readEnv(ENV_FILE), ...process.env }
const TOKEN = env.TELEGRAM_BOT_TOKEN || ''
if (!/^\d{6,12}:[A-Za-z0-9_-]{30,}$/.test(TOKEN)) {
  console.error('TELEGRAM_BOT_TOKEN tidak ditemukan di .secrets/task70-platform.env')
  process.exit(1)
}

fs.mkdirSync(OUT_DIR, { recursive: true })
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15)
const name = `umi-workspace-${stamp}${withSecrets ? '' : '-nosecrets'}.tar.gz`
const target = path.join(OUT_DIR, name)
// Tar ditulis ke folder sementara di luar ROOT supaya tar tidak membaca
// arsipnya sendiri ("file changed as we read it").
const staging = path.join(os.tmpdir(), name)

const repoName = path.basename(REPO)
const excludes = [
  `--exclude=./${repoName}/.git`,
  `--exclude=./${repoName}/bot/node_modules`,
  `--exclude=./${repoName}/website/.vercel`,
  '--exclude=./backup-umi',
  '--exclude=./node_modules',
  // Cache instalasi (npm/npx) bukan isi workspace; bisa puluhan MB.
  '--exclude=./.npm',
  '--exclude=./.cache',
  `--exclude=./${repoName}/bot/data`,
]
if (!withSecrets) excludes.push('--exclude=./.secrets')

console.log(`[arsip] ${name}${withSecrets ? ' (termasuk .secrets)' : ' (tanpa .secrets)'}`)
execFileSync('tar', ['-czf', staging, ...excludes, '.'], { cwd: ROOT, stdio: ['ignore', 'ignore', 'inherit'] })
try {
  fs.renameSync(staging, target)
} catch (error) {
  // /tmp bisa berada di filesystem lain (EXDEV); salin lalu bersihkan.
  if (error.code !== 'EXDEV') throw error
  fs.copyFileSync(staging, target)
  fs.rmSync(staging, { force: true })
}
const size = fs.statSync(target).size
console.log(`[arsip] ${(size / 1048576).toFixed(1)} MB`)

if (size > 48 * 1048576) {
  console.error('[arsip] > 48 MB, batas unggah bot Telegram. Persempit dengan --no-secrets.')
  process.exit(1)
}

const form = new FormData()
form.append('chat_id', String(CHAT_ID))
form.append('document', new Blob([fs.readFileSync(target)]), name)
form.append('caption', [
  `📦 Arsip workspace Umi · ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' })} WITA`,
  `${(size / 1048576).toFixed(1)} MB`,
  withSecrets ? 'Termasuk .secrets (grup privat: owner + bot).' : 'Tanpa .secrets.',
].join('\n'))

const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendDocument`, { method: 'POST', body: form })
const data = await res.json().catch(() => ({}))
if (!data.ok) {
  console.error('[telegram] gagal:', data.description || res.status)
  process.exit(1)
}
const doc = data.result?.document || {}
console.log(`[telegram] terkirim ke ${data.result?.chat?.title || data.result?.chat?.id} · ${doc.file_name} · ${doc.file_size} byte`)
console.log(`[telegram] file_id: ${doc.file_id}`)

const archives = fs.readdirSync(OUT_DIR).filter(file => file.endsWith('.tar.gz')).sort()
for (const old of archives.slice(0, Math.max(0, archives.length - KEEP))) {
  fs.rmSync(path.join(OUT_DIR, old), { force: true })
  console.log(`[lokal] hapus arsip lama ${old}`)
}
fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify({
  lastArchive: name,
  bytes: size,
  withSecrets,
  chatId: String(CHAT_ID),
  fileId: doc.file_id || null,
  messageId: data.result?.message_id || null,
  createdAt: new Date().toISOString(),
}, null, 2))
console.log('[selesai] manifest diperbarui')
