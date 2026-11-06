let handler = async (m, { conn }) => {
  // all() sudah retry internal (GROUP_LIST_CHANGED); ini jaring pengaman
  // terakhir supaya .list tidak pernah memunculkan error mentah ke chat.
  let groups
  for (let i = 0; i < 3; i += 1) {
    try {
      groups = await conn.groupFetchAllParticipating()
      break
    } catch (error) {
      if (error?.code !== 'GROUP_LIST_CHANGED' || i === 2) throw error
      await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)))
    }
  }
  let list = Object.values(groups)

  if (!list.length) throw 'Bot belum masuk grup manapun.'

  let teks = `📋 *LIST GRUP BOT*\n\n`
  for (let i = 0; i < list.length; i++) {
    let g = list[i]
    teks += `${i + 1}. *${g.subject}*\n`
    teks += `   🆔 ID: ${g.id}\n`
    teks += `   👥 Member: ${g.participants?.length || 0}\n\n`
  }

  teks += `Total Grup: ${list.length}`
  m.reply(teks)
}

handler.help = ['listgc']
handler.tags = ['owner']
handler.command = /^list(gc|grup)?$/i
handler.limit = false
handler.owner = true 

export default handler