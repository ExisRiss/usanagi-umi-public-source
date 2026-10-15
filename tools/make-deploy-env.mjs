#!/usr/bin/env node
/**
 * Membangun seluruh berkas konfigurasi yang perlu diunggah ke server panel.
 *
 * Kenapa ini ada: folder .secrets/upload tidak ikut tersimpan antar sesi
 * (ukurannya puluhan MB — arsip deploy + cloudflared), jadi berkas-berkasnya
 * harus bisa dibangun ulang kapan saja tanpa mengingat rumusnya.
 *
 * Sumber tiap berkas, dan alasannya:
 *   config.js                → .secrets/bot-config.js (versi produksi, bukan versi repo)
 *   .tunnel.env              → .secrets/tunnel.env (token tunnel umi-api-gwenna)
 *   .owner-console-relay.env → env Vercel (berkas lokal pernah memuat nilai lama 64
 *                              karakter; yang berlaku 1168 karakter, dan relay
 *                              menolak tiket kalau tidak sama persis)
 *   .backup-export.env       → env Vercel; NAMA VARIABEL harus UMI_BACKUP_* karena
 *                              kode membacanya dari process.env, bukan nama berkas
 *   .main-bot.env            → selalu MAIN_BOT_ENABLED=false (keputusan tetap:
 *                              jangan pairing bot utama)
 *
 * Pakai: node tools/make-deploy-env.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const SECRETS = '/home/user/.secrets'
const UPLOAD = path.join(SECRETS, 'upload')
const CRED = path.join(SECRETS, 'usanagi-credentials.env')

const readEnvFile = (file) => {
  const out = {}
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i > 0) out[t.slice(0, i).trim()] = t.slice(i + 1).trim()
  }
  return out
}

fs.mkdirSync(UPLOAD, { recursive: true })
const cred = readEnvFile(CRED)
const done = []

// ── 1. config.js ────────────────────────────────────────────────────────
fs.copyFileSync(path.join(SECRETS, 'bot-config.js'), path.join(UPLOAD, 'config.js'))
done.push(['config.js', 'dari .secrets/bot-config.js'])

// ── 2. Token tunnel ─────────────────────────────────────────────────────
const tun = readEnvFile(path.join(SECRETS, 'tunnel.env'))
if (!tun.CLOUDFLARE_TUNNEL_TOKEN) throw new Error('CLOUDFLARE_TUNNEL_TOKEN tidak ada di .secrets/tunnel.env')
fs.writeFileSync(path.join(UPLOAD, '.tunnel.env'), `CLOUDFLARE_TUNNEL_TOKEN=${tun.CLOUDFLARE_TUNNEL_TOKEN}\n`)
done.push(['.tunnel.env', 'token tunnel umi-api-gwenna'])

// ── 3. Bot utama selalu NONAKTIF ────────────────────────────────────────
fs.writeFileSync(path.join(UPLOAD, '.main-bot.env'), 'MAIN_BOT_ENABLED=false\n')
done.push(['.main-bot.env', 'bot utama NONAKTIF'])

// ── 4, 5 & 6. Rahasia bersama bot <-> website ───────────────────────────
//
// SUMBER KEBENARAN = .secrets/shared-secrets.env (plaintext).
//
// Kenapa bukan API Vercel: `GET /v9/projects/<proyek>/env?decrypt=true`
// mengembalikan AMPLOP TERENKRIPSI ({"v":"v2","c":...}, ~1168 karakter),
// bukan nilai asli yang dilihat fungsi di runtime Vercel. Kalau amplop itu
// yang ditanam ke berkas env bot, setiap panggilan bot <-> website akan
// ditolak 401 — ini yang pernah memutus rantai backup dan konsol.
const SHARED = path.join(SECRETS, 'shared-secrets.env')

if (!fs.existsSync(SHARED)) {
  console.error('\n⚠️  .secrets/shared-secrets.env tidak ada — bagian rahasia dilewati.')
  console.error('   Buat berkas itu berisi 4 baris KUNCI=nilai (64 hex), lalu jalankan ulang.')
  console.error('   Nilai harus sama dengan yang ada di Vercel; lihat catatan di berkas itu.\n')
} else {
  const shared = readEnvFile(SHARED)
  const need = ['UMI_ERROR_REPORT_SECRET', 'BACKUP_CRON_SECRET', 'BOT_BACKUP_EXPORT_SECRET', 'UMI_CONSOLE_RELAY_SECRET']
  const missing = need.filter((k) => !shared[k])
  if (missing.length) throw new Error(`shared-secrets.env belum memuat: ${missing.join(', ')}`)

  // Penjaga: amplop terenkripsi Vercel selalu berawalan "eyJ2" dan panjang >300.
  const looksEncrypted = (v) => v.startsWith('eyJ2') || v.length > 300
  const suspicious = need.filter((k) => looksEncrypted(shared[k]))
  if (suspicious.length) throw new Error(`Nilai ini tampak amplop terenkripsi, bukan rahasia asli: ${suspicious.join(', ')}`)

  fs.writeFileSync(
    path.join(UPLOAD, '.owner-console-relay.env'),
    `UMI_CONSOLE_RELAY_SECRET=${shared.UMI_CONSOLE_RELAY_SECRET}\n`,
  )
  done.push(['.owner-console-relay.env', `rahasia konsol (${shared.UMI_CONSOLE_RELAY_SECRET.length} karakter)`])

  fs.writeFileSync(
    path.join(UPLOAD, '.backup-export.env'),
    [
      '# Nama variabel harus persis ini — kode membacanya dari process.env.',
      `UMI_BACKUP_EXPORT_SECRET=${shared.BOT_BACKUP_EXPORT_SECRET}`,
      `UMI_BACKUP_CRON_SECRET=${shared.BACKUP_CRON_SECRET}`,
      'UMI_BACKUP_TRIGGER_URL=https://alzriss-comunity.vercel.app/api/cron/backup',
      '',
    ].join('\n'),
  )
  done.push(['.backup-export.env', `UMI_BACKUP_* + URL cron (${shared.BACKUP_CRON_SECRET.length} karakter)`])

  // Dipakai lib/error-report.js untuk melaporkan error plugin ke halaman Feedback.
  fs.writeFileSync(
    path.join(UPLOAD, '.error-report.env'),
    [
      '# Dipakai lib/error-report.js: laporan error plugin ke /api/platform/feedback/bot',
      '# di website. Disumber oleh `npm run tunnel-start` (lihat package.json).',
      `UMI_ERROR_REPORT_SECRET=${shared.UMI_ERROR_REPORT_SECRET}`,
      'UMI_SITE_URL=https://alzriss-comunity.vercel.app',
      '',
    ].join('\n'),
  )
  done.push(['.error-report.env', `rahasia laporan error (${shared.UMI_ERROR_REPORT_SECRET.length} karakter)`])
}

// ── Izin: berkas rahasia tidak boleh terbaca umum ───────────────────────
for (const f of fs.readdirSync(UPLOAD)) {
  if (f.startsWith('.')) fs.chmodSync(path.join(UPLOAD, f), 0o600)
}

console.log('\nBerkas konfigurasi deploy siap:\n')
for (const [name, from] of done) {
  const size = fs.statSync(path.join(UPLOAD, name)).size
  console.log(`  ✓ ${name.padEnd(24)} ${String(size).padStart(7)} byte  ← ${from}`)
}

const archives = fs.readdirSync(UPLOAD).filter((f) => f.endsWith('.tar.gz'))
console.log(`\nArsip deploy di folder yang sama: ${archives.length ? archives.join(', ') : '(belum ada)'}`)
if (!archives.length) console.log('  → bangun dulu dengan: bash tools/restore-assets.sh')
console.log('\nUnggah semuanya dengan:')
console.log('  PTERO_ENV_FILE=<env-panel> node tools/ptero.mjs upload .secrets/upload/<berkas> /<berkas>\n')
