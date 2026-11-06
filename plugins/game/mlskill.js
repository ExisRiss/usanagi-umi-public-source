/* By AlzRiss - Usanagi Umi AI
 *
 * ML SKILL — Arena Kotak (game Fanny) — main langsung di WhatsApp (rich HTML).
 *
 * Perintah:
 *   {prefix}mlskill           buka game di dalam chat
 *
 * Dikirim sebagai rich message (HTML primitive) memakai pola yang sama
 * dengan trading-wa / game-sonic: pesan forward bertanda tangan, jadi
 * WhatsApp langsung merendernya di chat tanpa perlu unduh berkas.
 *
 * Isi HTML sepenuhnya mandiri: canvas + joystick + tombol kabel, tanpa
 * aset eksternal, tanpa internet. Skor & progres disimpan di localStorage.
 */

import { kirimForwardSigned } from '../../lib/awang-rich-forward.js'
import { ML_SKILL_HTML } from './mlskill-html.js'

const JUDUL = '⚔️ ML SKILL · ARENA KOTAK'

let handler = async (m, { conn, usedPrefix }) => {
  try {
    await kirimForwardSigned(conn, m.chat, ML_SKILL_HTML, JUDUL)
    await m.react('🎮').catch(() => {})
  } catch (error) {
    const reason = error && error.message ? error.message : String(error)
    console.error('[MLSKILL]', reason)
    await m.react('❌').catch(() => {})
    await m.reply(
      [
        '❌ Gagal membuka game ML Skill di WhatsApp.',
        '',
        `Alasan: ${reason}`,
        '',
        `Coba lagi: ${usedPrefix || '.'}mlskill`,
      ].join('\n')
    )
  }
}

handler.help = ['mlskill']
handler.tags = ['game']
handler.command = /^mlskill$/i
handler.limit = false

export default handler
