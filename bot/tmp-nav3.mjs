// Live: /start (banner + menu teks) lalu tombol menu → pesan yang sama diedit.
import './lib/platform/env.js'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { TelegramClient } from './lib/platform/telegram/client.js'
import { botToken, MAIN_BOT_ID } from './lib/platform/telegram/bots.js'
import { CommandRouter, createCallback } from './lib/platform/telegram/router.js'
import { registerCommands } from './lib/platform/telegram/commands.js'
import { sendBanner } from './lib/platform/telegram/banner.js'
import { migrate } from './lib/platform/db.js'

migrate()
global.plugins = {}
for (const dir of ['game', 'fun', 'sticker']) {
  const base = path.resolve('plugins', dir)
  if (!fs.existsSync(base)) continue
  for (const name of fs.readdirSync(base).slice(0, 30)) {
    try { const mod = await import(pathToFileURL(path.join(base, name)).href); global.plugins[`${dir}/${name}`] = mod.default || mod } catch {}
  }
}
const CHAT = '-1004393450575'
const client = new TelegramClient(botToken(MAIN_BOT_ID))
const router = new CommandRouter({ logger: { error() {}, warn() {}, info() {} } })
registerCommands(router, { logger: { error() {}, warn() {}, info() {} } })
const ids = []
let sends = 0, edits = 0
const record = {
  sendMessage: async (c, t, o) => { sends += 1; const r = await client.sendMessage(c, t, o); ids.push(r.message_id); return r },
  sendVideo: async (c, v, o) => { sends += 1; const r = await client.sendVideo(c, v, o); ids.push(r.message_id); return r },
  upload: async (kind, c, b, o) => { sends += 1; const r = await client.upload(kind, c, b, o); ids.push(r.message_id); return r },
  editMessageText: async (c, id, t, o) => { edits += 1; return client.editMessageText(c, id, t, o) },
  editMessageCaption: async (c, id, t, o) => { edits += 1; return client.editMessageCaption(c, id, t, o) },
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
ctx.sendBanner = options => sendBanner(ctx, options)
const before = { sends, edits }
await router.commands.get('start').handler(ctx, { name: 'start', args: [], text: '' }, null)
const menuTextId = ids.at(-1)
console.log('START: pesan=', sends - before.sends, 'edits=', edits - before.edits, 'id menu teks=', menuTextId, 'ids=', ids.join(','))
const b = { sends, edits }
const token = createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view: 'status' } })
await router.handleCallback({ ...ctx, callbackMessageId: menuTextId }, { data: `cb:${token}`, id: 'uji' })
console.log('NAV status: sends+', sends - b.sends, 'edits+', edits - b.edits)
const c2 = { sends, edits }
const token2 = createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view: 'cat:game:2' } })
await router.handleCallback({ ...ctx, callbackMessageId: menuTextId }, { data: `cb:${token2}`, id: 'uji2' })
console.log('NAV cat game hal 2: sends+', sends - c2.sends, 'edits+', edits - c2.edits)
for (const id of [...new Set(ids)]) { try { await client.deleteMessage(CHAT, id) } catch {} }
console.log('BERSIH', [...new Set(ids)].length)
process.exit(0)
