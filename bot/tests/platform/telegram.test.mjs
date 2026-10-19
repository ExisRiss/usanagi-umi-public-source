import test from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, env, mockTelegram, messageUpdate } from './helpers.mjs'
import { TelegramClient, TelegramError, isTelegramToken } from '../../lib/platform/telegram/client.js'
import * as bots from '../../lib/platform/telegram/bots.js'
import { CommandRouter, createCallback, consumeCallback } from '../../lib/platform/telegram/router.js'
import { TelegramAdapter } from '../../lib/platform/telegram/poller.js'
import { resolveContext } from '../../lib/platform/identity.js'
import { listAudit } from '../../lib/platform/audit.js'

const GOOD_TOKEN = '123456:mock-token-abcdefghijklmnop'

function ctxFor(platformUserId, role = 'user') {
  const identity = resolveContext({ platform: 'telegram', platformUserId, env: env() })
  return {
    platform: 'telegram', platformUserId: String(platformUserId), userId: identity.userId,
    role: identity.role, sent: [],
    send(text) { this.sent.push(text); return Promise.resolve({ message_id: 1 }) },
    answerCallback() { return Promise.resolve(true) },
  }
}

test('format token diperiksa; token invalid ditolak sebelum request', async () => {
  assert.equal(isTelegramToken(GOOD_TOKEN), true)
  assert.equal(isTelegramToken('abc'), false)
  assert.equal(isTelegramToken('123:pendek'), false)
  assert.throws(() => new TelegramClient('bukan-token'), /Format token/)
})

test('getMe valid mengembalikan identitas; token salah → 401 dan tidak bocor', async () => {
  await freshDb()
  await env()
  const tg = await mockTelegram({ token: GOOD_TOKEN })
  try {
    const client = new TelegramClient(GOOD_TOKEN, { base: tg.base })
    const me = await client.getMe()
    assert.equal(me.username, 'uji_bot')
    assert.equal(me.id, 8870227075)

    const wrong = new TelegramClient('999999:salah-token-abcdefghijkl', { base: tg.base })
    await assert.rejects(() => wrong.getMe(), error => {
      assert.equal(error.status, 401)
      assert.equal(String(error.message).includes('salah-token'), false, 'token tidak muncul di pesan error')
      return true
    })
  } finally { await tg.close() }
})

test('rate limit 429 membawa retryAfter', async () => {
  await freshDb()
  const tg = await mockTelegram({ token: GOOD_TOKEN })
  tg.state.rateLimitOnce = true
  try {
    const client = new TelegramClient(GOOD_TOKEN, { base: tg.base })
    await assert.rejects(() => client.getUpdates({ timeout: 0 }), error => {
      assert.equal(error.status, 429)
      assert.equal(error.retryAfter, 1)
      return true
    })
    const updates = await client.getUpdates({ timeout: 0 })
    assert.deepEqual(updates, [])
  } finally { await tg.close() }
})

test('simpan token: terenkripsi, tersamar, dan token salah ditolak', async () => {
  await freshDb()
  const tg = await mockTelegram({ token: GOOD_TOKEN })
  try {
    const record = await bots.saveBot({
      token: GOOD_TOKEN, label: 'Uji', ownerUserId: 'system', scope: 'platform', enabled: true,
      env: env({ TELEGRAM_API_BASE: tg.base }),
    })
    assert.equal(record.username, 'uji_bot')
    assert.equal(record.botId, '8870227075')
    assert.equal(record.tokenSet, true)
    assert.equal(JSON.stringify(record).includes('mock-token'), false, 'token tidak dikembalikan API')

    const { platformDb } = await import('../../lib/platform/db.js')
    const row = platformDb().prepare('SELECT token_cipher FROM telegram_bots WHERE id = ?').get(record.id)
    assert.match(row.token_cipher, /^v1:[0-9a-f]{24}:/, 'token tersimpan sebagai ciphertext AES-256-GCM')
    assert.equal(row.token_cipher.includes('mock-token'), false)

    await assert.rejects(() => bots.saveBot({
      token: '111111:token-palsu-abcdefghijklmnop', label: 'Palsu',
      env: env({ TELEGRAM_API_BASE: tg.base }),
    }), /Token ditolak Telegram/)

    const validated = await bots.validateBot(record.id, env({ TELEGRAM_API_BASE: tg.base }))
    assert.equal(validated.ok, true)
    const revoked = bots.revokeBot(record.id, { userId: 'system' })
    assert.equal(revoked.status, 'revoked')
    assert.equal(revoked.tokenSet, false)
    await assert.rejects(() => bots.validateBot(record.id, env({ TELEGRAM_API_BASE: tg.base })), /sudah dicabut/)
  } finally { await tg.close() }
})

test('poller memproses /start, menolak /admin untuk user, dan tidak dobel update', async () => {
  const db = await freshDb()
  const updates = [
    messageUpdate({ updateId: 1, userId: 1001, text: '/start' }),
    messageUpdate({ updateId: 2, userId: 1001, text: '/admin' }),
    messageUpdate({ updateId: 3, userId: 1001, text: '/tidakada' }),
  ]
  const tg = await mockTelegram({ token: GOOD_TOKEN, updates })
  try {
    const record = await bots.saveBot({
      token: GOOD_TOKEN, label: 'Uji poller', ownerUserId: 'system', scope: 'platform',
      enabled: true, env: env({ TELEGRAM_API_BASE: tg.base }),
    })
    const adapter = new TelegramAdapter({ botRowId: record.id, env: env({ TELEGRAM_API_BASE: tg.base }), logger: { log() {}, warn() {}, error() {} } })
    adapter.prepare()
    await adapter.init()
    assert.equal(adapter.router.commands.size >= 12, true)

    const processed = await adapter.pollOnce({ timeout: 0 })
    assert.equal(processed, 3)
    const texts = tg.state.sent.map(item => item.text).join('\n')
    assert.match(texts, /Usanagi Umi AI · Multi-App/)
    assert.match(texts, /Akses ditolak/)
    assert.match(texts, /Perintah tidak dikenali/)

    // update yang sama (Telegram retry) tidak dieksekusi dua kali
    const before = tg.state.sent.length
    tg.state.offset = 0
    await adapter.pollOnce({ timeout: 0 })
    assert.equal(tg.state.sent.length, before, 'tidak ada pesan ganda untuk update_id yang sama')
    assert.equal(db.prepare('SELECT count(*) n FROM telegram_updates').get().n, 3)

    const denied = listAudit({ action: 'telegram.command.denied' })
    assert.equal(denied.total, 1)
    assert.equal(denied.items[0].meta.required, 'telegram.status')
  } finally { await tg.close() }
})

test('poller: owner bisa /admin, dan koneksi pulih setelah error 502', async () => {
  const db = await freshDb()
  const e = env({ TELEGRAM_API_BASE: '', TELEGRAM_OWNER_IDS: '2002' })
  const updates = [messageUpdate({ updateId: 10, userId: 2002, text: '/admin', extra: {} })]
  const tg = await mockTelegram({ token: GOOD_TOKEN, updates })
  e.TELEGRAM_API_BASE = tg.base
  try {
    const record = await bots.saveBot({ token: GOOD_TOKEN, label: 'Owner bot', ownerUserId: 'system', scope: 'platform', enabled: true, env: e })
    const adapter = new TelegramAdapter({ botRowId: record.id, env: e, logger: { log() {}, warn() {}, error() {} } })
    adapter.prepare()
    await adapter.init()
    tg.state.failUpdates = 'Bad Gateway'
    await assert.rejects(() => adapter.pollOnce({ timeout: 0 }), /Bad Gateway/)
    tg.state.failUpdates = null
    const count = await adapter.pollOnce({ timeout: 0 })
    assert.equal(count, 1)
    assert.match(tg.state.sent.at(-1).text, /ADMIN/)
    assert.equal(db.prepare('SELECT status FROM telegram_bots WHERE id = ?').get(record.id).status, 'online')
  } finally { await tg.close() }
})

test('tombol callback terikat pemilik, sekali pakai, dan kedaluwarsa', async () => {
  await freshDb()
  const owner = ctxFor(3003)
  const other = ctxFor(4004)
  const token = createCallback({ userId: owner.userId, platform: 'telegram', platformUserId: '3003', action: 'menu.status' })
  assert.throws(() => consumeCallback(token, { userId: other.userId, platform: 'telegram', platformUserId: '4004' }), /milik pengguna lain/)
  const consumed = consumeCallback(token, { userId: owner.userId, platform: 'telegram', platformUserId: '3003' })
  assert.equal(consumed.action, 'menu.status')
  assert.throws(() => consumeCallback(token, { userId: owner.userId, platform: 'telegram', platformUserId: '3003' }), /sudah dipakai/)

  const { platformDb } = await import('../../lib/platform/db.js')
  const expired = createCallback({ userId: owner.userId, platform: 'telegram', platformUserId: '3003', action: 'menu.help' })
  platformDb().prepare('UPDATE platform_callbacks SET expires_at = ? WHERE token = ?').run(Date.now() - 1, expired)
  assert.throws(() => consumeCallback(expired, { userId: owner.userId, platform: 'telegram', platformUserId: '3003' }), /kedaluwarsa/)
})

test('router tidak mengeksekusi handler saat izin kurang', async () => {
  await freshDb()
  const router = new CommandRouter({ logger: { error() {} } })
  let ran = false
  router.register({ name: 'rahasia', permission: 'server.control', handler: async () => { ran = true } })
  const ctx = ctxFor(5005)
  const result = await router.handleUpdate(ctx, messageUpdate({ updateId: 1, userId: 5005, text: '/rahasia' }))
  assert.equal(ran, false)
  assert.equal(result.denied, true)
  assert.match(ctx.sent.join(' '), /Akses ditolak/)

  const owner = ctxFor(6006, 'owner')
  resolveContext({ platform: 'telegram', platformUserId: 6006, env: env({ TELEGRAM_OWNER_IDS: '6006' }) })
  const allowedCtx = { ...owner, role: 'owner' }
  await router.handleUpdate(allowedCtx, messageUpdate({ updateId: 2, userId: 6006, text: '/rahasia' }))
  assert.equal(ran, true)
})

test('rate limit per pengguna menghentikan spam', async () => {
  await freshDb()
  const router = new CommandRouter({ logger: { error() {} } })
  router.register({ name: 'ping', handler: async ctx => { ctx.sent.push('pong') } })
  const ctx = ctxFor(7007)
  for (let index = 0; index < 30; index += 1) {
    await router.handleUpdate(ctx, messageUpdate({ updateId: index + 1, userId: 7007, text: '/ping' }))
  }
  await router.handleUpdate(ctx, messageUpdate({ updateId: 999, userId: 7007, text: '/ping' }))
  assert.match(ctx.sent.at(-1), /Terlalu banyak permintaan/)
})
