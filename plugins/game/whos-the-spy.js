/**
 * WHO'S THE SPY — plugin grup (Task207 bagian4).
 *
 * Perintah: .ws buat | join | play | cancel | status
 * - Group-only (handler.group = true + cek @g.us).
 * - Kata dikirim lewat DM SAHAJA; DM gagal saat start → batal aman.
 * - Clue hanya lewat REPLY pesan bot atau MENTION bot (validasi contextInfo).
 * - Voting memakai poll native WhatsApp; suara dibaca dari pollUpdateMessage
 *   dan hanya untuk poll yang dikirim bot (pollCreationMessageKey.id cocok).
 * - Semua timer (expire5m, clue5m, voting5m) melewati registry → dibersihkan
 *   tuntas saat selesai/batal — tidak ada timer sisa.
 * - Rahasia (kata/spy) tidak pernah masuk grup, log, atau status.
 */

import fs from 'node:fs'
import path from 'node:path'
import {
  FASE, MIN_PEMAIN, MAX_PEMAIN, EXPIRE_MENUNGGU_MS, CLUE_MS, VOTING_MS,
  buatTimerRegistry, buatRuangTunggu, gabung, siapkanMain, batalRuang,
  terimaClue, clueHabis, paksaVoting, prosesVote, tutupVoting, votingHabis,
  semuaSudahVote, statusPublik, pulihkan, buatPenyimpan
} from '../../lib/whos-the-spy.js'

/* State proses — satu Map untuk semua grup (grup independen per kunci). */
const daftarRuang = new Map()
const timer = buatTimerRegistry()
const penyimpan = buatPenyimpan(path, fs, path.join(process.cwd(), 'data', 'whos-the-spy'))
let sudahMuat = false

function normJid (jid) {
  return String(jid || '').replace(/:\d+(?=@)/, '')
}

function botJidDari (conn) {
  return normJid(conn.user && conn.user.id)
}

async function simpan () {
  try {
    await penyimpan.simpan(daftarRuang)
  } catch { /* penyimpanan gagal tidak boleh merusak alur game */ }
}

function tambahXp (jid, jumlah) {
  try {
    const db = global.db && global.db.data
    if (!db || !db.users) return
    const u = db.users[jid]
    if (!u) return
    if (typeof u.exp !== 'number' || !Number.isFinite(u.exp)) u.exp = 0
    u.exp += jumlah
  } catch { /* xp gagal tidak boleh mematikan game */ }
}

function terapkanXp (daftarXp) {
  for (const item of daftarXp || []) tambahXp(item.jid, item.jumlah)
}

function ruangAktif (grup) {
  const r = daftarRuang.get(grup)
  if (!r) return null
  if (r.fase === FASE.SELESAI || r.fase === FASE.BATAL) return null
  return r
}

async function kirimDm (conn, jid, teks) {
  await conn.sendMessage(jid, { text: teks })
}

/* ---------------- Timer per fase ---------------- */

function jadwalMenunggu (grup) {
  timer.jadwalkan(grup, 'menunggu', () => {
    const r = daftarRuang.get(grup)
    if (!r || r.fase !== FASE.MENUNGGU) return
    batalRuang(daftarRuang, grup, 'waktu habis (5 menit)')
    timer.bersihkanRuang(grup)
    simpan()
    connGlobal().sendMessage(grup, { text: '❌ Sesi WHO\'S THE SPY dibatalkan — waktu pendaftaran5 menit habis.' }).catch(() => {})
  }, EXPIRE_MENUNGGU_MS)
}

function jadwalClue (grup) {
  timer.jadwalkan(grup, 'clue', async () => {
    const r = daftarRuang.get(grup)
    if (!r || r.fase !== FASE.CLUE) return
    clueHabis(daftarRuang, grup, Date.now())
    await kirimVoting(grup)
  }, CLUE_MS)
}

/* conn global untuk timer (dipakai setelah boot) */
let connAktif = null
function connGlobal () {
  return connAktif
}

async function kirimVoting (grup) {
  const r = daftarRuang.get(grup)
  const conn = connGlobal()
  if (!r || r.fase !== FASE.VOTING || !conn) return
  const hidup = r.pemain.filter(p => !p.out)
  const dipakai = new Set()
  const values = []
  const ops = {}
  for (const p of hidup) {
    let nama = p.nama
    let n = 2
    while (dipakai.has(nama)) { nama = `${p.nama} (${n})`; n += 1 }
    dipakai.add(nama)
    values.push(nama)
    ops[nama] = p.jid
  }
  r.pollOps = ops
  try {
    const kirim = await conn.sendMessage(grup, {
      poll: { name: `🗳️ Voting WHO'S THE SPY — ronde ${r.ronde}`, values, selectableCount: 1 }
    }, { mentions: [botJidDari(conn)] })
    r.pollId = (kirim && kirim.key && kirim.key.id) || null
    await simpan()
  } catch {
    // Poll gagal → tutup voting dengan suara yang ada (aman, tanpa deadlock)
    try {
      const hasil = tutupVoting(daftarRuang, grup, Date.now())
      await tutupGrup(grup, hasil)
    } catch { /* noop */ }
    return
  }
  timer.jadwalkan(grup, 'voting', async () => {
    const rr = daftarRuang.get(grup)
    if (!rr || rr.fase !== FASE.VOTING) return
    let hasil
    try { hasil = votingHabis(daftarRuang, grup, Date.now()) } catch { return }
    await tutupGrup(grup, hasil)
  }, VOTING_MS)
}

async function tutupGrup (grup, hasil) {
  const conn = connGlobal()
  timer.batalkan(grup, 'voting')
  if (!conn || !hasil) return
  const lines = []
  if (hasil.seri) {
    lines.push('🤝 Suara seri — tidak ada yang tersingkir.')
  } else if (hasil.eliminasi) {
    lines.push(`🚪 *${hasil.eliminasi.nama}* tersingkir (${hasil.tally[hasil.eliminasi.jid] || 0} suara).`)
  }
  for (const item of hasil.xpBaru) terapkanXp([item])
  const r = daftarRuang.get(grup)
  if (hasil.menang === 'warga') {
    lines.push('👥 *WARGA MENANG!* Spy berhasil tersingkir. (+100 XP semua warga)')
    timer.bersihkanRuang(grup)
  } else if (hasil.menang === 'spy') {
    lines.push('🕵️ *SPY MENANG!* Tersisa1 warga +1 spy. (+150 XP spy)')
    timer.bersihkanRuang(grup)
  } else if (hasil.lanjut) {
    lines.push(`🔍 Lanjut ronde ${r ? r.ronde : '?'} — kirim petunjuk: REPLY pesan bot atau MENTION bot.`)
  }
  await simpan()
  await conn.sendMessage(grup, { text: lines.join('\n') }).catch(() => {})
  if (r && r.fase === FASE.CLUE) jadwalClue(grup)
}

/* ---------------- Boot: pulihkan db + transisi deadline lewat ---------- */

async function pastikanMuat (conn) {
  if (conn) connAktif = conn
  if (sudahMuat) return
  sudahMuat = true
  try {
    const data = await penyimpan.muat()
    const sekarang = Date.now()
    const pulih = pulihkan(data, sekarang)
    for (const [grup, r] of pulih) {
      daftarRuang.set(grup, r)
      if (r.fase === FASE.CLUE) {
        if (sekarang >= r.deadline) {
          clueHabis(daftarRuang, grup, sekarang)
          await kirimVoting(grup)
        } else {
          jadwalClue(grup)
        }
      } else if (r.fase === FASE.VOTING) {
        if (sekarang >= r.deadline) {
          let hasil = null
          try { hasil = votingHabis(daftarRuang, grup, sekarang) } catch { /* noop */ }
          await tutupGrup(grup, hasil)
        } else {
          jadwalVoting(grup)
        }
      } else if (r.fase === FASE.MENUNGGU) {
        jadwalMenunggu(grup)
      }
    }
  } catch { /* db tidak ada = mulai kosong */ }
}

/* ================= Handler utama (.ws) ================= */

let handler = async (m, { conn, args }) => {
  connAktif = conn
  await pastikanMuat(conn)
  const grup = m.chat
  if (!String(grup).endsWith('@g.us')) return m.reply('Fitur ini hanya untuk grup.')
  const sub = String(args[0] || 'status').toLowerCase()
  const jid = normJid(m.sender)
  const nama = (m.pushName || jid).slice(0, 40)
  const sekarang = Date.now()

  if (sub === 'buat' || sub === 'create') {
    try {
      buatRuangTunggu(daftarRuang, grup, jid, nama, sekarang)
    } catch (e) { return m.reply(e.message) }
    jadwalMenunggu(grup)
    await simpan()
    // DM pembuat — gagal → batal aman
    try {
      await kirimDm(conn, jid, '🕵️ *WHO\'S THE SPY*\n\nRoom dibuat! DM ini bukti kamu bisa menerima pesan privat. Bagikan kode permainan: *.ws join* — minimal4 pemain,5 menit.')
    } catch {
      batalRuang(daftarRuang, grup, 'DM pembuat gagal')
      timer.bersihkanRuang(grup)
      await simpan()
      return m.reply('❌ DM ke kamu gagal — room dibatalkan (batal aman).')
    }
    return m.reply(`🕵️ *WHO'S THE SPY* dibuat!\nPemain1/${MAX_PEMAIN} — *.ws join* untuk masuk. Minimal ${MIN_PEMAIN} pemain, pendaftaran5 menit.`)
  }

  if (sub === 'join' || sub === 'gabung') {
    try {
      gabung(daftarRuang, grup, jid, nama)
    } catch (e) { return m.reply(e.message) }
    await simpan()
    const r = daftarRuang.get(grup)
    return m.reply(`✅ ${nama} bergabung (${r.pemain.length}/${MAX_PEMAIN}). ${r.pemain.length >= MIN_PEMAIN ? 'Ketik *.ws play* untuk mulai!' : `Butuh ${MIN_PEMAIN - r.pemain.length} pemain lagi.`}`)
  }

  if (sub === 'play' || sub === 'mulai') {
    const r = daftarRuang.get(grup)
    if (!r || r.fase !== FASE.MENUNGGU) return m.reply('Tidak ada ruang menunggu. *.ws buat* dulu.')
    if (!r.pemain.some(p => p.jid === jid)) return m.reply('Hanya pemain yang bisa memulai.')
    let dmList
    try {
      dmList = siapkanMain(daftarRuang, grup, sekarang)
    } catch (e) { return m.reply(e.message) }
    timer.batalkan(grup, 'menunggu')
    // kirim kata via DM — satu saja gagal → batal aman
    for (const dm of dmList) {
      try {
        await kirimDm(conn, dm.jid, dm.teks)
      } catch {
        batalRuang(daftarRuang, grup, 'DM kata gagal')
        timer.bersihkanRuang(grup)
        await simpan()
        const namaGagal = (r.pemain.find(p => p.jid === dm.jid) || {}).nama || 'pemain'
        return m.reply(`❌ DM ke ${namaGagal} gagal — sesi dibatalkan (batal aman, tanpa bocor).`)
      }
    }
    jadwalClue(grup)
    await simpan()
    const teksRonde = `🔍 *RONDE1 — PETUNJUK*\n\nSetiap pemain kirim1 petunjuk (REPLY pesan bot ini atau MENTION bot). Maks300 karakter,1 per ronde.\nWaktu ronde5 menit → lanjut voting otomatis.`
    return conn.sendMessage(grup, { text: teksRonde, mentions: [botJidDari(conn)] })
  }

  if (sub === 'cancel' || sub === 'batal') {
    const r = daftarRuang.get(grup)
    if (!r || r.fase === FASE.SELESAI || r.fase === FASE.BATAL) return m.reply('Tidak ada sesi yang bisa dibatalkan.')
    const pembuat = r.pembuat === jid
    const pemain = r.pemain.some(p => p.jid === jid)
    if (!pembuat && pemain) return m.reply('Hanya pembuat room yang bisa membatalkan.')
    if (!pembuat && !pemain) return m.reply('Kamu bukan bagian sesi ini.')
    batalRuang(daftarRuang, grup, 'dibatalkan ' + nama)
    timer.bersihkanRuang(grup)
    await simpan()
    return m.reply('❌ Sesi WHO\'S THE SPY dibatalkan. Semua timer dibersihkan.')
  }

  // status (default)
  await pastikanMuat(conn)
  return m.reply(statusPublik(daftarRuang, grup, sekarang))
}

handler.help = ['ws buat', 'ws join', 'ws play', 'ws cancel', 'ws status']
handler.tags = ['game']
handler.command = /^ws$/i
handler.group = true
handler.description = "Game WHO'S THE SPY4–12 pemain — kata via DM, clue reply/mention, voting poll"

/* ================= Hook pesan: clue (reply/mention) + vote poll ================= */

function teksClueDari (m) {
  const tipe = m.mtype
  if (tipe === 'conversation') return m.text
  if (tipe === 'extendedTextMessage') return m.text
  return null
}

function perintahWs (teks) {
  return /^[^\s]{0,3}ws\s+(buat|join|gabung|play|mulai|cancel|batal|status)\b/i.test(String(teks || '').trim())
}

export async function all (m) {
  try {
    if (!m || !m.message) return
    const conn = this && this.sendMessage ? this : null
    if (!conn) return
    connAktif = conn
    const grup = m.chat
    if (!String(grup).endsWith('@g.us')) return
    const r = ruangAktif(grup)
    if (!r) return

    /* ---- voting: baca poll native ---- */
    if (m.mtype === 'pollUpdateMessage' && r.fase === FASE.VOTING) {
      const upd = m.message.pollUpdateMessage
      const pollId = upd && upd.pollCreationMessageKey ? upd.pollCreationMessageKey.id : null
      if (!r.pollId || pollId !== r.pollId) return
      const opts = upd && upd.vote && Array.isArray(upd.vote.selectedOptions) ? upd.vote.selectedOptions : []
      if (!opts.length) return
      let namaVote = ''
      try {
        namaVote = typeof opts[0] === 'string' ? opts[0] : new TextDecoder().decode(opts[0])
      } catch { return }
      const target = r.pollOps ? r.pollOps[namaVote] : null
      if (!target) return
      try {
        prosesVote(daftarRuang, grup, { voterJid: normJid(m.sender), targetJid: target, pollId, sekarang: Date.now() })
      } catch { return } // suara asing/dupe → diamkan
      await simpan()
      if (semuaSudahVote(daftarRuang, grup)) {
        let hasil
        try { hasil = tutupVoting(daftarRuang, grup, Date.now()) } catch { return }
        await tutupGrup(grup, hasil)
      }
      return
    }

    /* ---- clue: reply ke bot / mention bot ---- */
    if (r.fase !== FASE.CLUE) return
    const teks = teksClueDari(m)
    if (!teks) return
    const isi = String(teks).trim()
    if (!isi || perintahWs(isi)) return
    const botJid = botJidDari(conn)
    const quotedOk = Boolean(m.quoted && normJid(m.quoted.sender) === botJid)
    const mentioned = Array.isArray(m.mentionedJid) ? m.mentionedJid.map(normJid) : []
    const mentionOk = mentioned.indexOf(botJid) !== -1
    if (!quotedOk && !mentionOk) return
    let hasil
    try {
      hasil = terimaClue(daftarRuang, grup, { jid: normJid(m.sender), teks: isi, keBot: true, sekarang: Date.now() })
    } catch { return } // bukan pemain/sudah klaim/dsb → diam (bukan error grup)
    terapkanXp(hasil.xpBaru)
    await simpan()
    await conn.sendMessage(grup, { text: `✅ Petunjuk diterima (+10 XP).` }, { quoted: m }).catch(() => {})
    // semua pemain aktif sudah clue → voting lebih awal (timer5 menit = batas)
    const hidup = r.pemain.filter(p => !p.out)
    const sudah = hidup.every(p => r.clueSudah.indexOf(`${r.ronde}:${p.jid}`) !== -1)
    if (sudah) {
      timer.batalkan(grup, 'clue')
      try { paksaVoting(daftarRuang, grup, Date.now()) } catch { return }
      await simpan()
      await kirimVoting(grup)
    }
  } catch { /* hook tidak boleh melempar ke dispatcher */ }
}

export default handler
