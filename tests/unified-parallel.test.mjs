import test from 'node:test'
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import {getDb} from './fixtures/realms-sqlite.mjs'
import {createUnifiedStore,UNIFIED_RPG} from '../lib/rpg/unified-store.js'
import {runUnifiedCommand,kunciPengirim} from '../lib/rpg/unified-runtime.js'
import {withRealmGate} from '../lib/realms/gate.js'

/* Task207 — bukti perbaikan "bot delay & tidak respon saat dipakai user lain".
 *
 * Sebelumnya withRealmGate memakai satu mutex global ('rpg:shared-world')
 * untuk SEMUA hook/perintah, dipegang sepanjang task termasuk await media.
 * Data server (latency-119.jsonl): saat plugin user lain lambat (≥5 dtk),
 * reply orang lain melonjak dari median 143ms → 1535ms dan p90 6126ms →
 * 15622ms. Fix: kunci per pengirim 'rpg:user:<nomor>' — lintas pengguna
 * paralel, sesama pengirim tetap berurutan. */

const db = getDb()
let serial = 0

function fixture() {
  delete globalThis[UNIFIED_RPG]
  const id = '628333' + String(++serial).padStart(7, '0')
  const other = '628444' + String(serial).padStart(7, '0')
  const a = id + '@s.whatsapp.net'
  const b = other + '@s.whatsapp.net'
  const s = createUnifiedStore({ db, users: { [a]: { money: 100, exp: 0 }, [b]: { money: 100, exp: 0 } }, links: [] })
  s.migrate()
  globalThis[UNIFIED_RPG] = s
  global.db = { data: { users: s.users } }
  const conn = { sendMessage: async () => ({ key: { id: crypto.randomUUID() } }) }
  const m = { sender: a, chat: 'paralel-chat', key: { id: crypto.randomUUID() }, reply: async () => ({ key: { id: crypto.randomUUID() } }) }
  const mB = { ...m, sender: b, key: { id: crypto.randomUUID() } }
  return { s, a, b, m, mB, conn, finish() { delete globalThis[UNIFIED_RPG]; delete global.db } }
}

const tidur = ms => new Promise(resolve => setTimeout(resolve, ms))

/** Jalankan dua task 80ms; kembalikan jumlah task yang berjalan bersamaan. */
async function puncakParalel(jalankan) {
  let berjalan = 0
  let puncak = 0
  const kerja = async () => {
    berjalan += 1
    if (berjalan > puncak) puncak = berjalan
    await tidur(80)
    berjalan -= 1
  }
  await jalankan(kerja)
  return puncak
}

test('Task207: perintah dua pengguna BERBEDA berjalan paralel — tidak saling menahan', async () => {
  const f = fixture()
  try {
    const puncak = await puncakParalel(kerja => Promise.all([
      runUnifiedCommand('paralel-a:' + crypto.randomUUID(), kerja, f.conn, f.m),
      runUnifiedCommand('paralel-b:' + crypto.randomUUID(), kerja, f.conn, f.mB),
    ]))
    assert.equal(puncak, 2, 'pengguna berbeda harus berjalan bersamaan (bukan antre mutex global)')
  } finally { f.finish() }
})

test('Task207: sesama pengirim tetap berurutan — tulis-baca satu pengguna aman', async () => {
  const f = fixture()
  try {
    const puncak = await puncakParalel(kerja => Promise.all([
      runUnifiedCommand('seri-a:' + crypto.randomUUID(), kerja, f.conn, f.m),
      runUnifiedCommand('seri-b:' + crypto.randomUUID(), kerja, f.conn, f.m),
    ]))
    assert.equal(puncak, 1, 'pesan dari satu pengirim harus tetap berurutan')
  } finally { f.finish() }
})

test('Task207: awardMessageExp dari dua pengguna juga paralel', async () => {
  const f = fixture()
  try {
    const { awardMessageExp } = await import('../lib/rpg/unified-runtime.js')
    let berjalan = 0
    let puncak = 0
    const kerja = async () => {
      berjalan += 1
      if (berjalan > puncak) puncak = berjalan
      await tidur(60)
      berjalan -= 1
    }
    await Promise.all([
      (async () => { await withRealmGate(kerja, kunciPengirim(f.a)) })(),
      (async () => { await withRealmGate(kerja, kunciPengirim(f.b)) })(),
    ])
    assert.equal(puncak, 2, 'kunci per pengirim untuk EXP pasif juga harus paralel lintas pengguna')
    assert.deepEqual(kunciPengirim(f.a), ['rpg:user:628333' + String(serial).padStart(7, '0')])
    assert.equal(kunciPengirim(''), null)
    // awardMessageExp tetap berjalan (integrasi store) tanpa error.
    assert.equal(await awardMessageExp(f.a, 5, crypto.randomUUID()), true)
  } finally { f.finish() }
})

test('Task207: tanpa kunci pengirim, gate tetap memakai kunci global (situs web & worker aman)', async () => {
  let berjalan = 0
  let puncak = 0
  const kerja = async () => {
    berjalan += 1
    if (berjalan > puncak) puncak = berjalan
    await tidur(50)
    berjalan -= 1
  }
  await Promise.all([withRealmGate(kerja), withRealmGate(kerja)])
  assert.equal(puncak, 1, 'pemanggil tanpa kunci (website/worker) harus tetap terserial global')
})
