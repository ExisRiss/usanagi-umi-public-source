/* By AlzRiss - Usanagi Umi AI
 *
 * PENJAGA 24 JAM (Task212) — bot tidak boleh mati/disconnect saat sepi.
 *
 * Keluhan owner: "kalau tidak dipakai beberapa jam/hari, bot suka mati atau
 * disconnect". Penyebab yang bisa terjadi pada bot WhatsApp (baileys):
 *   1. Soket menutup tanpa pesan balasan (network idle / server WA memutus).
 *      `connectionUpdate` di main.js sudah reconnect, TAPI kalau penutupan
 *      terjadi sangat halus (socket "zombie": state open, tapi tidak bisa
 *      menerima/mengirim), tidak ada event 'close' sama sekali → bot diam.
 *   2. Sesi tidak pernah "disentuh" selama sepi sehingga server WhatsApp
 *      menganggap perangkat tidak aktif lebih lama dan menutup sesi.
 *   3. Proses kehabisan memori/disk di server → proses dibunuh panel.
 *
 * Modul ini menangani #1 dan #2 dari dalam proses (tidak butuh panel):
 *   • denyut tiap 90 detik: cek `conn.ws.readyState`, jam update koneksi
 *     terakhir (`global.__umiLastConnectionAt`), dan balasan nyata terakhir.
 *   • bila soket DEAD (3 = CLOSED/2 = CLOSING) atau tak ada event koneksi
 *     > 6 menit padahal seharusnya online → panggil reconnect resmi main.js
 *     (`global.__umiReconnect`) atau, kalau tidak tersedia, tutup soket
 *     supaya handler 'close' berjalan dan reconnect normal.
 *   • "napas" ringan tiap 12 menit: `sendPresenceUnavailable` (bukan pesan,
 *     bukan centang biru, tidak mengganggu siapa pun) supaya sesi tetap
 *     tercatat aktif. Bila gagal 2x berturut-turut → dianggap zombie dan
 *     menyulut reconnect.
 *   • mencatat semuanya ke `data/penjaga-24jam.json` dan console
 *     `[PENJAGA24]` supaya buktinya bisa diperiksa kapan saja.
 *
 * Perintah owner: `.penjaga24` (status + jeda detak terakhir), `.penjaga24 on|off`.
 * Tidak ada kode baru yang memakai `||=` / `??=`.
 */

import fs from 'node:fs'
import path from 'node:path'

import { getMainConnection } from '../../lib/bot-connection-context.js'

const BERKAS = path.join(process.cwd(), 'data', 'penjaga-24jam.json')
const DETAK_MS = 90 * 1000
const NAPAS_MS = 12 * 60 * 1000
const ZOMBIE_MS = 6 * 60 * 1000

const status = {
  aktif: true,
  mulai: new Date().toISOString(),
  detak: 0,
  napas: 0,
  reconnect: 0,
  gagalNapas: 0,
  terakhirDetak: '',
  terakhirNapas: '',
  terakhirReconnect: '',
  catatan: [],
}

function simpan() {
  try {
    fs.mkdirSync(path.dirname(BERKAS), { recursive: true })
    fs.writeFileSync(BERKAS, JSON.stringify(status, null, 2), { mode: 0o600 })
  } catch { /* tidak boleh mengganggu bot */ }
}

function catat(pesan) {
  const baris = `[${new Date().toISOString()}] ${pesan}`
  console.log(`[PENJAGA24] ${pesan}`)
  status.catatan.push(baris)
  if (status.catatan.length > 60) status.catatan = status.catatan.slice(-60)
}

function sambung() {
  try { return getMainConnection() || global.conn || null } catch { return global.conn || null }
}

function keadaanSoket(conn) {
  try {
    const ws = conn && conn.ws
    if (!ws) return { ada: false, kode: -1, teks: 'tidak-ada' }
    const kode = Number(ws.readyState)
    const teks = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'][kode] || String(kode)
    return { ada: true, kode, teks }
  } catch {
    return { ada: false, kode: -1, teks: 'error' }
  }
}

/** Paksa siklus reconnect lewat jalur resmi main.js bila ada. */
function sulutReconnect(conn, alasan) {
  try {
    if (typeof global.__umiReconnect === 'function') {
      catat(`reconnect resmi dipanggil (${alasan})`)
      status.reconnect += 1
      status.terakhirReconnect = new Date().toISOString()
      global.__umiReconnect(428)
      simpan()
      return true
    }
  } catch (e) {
    catat(`reconnect resmi gagal: ${e.message}`)
  }
  /* Jalur cadangan: tutup soket supaya event 'close' memicu reconnect normal. */
  try {
    const ws = conn && conn.ws
    if (ws && typeof ws.close === 'function') {
      catat(`soket ditutup paksa (${alasan}) → menunggu reconnect normal`)
      status.reconnect += 1
      status.terakhirReconnect = new Date().toISOString()
      ws.close()
      simpan()
      return true
    }
  } catch (e) {
    catat(`tutup paksa gagal: ${e.message}`)
  }
  return false
}

async function denyut() {
  status.detak += 1
  status.terakhirDetak = new Date().toISOString()
  const conn = sambung()
  const soket = keadaanSoket(conn)

  if (!conn || !soket.ada) {
    catat('koneksi belum ada — penjaga menunggu (bukan galat)')
    simpan()
    return
  }

  if (soket.kode === 3 || soket.kode === 2) {
    catat(`soket ${soket.teks} padahal seharusnya hidup → paksa sambung ulang`)
    sulutReconnect(conn, `ws ${soket.teks}`)
    return
  }

  const terakhir = Number(global.__umiLastConnectionAt || 0)
  const umur = terakhir ? Date.now() - terakhir : 0
  if (terakhir && umur > ZOMBIE_MS && soket.kode === 1) {
    /* Soket terlihat OPEN tapi tidak ada kabar koneksi > 6 menit. Ini kondisi
     * zombie paling umum saat bot ditinggal berhari-hari. */
    catat(`tidak ada kabar koneksi ${Math.round(umur / 1000)} dtk walau soket OPEN → paksa sambung ulang`)
    sulutReconnect(conn, 'zombie senyap')
    return
  }

  /* Napas ringan berkala (bukan pesan, tidak terlihat siapa pun). */
  const napasTerakhir = status.terakhirNapas ? Date.parse(status.terakhirNapas) : 0
  if (Date.now() - napasTerakhir >= NAPAS_MS) {
    try {
      if (typeof conn.sendPresenceUnavailable === 'function') await conn.sendPresenceUnavailable('status@broadcast')
      status.napas += 1
      status.gagalNapas = 0
      status.terakhirNapas = new Date().toISOString()
      simpan()
    } catch (e) {
      status.gagalNapas += 1
      catat(`napas gagal (${status.gagalNapas}/2): ${e && e.message ? e.message : e}`)
      if (status.gagalNapas >= 2) {
        status.gagalNapas = 0
        sulutReconnect(conn, 'napas gagal 2x')
        return
      }
      simpan()
    }
  }
  simpan()
}

const timer = setInterval(() => {
  if (!status.aktif) return
  denyut().catch((e) => catat(`denyut galat: ${e && e.message ? e.message : e}`))
}, DETAK_MS)

/* Jangan menahan proses tetap hidup hanya karena penjaga ini. */
if (timer && typeof timer.unref === 'function') timer.unref()

setTimeout(() => catat('penjaga 24 jam aktif (detak 90 dtk, napas 12 mnt)'), 8000)

export async function handler(m) {
  const perintah = String(m.text || '').trim().split(/\s+/)[0].replace(/^[./!#]/, '').toLowerCase()
  const arg = String(m.text || '').trim().split(/\s+/)[1] || ''
  if (!/^penjaga24$/.test(perintah)) return
  if (arg === 'on' || arg === 'off') {
    status.aktif = arg === 'on'
    catat(`penjaga ${arg === 'on' ? 'diaktifkan' : 'dimatikan'} lewat perintah owner`)
    simpan()
    return m.reply(`🛡️ Penjaga 24 jam: *${status.aktif ? 'AKTIF' : 'MATI'}*`)
  }
  const conn = sambung()
  const soket = keadaanSoket(conn)
  const terakhir = Number(global.__umiLastConnectionAt || 0)
  return m.reply([
    '🛡️ *PENJAGA 24 JAM*',
    '',
    `Status        : ${status.aktif ? 'AKTIF ✅' : 'MATI ⛔'}`,
    `Soket         : ${soket.teks} (kode ${soket.kode})`,
    `Kabar koneksi : ${terakhir ? `${Math.round((Date.now() - terakhir) / 1000)} dtk lalu` : 'belum ada'}`,
    `Detak         : ${status.detak}x · terakhir ${status.terakhirDetak || '-'}`,
    `Napas         : ${status.napas}x · terakhir ${status.terakhirNapas || '-'}`,
    `Reconnect     : ${status.reconnect}x · terakhir ${status.terakhirReconnect || '-'}`,
    '',
    'Atur: `.penjaga24 on` / `.penjaga24 off`',
    'Catatan lengkap: `data/penjaga-24jam.json`',
  ].join('\n'))
}

/* Diekspor untuk pengujian otomatis (tools/uji-penjaga-24jam.mjs). */
export const uji = { denyut, sulutReconnect, keadaanSoket, status }

export const help = ['penjaga24']
export const tags = ['owner']
export const command = /^penjaga24$/i
export const limit = false
