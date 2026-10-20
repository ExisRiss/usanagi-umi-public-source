// Live: menu ringkas → tombol fitur → kartu opsi. Semua memakai pesan yang sama.
import './lib/platform/env.js'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { TelegramClient } from './lib/platform/telegram/client.js'
import { botToken, MAIN_BOT_ID } from './lib/platform/telegram/bots.js'
import { CommandRouter, createCallback } from './lib/platform/telegram/router.js'
import { registerCommands } from './lib/platform/telegram/commands.js'
import { migrate } from './lib/platform/db.js'

migrate()
global.plugins = {}
const root = path.resolve('plugins')
const files = []
;(function walk(dir){ for (const e of fs.readdirSync(dir,{withFileTypes:true})) { const f=path.join(dir,e.name); if(e.isDirectory()) walk(f); else if(/\.(js|mjs)$/.test(e.name)) files.push(f) } })(root)
for (const file of files) { const key = path.relative(root, file).replace(/\\/g,'/'); try { const mod = await import(pathToFileURL(file).href); if (mod.default) global.plugins[key] = mod.default } catch {} }

const CHAT = '-1004393450575'
const client = new TelegramClient(botToken(MAIN_BOT_ID))
const out = []
const log = (...a) => { const line = a.join(' '); out.push(line); console.log(line) }
const router = new CommandRouter({ logger: { error() {}, warn() {}, info() {} } })
registerCommands(router, { logger: { error() {}, warn() {}, info() {} } })
const ids = []
let sends = 0, edits = 0
const record = {
  sendMessage: async (c, t, o) => { sends += 1; const r = await client.sendMessage(c, t, o); ids.push(r.message_id); return r },
  editMessageText: async (c, id, t, o) => { edits += 1; return client.editMessageText(c, id, t, o) },
  editMessageCaption: async (c, id, t, o) => { edits += 1; return client.editMessageCaption(c, id, t, o) },
  upload: async (k, c, b, o) => { sends += 1; const r = await client.upload(k, c, b, o); ids.push(r.message_id); return r },
  sendVideo: async (c, v, o) => { sends += 1; const r = await client.sendVideo(c, v, o); ids.push(r.message_id); return r },
  setMessageReaction: (...a) => client.setMessageReaction(...a),
  deleteMessage: (...a) => client.deleteMessage(...a),
}
const ctx = {
  userId: 'web:owner', platform: 'telegram', platformUserId: '8932455242', chatId: CHAT,
  role: 'owner', username: 'owner', displayName: 'Owner', chatType: 'supergroup', chatTitle: 'BackUp',
  env: process.env, client: record, publicBaseUrl: 'https://api.gwenna.my.id', botId: 'main',
  send: (t, o) => record.sendMessage(CHAT, t, o),
  edit: (id, t, o) => record.editMessageText(CHAT, id, t, o),
  editCaption: (id, t, o) => record.editMessageCaption(CHAT, id, t, o),
  answerCallback: async () => ({}), sendChatAction: async () => ({}), deleteMessage: async () => true,
  refreshIdentity() {},
}
const { sendBanner } = await import('./lib/platform/telegram/banner.js')
ctx.sendBanner = options => sendBanner(ctx, options)

await router.commands.get('menu').handler(ctx, { name: 'menu', args: [], text: '' }, null)
const menuId = ids.at(-1)
log('MENU terkirim id=', menuId, '| total pesan', ids.length)
const press = async (view, label) => {
  const token = createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view } })
  const before = { sends, edits }
  await router.handleCallback({ ...ctx, callbackMessageId: menuId }, { data: `cb:${token}`, id: 'uji' })
  log(`${label} (${view}) → sends+${sends - before.sends} edits+${edits - before.edits}`)
}
await press('fn:brat', 'TOMBOL FITUR BRAT')
await press('opt:bratvid', 'KARTU OPSI bratvid')
await press('fn:unduh:2', 'HALAMAN 2 UNDUH')
await press('fn:stiker', 'TOMBOL FITUR STIKER')
for (const id of [...new Set(ids)]) { try { await client.deleteMessage(CHAT, id) } catch {} }
log('BERSIH', [...new Set(ids)].length, 'pesan')
fs.writeFileSync('live8.txt', out.join('\n'))
console.log('LIVE8_SELESAI')
process.exit(0)
