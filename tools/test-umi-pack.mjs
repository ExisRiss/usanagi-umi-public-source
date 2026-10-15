#!/usr/bin/env node
/**
 * Uji Paket Fitur Umi (Umi Usanagi AI) — fitur baru hasil tulis ulang bersih:
 * downloader/media, AI/utilitas, RPG/game, grup. Plus cek tabrakan perintah
 * terhadap seluruh plugin yang ada.
 *
 * Pakai: node tools/test-umi-pack.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const BOT = '/home/user/usanagi-umi-public-source/bot'
process.chdir(BOT)

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

const GROUP = '628999888777@g.us'
const PRIV = '628111222333@s.whatsapp.net'
const JID = '628111222333@s.whatsapp.net'

function makeM(replies, { chat = GROUP, args = [], text = '' } = {}) {
  return {
    chat, sender: JID, args, text,
    mentionedJid: [], quoted: null, key: { remoteJid: chat, id: 'uji' },
    async reply(t) { replies.push(String(t)); return { key: {} } },
    async react() { return null },
  }
}
function makeConn(sent) {
  return {
    async reply(chat, text) { sent.push({ text: String(text) }); return { key: {} } },
    async sendMessage(chat, payload) { sent.push({ payload }); return { key: {} } },
    async sendFile(chat, url, name, caption) { sent.push({ file: { url: String(url).slice(0, 90), name, caption: String(caption || '').slice(0, 90), isBuffer: Buffer.isBuffer(url) } }); return { key: {} } },
    async groupMetadata() {
      return { subject: 'Grup Uji', participants: [{ id: JID, admin: 'admin' }, { id: '2@s.whatsapp.net' }], creation: 1700000000, announce: false }
    },
    async groupSettingUpdate(chat, setting) { sent.push({ setting }); return {} },
  }
}

const load = (rel) => import(`${BOT}/${rel}`)

// ── Prasyarat runtime ─────────────────────────────────────────────────
const { installRpgGlobals } = await load('lib/rpg/awang-rpg-globals.js')
installRpgGlobals()
global.db = { data: { users: { [JID]: { money: 1000 } }, chats: {}, settings: {} } }

console.log('\n════ 1. Semua plugin paket bisa dimuat ════')
const pack = [
  ['plugins/downloader/umi-grab.js', 'umigrab'],
  ['plugins/tools/umi-qr.js', 'umiqr'],
  ['plugins/tools/umi-ringkas.js', 'umiringkas'],
  ['plugins/tools/umi-terjemah.js', 'umiterjemah'],
  ['plugins/tools/umi-sandi.js', 'umisandi'],
  ['plugins/rpg/umi-misi.js', 'umimisi'],
  ['plugins/game/umi-tebakangka.js', 'umitebak'],
  ['plugins/group/umi-polling.js', 'umipolling'],
  ['plugins/group/umi-grup.js', 'umigrup'],
  ['plugins/main/umi-fitur.js', 'umifitur'],
]
const handlers = {}
for (const [rel, cmd] of pack) {
  try {
    const h = (await load(rel)).default
    handlers[cmd] = h
    const re = h.command
    const matches = re instanceof RegExp ? re.test(cmd) : (Array.isArray(re) ? re.includes(cmd) : re === cmd)
    check(`.${cmd} termuat & regex cocok`, typeof h === 'function' && matches, rel.split('/').pop())
  } catch (e) {
    check(`.${cmd} termuat`, false, e.message.slice(0, 70))
  }
}

console.log('\n════ 2. Tidak ada tabrakan perintah dengan plugin lama ════')
{
  const mine = new Set(pack.map(([, c]) => c))
  const files = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.js')) files.push(full)
    }
  }
  walk(path.join(BOT, 'plugins'))
  const collisions = []
  for (const file of files) {
    if (pack.some(([rel]) => file.endsWith(rel.replace('plugins/', '')))) continue
    const src = fs.readFileSync(file, 'utf8')
    const cmdMatch = src.match(/handler\.command\s*=\s*(\/[^/\n]+\/[a-z]*|\[[^\]]*\]|'[^']*'|"[^"]*")/)
    if (!cmdMatch) continue
    for (const cmd of mine) {
      let hit = false
      try {
        if (cmdMatch[1].startsWith('/')) {
          const re = eval(cmdMatch[1])
          hit = re.test(cmd)
        } else if (cmdMatch[1].startsWith('[')) {
          hit = cmdMatch[1].includes(`'${cmd}'`) || cmdMatch[1].includes(`"${cmd}"`)
        } else {
          hit = cmdMatch[1].includes(cmd)
        }
      } catch {}
      if (hit) collisions.push(`${cmd} ↔ ${path.relative(BOT, file)}`)
    }
  }
  check('tidak ada perintah paket yang ditangkap plugin lama', collisions.length === 0, collisions.slice(0, 3).join('; ') || `${files.length} berkas plugin diperiksa`)
}

console.log('\n════ 3. Downloader & media ════')
{
  const sent = []
  const replies = []
  await handlers.umigrab(makeM(replies), { conn: makeConn(sent), text: 'https://i.ytimg.com/vi/I0HzqpXjgJI/hqdefault.jpg', usedPrefix: '.', command: 'umigrab' })
  const file = sent.find(s => s.file)
  check('.umigrab mengunduh gambar & mengirim sebagai berkas', Boolean(file?.file.isBuffer), file?.file.name)

  const replies2 = []
  await handlers.umigrab(makeM(replies2), { conn: makeConn([]), text: 'http://127.0.0.1:3854/api/health', usedPrefix: '.', command: 'umigrab' })
  check('.umigrab menolak URL privat/loopback', /privat|loopback/.test(replies2.join(' ')), replies2.join(' ').slice(0, 60))

  const sent3 = []
  await handlers.umiqr(makeM([]), { conn: makeConn(sent3), text: 'https://alzriss-comunity.vercel.app', usedPrefix: '.', command: 'umiqr' })
  check('.umiqr membuat QR', /quickchart/.test(sent3.find(s => s.file)?.file.url || ''), sent3.find(s => s.file)?.file.url)
}

console.log('\n════ 4. AI & utilitas ════')
{
  const { summarize } = await load('plugins/tools/umi-ringkas.js')
  const article = Array.from({ length: 8 }, (_, i) =>
    `Pemerintah kota Makassar membangun taman baru di kawasan pantai untuk warga. Taman ini menyediakan jalur sepeda, area bermain anak, dan ruang terbuka hijau yang luas bagi masyarakat. Fasilitas taman meliputi lampu tenaga surya serta tempat duduk yang nyaman untuk pengunjung setiap hari.`,
  ).join(' ')
  const { summary, total, picked } = summarize(article, 2)
  check('.umiringkas memadatkan teks', picked === 2 && summary.length < article.length && /Makassar|taman/i.test(summary), `${total} kalimat → ${picked}`)

  const replies = []
  await handlers.umiterjemah(makeM(replies), { text: 'en Selamat pagi dunia', usedPrefix: '.', command: 'umiterjemah' })
  check('.umiterjemah id→en (API publik)', /morning/i.test(replies.join(' ')), replies.join(' ').split('\n').pop()?.slice(0, 60))

  const replies2 = []
  await handlers.umisandi(makeM(replies2), { args: ['24'], usedPrefix: '.', command: 'umisandi' })
  const pw = replies2.join(' ').match(/`([^`]+)`/)?.[1] || ''
  check('.umisandi menghasilkan sandi 24 karakter semua kelas', pw.length === 24 && /[a-z]/.test(pw) && /[A-Z]/.test(pw) && /\d/.test(pw) && /[^a-zA-Z0-9]/.test(pw), `${pw.length} kar`)
}

console.log('\n════ 5. RPG & game terhubung ════')
{
  const { tebakSessions } = await load('plugins/game/umi-tebakangka.js')
  global.db.data.users[JID] = { money: 1000 }

  const replies = []
  const m0 = makeM(replies)
  await handlers.umitebak(m0, { args: [], usedPrefix: '.', command: 'umitebak' })
  check('.umitebak memulai permainan', /TEBAK ANGKA/.test(replies.join(' ')))

  const session = tebakSessions.get(`${GROUP}:${JID}`)
  check('status misi: plays bertambah', global.db.data.users[JID].umimisi?.plays === 1, `plays=${global.db.data.users[JID].umimisi?.plays}`)

  const replies2 = []
  await handlers.umitebak(makeM(replies2), { args: [String(session.number)], usedPrefix: '.', command: 'umitebak' })
  const user = global.db.data.users[JID]
  check('tebakan benar → menang + hadiah money', /BENAR/.test(replies2.join(' ')) && user.money === 6000, `money=1000→${user.money}`)
  check('status misi: wins bertambah', user.umimisi?.wins === 1)

  const replies3 = []
  await handlers.umimisi(makeM(replies3), { args: [], usedPrefix: '.', command: 'umimisi' })
  check('.umimisi menampilkan progres', /MISI HARIAN/.test(replies3.join(' ')) && /Menang/.test(replies3.join(' ')))

  const replies4 = []
  await handlers.umimisi(makeM(replies4), { args: ['klaim', 'semua'], usedPrefix: '.', command: 'umimisi' })
  check('.umimisi klaim membayar misi selesai saja', /HADIAH MISI DIKLAIM/.test(replies4.join(' ')) && user.money === 6000 + 5000 + 10000, `money→${user.money}`)
}

console.log('\n════ 6. Grup ════')
{
  const sent = []
  const replies = []
  await handlers.umipolling(makeM(replies), { conn: makeConn(sent), text: 'Makan siang apa? | Nasi Padang | Mie Ayam | Bakso', usedPrefix: '.', command: 'umipolling' })
  const poll = sent.find(s => s.payload?.poll)
  check('.umipolling mengirim poll native', poll?.payload.poll.values.length === 3 && poll.payload.poll.selectableCount === 1, poll?.payload.poll.name)

  const replies2 = []
  await handlers.umipolling(makeM(replies2, { chat: PRIV }), { conn: makeConn([]), text: 'Judul? | A | B', usedPrefix: '.', command: 'umipolling' })
  check('.umipolling menolak chat pribadi', /hanya untuk grup/.test(replies2.join(' ')))

  const replies3 = []
  await handlers.umigrup(makeM(replies3), { conn: makeConn([]), args: ['info'], usedPrefix: '.', command: 'umigrup', isAdmin: true, isOwner: false })
  check('.umigrup info membaca metadata', /Grup Uji/.test(replies3.join(' ')) && /Anggota: 2/.test(replies3.join(' ')))

  const sent4 = []
  const replies4 = []
  await handlers.umigrup(makeM(replies4), { conn: makeConn(sent4), args: ['tutup'], usedPrefix: '.', command: 'umigrup', isAdmin: true, isOwner: false })
  check('.umigrup tutup mengunci grup (admin)', sent4.some(s => s.setting === 'announcement') && /ditutup/.test(replies4.join(' ')))

  const replies5 = []
  await handlers.umigrup(makeM(replies5), { conn: makeConn([]), args: ['tutup'], usedPrefix: '.', command: 'umigrup', isAdmin: false, isOwner: false })
  check('.umigrup tutup menolak bukan-admin', /Hanya admin/.test(replies5.join(' ')))
}

console.log('\n════ 7. Menu paket ════')
{
  const replies = []
  await handlers.umifitur(makeM(replies), { usedPrefix: '.' })
  const out = replies.join(' ')
  check('.umifitur menampilkan brand Umi Usanagi AI', /Umi Usanagi AI/.test(out) && /umigrab/.test(out) && /umimisi/.test(out) && /umipolling/.test(out))
}

console.log(`\n════ ${pass} lulus, ${fail} gagal ════\n`)
process.exit(fail ? 1 : 0)
