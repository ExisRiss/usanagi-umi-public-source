#!/usr/bin/env node
/**
 * Uji fitur .ytplay / .ytp (plugins/music/play3.js).
 *
 * Menjalankan handler ASLI dengan koneksi tiruan, lalu memeriksa amplop pesan
 * HTML yang dikirim. Amplop itu yang menentukan apakah WhatsApp mau merender
 * player-nya, jadi bagian inilah yang paling perlu dikunci oleh uji.
 *
 * Pakai: node tools/test-ytplay.mjs
 */
import { randomUUID } from 'node:crypto'

const PLUGIN = '/home/user/usanagi-umi-public-source/bot/plugins/music/play3.js'

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

const { default: handler } = await import(PLUGIN)

/** Koneksi tiruan yang merekam apa pun yang dikirim bot. */
function makeConn({ relayThrows = false } = {}) {
  const rec = { relay: [], sent: [], relayed: false }
  const conn = {
    user: { id: '628123@s.whatsapp.net' },
    recorded: rec,
    async relayMessage(chat, message, options) {
      if (relayThrows) throw new Error('relay tidak didukung (uji)')
      rec.relayed = true
      rec.relay.push({ chat, message, options })
    },
    async sendMessage(chat, payload) {
      rec.sent.push({ chat, payload })
      return { key: { id: randomUUID() } }
    },
  }
  return conn
}

function makeMessage(text) {
  const replies = []
  const reactions = []
  return {
    chat: '628999@s.whatsapp.net',
    sender: '628999@s.whatsapp.net',
    text,
    replies,
    reactions,
    async reply(t) {
      replies.push(String(t))
      return { key: { id: randomUUID() } }
    },
    async react(e) {
      reactions.push(String(e))
      return null
    },
  }
}

const decodeUnified = (entry) => {
  const b64 = entry.message.botForwardedMessage.message.richResponseMessage.unifiedResponse.data
  return JSON.parse(Buffer.from(b64, 'base64').toString('utf8'))
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 1. Tanpa argumen: harus minta input, tanpa bilang "memproses" ═══')
{
  const conn = makeConn()
  const m = makeMessage('')
  await handler(m, { conn, text: '' })

  check('tidak mengirim pesan "sedang memproses" lebih dulu',
    !m.replies.some((r) => /memproses/i.test(r)),
    m.replies.length ? `balasan: "${m.replies[0].slice(0, 40)}…"` : 'tanpa balasan')
  check('menyertakan contoh pemakaian',
    m.replies.some((r) => /ytplay/i.test(r) && /youtu\.be|judul/i.test(r)))
  check('tidak mengirim pesan HTML', conn.recorded.relay.length === 0)
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 2. Alur normal: cari video → bangun player → kirim ═══')
let goodConn
{
  goodConn = makeConn()
  const m = makeMessage('Alan Walker Faded')
  const started = Date.now()
  await handler(m, { conn: goodConn, text: 'Alan Walker Faded' })
  const ms = Date.now() - started

  check('mengirim pesan HTML (relayMessage dipanggil)', goodConn.recorded.relayed, `${ms}ms`)
  check('tidak ada balasan error', !m.replies.some((r) => /Gagal|Error/i.test(r)),
    m.replies.filter((r) => /Gagal|Error/i.test(r))[0]?.slice(0, 60) || 'bersih')
  check('bereaksi ✅ di akhir', m.reactions.includes('✅'), m.reactions.join(' '))

  if (!goodConn.recorded.relay.length) {
    console.log('\n  ⚠️ relay tidak terpanggil — sisa pemeriksaan dilewati')
  } else {
    const entry = goodConn.recorded.relay[0]
    const rr = entry.message.botForwardedMessage?.message?.richResponseMessage
    const unified = decodeUnified(entry)
    const primitive = unified.sections?.[0]?.view_model?.primitive
    const html = primitive?.payload || ''

    console.log('\n  ── Amplop pesan ──')
    check('primitive memakai GenAIaeacdsnwHtmlPrimitive',
      primitive?.__typename === 'GenAIaeacdsnwHtmlPrimitive',
      primitive?.__typename)
    check('BUKAN primitif demo "DONOTUSE"',
      !JSON.stringify(entry.message).includes('DONOTUSE'))
    check('messageContextInfo.botMetadata.botResponseId ada',
      !!entry.message.messageContextInfo?.botMetadata?.botResponseId)
    check('submessages ada (judul di baris atas)',
      Array.isArray(rr?.submessages) && rr.submessages.length > 0,
      rr?.submessages?.[0]?.messageText?.slice(0, 40))
    check('forwardedAiBotMessageInfo.botJid ada',
      !!rr?.contextInfo?.forwardedAiBotMessageInfo?.botJid,
      rr?.contextInfo?.forwardedAiBotMessageInfo?.botJid)
    check('forwardingScore & forwardOrigin ada',
      rr?.contextInfo?.forwardingScore === 1 && rr?.contextInfo?.forwardOrigin === 4)
    check('opsi relay memakai messageId (bukan additionalAttributes)',
      typeof entry.options?.messageId === 'string' && !entry.options?.additionalAttributes,
      Object.keys(entry.options || {}).join(', '))
    check('response_id cocok dengan messageId',
      unified.response_id === entry.options?.messageId)
    check('struktur unified: GenAIUnifiedResponse → Section → SingleLayout',
      unified.__typename === 'GenAIUnifiedResponse' &&
      unified.sections?.[0]?.__typename === 'GenAIUnifiedResponseSection' &&
      unified.sections?.[0]?.view_model?.__typename === 'GenAISingleLayoutViewModel')

    console.log('\n  ── Isi player ──')
    check('HTML terkirim (>10 KB)', html.length > 10000, `${html.length} byte`)
    check('player punya elemen <video>', /id="videoPlayer"/.test(html))
    check('URL stream WebSocket ter-inject', /wss:\/\/stream\.kanara\.my\.id\/\?url=/.test(html))
    check('judul video benar-benar masuk',
      /Alan Walker/i.test(html), (html.match(/title: "([^"]{0,50})/) || [])[1])
    check('poster thumbnail ter-inject', /data:image\/jpeg;base64,/.test(html))
    check('nama channel asli (bukan "YouTube" polos)',
      !/channel: "YouTube"/.test(html),
      (html.match(/channel: "([^"]{0,40})/) || [])[1])
    check('durasi terisi', /duration: "\d+:\d\d"/.test(html),
      (html.match(/duration: "([^"]+)"/) || [])[1])
    check('player mengirim JS yang valid', (() => {
      const js = html.match(/<script>([\s\S]*)<\/script>/)?.[1]
      if (!js) return false
      try { new Function(js); return true } catch { return false }
    })())
  }
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 3. Klien tidak mendukung pesan HTML → fallback teks ═══')
{
  const conn = makeConn({ relayThrows: true })
  const m = makeMessage('Alan Walker Faded')
  await handler(m, { conn, text: 'Alan Walker Faded' })

  const fallback = m.replies.find((r) => /youtube\.com|youtu\.be/i.test(r))
  check('mengirim teks biasa sebagai cadangan', !!fallback,
    fallback ? fallback.replace(/\n/g, ' ').slice(0, 70) + '…' : 'tidak ada')
  check('fallback memuat tautan video', /https:\/\/www\.youtube\.com\/watch\?v=/.test(fallback || ''))
  check('tidak menampilkan pesan error mentah',
    !m.replies.some((r) => /^Gagal memutar/i.test(r)),
    m.replies.find((r) => /^Gagal memutar/i.test(r))?.slice(0, 50) || 'bersih')
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 4. Link langsung (bukan kata kunci) ═══')
{
  const conn = makeConn()
  const m = makeMessage('https://youtu.be/60ItHLz5WEA')
  await handler(m, { conn, text: 'https://youtu.be/60ItHLz5WEA' })
  const entry = conn.recorded.relay[0]
  const html = entry ? decodeUnified(entry).sections[0].view_model.primitive.payload : ''
  check('link langsung tetap diproses', conn.recorded.relayed)
  check('video yang benar yang di-embed', /60ItHLz5WEA/.test(html), 'id 60ItHLz5WEA')
}

console.log(`\n═══ ${pass} lulus, ${fail} gagal ═══\n`)
process.exit(fail ? 1 : 0)
