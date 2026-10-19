/**
 * Jembatan plugin WhatsApp → Telegram.
 *
 * Tujuannya BUKAN sistem kedua: plugin yang sama (`global.plugins`, dimuat
 * `main.js`) dijalankan dengan `m`/`conn` bergaya WhatsApp yang diterjemahkan ke
 * Telegram. Jadi fitur baru yang ditambah di `plugins/**` otomatis ikut muncul
 * di Telegram tanpa menulis ulang.
 *
 * Yang tidak bisa dipaksakan tetap jujur: fitur yang memang butuh socket
 * WhatsApp (metadata grup, admin grup, button native WA, stiker WA) melempar
 * error yang jelas — bukan tombol palsu.
 */
import { audit } from '../audit.js'

const COMMAND_TIMEOUT_MS = 45000
const MAX_TEXT = 3800

/** Perintah yang sudah ditangani platform (JANGAN dijalankan plugin). */
const PLATFORM_OWNED = new Set([
  'start', 'menu', 'help', 'profile', 'status', 'jadibot', 'tourl', 'to-url',
  'server', 'saham', 'stock', 'rpg', 'panel', 'admin', 'reseller', 'link', 'unlink',
  'fitur', 'ping', 'ping2',
])

export function pluginEntries(plugins = globalThis.plugins) {
  if (!plugins || typeof plugins !== 'object') return []
  return Object.entries(plugins).filter(([, plugin]) => plugin && typeof plugin.handler === 'function')
}

/** Daftar seluruh perintah plugin: `{ total, commands: { name: key } }`. */
export function pluginCatalog(plugins = globalThis.plugins) {
  const commands = new Map()
  const tags = new Map()
  for (const [key, plugin] of pluginEntries(plugins)) {
    const list = commandNames(plugin)
    for (const name of list) if (!commands.has(name)) commands.set(name, key)
    const pluginTags = Array.isArray(plugin.tags) ? plugin.tags : []
    for (const tag of pluginTags) tags.set(tag, (tags.get(tag) || 0) + 1)
  }
  return { total: pluginEntries(plugins).length, commands, tags }
}

export function commandNames(plugin) {
  const pattern = plugin?.command
  if (!pattern) return []
  if (typeof pattern === 'string') return [pattern.toLowerCase()]
  if (pattern instanceof RegExp) {
    // Regex plugin biasanya `^a$|^b$`; ambil literal yang aman untuk dicocokkan.
    const source = String(pattern.source || '')
    const found = [...source.matchAll(/[\w-]{2,}/g)].map(match => match[0].toLowerCase())
    return [...new Set(found)]
  }
  if (Array.isArray(pattern)) return pattern.map(item => String(item).toLowerCase())
  return []
}

export function findPlugin(name, plugins = globalThis.plugins) {
  const wanted = String(name || '').toLowerCase()
  if (!wanted) return null
  for (const [key, plugin] of pluginEntries(plugins)) {
    const pattern = plugin.command
    if (pattern instanceof RegExp) {
      if (pattern.test(wanted)) return { key, plugin }
      continue
    }
    if (commandNames(plugin).includes(wanted)) return { key, plugin }
  }
  return null
}

/**
 * Ubah format WhatsApp (*tebal*, _miring_, `kode`) ke HTML Telegram.
 * Seluruh teks di-escape lebih dulu, jadi plugin tidak bisa menyuntik HTML.
 */
export function waToHtml(value) {
  let text = String(value ?? '')
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  text = text.replace(/```([\s\S]+?)```/g, (_, code) => `<pre>${code}</pre>`)
  text = text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>')
  text = text.replace(/\*([^*\n]{1,200})\*/g, '<b>$1</b>')
  text = text.replace(/_([^_\n]{1,200})_/g, '<i>$1</i>')
  text = text.replace(/`([^`\n]{1,200})`/g, '<code>$1</code>')
  return text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT)}…` : text
}

/**
 * `conn` bergaya Baileys, tetapi semua pengiriman diarahkan ke chat Telegram.
 * Semua method asinkron; plugin yang memanggil tanpa `await` tetap aman karena
 * promise-nya tidak ditolak (error ditangkap ke audit).
 */
function makeConn(ctx, message) {
  const botJid = '9990000000001@s.whatsapp.net'
  const reply = (chat, text, quoted, options) => sendAdapter(ctx, text, options)
  return {
    user: { jid: botJid, id: botJid, name: 'Usanagi Umi (Telegram)' },
    reply,
    sendMessage: (chat, content, options) => sendAdapter(ctx, content, options),
    sendFile: (chat, content, options) => sendAdapter(ctx, content, options),
    getName: () => ctx.displayName || ctx.username || 'Pengguna',
    groupMetadata: async () => {
      throw new Error('Fitur grup WhatsApp tidak tersedia di Telegram.')
    },
    presenceSubscribe: async () => {},
    readMessages: async () => {},
    // Dipakai beberapa plugin sebagai cache per-koneksi.
    ev: { on: () => {} },
  }
}

export function makeMessage(ctx, message) {
  const chat = `999${String(ctx.platformUserId || ctx.userId || '').replace(/\D/g, '').padStart(10, '0')}@s.whatsapp.net`
  const m = {
    key: { remoteJid: chat, fromMe: false, id: String(message?.message_id || '') },
    chat,
    sender: chat,
    fromMe: false,
    text: String(message?.text || ''),
    isGroup: false,
    pushName: ctx.displayName || ctx.username || 'Pengguna',
    mentionedJid: [],
    quoted: null,
    react: emoji => {
      try { globalThis.__umiTelegramReact?.(ctx.chatId, message?.message_id, emoji) } catch {}
      return Promise.resolve()
    },
    reply: (text, options) => sendAdapter(ctx, text, options),
  }
  return m
}

async function sendAdapter(ctx, content, options = {}) {
  try {
    if (content == null) return null
    if (typeof content === 'string' || typeof content === 'number') {
      return await ctx.send(waToHtml(content))
    }
    if (content.text || content.caption) {
      const caption = waToHtml(content.caption || content.text)
      if (content.image) return sendMedia(ctx, 'photo', content.image, caption)
      if (content.video) return sendMedia(ctx, 'video', content.video, caption)
      if (content.document) return sendMedia(ctx, 'document', content.document, caption, content.fileName)
      if (content.audio) return sendMedia(ctx, 'document', content.audio, caption, content.fileName || 'audio')
      if (content.sticker) throw new Error('Stiker WhatsApp tidak didukung di Telegram.')
      return await ctx.send(caption)
    }
    if (content.image) return sendMedia(ctx, 'photo', content.image, '')
    if (content.video) return sendMedia(ctx, 'video', content.video, '')
    if (content.document) return sendMedia(ctx, 'document', content.document, '', content.fileName)
    if (content.sticker) throw new Error('Stiker WhatsApp tidak didukung di Telegram.')
    return await ctx.send(waToHtml(JSON.stringify(content).slice(0, 500)))
  } catch (error) {
    await ctx.send(`⚠️ ${waToHtml(error.message || 'Gagal mengirim hasil.')}`)
    return null
  }
}

async function sendMedia(ctx, kind, source, caption = '', filename = null) {
  const client = ctx.client
  if (!client) throw new Error('Klien Telegram tidak tersedia.')
  let buffer = null
  let name = filename
  const url = typeof source === 'string' ? source : source?.url
  if (Buffer.isBuffer(source)) buffer = source
  else if (url) {
    // Hanya URL http(s) yang diambil; file lokal dibaca dari disk.
    if (/^https?:\/\//i.test(url)) {
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
      if (!response.ok) throw new Error(`Media balas HTTP ${response.status}.`)
      buffer = Buffer.from(await response.arrayBuffer())
    } else {
      const fs = await import('node:fs')
      if (!fs.existsSync(url)) throw new Error('Berkas media tidak ditemukan.')
      buffer = fs.readFileSync(url)
    }
  }
  if (!buffer) throw new Error('Media tidak punya isi yang bisa dikirim.')
  if (buffer.length > 45 * 1024 * 1024) throw new Error('Media lebih dari 45 MB, Telegram menolak.')
  const ext = (name || url || '').split('.').pop()?.toLowerCase() || ''
  const mime = kind === 'photo' ? 'image/jpeg'
    : kind === 'video' ? 'video/mp4'
    : ext === 'pdf' ? 'application/pdf' : 'application/octet-stream'
  return client.upload(kind, ctx.chatId, buffer, {
    filename: name || `media.${ext || 'bin'}`,
    mime, caption,
  })
}

/**
 * Jalankan plugin WA di Telegram.
 * @returns {{handled:boolean, plugin?:string, error?:string}}
 */
export async function runPluginOnTelegram(ctx, parsed) {
  const name = String(parsed?.name || '').toLowerCase()
  if (!name || PLATFORM_OWNED.has(name)) return { handled: false }
  const found = findPlugin(name)
  if (!found) return { handled: false }

  const { key, plugin } = found
  // Plugin khusus owner tetap dijaga RBAC dari database, bukan dari teks.
  if (plugin.owner && !['owner', 'developer'].includes(ctx.role)) {
    await ctx.send('⛔ Fitur ini khusus owner.')
    audit({ actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'telegram.plugin.denied', resource: name, result: 'denied', meta: { role: ctx.role } })
    return { handled: true, plugin: key, denied: true }
  }

  const message = { message_id: ctx.messageId || null, text: `/${name} ${(parsed.args || []).join(' ')}`.trim() }
  const m = makeMessage(ctx, message)
  const conn = makeConn(ctx, message)
  const options = {
    conn,
    text: (parsed.args || []).join(' '),
    args: parsed.args || [],
    usedPrefix: '/',
    command: name,
    prefix: '/',
    isOwner: ['owner', 'developer'].includes(ctx.role),
    isROwner: ctx.role === 'owner',
    isAdmin: false,
    isBotAdmin: false,
    isPrems: ['owner', 'developer', 'admin'].includes(ctx.role),
    participants: [],
    groupMetadata: null,
    __telegram: true,
  }

  const started = Date.now()
  // Timer wajib dibersihkan, kalau tidak proses bot tertahan 45 detik setiap
  // kali plugin selesai (dan tes ikut menggantung).
  let timer = null
  try {
    await Promise.race([
      Promise.resolve(plugin.handler(m, options)),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(Object.assign(new Error('Fitur tidak selesai dalam 45 detik.'), { timeout: true })), COMMAND_TIMEOUT_MS)
        timer.unref?.()
      }),
    ])
    audit({
      actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'telegram.plugin.run', resource: name, meta: { plugin: key, ms: Date.now() - started },
    })
    return { handled: true, plugin: key }
  } catch (error) {
    const raw = String(error?.message || error || 'gagal')
    const waOnly = /WhatsApp|socket|Baileys|grup|group/i.test(raw)
    await ctx.send(waOnly
      ? `⚠️ <b>${name}</b> butuh fitur WhatsApp yang tidak ada di Telegram.\nCoba dari bot WhatsApp.`
      : `❌ <b>/${name}</b> gagal.\n<code>${waToHtml(raw).slice(0, 300)}</code>`)
    audit({
      actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'telegram.plugin.run', resource: name, result: 'failed',
      meta: { plugin: key, error: raw.slice(0, 200), waOnly },
    })
    return { handled: true, plugin: key, error: raw }
  } finally {
    if (timer) clearTimeout(timer)
  }
}

/** Ringkasan untuk `/fitur`: total plugin & perintah yang bisa dipanggil. */
export function featureReport() {
  const catalog = pluginCatalog()
  const names = [...catalog.commands.keys()].sort()
  return {
    plugins: catalog.total,
    commands: names.length,
    names,
    tags: Object.fromEntries([...catalog.tags.entries()].sort((a, b) => b[1] - a[1])),
  }
}
