#!/usr/bin/env node
/**
 * Pemulihan setelah host panel beyy (192.241.149.63) mati.
 *
 * Melakukan tiga hal, berurutan dan idempoten:
 *   1. Menunggu panel bisa dihubungi (atau langsung lapor dengan --once).
 *   2. Menyalakan server mirror `83595f4b` bila keadaannya offline.
 *   3. Mematikan bot utama (pairing) lewat POST /api/owner-console/main-bot.
 *      Kalau API bot belum terjangkau tapi panel sudah hidup, ia menulis
 *      .main-bot.env langsung ke container lalu me-restart bot.
 *
 * Pakai:
 *   node tools/recover-after-outage.mjs --once        # satu putaran, lalu keluar
 *   node tools/recover-after-outage.mjs --watch 60    # ulangi tiap 60 detik sampai beres
 */
import fs from 'node:fs'
import crypto from 'node:crypto'

const CRED = process.env.PTERO_ENV_FILE || '/home/user/.secrets/beyy-new-panel-credentials.env'
const RELAY = '/home/user/.secrets/upload/.owner-console-relay.env'
const BOT_ORIGIN = process.env.BOT_ORIGIN || 'https://api.gwenna.my.id'
const MIRROR_ORIGIN = process.env.MIRROR_ORIGIN || 'http://192.241.149.63:3348'
const GAME_ORIGIN = process.env.GAME_ORIGIN || 'https://game.gwenna.my.id'

const env = Object.fromEntries(
  fs.readFileSync(CRED, 'utf8').split('\n')
    .filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)
const PANEL = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY
const BOT = process.env.PTERO_SERVER_ID || env.PTERO_SERVER_ID
const MIRROR = process.env.PTERO_SERVER_MIRROR_ID || env.PTERO_SERVER_MIRROR_ID
const H = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }

const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a)
const probe = async (url, ms = 12000) => {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(ms) })
    return { ok: r.ok, status: r.status }
  } catch (error) { return { ok: false, status: 0, error: error.message } }
}
const panelGet = async (path) => {
  const r = await fetch(`${PANEL}/api/client${path}`, { headers: H, signal: AbortSignal.timeout(20000) })
  return { status: r.status, json: await r.json().catch(() => null) }
}
const panelPower = async (server, signal) => {
  const r = await fetch(`${PANEL}/api/client/servers/${server}/power`, {
    method: 'POST', headers: { ...H, 'Content-Type': 'application/json' }, body: JSON.stringify({ signal }),
  })
  return r.status
}
const stateOf = async (server) => {
  const { json } = await panelGet(`/servers/${server}/resources`)
  return json?.attributes?.current_state || 'unknown'
}

function ticket(secret) {
  const b64 = (buf) => Buffer.from(buf).toString('base64url')
  const payload = b64(JSON.stringify({
    v: 1, aud: 'owner-console', sub: 'cli-owner-0001', exp: Date.now() + 75000, nonce: crypto.randomBytes(8).toString('hex'),
  }))
  const sig = b64(crypto.createHmac('sha256', secret).update(payload).digest())
  return `${payload}.${sig}`
}
const relaySecret = () => {
  try { return (fs.readFileSync(RELAY, 'utf8').match(/^UMI_CONSOLE_RELAY_SECRET=(.+)$/m) || [])[1]?.trim() || '' } catch { return '' }
}
/** Matikan bot utama lewat API bot (tanpa restart). True bila berhasil. */
async function disableMainBotViaApi() {
  const secret = relaySecret()
  if (!secret) { log('  ! secret relay tidak ada, lewati jalur API'); return false }
  try {
    const r = await fetch(`${BOT_ORIGIN}/api/owner-console/main-bot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-UMI-Console-Ticket': ticket(secret) },
      body: JSON.stringify({ enabled: false }),
      signal: AbortSignal.timeout(20000),
    })
    const body = await r.json().catch(() => ({}))
    log(`  API main-bot -> HTTP ${r.status}`, JSON.stringify(body).slice(0, 160))
    return r.ok && body.enabled === false
  } catch (error) { log(`  API main-bot gagal: ${error.message}`); return false }
}
/** Cadangan: tulis .main-bot.env ke container lalu restart bot. */
async function disableMainBotViaFile() {
  const cur = await fetch(`${PANEL}/api/client/servers/${BOT}/files/contents?file=/.main-bot.env`, { headers: H })
  const text = cur.ok ? await cur.text() : ''
  const number = (text.match(/^MAIN_BOT_PAIRING_NUMBER=(.*)$/m) || [])[1] || ''
  const body = `# Diatur otomatis oleh website (halaman Bot Utama). Jangan di-commit.\nMAIN_BOT_ENABLED=false\nMAIN_BOT_PAIRING_NUMBER=${number.trim()}\n`
  const w = await fetch(`${PANEL}/api/client/servers/${BOT}/files/write?file=/.main-bot.env`, {
    method: 'POST', headers: { ...H, 'Content-Type': 'application/octet-stream' }, body,
  })
  log(`  tulis .main-bot.env -> HTTP ${w.status} (nomor pairing dipertahankan: ${number.trim() ? 'ya' : 'kosong'})`)
  if (w.status !== 204 && w.status !== 200) return false
  log(`  restart bot -> HTTP ${await panelPower(BOT, 'restart')}`)
  return true
}

async function onePass() {
  const panelUp = await probe(`${PANEL}/api/client`, 15000)
  log(`panel ${PANEL} -> ${panelUp.status || 'tidak merespons'}`)
  if (!panelUp.ok && panelUp.status === 0) {
    log('host panel masih mati — belum ada yang bisa dikerjakan.')
    return false
  }

  const mirrorState = await stateOf(MIRROR)
  log(`server mirror ${MIRROR}: ${mirrorState}`)
  if (mirrorState === 'offline') {
    log(`  menyalakan mirror -> HTTP ${await panelPower(MIRROR, 'start')}`)
    await new Promise((r) => setTimeout(r, 25000))
    log(`  keadaan sekarang: ${await stateOf(MIRROR)}`)
  }

  const apiProbe = await probe(`${BOT_ORIGIN}/api/owner-console/status`)
  log(`API bot -> ${apiProbe.status || 'tidak terjangkau'}`)
  const pairingOff = apiProbe.status
    ? await disableMainBotViaApi()
    : await disableMainBotViaFile()
  log(`pairing bot utama dimatikan: ${pairingOff ? 'YA' : 'BELUM'}`)

  const mirror = await probe(`${MIRROR_ORIGIN}/health`)
  const game = await probe(`${GAME_ORIGIN}/health`)
  log(`mirror -> ${mirror.status || 'tidak terjangkau'} | game -> ${game.status || 'tidak terjangkau'}`)

  const done = Boolean(mirror.ok && game.ok && pairingOff)
  log(done ? '✅ semua target terpenuhi.' : '⏳ belum lengkap, perlu putaran lagi.')
  return done
}

const once = process.argv.includes('--once')
const wi = process.argv.indexOf('--watch')
const every = wi >= 0 ? Number(process.argv[wi + 1] || 60) * 1000 : 0

if (once || !every) {
  process.exit(await onePass() ? 0 : 1)
}
log(`mode pantau: periksa tiap ${every / 1000} detik`)
for (;;) {
  if (await onePass()) { log('selesai — pemantau berhenti.'); break }
  await new Promise((r) => setTimeout(r, every))
}
