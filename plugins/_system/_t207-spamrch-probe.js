/**
 * PROBE DIAGNOSTIK — Task207 spamrch (ALAT UJI, bukan fitur).
 *
 * Membuktikan JALUR ASLI /spamrch di koneksi bot sungguhan, berurutan:
 *   A. tipe method newsletter* (fetch/react/metadata/subscribed)
 *   B. target channel: retry newsletterSubscribed → kalau kosong,
 *      BUAT channel uji sendiri (newsletterCreate) — nanti dihapus lagi
 *   C. reaction langsung ke pesan (🧪 lalu hapus) — bukti reaction server
 *   D. GLUE TICK ASLI: kirim pesan uji → jalankanTickSekali() dengan
 *      lewatiFromMe:false → reaction harus terkirim (terkirimBaru ≥1)
 *   E. channel uji dihapus (newsletterDelete) — tak ada jejak
 *
 * Log detail (termasuk error asli) → /data/t207-probe.log + console
 * [T207-PROBE]. Pemanggilan: otomatis saat boot (retry koneksi) dan
 * perintah owner .t207probe.
 */

import fs from 'node:fs'
import { getMainConnection } from '../../lib/bot-connection-context.js'
import { buatStateSpam, jalankanTickSekali } from '../misc/spamrch.js'

const OUT = '/data/t207-probe.log'
let jalanSekali = false

function log (baris) {
  try {
    fs.appendFileSync(OUT, `[${new Date().toISOString()}] ${baris}\n`)
  } catch { /* tetap coba console */ }
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

function tidur (ms) { return new Promise(r => setTimeout(r, ms)) }

function channelDariSubscribed (mentah) {
  const teks = JSON.stringify(mentah || '')
  const semua = teks.match(/\d{8,25}@newsletter/g) || []
  return semua[0] || ''
}

async function dapatChannel (conn) {
  // B1. langganan bot — retry3× (query WMex bisa "Connection Closed" saat awal)
  for (let i = 0; i < 3; i += 1) {
    try {
      const subs = await denganBatas(conn.newsletterSubscribed({}), 20000, 'subscribed')
      log(`subscribed ok (percobaan ${i + 1}) mentah=${JSON.stringify(subs || {}).slice(0, 500)}`)
      const jid = channelDariSubscribed(subs)
      if (jid) return { channelId: jid, buatanSendiri: false }
    } catch (e) {
      log(`subscribed gagal (percobaan ${i + 1}): ${e?.message || e}`)
      await tidur(4000)
    }
  }
  // B2. buat channel uji sendiri
  try {
    const dibuat = await denganBatas(
      conn.newsletterCreate('Umi Probe207', 'Alat uji jalur reaction — Task207, dihapus otomatis'),
      25000, 'newsletterCreate'
    )
    const channelId = String(dibuat?.id || '').trim()
    log(`newsletterCreate → ${channelId || JSON.stringify(dibuat).slice(0, 200)}`)
    if (channelId.endsWith('@newsletter')) return { channelId, buatanSendiri: true }
    log('newsletterCreate: id tidak valid')
  } catch (e) {
    log(`newsletterCreate GAGAL: ${e?.message || e}`)
  }
  return null
}

async function jalankanProbe () {
  if (jalanSekali) return
  jalanSekali = true
  log('=== MULAI PROBE v2 ===')
  let channelIdUji = null
  try {
    const conn = getMainConnection()
    if (!conn || !conn.user?.id) {
      log('FATAL: koneksi utama belum siap')
      jalanSekali = false
      return
    }
    log(`koneksi ok user=${String(conn.user.id).replace(/:\d+/, '')}`)
    log(`tipe: fetchMessages=${typeof conn.newsletterFetchMessages} fetchUpdates=${typeof conn.newsletterFetchMessageUpdates} react=${typeof conn.newsletterReactMessage} metadata=${typeof conn.newsletterMetadata} subscribed=${typeof conn.newsletterSubscribed} create=${typeof conn.newsletterCreate} delete=${typeof conn.newsletterDelete}`)

    // B. channel target
    let channelId = String(global.links?.channelId || '').trim()
    log(`global.links.channelId=${channelId || '(kosong)'}`)
    let buatanSendiri = false
    if (!channelId.endsWith('@newsletter')) {
      const hasil = await dapatChannel(conn)
      if (!hasil) {
        log('SELESAI: tidak ada channel target (langganan kosong + create gagal)')
        return
      }
      channelId = hasil.channelId
      buatanSendiri = hasil.buatanSendiri
    }
    if (buatanSendiri) channelIdUji = channelId
    log(`channel uji=${channelId} (buatan sendiri: ${buatanSendiri})`)

    // C. reaction langsung (bukti server menerima reaction)
    let pesan = null
    try {
      pesan = await denganBatas(conn.newsletterFetchMessages('jid', channelId, 10), 20000, 'fetchMessages')
      log(`fetchMessages OK jumlah=${Array.isArray(pesan) ? pesan.length : typeof pesan}`)
    } catch (e) {
      log(`fetchMessages GAGAL: ${e?.message || e}`)
    }
    if (Array.isArray(pesan) && pesan.length) {
      const target = pesan[pesan.length - 1]
      const serverId = String(target?.key?.server_id || target?.key?.id || '')
      log(`target langsung id=${target?.key?.id || '?'} server_id=${serverId || '?'} fromMe=${Boolean(target?.key?.fromMe)}`)
      if (serverId) {
        try {
          await denganBatas(conn.newsletterReactMessage(channelId, serverId, '🧪'), 20000, 'react')
          log('react 🧪 langsung: SUKSES')
          await tidur(1500)
          await denganBatas(conn.newsletterReactMessage(channelId, serverId, ''), 20000, 'unreact')
          log('unreact: SUKSES')
        } catch (e) {
          log(`react/unreact langsung GAGAL: ${e?.message || e}`)
        }
      }
    }

    // D. GLUE TICK ASLI — kirim pesan uji lalu jalankanTickSekali
    try {
      const kirim = await denganBatas(
        conn.sendMessage(channelId, { text: `🧪 Uji glue spamrch ${new Date().toISOString()} — pesan otomatis, channel uji dihapus setelah tes.` }),
        20000, 'sendMessageUji'
      )
      log(`pesan uji terkirim id=${kirim?.key?.id || '?'}`)
      await tidur(2500)
      const state = buatStateSpam({ invite: 'probe', channelId, emojis: ['🧪', '✅'], owner: 'probe' })
      // Semua pesan LAMA ditandai seen — hanya pesan uji yang boleh kena tick.
      try {
        const ulang = await denganBatas(conn.newsletterFetchMessages('jid', channelId, 15), 20000, 'fetchUji')
        const idUji = kirim?.key?.id
        for (const p of ulang || []) {
          if (p?.key?.id && p.key.id !== idUji) state.seen.add(p.key.id)
        }
        log(`seen disiapkan=${state.seen.size} (pesan uji id=${idUji || '?'})`)
      } catch (e) {
        log(`fetch seen GAGAL: ${e?.message || e}`)
      }
      const hasilTick = await jalankanTickSekali(state, [{ conn, type: 'main' }], { lewatiFromMe: false })
      log(`jalankanTickSekali → status=${hasilTick.status} aksi=${hasilTick.aksi ?? '-'} terkirimBaru=${hasilTick.terkirimBaru ?? '-'} lastError=${state.lastError || '(kosong)'}`)
      if (hasilTick.terkirimBaru >= 1) {
        log('GLUE_TICK: SUKSES — reaction terkirim lewat jalur asli /spamrch')
        await tidur(1200)
        // bersihkan reaction uji kalau ada yang menempel (best effort)
        try {
          const list = await denganBatas(conn.newsletterFetchMessages('jid', channelId, 15), 15000, 'fetchBersih')
          const uji = (list || []).find(p => p?.key?.id === kirim?.key?.id)
          const sid = String(uji?.key?.server_id || uji?.key?.id || '')
          if (sid) await denganBatas(conn.newsletterReactMessage(channelId, sid, ''), 15000, 'unreactUji')
        } catch { /* best effort */ }
      } else {
        log('GLUE_TICK: GAGAL — lihat lastError di atas')
      }
    } catch (e) {
      log(`GLUE_TICK GAGAL: ${e?.message || e}`)
    }

    log('=== PROBE_SELESAI ===')
  } catch (e) {
    log(`FATAL: ${e?.message || e}`)
  } finally {
    // E. channel uji dibuat sendiri → hapus supaya tak ada jejak
    if (channelIdUji) {
      try {
        const conn = getMainConnection()
        await denganBatas(conn.newsletterDelete(channelIdUji), 25000, 'newsletterDelete')
        log(`channel uji dihapus: ${channelIdUji}`)
      } catch (e) {
        log(`newsletterDelete GAGAL: ${e?.message || e} — hapus manual channel "Umi Probe207"`)
      }
    }
    jalanSekali = false
  }
}

/* Auto-run saat boot: tunggu koneksi siap (retry12× tiap5 detik). */
let percobaan = 0
const timerBoot = setInterval(() => {
  percobaan += 1
  const conn = getMainConnection()
  if (conn?.user?.id) {
    clearInterval(timerBoot)
    // beri jeda agar koneksi stabil sebelum query WMex pertama
    setTimeout(() => { jalankanProbe().catch(e => log(`FATAL async: ${e?.message || e}`)) }, 8000)
  } else if (percobaan >= 12) {
    clearInterval(timerBoot)
    log('FATAL: koneksi tidak siap setelah60 detik — probe batal')
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
