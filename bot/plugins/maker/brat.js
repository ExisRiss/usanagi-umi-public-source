let handler = async (m, { conn, text }) => {
    text = m.quoted?.text || text
    if (!text) return m.reply('Reply / masukkan teks')

    await m.react('🕒')

    try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 15000)

        const res = await fetch(
            `https://apiii-xrina.my.id/maker/brat?text=${encodeURIComponent(text)}`,
            { signal: controller.signal }
        )
        clearTimeout(timeout)

        if (!res.ok) throw new Error(`API ${res.status}`)

        const buffer = Buffer.from(await res.arrayBuffer())
        if (buffer.length < 100) throw new Error('Response terlalu kecil')

        await conn.sendSticker(
            m.chat,
            buffer,
            m,
            {
                packname: global.stickpack || global.namebot,
                packpublish: global.stickauth || global.author
            }
        )

        await m.react('✅')
    } catch (e) {
        console.error('[brat]', e.message || e)
        await m.react('❌')
        m.reply('Gagal membuat sticker. Coba lagi nanti.')
    }
}

handler.help = ['brat <text>']
handler.tags = ['sticker']
handler.command = /^brat$/i
handler.limit = true
handler.group = true

export default handler