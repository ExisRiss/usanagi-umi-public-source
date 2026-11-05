/**
 * Task207 bagian4 — uji WHO'S THE SPY (wajib15; berisi16 tes).
 * Inti murni diuji tanpa Baileys: state, aturan, kerahasiaan, timer,
 * vote, XP idempoten, persistensi, cleanup.
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {
  FASE, MIN_PEMAIN, MAX_PEMAIN, EXPIRE_MENUNGGU_MS, CLUE_MS, XP,
  buatTimerRegistry, buatRuangTunggu, gabung, siapkanMain, batalRuang,
  terimaClue, clueHabis, paksaVoting, prosesVote, tutupVoting,
  semuaSudahVote, statusPublik, pulihkan, buatPenyimpan
} from '../lib/whos-the-spy.js'

const GRUP = '123456@g.us'
const P = (n) => `62811110000${n}@s.whatsapp.net`

function buatDaftar () { return new Map() }

function daftar4 (acak) {
  const daftar = buatDaftar()
  const t0 = 1000
  buatRuangTunggu(daftar, GRUP, P(1), 'A', t0)
  gabung(daftar, GRUP, P(2), 'B')
  gabung(daftar, GRUP, P(3), 'C')
  gabung(daftar, GRUP, P(4), 'D')
  return { daftar, t0, dm: siapkanMain(daftar, GRUP, t0 + 5000, acak) }
}

function rngSequence (values) {
  let i = 0
  return () => values[Math.min(i++, values.length - 1)]
}

function fakeScheduler () {
  const slots = []
  return {
    set (fn, ms) { slots.push({ fn, ms }); return slots.length - 1 },
    clear (id) { if (slots[id]) slots[id] = null },
    fire (id) { const h = slots[id]; if (h) { slots[id] = null; h.fn() } },
    slots
  }
}

/*1. buat ruang → waiting + deadline5 menit */
test('buat: fase waiting + expire5 menit', () => {
  const daftar = buatDaftar()
  const r = buatRuangTunggu(daftar, GRUP, P(1), 'A', 0)
  assert.equal(r.fase, FASE.MENUNGGU)
  assert.equal(r.deadline, EXPIRE_MENUNGGU_MS)
  assert.equal(daftar.size, 1)
  assert.throws(() => buatRuangTunggu(daftar, GRUP, P(9), 'X', 10), /Masih ada sesi/)
})

/*2. join anti-race: dua panggilan beruntun hanya masuk sekali */
test('join: sukses lalu duplikat langsung ditolak (anti-race)', () => {
  const daftar = buatDaftar()
  buatRuangTunggu(daftar, GRUP, P(1), 'A', 0)
  gabung(daftar, GRUP, P(2), 'B')
  // dua pemanggilan sinkron beruntun untuk jid sama — tanpa await di antaranya
  gabung(daftar, GRUP, P(3), 'C')
  assert.throws(() => gabung(daftar, GRUP, P(3), 'C'), /sudah bergabung/)
  assert.equal(daftar.get(GRUP).pemain.length, 3)
})

/*3. kapasitas4–12 + start butuh minimal4 */
test('kapasitas: maks12 pemain, main butuh minimal4', () => {
  const daftar = buatDaftar()
  buatRuangTunggu(daftar, GRUP, P(1), 'A', 0)
  for (let i = 2; i <= MAX_PEMAIN; i += 1) gabung(daftar, GRUP, P(i), `P${i}`)
  assert.equal(daftar.get(GRUP).pemain.length, MAX_PEMAIN)
  assert.throws(() => gabung(daftar, GRUP, P(99), 'Z'), /penuh/i)

  const kecil = buatDaftar()
  buatRuangTunggu(kecil, 'g2@g.us', P(1), 'A', 0)
  gabung(kecil, 'g2@g.us', P(2), 'B')
  assert.throws(() => siapkanMain(kecil, 'g2@g.us', 10, Math.random), new RegExp(`minimal ${MIN_PEMAIN}`))
})

/*4. start: spy acak, DM warga = kataA, DM spy = kataB + penanda spy */
test('start: pemilihan spy acak + DM kata via DM saja', () => {
  const { dm } = daftar4(rngSequence([0.1, 0.1, 0.75]))
  assert.equal(dm.length, 4)
  const spyDm = dm.find(d => d.teks.includes('adalah *SPY*'))
  const wargaDm = dm.filter(d => d.teks.includes('Kamu *warga*'))
  assert.ok(spyDm, 'harus ada1 DM spy')
  assert.equal(wargaDm.length, 3)
  assert.ok(spyDm.teks.includes('Kata kamu:'))
  for (const w of wargaDm) assert.ok(w.teks.includes('Kata kamu:'))
  // kata warga & spy berbeda
  const kataWarga = wargaDm[0].teks.split('Kata kamu:')[1].trim().split('\n')[0].replace(/\*/g, '')
  const kataSpy = spyDm.teks.split('Kata kamu:')[1].trim().split('\n')[0].replace(/\*/g, '')
  assert.notEqual(kataWarga, kataSpy)
})

/*5. kerahasiaan: status publik tanpa kata & jid spy */
test('rahasia: statusPublik tidak pernah memuat kata atau jid spy', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  const r = daftar.get(GRUP)
  const publik = statusPublik(daftar, GRUP, 0)
  assert.ok(!publik.includes(r.kataA), 'kataA bocor di status')
  assert.ok(!publik.includes(r.kataB), 'kataB bocor di status')
  assert.ok(!publik.includes(r.spy), 'jid spy bocor di status')
  // bila dibatalkan, rahasia dihapus dari ruang
  batalRuang(daftar, GRUP, 'uji')
  assert.equal(r.kataA, null)
  assert.equal(r.kataB, null)
  assert.equal(r.spy, null)
})

/*6. clue wajib reply/mention bot (flag keBot) */
test('clue: tolak tanpa konteks bot, terima dengan reply/mention', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  assert.throws(
    () => terimaClue(daftar, GRUP, { jid: P(1), teks: 'nasi', keBot: false, sekarang: 2000 }),
    /REPLY|MENTION/
  )
  const ok = terimaClue(daftar, GRUP, { jid: P(1), teks: 'nasi', keBot: true, sekarang: 2000 })
  assert.equal(ok.ok, true)
  assert.deepEqual(ok.xpBaru, [{ jid: P(1), jumlah: XP.clue }])
})

/*7. satu clue per pemain per ronde */
test('clue: satu per ronde — klaim kedua ditolak', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  terimaClue(daftar, GRUP, { jid: P(1), teks: 'satu', keBot: true, sekarang: 2000 })
  assert.throws(
    () => terimaClue(daftar, GRUP, { jid: P(1), teks: 'dua', keBot: true, sekarang: 3000 }),
    /1 petunjuk/
  )
})

/*8. timer clue5 menit → SKIP ke voting; registry bersih saat fire */
test('timer: clue habis → voting; registry nol sisa setelah fire', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  const sked = fakeScheduler()
  const reg = buatTimerRegistry(sked)
  reg.jadwalkan(GRUP, 'clue', () => { clueHabis(daftar, GRUP, CLUE_MS) }, CLUE_MS)
  assert.equal(reg.sisa(), 1)
  assert.equal(sked.slots[0].ms, CLUE_MS)
  sked.fire(0)
  assert.equal(reg.sisa(), 0)
  assert.equal(daftar.get(GRUP).fase, FASE.VOTING)
})

/*9. vote: pollId salah / bukan pemain ditolak; recast mengganti (bukan dobel) */
test('vote: validasi pollId, pemain, dan satu suara per pemain', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  paksaVoting(daftar, GRUP, 5000)
  const r = daftar.get(GRUP)
  r.pollId = 'POLL-1'
  assert.throws(() => prosesVote(daftar, GRUP, { voterJid: P(1), targetJid: P(2), pollId: 'POLL-LAIN', sekarang: 5500 }), /bukan milik/)
  assert.throws(() => prosesVote(daftar, GRUP, { voterJid: '628999@s.whatsapp.net', targetJid: P(2), pollId: 'POLL-1', sekarang: 5500 }), /pemain aktif/)
  prosesVote(daftar, GRUP, { voterJid: P(1), targetJid: P(2), pollId: 'POLL-1', sekarang: 5500 })
  prosesVote(daftar, GRUP, { voterJid: P(1), targetJid: P(3), pollId: 'POLL-1', sekarang: 5600 })
  assert.equal(Object.keys(r.votes).length, 1)
  assert.equal(r.votes[P(1)], P(3), 'recast mengganti, bukan menambah')
  assert.equal(semuaSudahVote(daftar, GRUP), false)
  prosesVote(daftar, GRUP, { voterJid: P(2), targetJid: P(3), pollId: 'POLL-1', sekarang: 5700 })
  prosesVote(daftar, GRUP, { voterJid: P(3), targetJid: P(4), pollId: 'POLL-1', sekarang: 5800 })
  prosesVote(daftar, GRUP, { voterJid: P(4), targetJid: P(4), pollId: 'POLL-1', sekarang: 5900 })
  assert.equal(semuaSudahVote(daftar, GRUP), true)
})

/*10. seri voting → aman, tanpa eliminasi, ronde berikutnya */
test('voting seri: tidak ada eliminasi + ronde berikutnya', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  paksaVoting(daftar, GRUP, 5000)
  const r = daftar.get(GRUP)
  r.pollId = 'P'
  //2 suara P(1),2 suara P(2) → seri
  prosesVote(daftar, GRUP, { voterJid: P(1), targetJid: P(1), pollId: 'P', sekarang: 5100 })
  prosesVote(daftar, GRUP, { voterJid: P(2), targetJid: P(1), pollId: 'P', sekarang: 5100 })
  prosesVote(daftar, GRUP, { voterJid: P(3), targetJid: P(2), pollId: 'P', sekarang: 5100 })
  prosesVote(daftar, GRUP, { voterJid: P(4), targetJid: P(2), pollId: 'P', sekarang: 5100 })
  const hasil = tutupVoting(daftar, GRUP, 6000)
  assert.equal(hasil.seri, true)
  assert.equal(hasil.eliminasi, null)
  assert.equal(hasil.menang, null)
  assert.equal(r.fase, FASE.CLUE)
  assert.equal(r.ronde, 2)
  assert.equal(r.pemain.filter(p => p.out).length, 0)
})

/*11. eliminasi warga biasa → XP +25, lanjut ronde, tanpa pemenang */
test('eliminasi warga: +25 idempoten, ronde lanjut', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.1])) // floor(0.1*4)=0 → spy = P(1)
  const r = daftar.get(GRUP)
  const spy = r.spy
  const warga = r.pemain.map(p => p.jid).filter(j => j !== spy)
  paksaVoting(daftar, GRUP, 5000)
  r.pollId = 'P'
  // semua pilih warga pertama
  for (const voter of r.pemain) prosesVote(daftar, GRUP, { voterJid: voter.jid, targetJid: warga[0], pollId: 'P', sekarang: 5100 })
  const hasil = tutupVoting(daftar, GRUP, 6000)
  assert.equal(hasil.eliminasi.jid, warga[0])
  assert.deepEqual(hasil.xpBaru, [{ jid: warga[0], jumlah: XP.eliminasi }])
  assert.equal(hasil.menang, null)
  assert.equal(r.fase, FASE.CLUE)
  // XP event unik — tidak bisa tercatat dua kali
  const kunci = r.xpEvents.map(e => e.kunci)
  assert.equal(new Set(kunci).size, kunci.length)
  // voting berikutnya pada fase clue → ditolak (tak bisa mengulang hasil)
  assert.throws(() => tutupVoting(daftar, GRUP, 7000), /Voting tidak aktif/)
})

/*12. spy tersingkir → warga menang +100, XP tak dobel */
test('warga menang: spy tersingkir → +100 semua warga, idempoten', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.1])) // spy = P(1)
  const r = daftar.get(GRUP)
  const spy = r.spy
  paksaVoting(daftar, GRUP, 5000)
  r.pollId = 'P'
  for (const voter of r.pemain) prosesVote(daftar, GRUP, { voterJid: voter.jid, targetJid: spy, pollId: 'P', sekarang: 5100 })
  const hasil = tutupVoting(daftar, GRUP, 6000)
  assert.equal(hasil.menang, 'warga')
  assert.equal(r.fase, FASE.SELESAI)
  const wargaJids = r.pemain.map(p => p.jid).filter(j => j !== spy)
  const xpMenang = hasil.xpBaru.filter(x => x.jumlah === XP.wargaMenang).map(x => x.jid).sort()
  assert.deepEqual(xpMenang, [...wargaJids].sort())
  assert.ok(hasil.xpBaru.some(x => x.jid === spy && x.jumlah === XP.eliminasi))
  // tak bisa diulang: fase sudah selesai
  assert.throws(() => tutupVoting(daftar, GRUP, 7000), /Voting tidak aktif/)
  const kunci = r.xpEvents.map(e => e.kunci)
  assert.equal(new Set(kunci).size, kunci.length, 'kunci XP unik (idempoten)')
})

/*13. kondisi1w+1s → spy menang +150 */
test('spy menang: tersisa1 warga +1 spy → +150 spy', () => {
  const daftar = buatDaftar()
  const t0 = 0
  buatRuangTunggu(daftar, GRUP, P(1), 'A', t0)
  gabung(daftar, GRUP, P(2), 'B')
  gabung(daftar, GRUP, P(3), 'C')
  gabung(daftar, GRUP, P(4), 'D')
  siapkanMain(daftar, GRUP, 100, rngSequence([0.0, 0.0, 0.0])) // spy = P(1)
  const r = daftar.get(GRUP)
  const spy = r.spy
  const warga = r.pemain.map(p => p.jid).filter(j => j !== spy)
  // eliminasi pertama: warga[0] → sisa1w(warga[1])+1w(warga[2])+spy =3
  paksaVoting(daftar, GRUP, 2000)
  r.pollId = 'P'
  for (const j of r.pemain.map(p => p.jid)) prosesVote(daftar, GRUP, { voterJid: j, targetJid: warga[0], pollId: 'P', sekarang: 2100 })
  const h1 = tutupVoting(daftar, GRUP, 3000)
  assert.equal(h1.menang, null)
  assert.equal(r.fase, FASE.CLUE)
  // eliminasi kedua: warga[1] → sisa1w+1s → spy menang
  paksaVoting(daftar, GRUP, 4000)
  r.pollId = 'P2'
  const hidup = r.pemain.filter(p => !p.out)
  for (const p of hidup) prosesVote(daftar, GRUP, { voterJid: p.jid, targetJid: warga[1], pollId: 'P2', sekarang: 4100 })
  const h2 = tutupVoting(daftar, GRUP, 5000)
  assert.equal(h2.menang, 'spy')
  assert.equal(r.fase, FASE.SELESAI)
  assert.ok(h2.xpBaru.some(x => x.jid === spy && x.jumlah === XP.spyMenang))
  // warga yang kalah TIDAK dapat +100
  assert.ok(!h2.xpBaru.some(x => x.jumlah === XP.wargaMenang))
})

/*14. persistensi: simpan → muat; expired/finished dibuang saat pulih */
test('persistensi: roundtrip file + pulihkan membuang kedaluwarsa/selesai', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wts-'))
  const penyimpan = buatPenyimpan(path, fs, dir)
  const daftar = buatDaftar()
  buatRuangTunggu(daftar, GRUP, P(1), 'A', 0)
  gabung(daftar, GRUP, P(2), 'B')
  // ruang aktif lain dengan deadline lewat (menunggu) → dibuang saat pulih
  buatRuangTunggu(daftar, 'g2@g.us', P(5), 'E', 0)
  // ruang yang sudah selesai → dibuang
  const selesai = buatRuangTunggu(daftar, 'g3@g.us', P(6), 'F', 0)
  selesai.fase = FASE.SELESAI
  await penyimpan.simpan(daftar)
  const muat = await penyimpan.muat()
  assert.equal(muat.length, 3)
  // sekarang masih awal → ruang waiting aktif dipulihkan, selesai dibuang
  const awal = pulihkan(muat, 0)
  assert.ok(awal.has(GRUP), 'ruang waiting aktif dipulihkan')
  assert.ok(!awal.has('g3@g.us'), 'selesai dibuang')
  // setelah deadline → waiting kedaluwarsa dibuang; fase clue lewat deadline tetap ada
  const nanti = pulihkan(muat, EXPIRE_MENUNGGU_MS + 1)
  assert.ok(!nanti.has(GRUP), 'menunggu kedaluwarsa dibuang')
  const aktif = pulihkan([{ grup: 'g4@g.us', fase: FASE.CLUE, deadline: 10, pemain: [] }], 99999)
  assert.ok(aktif.has('g4@g.us'), 'fase aktif deadline lewat tetap dipulihkan (transisi saat boot)')
  fs.rmSync(dir, { recursive: true, force: true })
})

/*15. batal aman + cleanup tanpa timer sisa */
test('batal: rahasia dihapus + registry timer nol sisa', () => {
  const { daftar } = daftar4(rngSequence([0.0, 0.0, 0.0]))
  const sked = fakeScheduler()
  const reg = buatTimerRegistry(sked)
  reg.jadwalkan(GRUP, 'menunggu', () => {}, 1000)
  reg.jadwalkan(GRUP, 'clue', () => {}, 1000)
  assert.equal(reg.sisa(), 2)
  const r = batalRuang(daftar, GRUP, 'DM gagal')
  assert.equal(r.fase, FASE.BATAL)
  assert.equal(r.kataA, null)
  assert.equal(r.spy, null)
  reg.bersihkanRuang(GRUP)
  assert.equal(reg.sisa(), 0, 'tidak boleh ada timer sisa')
  // timer yang sudah dijadwalkan tidak boleh meninggalkan jejak setelah dibersihkan
  assert.equal(sked.slots.filter(Boolean).length, 0)
})

/*16. plugin: group-only + command .ws + hook all untuk clue/vote */
test('plugin: handler.group=true, command /^ws$/, hook all aktif', async () => {
  const mod = await import('../plugins/game/whos-the-spy.js')
  const handler = mod.default
  assert.equal(handler.group, true)
  assert.ok(handler.command instanceof RegExp)
  assert.ok(handler.command.test('ws'))
  assert.ok(!handler.command.test('wsp'))
  assert.ok(Array.isArray(handler.help) && handler.help.length >= 5)
  assert.equal(typeof mod.all, 'function')
})
