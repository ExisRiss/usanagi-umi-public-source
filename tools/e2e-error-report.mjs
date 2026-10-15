#!/usr/bin/env node
/**
 * Uji end-to-end pelaporan error dari DALAM container bot.
 *
 * Kenapa berkas ini ada di server: untuk membuktikan jalur
 *   plugin error -> lib/error-report.js -> /api/platform/feedback/bot -> halaman Feedback
 * benar-benar bekerja di lingkungan produksi (env termuat, jaringan keluar jalan,
 * website menerima, baris audit tersimpan).
 *
 * Cara pakai (di dalam container):
 *   node tools/e2e-error-report.mjs            # kirim satu laporan uji
 *   node tools/e2e-error-report.mjs --dry      # hanya periksa konfigurasi, tidak mengirim
 *
 * Aman dijalankan berkali-kali: laporan yang sama digabung dalam 10 menit dan
 * dibatasi 30 laporan/jam.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const ENV_FILE = path.join(ROOT, '.error-report.env')
const dry = process.argv.includes('--dry')

/** Baca .error-report.env tanpa memakai shell (aman dari policy konsol). */
function loadEnvFile(file) {
  const out = {}
  if (!fs.existsSync(file)) return out
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq > 0) out[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
  }
  return out
}

console.log('── Uji pelaporan error bot → halaman Feedback website ──')

const fileEnv = loadEnvFile(ENV_FILE)
console.log(`  berkas ${path.basename(ENV_FILE)}   : ${fs.existsSync(ENV_FILE) ? 'ada' : 'TIDAK ADA'}`)

// Nilai dari proses menang (dimuat saat boot); berkas jadi cadangan saat dijalankan manual.
if (fileEnv.UMI_ERROR_REPORT_SECRET && !process.env.UMI_ERROR_REPORT_SECRET) process.env.UMI_ERROR_REPORT_SECRET = fileEnv.UMI_ERROR_REPORT_SECRET
if (fileEnv.UMI_SITE_URL && !process.env.UMI_SITE_URL) process.env.UMI_SITE_URL = fileEnv.UMI_SITE_URL

const secret = String(process.env.UMI_ERROR_REPORT_SECRET || process.env.UMI_BACKUP_EXPORT_SECRET || '')
const site = String(process.env.UMI_SITE_URL || '(dari UMI_BACKUP_TRIGGER_URL)')
console.log(`  rahasia laporan     : ${secret ? `ada (${secret.length} karakter)` : 'TIDAK ADA'}`)
console.log(`  tujuan website      : ${site}`)
console.log(`  rahasia konsol      : ${process.env.UMI_CONSOLE_RELAY_SECRET ? 'ada' : 'tidak ada (tidak wajib di sini)'}`)

if (dry) {
  console.log('\n  Mode --dry: tidak ada laporan dikirim.')
  process.exit(secret ? 0 : 1)
}

// Skrip ini berada di tools/, jadi modulnya satu tingkat di atas.
const { reportPluginError } = await import(new URL('../lib/error-report.js', import.meta.url))

const result = await reportPluginError({
  error: new Error('UJI end-to-end: laporan otomatis dikirim dari dalam container bot.'),
  plugin: 'uji/e2e-error-report.mjs',
  command: 'ujie2e',
  prefix: '.',
  args: [],
  sender: 'uji@localhost',
  chat: 'uji@localhost',
  scope: 'jadibot:6283878775317',
  isGroup: false,
})

console.log(`\n  hasil: ${JSON.stringify(result)}`)
console.log(result.reported ? '  ✅ Laporan terkirim ke halaman Feedback.' : `  ⚠️  Tidak terkirim: ${result.reason || 'alasan tidak diketahui'}`)
process.exit(result.reported ? 0 : 1)
