#!/usr/bin/env node
/**
 * Uji regresi untuk error feedback 15 Okt 2026:
 *   "Cannot assign to read only property 'reply' of object '#<WebMessageInfo>'"
 *   at lib/imported-compat.js:103
 *
 * Sebab: lib/simple.js mendefinisikan `reply`/`react` pada prototype
 * WebMessageInfo TANPA `writable` (read-only). runImportedFeature membuat
 * `Object.create(m)` lalu menugaskan `message.reply = ...` -> TypeError di
 * strict mode, sehingga SEMUA plugin impor mati sebelum handler berjalan.
 *
 * Uji ini mereplikasi persis kondisi itu: objek pesan tiruan dengan properti
 * read-only di prototype, lalu menjalankan plugin-plugin yang dilaporkan.
 *
 * Pakai: node tools/test-imported-compat.mjs
 */
const BOT = '/home/user/usanagi-umi-public-source/bot'
process.chdir(BOT)

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

/** Tiruan WebMessageInfo: prototype punya reply/react read-only (seperti simple.js). */
class FakeMessage {}
Object.defineProperties(FakeMessage.prototype, {
  reply: { value() { return null } }, // tanpa writable -> read-only
  react: { value() { return null } },
})

const CHAT = '628999888777@g.us'
const SENDER = '628111222333@s.whatsapp.net'

function makeM() {
  const m = new FakeMessage()
  Object.assign(m, {
    chat: CHAT,
    sender: SENDER,
    text: '.suratcinta',
    pushName: 'Penguji',
    name: 'Penguji',
    key: { remoteJid: CHAT, id: 'uji1', fromMe: false },
    mentionedJid: [],
    quoted: null,
  })
  return m
}

function makeExtra(replies) {
  const conn = {
    user: { id: '628000@s.whatsapp.net' },
    store: {},
    async reply(chat, text, quoted, opts) {
      replies.push(String(text))
      return { key: {} }
    },
    async sendMessage(chat, payload) {
      replies.push(payload?.text ? String(payload.text) : `[${Object.keys(payload || {})[0]}]`)
      return { key: {} }
    },
    async sendFile() { return { key: {} } },
  }
  return {
    conn,
    text: '',
    command: '',
    args: [],
    usedPrefix: '.',
    isOwner: false,
    isAdmin: false,
    isBotAdmin: false,
    isPrems: false,
    botScope: 'jadibot:628111222333',
  }
}

// Prasyarat global yang biasanya disiapkan runtime
global.plugins = global.plugins || {}
global.db = global.db || { data: { users: {}, chats: {}, settings: {} } }

console.log('\n════ 1. Reproduksi kondisi read-only ════')
{
  const probe = new FakeMessage()
  const child = Object.create(probe)
  let threw = null
  try {
    // Penugasan gaya lama yang bermasalah (file ini ESM = strict mode)
    child.reply = async () => {}
  } catch (e) { threw = e }
  check('penugasan biasa ke properti warisan read-only memang melempar', threw instanceof TypeError, threw?.message?.slice(0, 60))

  let okDefine = true
  try {
    Object.defineProperty(child, 'reply', { value: async () => 'ok', writable: true, configurable: true })
    okDefine = typeof child.reply === 'function'
  } catch { okDefine = false }
  check('Object.defineProperty menembus read-only', okDefine)
}

console.log('\n════ 2. Plugin yang dilaporkan pengguna ════')
const plugins = [
  ['suratcinta', 'plugins/pelengkap/rimuru/fun/rimuru-suratcinta.js', 'suratcinta'],
  ['pack', 'plugins/pelengkap/rimuru/sticker/rimuru-pack.js', 'pack'],
  ['playstore', 'plugins/pelengkap/rimuru/general/rimuru-playstore.js', 'playstore'],
  ['fakeff', 'plugins/pelengkap/rimuru/canvas/rimuru-fakeff.js', 'fakeff'],
]

for (const [label, rel, command] of plugins) {
  const replies = []
  let mod
  try {
    mod = (await import(`${BOT}/${rel}`)).default
  } catch (e) {
    check(`.${label} bisa dimuat`, false, e.message.slice(0, 60))
    continue
  }
  const extra = makeExtra(replies)
  extra.command = command
  extra.text = command === 'fakeff' ? 'fadil' : ''
  extra.args = command === 'fakeff' ? ['fadil'] : []

  let error = null
  let result
  try {
    result = await mod(makeM(), extra)
  } catch (e) { error = e }

  check(`.${label} tidak melempar TypeError read-only`, !(error instanceof TypeError && /read only/.test(error.message)), error?.message?.slice(0, 70) || 'bersih')
  check(`.${label} selesai tanpa crash`, !error || /API|jaringan|network|fetch|atas|limit/i.test(error.message), error ? error.message.slice(0, 70) : `hasil=${JSON.stringify(result)}`)

  const joined = replies.join(' ')
  const compatError = /Cannot assign to read only/.test(joined)
  check(`.${label} tidak membalas dengan error kompatibilitas`, !compatError, joined.slice(0, 80))
}

console.log(`\n════ ${pass} lulus, ${fail} gagal ════\n`)
process.exit(fail ? 1 : 0)
