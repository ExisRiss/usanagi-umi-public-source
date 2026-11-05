/**
 * PROBE DIAGNOSTIK SEWAKTU — Task207 spamrch (ALAT UJI, bukan fitur).
 *
 * Tujuan: membuktikan jalur reaction channel HIDUP di server (koneksi asli
 * bot utama) sebelum fitur /spamrch diandalkan. Menulis log detail —
 * termasuk pesan error asli — ke /data/t207-probe.log supaya bisa dibaca
 * lewat API file panel.
 *
 * Uji yang dijalankan (berurutan, semua error ditangkap + dicatat):
 *   A. kesiapan koneksi & tipe method newsletter*
 *   B. daftar channel yang diikuti (newsletterSubscribed) / global.links
 *   C. fetch pesan channel  (newsletterFetchMessages tipe 'jid')
 *   D. fetch updates        (newsletterFetchMessageUpdates)
 *   E. reaction KE PESAN    (react 🧪 lalu hapus) — bukti inti /spamrch
 *
 * Berjalan otomatis saat bot boot (retry sampai koneksi siap) dan bisa
 * dipanggil ulang lewat perintah owner: .t207probe
 */

import fs from 'node:fs'
import { getMainConnection } from '../../lib/bot-connection-context.js'

const OUT = '/data/t207-probe.log'
let jalanSekali = false

function log (baris) {
  try {
    fs.appendFileSync(OUT, `[${new Date().toISOString()}] ${baris}\n`)
  } catch { /* file tidak bisa ditulis — tak ada yang bisa dilakukan */ }
  console.log(`[T207-PROBE] ${baris}`)
}

async function denganBatas (promise, ms, label) {
  let timer
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`${label}: timeout ${ms}ms`)), ms) }),
    ])
  } finally {
    clearTimeout(timer)
  }
}

function channelDariSubscribed (mentah) {
  const teks = JSON.stringify(mentah || '')
  const semua = teks.match(/\d{8,25}@newsletter/g) || []
  return semua[0] || ''
}

async function jalankanProbe () {
  if (jalanSekali) return
  jalanSekali = true
  log('=== MULAI PROBE ===')
  try {
    const conn = getMainConnection()
    if (!conn || !conn.user?.id) {
      log('FATAL: koneksi utama belum siap (getMainConnection kosong)')
      jalanSekali = false
      return
    }
    log(`koneksi ok user=${String(conn.user.id).replace(/:\d+/, '')}`)
    log(`tipe: fetchMessages=${typeof conn.newsletterFetchMessages} fetchUpdates=${typeof conn.newsletterFetchMessageUpdates} react=${typeof conn.newsletterReactMessage} metadata=${typeof conn.newsletterMetadata} subscribed=${typeof conn.newsletterSubscribed}`)

    // B. channel target: global.links dulu, lalu daftar langganan
    let channelId = String(global.links?.channelId || '').trim()
    log(`global.links.channelId=${channelId || '(kosong)'}`)
    if (!channelId.endsWith('@newsletter')) {
      try {
        const subs = await denganBatas(conn.newsletterSubscribed({}), 20000, 'newsletterSubscribed')
        log(`subscribed mentah=${JSON.stringify(subs || {}).slice(0, 600)}`)
        channelId = channelDariSubscribed(subs)
        log(`channel dari subscribed=${channelId || '(tidak ketemu)'}`)
      } catch (e) {
        log(`subscribed GAGAL: ${e?.message || e}`)
      }
    }
    if (!channelId.endsWith('@newsletter')) {
      log('SELESAI: tidak ada channel target untuk diuji')
      return
    }

    // C. fetch isi pesan (jalur yang dipakai spamrch)
    let pesan = null
    try {
      pesan = await denganBatas(conn.newsletterFetchMessages('jid', channelId, 10), 20000, 'fetchMessages')
      log(`fetchMessages OK jumlah=${Array.isArray(pesan) ? pesan.length : typeof pesan}`)
    } catch (e) {
      log(`fetchMessages GAGAL: ${e?.message || e}`)
    }

    // D. alternatif updates
    try {
      const up = await denganBatas(conn.newsletterFetchMessageUpdates(channelId, { count: 10 }), 20000, 'fetchUpdates')
      log(`fetchUpdates OK jumlah=${Array.isArray(up) ? up.length : typeof up}`)
      if (!Array.isArray(pesan) || !pesan.length) pesan = up
    } catch (e) {
      log(`fetchUpdates GAGAL: ${e?.message || e}`)
    }

    if (!Array.isArray(pesan) || !pesan.length) {
      log('SELESAI: tidak ada pesan untuk diuji reaction (fetch kosong/gagal)')
      return
    }

    // E. reaction inti: react lalu hapus (pesanan terakhir yang ada)
    const target = pesan[pesan.length - 1]
    const serverId = String(target?.key?.server_id || target?.key?.id || '')
    log(`target pesan id=${target?.key?.id || '?'} server_id=${serverId || '?'} fromMe=${Boolean(target?.key?.fromMe)}`)
    if (!serverId) {
      log('SELESAI: server_id tidak tersedia — reaction tak bisa diuji')
      return
    }
    try {
      await denganBatas(conn.newsletterReactMessage(channelId, serverId, '🧪'), 20000, 'react')
      log('react 🧪: SUKSES (query diterima server)')
    } catch (e) {
      log(`react 🧪 GAGAL: ${e?.message || e}`)
      log('SELESAI (reaction gagal — lihat error di atas)')
      return
    }
    await new Promise(r => setTimeout(r, 1500))
    try {
      await denganBatas(conn.newsletterReactMessage(channelId, serverId, ''), 20000, 'unreact')
      log('unreact: SUKSES (emoji dihapus kembali)')
    } catch (e) {
      log(`unreact GAGAL: ${e?.message || e}`)
    }
    log('=== PROBE_SELESAI: semua langkah inti tercatat ===')
  } catch (e) {
    log(`FATAL: ${e?.message || e}`)
  } finally {
    jalanSekali = false
  }
}

/* Auto-run saat boot: tunggu koneksi siap (retry10× tiap5 detik). */
let percobaan = 0
const timerBoot = setInterval(() => {
  percobaan += 1
  const conn = getMainConnection()
  if (conn?.user?.id) {
    clearInterval(timerBoot)
    jalankanProbe().catch(e => log(`FATAL async: ${e?.message || e}`))
  } else if (percobaan >= 10) {
    clearInterval(timerBoot)
    log('FATAL: koneksi tidak siap setelah50 detik — probe batal')
  }
}, 5000)

async function handler (m) {
  jalanSekali = false
  await m.reply('🧪 Probe spamrch dijalankan ulang — lihat /data/t207-probe.log')
  jalankanProbe().catch(e => log(`FATAL async: ${e?.message || e}`))
}

handler.help = ['t207probe']
handler.tags = ['owner']
handler.command = /^t207probe$/i
handler.rowner = true
handler.description = 'Jalankan ulang probe diagnostic spamrch (alat uji Task207)'

export default handler
