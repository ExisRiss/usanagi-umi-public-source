#!/usr/bin/env node
/**
 * Ambil log konsol owner dari bot (relay owner-console).
 *
 * Relay memvalidasi "tiket" ber-tanda tangan HMAC-SHA256, bukan sekadar token.
 * Bentuk tiket:
 *   base64url(JSON payload) + "." + base64url(HMAC-SHA256(payloadBase64, secret))
 * Payload: { v:1, aud:'owner-console', sub:<8-128 karakter [A-Za-z0-9_-]>, exp:<ms>, nonce }
 *
 * Sekaligus jadi uji cepat: kalau relay menolak (401), berarti
 * .owner-console-relay.env di server tidak cocok dengan UMI_CONSOLE_RELAY_SECRET
 * di Vercel.
 *
 * Pakai:
 *   node tools/console-logs.mjs                # tampilkan log terbaru
 *   node tools/console-logs.mjs --grep "Loaded"
 *   node tools/console-logs.mjs --raw          # keluaran mentah
 */
import crypto from 'node:crypto'
import fs from 'node:fs'

// Berkas kredensial lokal pernah memuat secret lama yang lebih pendek (64 char),
// sedangkan yang dipakai website (Vercel) dan yang dipasang di server adalah nilai
// penuh. Untuk menguji relay, yang harus dipakai adalah nilai yang ADA DI SERVER.
const DEPLOYED = '/home/user/.secrets/upload/.owner-console-relay.env'
const ENV_FILE = '/home/user/.secrets/usanagi-credentials.env'
const BASE = process.env.BOT_ORIGIN || 'https://api.gwenna.my.id'
const args = process.argv.slice(2)
const grepIdx = args.indexOf('--grep')
const GREP = grepIdx >= 0 ? args[grepIdx + 1] : null
const RAW = args.includes('--raw')

function readDeployedSecret() {
  try {
    const m = fs.readFileSync(DEPLOYED, 'utf8').match(/^UMI_CONSOLE_RELAY_SECRET=(.+)$/m)
    return m ? m[1].trim() : ''
  } catch {
    return ''
  }
}

const env = Object.fromEntries(
  fs
    .readFileSync(ENV_FILE, 'utf8')
    .split('\n')
    .filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)

function ticket(secret) {
  const b64 = (buf) => Buffer.from(buf).toString('base64url')
  const payload = b64(
    JSON.stringify({
      v: 1,
      aud: 'owner-console',
      sub: 'cli-owner-0001',
      exp: Date.now() + 75_000,
      nonce: crypto.randomBytes(8).toString('hex'),
      m: 'GET',
      p: 'logs',
    }),
  )
  const sig = b64(crypto.createHmac('sha256', secret).update(payload).digest())
  return `${payload}.${sig}`
}

const res = await fetch(`${BASE}/api/owner-console/logs?cursor=0`, {
  headers: { 'X-UMI-Console-Ticket': ticket(readDeployedSecret() || env.UMI_CONSOLE_RELAY_SECRET) },
  signal: AbortSignal.timeout(30_000),
})

if (!res.ok) {
  const body = await res.text()
  console.error(`HTTP ${res.status}`)
  console.error(body.slice(0, 300))
  if (res.status === 401) {
    console.error('\n→ Tiket ditolak. Periksa apakah UMI_CONSOLE_RELAY_SECRET di .owner-console-relay.env')
    console.error('  (server) sama persis dengan yang ada di env Vercel.')
  }
  process.exit(1)
}

const json = await res.json()
const strip = (s) => s.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '').replace(/\x1b\][^\x07]*\x07/g, '').replace(/\r/g, '')
const text = (json.chunks || []).map((c) => strip(c.text || '')).join('')

if (RAW) {
  console.log(text)
  process.exit(0)
}

const lines = text.split('\n').filter((l) => l.trim())
const shown = GREP ? lines.filter((l) => new RegExp(GREP, 'i').test(l)) : lines.slice(-40)
console.log(`\n${shown.length} baris${GREP ? ` cocok /${GREP}/i` : ' terakhir'} dari ${lines.length} baris:\n`)
for (const l of shown) console.log('  ' + l.trim().slice(-165))
