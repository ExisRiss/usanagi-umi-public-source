/**
 * React to a WhatsApp Channel post using the currently connected bot account.
 * Main bot commands use the main WhatsApp number; commands on a Jadibot use
 * that Jadibot session's WhatsApp number. No third-party reaction API is used.
 */

const MAX_EMOJIS = 5
const INVISIBLE = /[\u0000-\u001F\u007F-\u009F\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/g
const EMOJI_ONLY = /^[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\u200D\uFE0F\u20E3#*0-9]+$/u

function usage(prefix, command) {
  return [
    '❌ Kirim link *pesan* WhatsApp Channel dan satu emoji.',
    '',
    `Contoh:`,
    `${prefix}${command} https://whatsapp.com/channel/0029Vb.../436 🎉`,
    '',
    'Link harus berakhir dengan nomor post, misalnya `/436`.',
  ].join('\n')
}

function parseInput(value) {
  const input = String(value || '').replace(INVISIBLE, '').trim()
  const match = input.match(/(?:https?:\/\/)?(?:www\.)?whatsapp\.com\/channel\/([A-Za-z0-9_-]+)\/(\d{1,24})(?=$|[/?#\s])/i)
  if (!match) return null

  const after = input.slice((match.index || 0) + match[0].length).trim()
  const emojis = after
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)

  return { invite: match[1], postId: match[2], emojis, url: match[0] }
}

function validEmoji(value) {
  return value.length > 0 && value.length <= 32 && EMOJI_ONLY.test(value)
}

function newsletterId(metadata) {
  return String(metadata?.id || '').trim()
}

async function withTimeout(task, timeoutMs) {
  let timer
  try {
    return await Promise.race([
      Promise.resolve(task),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('timeout')), timeoutMs) }),
    ])
  } finally {
    clearTimeout(timer)
  }
}

function publicError(error) {
  const message = String(error?.message || error || '')
  if (/not.?follow|subscribe|newsletter|permission|forbidden|unauthori[sz]ed/i.test(message)) {
    return 'Nomor bot belum bisa memberi reaksi pada Channel ini. Pastikan nomor bot mengikuti Channel dan post masih aktif.'
  }
  if (/timeout|timed out|network|connection/i.test(message)) {
    return 'Koneksi WhatsApp sedang bermasalah. Coba lagi beberapa saat lagi.'
  }
  return 'Reaction tidak dapat dikirim. Pastikan link post Channel benar dan masih aktif.'
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const parsed = parseInput(text)
  if (!parsed || !parsed.emojis.length) return m.reply(usage(usedPrefix, command))

  if (parsed.emojis.length > MAX_EMOJIS) {
    return m.reply(`❌ Maksimal ${MAX_EMOJIS} emoji dipisahkan dengan koma.`)
  }
  if (!parsed.emojis.every(validEmoji)) {
    return m.reply('❌ Format emoji tidak valid. Pisahkan emoji dengan koma, contoh: 🎉,⚡')
  }

  // WhatsApp records one reaction per account on one Channel post. A list of
  // reactions needs distinct bot accounts; sending them sequentially from one
  // Jadibot would only replace the previous reaction.
  if (parsed.emojis.length > 1) {
    return m.reply(
      '❌ Satu nomor bot/Jadibot hanya dapat menyimpan *satu* reaction pada satu post Channel. '
      + 'Untuk beberapa emoji diperlukan beberapa nomor Jadibot berbeda.'
    )
  }

  if (typeof conn?.newsletterMetadata !== 'function' || typeof conn?.newsletterReactMessage !== 'function') {
    return m.reply('❌ Koneksi bot ini belum mendukung reaction WhatsApp Channel. Hubungkan ulang bot lalu coba lagi.')
  }

  const emoji = parsed.emojis[0]
  await m.reply('⏳ Mengirim reaction dari nomor bot ini...')

  try {
    const metadata = await withTimeout(
      conn.newsletterMetadata('invite', parsed.invite),
      15000
    )
    const channelId = newsletterId(metadata)
    if (!channelId.endsWith('@newsletter')) throw new Error('newsletter not found')

    await conn.newsletterReactMessage(channelId, parsed.postId, emoji)
    await m.reply(`✅ Reaction ${emoji} berhasil dikirim dari nomor bot ini.`)
  } catch (error) {
    // Keep provider/network diagnostics out of chats and logs containing user
    // links; users receive an actionable, non-sensitive result instead.
    return m.reply(`❌ ${publicError(error)}`)
  }
}

handler.help = ['rch2 <link-post-channel> <emoji>']
handler.tags = ['tools']
handler.command = /^(rch2|reactchannel2|reactch2)$/i
// The reaction represents the bot's own WhatsApp account, so only its owner
// may instruct it to react to a Channel post.
handler.owner = true

export default handler
