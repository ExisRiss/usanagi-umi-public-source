/* Task205 — UJI SISTEM AKSES BARU: /private /public /onlygc /onlypc + mesin peringatan.
 *
 * Spesifikasi owner (04-11-2026):
 *   /private → hanya owner/developer (diam untuk user lain).
 *   /public  → semua orang bisa pakai.
 *   /onlygc on → hanya group; command di PC dari non-owner → WARNING
 *                (atau langsung tindakan bila warning OFF) → lewat batas →
 *                block/blacklist. /onlygc off → normal.
 *   /onlypc on → hanya pribadi; group tidak dilayani (diam tanpa respon).
 *   /onlypc off → semua permukaan dibatasi (PC warning→tindakan; group diam).
 *   /onlygcset & /onlypcset → atur warning (on/off, jumlah, teks, tindakan).
 *
 * File ini menggantikan spesifikasi Task204 "diam total" (dihapus owner):
 * peringatan menggantikan keheningan total di chat pribadi.
 */

import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const baca = (rel) => fs.readFileSync(path.join(process.cwd(), rel), 'utf8')

/* ────────────────────────────── A. STRUKTUR ────────────────────────────── */

test('handler.js: gerbang akses setelah clear-AFK & sebelum hint prefix; private (Task150) lebih awal', () => {
  const h = baca('handler.js')
  const posAfk = h.indexOf('await handleAfkMessage(')
  const posPrivat = h.indexOf('apakahPrivat(botConfig')
  const posGate = h.indexOf('GERBANG AKSES + MESIN PERINGATAN')
  const posHint = h.indexOf('cariPesanPrefix({')
  assert(posAfk > 0 && posPrivat > 0 && posGate > 0 && posHint > 0, 'semua penanda ada')
  assert(posAfk < posPrivat, 'clear-AFK dulu, baru gerbang privat')
  assert(posPrivat < posGate, 'mode privat diblokir sebelum mesin peringatan')
  assert(posGate < posHint, 'gerbang sebelum hint prefix')
})

test('handler.js: gerbang lama (diam total) sudah diganti mesin peringatan', () => {
  const h = baca('handler.js')
  assert(!h.includes('kontrolOnlyGc'), 'gerbang Task204 diam-total dihapus')
  assert(h.includes('putusanAkses('), 'memakai putusanAkses')
  assert(h.includes('catatPeringatan('), 'menghitung peringatan')
  assert(h.includes('terapkanTindakan('), 'menerapkan tindakan')
  assert(h.includes('realmAccessCommand'), 'pengecualian realms tetap ada')
  assert(h.includes('botConfig.onlyGroup === true'), 'mode jadibot tetap dibaca')
})

test('handler.js & handler-srv.js: notifikasi AFK memakai flag permukaan', () => {
  for (const rel of ['handler.js', 'handler-srv.js']) {
    const src = baca(rel)
    const baris = src.split('\n').find((l) => l.includes('const afkNotify') || l.includes('afkNotify ='))
    assert(baris && baris.includes('gcOnlyUntukNotif'), rel + ': afkNotify memakai gcOnlyUntukNotif')
    assert(src.includes('flagNotif.gc') && src.includes('flagNotif.pc'),
      rel + ': kunci notif membaca flag permukaan (gc/pc)')
  }
})

test('handler-srv.js: gerbang paralel ada & mode privat didahulukan', () => {
  const s = baca('handler-srv.js')
  assert(s.includes('GERBANG AKSES + MESIN PERINGATAN'), 'srv punya gerbang baru')
  assert(!s.includes('kontrolOnlyGc'), 'gerbang lama srv dihapus')
  const posPrivat = s.indexOf('if (!instancePublic && !m.fromMe && !isOwner) return;')
  const posGate = s.indexOf('GERBANG AKSES + MESIN PERINGATAN')
  assert(posPrivat > 0 && posGate > posPrivat, 'instancePrivate check sebelum mesin peringatan')
})

test('/private & /public: self.js menerima keduanya', () => {
  const src = baca('plugins/owner/self.js')
  assert(src.includes('/^(self|private|public)$/i'), 'command regex memuat private+public')
  assert(src.includes("command === 'self' || command === 'private'"), 'private diperlakukan seperti self')
})

test('plugin set: onlygcset & onlypcset ada, owner-only, baca config bersama', () => {
  for (const nama of ['usanagi-onlygcset', 'usanagi-onlypcset']) {
    const src = baca('plugins/owner/' + nama + '.js')
    assert(src.includes('handler.owner = true'), nama + ': owner only')
    assert(src.includes('simpanConfig'), nama + ': menyimpan config')
    assert(src.includes('buttons'), nama + ': punya tombol pilihan')
  }
  const gc = baca('plugins/owner/usanagi-onlygc.js')
  const pc = baca('plugins/owner/usanagi-onlypc.js')
  assert(gc.includes('onlygcset'), 'onlygc mengarahkan ke onlygcset')
  assert(pc.includes('onlypcset'), 'onlypc mengarahkan ke onlypcset')
})

test('mode: awang-pc off → MODE_OFF; awang-gc off kembali NORMAL dari off', () => {
  const pc = baca('core/awang-pc.js')
  assert(pc.includes('ACCESS_MODES.OFF'), '.onlypc off masuk mode off')
  const gc = baca('core/awang-gc.js')
  assert(gc.includes('ACCESS_MODES.OFF'), '.onlygc off bisa keluar dari mode off')
  const mode = baca('core/awang-mode.js')
  assert(mode.includes("'off'"), 'mode off dikenali SQLite + migrasi CHECK')
})

/* ───────────────────────── B. LOGIKA MURNI (lib) ───────────────────────── */

test('flagMode: tabel permukaan per mode', async () => {
  const { flagMode, MODE } = await import('../lib/access-warn.js')
  assert.deepEqual(flagMode(MODE.NORMAL), { pc: true, gc: true, warnPc: false })
  assert.deepEqual(flagMode(MODE.ONLY_GC), { pc: false, gc: true, warnPc: true })
  assert.deepEqual(flagMode(MODE.ONLY_PC), { pc: true, gc: false, warnPc: false })
  assert.deepEqual(flagMode(MODE.OFF), { pc: false, gc: false, warnPc: true })
  assert.deepEqual(flagMode('kacang'), { pc: true, gc: true, warnPc: false })
})

test('putusanAkses: matriks lengkap sesuai spesifikasi', async () => {
  const { putusanAkses, MODE } = await import('../lib/access-warn.js')
  const dasar = { isOwner: false, realmAccess: false }

  // normal → semua dilayani
  assert.equal(putusanAkses({ ...dasar, mode: MODE.NORMAL, isGroup: false, isCommand: true }), 'izinkan')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.NORMAL, isGroup: true, isCommand: false }), 'izinkan')

  // owner selalu dilayani, di mode apa pun
  for (const mode of Object.values(MODE)) {
    assert.equal(putusanAkses({ mode, isGroup: false, isOwner: true, isCommand: true }), 'izinkan', 'owner ' + mode)
    assert.equal(putusanAkses({ mode, isGroup: true, isOwner: true, isCommand: false }), 'izinkan', 'owner grup ' + mode)
  }

  // onlygc: PC dibatasi → command peringatan, plain diam; group jalan
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_GC, isGroup: false, isCommand: true }), 'peringatan')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_GC, isGroup: false, isCommand: false }), 'diam')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_GC, isGroup: true, isCommand: true }), 'izinkan')

  // onlygc + realms tetap jalan di PC
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_GC, isGroup: false, isCommand: true, realmAccess: true }), 'izinkan')

  // onlypc: group diam total (command maupun plain); PC jalan
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_PC, isGroup: true, isCommand: true }), 'diam')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_PC, isGroup: true, isCommand: false }), 'diam')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.ONLY_PC, isGroup: false, isCommand: true }), 'izinkan')

  // off: PC peringatan, group diam
  assert.equal(putusanAkses({ ...dasar, mode: MODE.OFF, isGroup: false, isCommand: true }), 'peringatan')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.OFF, isGroup: false, isCommand: false }), 'diam')
  assert.equal(putusanAkses({ ...dasar, mode: MODE.OFF, isGroup: true, isCommand: true }), 'diam')
})

test('config: default, simpan, clamp, dan reset hitungan', async () => {
  const w = await import('../lib/access-warn.js')
  const db = {}
  const dflt = w.muatConfig(db)
  assert.equal(dflt.enabled, true)
  assert.equal(dflt.threshold, 3)
  assert.equal(dflt.action, 'block')

  w.simpanConfig(db, { enabled: false, threshold: 99, action: 'blacklist', text: ' stop ' })
  const cfg = w.muatConfig(db)
  assert.equal(cfg.enabled, false)
  assert.equal(cfg.threshold, 20, 'threshold di-clamp maks 20')
  assert.equal(cfg.action, 'blacklist')
  assert.equal(cfg.text, 'stop')

  // hitungan → lewat di batas (threshold dikembalikan ke3 setelah uji clamp)
  w.simpanConfig(db, { threshold: 3 })
  const jid = '62811@s.whatsapp.net'
  assert.equal(w.catatPeringatan(db, jid).lewat, false)
  assert.equal(w.catatPeringatan(db, jid).lewat, false)
  const ketiga = w.catatPeringatan(db, jid)
  assert.equal(ketiga.count, 3)
  assert.equal(ketiga.lewat, true, 'peringatan ke-3 = lewat batas')
  w.resetHitungan(db, jid)
  assert.equal(w.hitungan(db, jid), 0)
})

test('terapkanTindakan: blacklist tanpa updateBlockStatus; wa-block bila tersedia', async () => {
  const w = await import('../lib/access-warn.js')
  const db1 = {}
  const r1 = await w.terapkanTindakan({ conn: {}, dbData: db1 }, 'a@b.c', 'block')
  assert.equal(r1.jalur, 'blacklist', 'tanpa method WA → jatuh ke blacklist')
  assert(db1.blacklistUser['a@b.c'], 'tercatat di blacklistUser')

  const db2 = {}
  let dipanggil = null
  const conn = { updateBlockStatus: async (jid, st) => { dipanggil = [jid, st] } }
  const r2 = await w.terapkanTindakan({ conn, dbData: db2 }, 'x@y.z', 'block')
  assert.equal(r2.jalur, 'wa-block')
  assert.deepEqual(dipanggil, ['x@y.z', 'block'])

  const db3 = {}
  const r3 = await w.terapkanTindakan({ conn: {}, dbData: db3 }, 'k@k.k', 'blacklist')
  assert.equal(r3.jalur, 'blacklist')
  assert(db3.blacklistUser['k@k.k'])
})

test('modeEfektif: jadibot onlyGroup → onlygc; selain itu SQLite', async () => {
  const { modeEfektif, MODE } = await import('../lib/access-warn.js')
  assert.equal(modeEfektif({ onlyGroup: true, mode: MODE.NORMAL }), MODE.ONLY_GC)
  assert.equal(modeEfektif({ onlyGroup: false, mode: MODE.OFF }), MODE.OFF)
  assert.equal(modeEfektif({ onlyGroup: false, mode: 'aneh' }), MODE.NORMAL)
})

/* ─────────────────────── C. E2E LEWAT HANDLER (fixture) ─────────────────────── */

const androidId = () => crypto.randomUUID().replace(/-/g, '')

function fixture({ registered = true, publicMode = true, onlyGroup = false } = {}) {
  const id = Math.floor(Math.random() * 1e9)
  const sender = (700000000 + id) + '@s.whatsapp.net'
  const bot = (800000000 + id) + '@s.whatsapp.net'
  const output = []
  global.owner = []
  global.opts = {}
  global.mods = []
  global.mainBot = { defaultPrefix: '/' }
  global.jadibotPlatform = {}
  global.conn = { sendMessage: () => { throw Error('main socket must stay OFF') } }
  global.db = {
    data: {
      users: { [sender]: { registered, limit: 50, premiumTime: 0, money: 0, exp: 0 } },
      chats: {}, stats: {},
      settings: { [bot]: { public: publicMode } },
      blacklistUser: {},
    },
    write: async () => {},
  }
  global.loadDatabase = async () => {}
  global.dfail = (reason, m) => m.reply('Denied: ' + reason)
  const conn = {
    user: { id: bot, jid: bot },
    botConfig: { type: 'jadibot', scope: 'akses-test-' + id, public: publicMode, onlyGroup, defaultPrefix: '/', defaultLimit: 50, registrationRequired: true },
    pushMessage: async () => {},
    groupMetadata: async () => ({ participants: [] }),
    onWhatsApp: async () => [],
    readMessages: async () => {},
    sendMessage: async function (chat, body) { output.push({ chat, body }); return { key: { id: androidId() } } },
  }
  Object.defineProperty(conn, 'reply', { value: function (chat, text) { return this.sendMessage(chat, { text }) } })
  const proto = Object.defineProperty({}, 'reply', { value: function (text) { return this.conn.reply(this.chat, text) } })
  const message = (text = '', extra = {}) => Object.assign(Object.create(proto), {
    conn, sender, chat: sender,
    key: { id: androidId(), remoteJid: sender },
    message: { conversation: text }, text, mentionedJid: [],
    isGroup: false, pushName: 'Test', ...extra,
  })
  const command = (text) => message(text)
  global.plugins = {}
  return {
    sender, bot, conn, output, message, command,
    run: async (m) => handlerFn.call(conn, { messages: [m], type: 'notify' }),
    finish() { delete global.db; delete global.conn },
  }
}

global.__filename = (url) => fileURLToPath(url)
const { handler: handlerFn } = await import('../handler.js')

test('e2e onlygc: command PC non-owner → peringatan; pesan biasa → diam', async () => {
  const f = fixture({ onlyGroup: true })
  try {
    // command ber-prefix → warning
    await f.run(f.message('/menu cek'))
    assert.equal(f.output.length, 1, 'tepat satu peringatan')
    assert.match(f.output[0].body.text, /PERINGATAN 1\/3/)
    // pesan biasa tanpa prefix → diam total
    f.output.length = 0
    await f.run(f.message('halo bot'))
    assert.equal(f.output.length, 0, 'pesan biasa tetap diam')
  } finally { f.finish() }
})

test('e2e onlygc: warning OFF → langsung tindakan (blacklist) pada pelanggaran pertama', async () => {
  const f = fixture({ onlyGroup: true })
  try {
    const w = await import('../lib/access-warn.js')
    w.simpanConfig(global.db.data, { enabled: false })
    await f.run(f.command('/menu'))
    assert.equal(f.output.length, 1)
    assert.match(f.output[0].body.text, /Tindakan|DIBLOKIR|BLACKLIST/i, 'pesan tindakan terkirim')
    assert(global.db.data.blacklistUser[f.sender], 'nomor masuk blacklist')
  } finally { f.finish() }
})

test('e2e onlygc: warning ON → tindakan di peringatan ke-3 (threshold 3)', async () => {
  const f = fixture({ onlyGroup: true })
  try {
    for (let i = 1; i <= 3; i++) {
      f.output.length = 0
      await f.run(f.command('/menu'))
      if (i < 3) {
        assert.match(f.output[0].body.text, new RegExp('PERINGATAN ' + i + '\\/3'), 'peringatan ' + i)
        assert(!global.db.data.blacklistUser[f.sender], 'belum ditindak sebelum batas')
      } else {
        assert.match(f.output[0].body.text, /Tindakan|DIBLOKIR|BLACKLIST/i, 'tindakan di batas')
        assert(global.db.data.blacklistUser[f.sender], 'blacklist setelah threshold')
      }
    }
  } finally { f.finish() }
})

test('e2e mode off (.onlypc off): group diam total, PC tetap peringatan', async () => {
  const { setAccessMode, ACCESS_MODES } = await import('../core/awang-mode.js')
  const sebelum = (await import('../core/awang-mode.js')).getAccessModeState().mode
  setAccessMode(ACCESS_MODES.OFF)
  const f = fixture({ onlyGroup: false })
  try {
    // group → diam total
    await f.run(f.message('/menu', { isGroup: true, chat: 'grup@g.us', key: { id: androidId(), remoteJid: 'grup@g.us' } }))
    assert.equal(f.output.length, 0, 'group diam saat mode off')
    // PC → warning
    await f.run(f.command('/menu'))
    assert.equal(f.output.length, 1)
    assert.match(f.output[0].body.text, /PERINGATAN/)
  } finally {
    f.finish()
    setAccessMode(sebelum)
  }
})

test('e2e mode privat didahulukan: peringatan tidak bocor saat private', async () => {
  const f = fixture({ onlyGroup: true, publicMode: false })
  try {
    await f.run(f.command('/menu'))
    assert.equal(f.output.length, 0, 'private = diam total, tanpa peringatan')
  } finally { f.finish() }
})
