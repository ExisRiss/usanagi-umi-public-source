#!/usr/bin/env node
/**
 * Uji pelaporan error otomatis ke halaman Feedback website.
 *
 * Menguji dua sisi:
 *   A. lib/error-report.js (bot) — payload, penggabungan, atribusi pemilik, tidak melempar
 *   B. api/platform.js rute `feedback/bot` (website) — autentikasi, validasi, penyimpanan
 *
 * Pakai: node tools/test-error-report.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const BOT = '/home/user/usanagi-umi-public-source/bot'
const SITE = '/home/user/usanagi-umi-public-source/website'
process.chdir(BOT)

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ══════════════════════════════════════════════════════════════════════
// A. Sisi bot
// ══════════════════════════════════════════════════════════════════════
console.log('\n══════════ A. Sisi bot: lib/error-report.js ══════════')

const OWNER_ID = 'cba3ddd1-380b-422c-8fca-66061fa656f2'
const OWNER_EMAIL = 'blugaming42@gmail.com'
const SESSION = '6283878775317'

// Siapkan data/jadibot-platform.json tiruan supaya atribusi pemilik bisa diuji
fs.mkdirSync(path.join(BOT, 'data'), { recursive: true })
const dbFile = path.join(BOT, 'data', 'jadibot-platform.json')
const hadDb = fs.existsSync(dbFile)
const dbBackup = hadDb ? fs.readFileSync(dbFile) : null

fs.writeFileSync(dbFile, JSON.stringify({
  sessions: {
    [SESSION]: { sessionId: SESSION, userId: OWNER_ID, email: OWNER_EMAIL, createdAt: new Date().toISOString() },
  },
  backups: {},
}))

process.env.UMI_SITE_URL = 'https://contoh.test'
process.env.UMI_BACKUP_EXPORT_SECRET = 'rahasia-uji-panjang-sekali-1234567890'

const { reportPluginError, resetErrorReportState } = await import(`${BOT}/lib/error-report.js`)

/** Ganti global.fetch dengan perekam. */
const calls = []
const originalFetch = globalThis.fetch
function mockFetch({ status = 201, body = { ok: true }, throwError = null } = {}) {
  calls.length = 0
  globalThis.fetch = async (url, init = {}) => {
    if (throwError) throw throwError
    calls.push({ url: String(url), init, payload: init.body ? JSON.parse(init.body) : null })
    return {
      ok: status >= 200 && status < 300,
      status,
      async json() { return body },
    }
  }
}

const makeError = () => {
  const e = new TypeError("Cannot read properties of undefined (reading 'emoticon')")
  e.stack = "TypeError: Cannot read properties of undefined (reading 'emoticon')\n    at handler (/home/container/plugins/rpg/rpg-bank.js:4:20)"
  return e
}

console.log('\n═══ A1. Laporan dasar terkirim dengan payload benar ═══')
{
  resetErrorReportState()
  mockFetch()
  const result = await reportPluginError({
    error: makeError(),
    plugin: 'rpg/rpg-bank.js',
    command: 'bank',
    prefix: '.',
    args: [],
    sender: '628111@s.whatsapp.net',
    chat: '628999@g.us',
    scope: `jadibot:${SESSION}`,
    isGroup: true,
  })

  check('melaporkan berhasil', result.reported === true, JSON.stringify(result))
  check('mengirim tepat satu permintaan', calls.length === 1)
  const c = calls[0]
  check('menuju rute feedback/bot di website', c?.url === 'https://contoh.test/api/platform/feedback/bot', c?.url)
  check('memakai metode POST', c?.init?.method === 'POST')
  check('membawa rahasia sebagai Bearer', String(c?.init?.headers?.Authorization || '').startsWith('Bearer '),
    String(c?.init?.headers?.Authorization || '').slice(0, 22) + '…')

  const p = c?.payload || {}
  check('judul menyebut plugin & perintah', /rpg-bank\.js/.test(p.title || '') && /bank/.test(p.title || ''), p.title)
  check('penjelasan memuat pesan error', /emoticon/.test(p.description || ''))
  check('penjelasan memuat jejak (stack)', /at handler/.test(p.description || ''))
  check('plugin ikut dikirim', p.plugin === 'rpg/rpg-bank.js', p.plugin)
  check('perintah ikut dikirim', p.command === '.bank', p.command)
  check('nomor sesi ikut dikirim', p.session_id === SESSION, p.session_id)
  check('pemilik sesi teratribusi benar (id)', p.actor_id === OWNER_ID, p.actor_id)
  check('pemilik sesi teratribusi benar (email)', p.actor_email === OWNER_EMAIL, p.actor_email)
  check('jumlah kejadian tercatat', p.occurrences === 1, String(p.occurrences))
  check('langkah reproduksi terisi', /\.bank/.test(p.steps || ''))
}

console.log('\n═══ A2. Error yang sama digabung, tidak membanjiri website ═══')
{
  resetErrorReportState()
  mockFetch()
  const args = { error: makeError(), plugin: 'rpg/rpg-bank.js', command: 'bank', scope: `jadibot:${SESSION}` }

  const r1 = await reportPluginError(args)
  const r2 = await reportPluginError(args)
  const r3 = await reportPluginError(args)

  check('kejadian pertama dilaporkan', r1.reported === true)
  check('kejadian kedua TIDAK dilaporkan ulang', r2.reported === false, r2.reason)
  check('kejadian ketiga TIDAK dilaporkan ulang', r3.reported === false)
  check('hanya satu permintaan terkirim dari tiga error', calls.length === 1, `${calls.length} permintaan`)
  check('hitungan kejadian bertambah walau tidak dikirim', r3.count === 3, `count=${r3.count}`)
}

console.log('\n═══ A3. Error berbeda tetap dilaporkan terpisah ═══')
{
  resetErrorReportState()
  mockFetch()
  await reportPluginError({ error: makeError(), plugin: 'rpg/rpg-bank.js', command: 'bank' })
  await reportPluginError({ error: new Error('hal lain'), plugin: 'rpg/rpg-atm.js', command: 'atm' })
  check('dua error berbeda → dua laporan', calls.length === 2, `${calls.length} laporan`)
}

console.log('\n═══ A4. Kredensial disunting sebelum keluar ═══')
{
  resetErrorReportState()
  mockFetch()
  const e = new Error('gagal menghubungi api dengan kunci gsk_ABC123DEF456GHI789JKL')
  e.stack = 'Error: gsk_ABC123DEF456GHI789JKL\n    at x'
  await reportPluginError({ error: e, plugin: 'x.js', command: 'x' })
  const blob = JSON.stringify(calls[0]?.payload || {})
  check('kunci bergaya gsk_ disunting', !/gsk_ABC123/.test(blob) && /redacted/.test(blob))
}

console.log('\n═══ A5. Tidak pernah melempar, apa pun yang terjadi ═══')
{
  resetErrorReportState()
  mockFetch({ throwError: new Error('jaringan mati') })
  const r1 = await reportPluginError({ error: makeError(), plugin: 'a.js', command: 'a' })
  check('jaringan mati → tidak melempar', r1.reported === false, r1.reason)

  resetErrorReportState()
  mockFetch({ status: 401, body: { error: 'Rahasia laporan bot ditolak.' } })
  const r2 = await reportPluginError({ error: makeError(), plugin: 'b.js', command: 'b' })
  check('website menolak 401 → tidak melempar', r2.reported === false, r2.reason)

  resetErrorReportState()
  delete process.env.UMI_BACKUP_EXPORT_SECRET
  mockFetch()
  const r3 = await reportPluginError({ error: makeError(), plugin: 'c.js', command: 'c' })
  check('tanpa rahasia → tidak melempar', r3.reported === false, r3.reason)
  process.env.UMI_BACKUP_EXPORT_SECRET = 'rahasia-uji-panjang-sekali-1234567890'

  resetErrorReportState()
  mockFetch()
  const r4 = await reportPluginError({})
  check('tanpa argumen sama sekali → tidak melempar', r4.reported === true || r4.reported === false)

  resetErrorReportState()
  mockFetch()
  const r5 = await reportPluginError({ error: { aneh: true }, plugin: 'd.js', command: 'd', scope: 'jadibot:000' })
  check('error bukan-Error → tidak melempar', r5.reported === true || r5.reported === false, JSON.stringify(r5))
}

console.log('\n═══ A6. Sesi tanpa pemilik (bot utama) tetap terkirim ═══')
{
  resetErrorReportState()
  mockFetch()
  await reportPluginError({ error: makeError(), plugin: 'main.js', command: 'x', scope: 'main' })
  const p = calls[0]?.payload || {}
  check('terkirim tanpa actor (website akan menimpanya ke owner)', p.actor_id === null && p.session_id === null,
    `actor=${p.actor_id} sesi=${p.session_id}`)
}

// ══════════════════════════════════════════════════════════════════════
// B. Sisi website
// ══════════════════════════════════════════════════════════════════════
console.log('\n══════════ B. Sisi website: rute feedback/bot ══════════')

const SECRET = 'rahasia-uji-panjang-sekali-1234567890'
process.env.UMI_ERROR_REPORT_SECRET = SECRET
process.env.UMI_DATA_SUPABASE_URL = 'https://db.test'
process.env.UMI_DATA_SERVICE_ROLE_KEY = 'kunci-data'
delete process.env.UMI_ALLOWED_ORIGINS

const written = []
let supabaseFailure = null
globalThis.fetch = async (url, init = {}) => {
  const u = String(url)
  if (u.includes('db.test/rest/v1/platform_audit_logs')) {
    if (supabaseFailure) return { ok: false, status: 500, async text() { return 'gagal' }, async json() { return { message: 'gagal' } } }
    const body = JSON.parse(init.body)
    const rows = Array.isArray(body) ? body : [body]
    written.push(...rows)
    return { ok: true, status: 201, async text() { return JSON.stringify(rows) }, async json() { return rows } }
  }
  if (u.includes('db.test/rest/v1/platform_profiles')) {
    // dataRequest() membaca lewat response.text() lalu JSON.parse — jadi text() dan
    // json() harus mengembalikan isi yang SAMA, kalau tidak mock-nya menyesatkan.
    const rows = [{ auth_id: 'OWNER-UUID-0000-0000-000000000000', email: 'akunindo2011264@gmail.com' }]
    return { ok: true, status: 200, async text() { return JSON.stringify(rows) }, async json() { return rows } }
  }
  return { ok: true, status: 200, async text() { return '{}' }, async json() { return {} } }
}

const { default: platformHandler } = await import(`${SITE}/api/platform.js`)

/** Tiruan objek req/res ala Vercel. */
function invoke({ method = 'POST', body, headers = {}, url = '/api/platform/feedback/bot' } = {}) {
  // Vercel menulis ulang /api/platform/<sisa> menjadi /api/platform?path=<sisa>
  // (lihat vercel.json), dan routePath() membaca req.query.path — bukan req.url.
  const path = String(url).replace(/^\/api\/platform\/?/, '')
  const req = { method, url, body, headers: { host: 'alzriss-comunity.vercel.app', ...headers }, query: { path } }
  const res = {
    statusCode: 0, payload: null, headers: {},
    setHeader(k, v) { this.headers[k] = v },
    status(c) { this.statusCode = c; return this },
    json(d) { this.payload = d; return this },
  }
  return platformHandler(req, res).then(() => res)
}

const validBody = {
  title: '[Bot] rpg/rpg-bank.js gagal pada .bank',
  description: 'Pesan: Cannot read properties of undefined\nJenis: TypeError\nPlugin: rpg/rpg-bank.js',
  steps: '1. Kirim perintah: .bank',
  plugin: 'rpg/rpg-bank.js',
  command: '.bank',
  session_id: SESSION,
  actor_id: OWNER_ID,
  actor_email: OWNER_EMAIL,
  severity: 'error',
  occurrences: 3,
}

console.log('\n═══ B1. Rahasia benar → tersimpan ═══')
{
  written.length = 0
  const res = await invoke({ body: validBody, headers: { authorization: `Bearer ${SECRET}` } })
  check('membalas 201', res.statusCode === 201, `HTTP ${res.statusCode}`)
  // Dua penerima: pemilik sesi yang terdampak, DAN owner platform (operator).
  check('menulis satu baris untuk tiap penerima', written.length === 2, `${written.length} baris`)
  check('baris pertama untuk pemilik sesi', written[0]?.actor_id === OWNER_ID, written[0]?.actor_id)
  check('baris kedua untuk owner platform', written[1]?.actor_id === 'OWNER-UUID-0000-0000-000000000000', written[1]?.actor_id)
  check('tidak digandakan bila penerimanya sama', new Set(written.map(r => r.actor_id)).size === written.length)

  const row = written[0] || {}
  check('action = feedback.submit (muncul di halaman feedback)', row.action === 'feedback.submit', row.action)
  check('actor_id = pemilik sesi yang dilaporkan', row.actor_id === OWNER_ID, row.actor_id)
  check('actor_email ikut tersimpan', row.actor_email === OWNER_EMAIL, row.actor_email)
  check('target menunjuk sesi bot', row.target === `bot:${SESSION}`, row.target)
  check('metadata menandai sumber otomatis', row.metadata?.source === 'bot', row.metadata?.source)
  check('metadata memuat plugin', row.metadata?.plugin === 'rpg/rpg-bank.js', row.metadata?.plugin)
  check('metadata memuat jumlah kejadian', row.metadata?.occurrences === 3, String(row.metadata?.occurrences))
  check('metadata status awal "open"', row.metadata?.status === 'open', row.metadata?.status)
  check('halaman asal ditandai bot-error', row.metadata?.page === 'bot-error', row.metadata?.page)
}

console.log('\n═══ B2. Rahasia salah / kosong → ditolak ═══')
{
  written.length = 0
  const r1 = await invoke({ body: validBody, headers: { authorization: 'Bearer rahasia-yang-salah-sekali' } })
  check('rahasia salah → 401', r1.statusCode === 401, `HTTP ${r1.statusCode}`)
  check('tidak ada yang tersimpan', written.length === 0)

  const r2 = await invoke({ body: validBody })
  check('tanpa header Authorization → 401', r2.statusCode === 401, `HTTP ${r2.statusCode}`)

  const r3 = await invoke({ body: validBody, headers: { authorization: 'Bearer' } })
  check('Authorization kosong → 401', r3.statusCode === 401, `HTTP ${r3.statusCode}`)
}

console.log('\n═══ B3. Validasi isi ═══')
{
  written.length = 0
  const r1 = await invoke({ body: { ...validBody, title: '' }, headers: { authorization: `Bearer ${SECRET}` } })
  check('judul kosong → 400', r1.statusCode === 400, `HTTP ${r1.statusCode}`)

  const r2 = await invoke({ body: { ...validBody, description: 'pendek' }, headers: { authorization: `Bearer ${SECRET}` } })
  check('penjelasan < 10 karakter → 400', r2.statusCode === 400, `HTTP ${r2.statusCode}`)
  check('tidak ada yang tersimpan dari permintaan tidak valid', written.length === 0)
}

console.log('\n═══ B4. Tanpa pemilik sesi → dialamatkan ke owner platform ═══')
{
  written.length = 0
  const res = await invoke({
    body: { ...validBody, actor_id: null, actor_email: null, session_id: null },
    headers: { authorization: `Bearer ${SECRET}` },
  })
  check('tetap diterima (201)', res.statusCode === 201, `HTTP ${res.statusCode}`)
  check('hanya satu baris (tidak ada pemilik sesi)', written.length === 1, `${written.length} baris`)
  check('actor diganti owner platform', written[0]?.actor_id === 'OWNER-UUID-0000-0000-000000000000', written[0]?.actor_id)
  check('target menandai bot utama', written[0]?.target === 'bot-main', written[0]?.target)
}

console.log('\n═══ B5. Database bermasalah → tidak menjatuhkan website ═══')
{
  supabaseFailure = true
  written.length = 0
  const res = await invoke({ body: validBody, headers: { authorization: `Bearer ${SECRET}` } })
  check('membalas error HTTP, bukan crash', res.statusCode >= 400, `HTTP ${res.statusCode}`)
  supabaseFailure = null
}

console.log('\n═══ B6. Rute feedback pengguna TIDAK terpengaruh ═══')
{
  const res = await invoke({ method: 'GET', body: undefined, headers: {}, url: '/api/platform/feedback' })
  check('GET feedback tanpa sesi tetap 401 (butuh login)', res.statusCode === 401, `HTTP ${res.statusCode}`)
}

// ══════════════════════════════════════════════════════════════════════
// Bersihkan
globalThis.fetch = originalFetch
if (hadDb) fs.writeFileSync(dbFile, dbBackup)
else fs.rmSync(dbFile, { force: true })

console.log(`\n═══ ${pass} lulus, ${fail} gagal ═══\n`)
process.exit(fail ? 1 : 0)
