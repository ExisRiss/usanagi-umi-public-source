/**
 * Perintah Telegram. Semua handler memanggil service bersama (bukan data palsu).
 * Handler menerima `ctx` dari adapter: user/role sudah diverifikasi server.
 */
import { escapeHtml, createCallback } from './router.js'
import { can, permissionsOf } from '../roles.js'
import { audit } from '../audit.js'
import * as servers from '../servers.js'
import * as stock from '../stock.js'
import * as rpg from '../rpg.js'
import * as media from '../media.js'
import * as wa from '../wa.js'
import { consumeLinkCode, whatsappJidFor, getUser } from '../identity.js'

const rupiah = value => Number(value || 0).toLocaleString('id-ID', { maximumFractionDigits: 2 })
const as = value => `$AS ${rupiah(value)}`
const bytes = value => {
  const n = Number(value || 0)
  if (n >= 1024 ** 3) return `${(n / 1024 ** 3).toFixed(2)} GB`
  if (n >= 1024 ** 2) return `${(n / 1024 ** 2).toFixed(1)} MB`
  if (n >= 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${n} B`
}
const duration = ms => {
  const total = Math.max(0, Math.floor(Number(ms || 0) / 1000))
  const d = Math.floor(total / 86400)
  const h = Math.floor((total % 86400) / 3600)
  const m = Math.floor((total % 3600) / 60)
  return [d ? `${d}h` : '', h ? `${h}j` : '', `${m}m`].filter(Boolean).join(' ')
}
const roleBadge = role => ({ owner: '👑 owner', developer: '🛠 developer', admin: '🛡 admin', reseller: '🤝 reseller', user: '👤 user' }[role] || role)

function inline(rows) {
  return { inline_keyboard: rows }
}

function menuKeyboard(ctx, router) {
  const rows = []
  const add = (label, action, payload = null) => rows.push([{ text: label, callback_data: `cb:${createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action, payload })}` }])
  add('📊 Status', 'menu.status')
  add('👤 Profil', 'menu.profile')
  if (router.allowed(ctx, 'jadibot')) add('📱 Jadibot', 'menu.jadibot')
  if (router.allowed(ctx, 'saham')) add('💹 Saham', 'menu.saham')
  if (router.allowed(ctx, 'rpg')) add('🎮 RPG', 'menu.rpg')
  if (router.allowed(ctx, 'tourl')) add('🔗 To URL', 'menu.tourl')
  if (router.allowed(ctx, 'server')) add('🖥 Server', 'menu.server')
  if (router.allowed(ctx, 'admin')) add('⚙️ Admin', 'menu.admin')
  if (router.allowed(ctx, 'reseller')) add('🤝 Reseller', 'menu.reseller')
  add('❓ Bantuan', 'menu.help')
  // Susun dua tombol per baris agar nyaman di layar HP.
  const packed = []
  for (let index = 0; index < rows.length; index += 2) packed.push(rows.slice(index, index + 2).flat())
  return inline(packed)
}

async function statusText() {
  const main = wa.mainBotState()
  const sessions = wa.listSessions()
  const stockOk = stock.stockReady()
  const rpgStatus = rpg.storeStatus()
  const slots = servers.listSlots()
  const configured = slots.filter(slot => slot.configured)
  const lines = [
    '📊 <b>STATUS EKOSISTEM</b>',
    '',
    `<b>WhatsApp</b> · ${main.connected ? '🟢 terhubung' : main.registered ? '🟡 terdaftar / belum open' : '🔴 belum terdaftar'}`,
    `└ koneksi: <code>${main.connection}</code> · uptime ${duration(main.uptimeSeconds * 1000)}`,
    `└ sesi jadibot: <b>${sessions.length}</b>`,
    '',
    `<b>Telegram</b> · 🟢 adapter aktif`,
    `└ peran Anda: ${roleBadge(globalThis.__umiTelegramRole || 'user')}`,
    '',
    `<b>Saham (UMI TRADE)</b> · ${stockOk ? '🟢 siap' : '🔴 token game belum ada'}`,
    `<b>RPG</b> · ${rpgStatus.active ? `🟢 aktif · ${rpgStatus.canonicalUsers} profil` : '🔴 belum aktif'}`,
    `<b>Server</b> · ${configured.length}/${servers.MAX_SERVERS} slot terkonfigurasi`,
    '',
    `<i>Diperiksa ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB</i>`,
  ]
  return lines.join('\n')
}

export function registerCommands(router, { publicBaseUrl = '', logger = console } = {}) {
  const define = (name, config) => router.register({ name, ...config })

  define('start', {
    description: 'Mulai bot & tampilkan menu',
    handler: async (ctx) => {
      await ctx.send([
        '🌙 <b>Usanagi Umi AI · Multi-App</b>',
        '',
        `Halo <b>${escapeHtml(ctx.displayName || ctx.username || 'kamu')}</b>!`,
        'Satu ekosistem, dua antarmuka: WhatsApp + Telegram.',
        '',
        'Ketik /menu untuk mulai, /help untuk panduan.',
      ].join('\n'), { reply_markup: menuKeyboard(ctx, router) })
    },
  })

  define('menu', {
    description: 'Menu utama',
    handler: async (ctx) => {
      const counts = { public: 0, privileged: 0 }
      for (const item of router.list()) counts[router.allowed(ctx, item.name) ? 'public' : 'privileged'] += 1
      await ctx.send([
        '🌙 <b>MENU UTAMA</b>',
        '',
        `Peran kamu: ${roleBadge(ctx.role)}`,
        `Perintah tersedia: <b>${counts.public}</b>`,
        '',
        'Pilih menu di bawah, atau ketik perintah langsung:',
        '<code>/status /profile /jadibot /saham /rpg /tourl</code>',
        can(ctx.role, 'server.control') ? '<code>/server</code> · <code>/admin</code>' : '',
      ].filter(Boolean).join('\n'), { reply_markup: menuKeyboard(ctx, router) })
    },
  })

  define('help', {
    description: 'Panduan perintah',
    handler: async (ctx) => {
      await ctx.send([
        '❓ <b>PANDUAN</b>',
        '',
        '<b>Umum</b>',
        '/start — sambutan',
        '/menu — menu tombol',
        '/profile — identitas & tautan akun',
        '/status — status nyata layanan',
        '/link KODE — tautkan akun web ke Telegram',
        '/tourl — kirim foto/video, dapat tautan',
        '',
        '<b>Layanan</b>',
        '/jadibot — sesi WhatsApp milikmu',
        '/saham — pasar, portofolio, beli/jual',
        '/rpg — profil, inventori, papan peringkat, hadiah harian',
        '',
        '<b>Pengelola</b>',
        '/server — status & kontrol server (allowlist)',
        '/admin — bot Telegram, pengguna, audit',
        '/reseller — ringkasan reseller',
        '/panel — tautan dashboard web',
      ].join('\n'))
    },
  })

  define('status', {
    description: 'Status layanan',
    handler: async (ctx) => {
      await ctx.send(await statusText())
    },
  })

  define('profile', {
    description: 'Profil & tautan akun',
    permission: null,
    handler: async (ctx) => {
      const jid = whatsappJidFor(ctx.userId)
      const user = getUser(ctx.userId)
      const lines = [
        '👤 <b>PROFIL</b>',
        '',
        `Nama    : <b>${escapeHtml(ctx.displayName || '-')}</b>`,
        `Peran   : ${roleBadge(ctx.role)}`,
        `ID int. : <code>${escapeHtml(ctx.userId)}</code>`,
        `Telegram: <code>${escapeHtml(ctx.platformUserId)}</code>${ctx.username ? ` · @${escapeHtml(ctx.username)}` : ''}`,
        `WhatsApp: ${jid ? `<code>${jid.replace(/(\d{4})\d+(\d{3})/, '$1***$2')}</code> · tertaut` : '🔴 belum tertaut'}`,
        '',
      ]
      if (jid) {
        const profile = rpg.profile(jid)
        if (profile.hasProfile) {
          lines.push('<b>RPG</b>', `Level ${profile.level} · ${rupiah(profile.exp)} EXP · ${rupiah(profile.koin)} koin`, `Inventori: ${profile.inventoryCount} jenis (${rupiah(profile.totalItems)} item)`)
        } else lines.push('<i>Belum ada progres RPG untuk nomor ini.</i>')
      } else {
        lines.push('<i>Tautkan akun: buka dashboard web → “Tautkan Telegram”, lalu kirim /link KODE.</i>')
      }
      lines.push('', `Izin: <code>${permissionsOf(ctx.role).length}</code> aktif`)
      await ctx.send(lines.join('\n'))
    },
  })

  define('link', {
    description: 'Tautkan akun web (kode sekali pakai)',
    sensitive: true,
    handler: async (ctx, parsed) => {
      const code = parsed.args[0]
      if (!code) return ctx.send('Cara pakai: <code>/link UMI-XXXX-XXXX</code>\nBuat kode di dashboard web → menu <b>Tautkan Telegram</b>.')
      const result = consumeLinkCode(code, {
        platform: 'telegram', platformUserId: ctx.platformUserId, username: ctx.username,
      })
      await ctx.refreshIdentity()
      const jid = whatsappJidFor(result.user.id)
      await ctx.send([
        '✅ <b>Akun tertaut</b>',
        '',
        `Peran baru: ${roleBadge(result.user.role)}`,
        jid ? `WhatsApp: <code>${jid.replace(/(\d{4})\d+(\d{3})/, '$1***$2')}</code>` : 'WhatsApp: belum ada nomor pada akun ini',
        '',
        'Sekarang progres RPG, saham, dan sesi jadibot mengikuti akun web tersebut.',
      ].join('\n'), { reply_markup: menuKeyboard(ctx, router) })
    },
  })

  /* ─────────────── JADIBOT ─────────────── */
  define('jadibot', {
    description: 'Kelola sesi WhatsApp milikmu',
    permission: 'session.own',
    handler: async (ctx, parsed) => {
      const sub = String(parsed.args[0] || 'list').toLowerCase()
      const jid = whatsappJidFor(ctx.userId)
      const sessions = wa.sessionsForUser(ctx.userId, jid)
      const limit = wa.sessionLimits(ctx.role)

      if (sub === 'list' || sub === 'status') {
        const lines = ['📱 <b>JADIBOT WHATSAPP</b>', '', `Sesi kamu: <b>${sessions.length}</b> / batas ${limit}`, '']
        if (!sessions.length) {
          lines.push('<i>Belum ada sesi.</i>', '', 'Buat sesi lewat dashboard web → Jadibot, lalu pindai QR di sana.')
        } else {
          for (const row of sessions) lines.push(`• <code>${row.masked}</code> · ${row.email || 'tanpa email'} · dibuat ${row.createdAt ? new Date(row.createdAt).toLocaleDateString('id-ID') : '-'}`)
          lines.push('', 'Hentikan: /jadibot stop &lt;nomor&gt;')
        }
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'stop') {
        const number = String(parsed.args[1] || '').replace(/\D/g, '')
        const owned = sessions.find(row => row.number === number)
        if (!owned) return ctx.send('❌ Nomor itu bukan sesi milikmu.')
        const token = createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'jadibot.stop', payload: { number } })
        return ctx.send(`Hentikan sesi <code>${owned.masked}</code>?\nSesi berhenti tapi file sesi tetap ada.`, {
          reply_markup: inline([[{ text: '⏹ Hentikan', callback_data: `cb:${token}` }, { text: 'Batal', callback_data: `cb:${createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view: 'jadibot' } })}` }]]),
        })
      }
      await ctx.send('Pilihan: <code>/jadibot list</code> atau <code>/jadibot stop &lt;nomor&gt;</code>')
    },
  })

  /* ─────────────── SERVER ─────────────── */
  define('server', {
    description: 'Status & kontrol server (allowlist)',
    permission: 'server.read',
    sensitive: true,
    handler: async (ctx, parsed) => {
      const sub = String(parsed.args[0] || 'list').toLowerCase()
      const slots = servers.listSlots()

      if (sub === 'list' || !sub) {
        const lines = ['🖥 <b>SERVER SLOTS</b>', '', `Terpakai: ${slots.filter(s => s.configured).length}/${servers.MAX_SERVERS} · slot kosong tidak dipantau`, '']
        for (const slot of slots) {
          lines.push(slot.configured
            ? `<b>${slot.slot}</b>. ${escapeHtml(slot.name || 'tanpa nama')} · ${escapeHtml(slot.host)}`
            : `<b>${slot.slot}</b>. <i>kosong</i>`)
        }
        lines.push('', 'Detail: /server status &lt;slot&gt; · log: /server logs &lt;slot&gt;')
        if (can(ctx.role, 'server.control')) lines.push('Kontrol: /server restart &lt;slot&gt;')
        return ctx.send(lines.join('\n'))
      }

      if (!['status', 'logs', 'start', 'stop', 'restart'].includes(sub)) {
        return ctx.send('Aksi tidak dikenal. Pilihan: <code>list, status, logs, start, stop, restart</code>.')
      }
      const slotNumber = Number(parsed.args[1])
      if (!Number.isInteger(slotNumber) || slotNumber < 1 || slotNumber > servers.MAX_SERVERS) {
        return ctx.send(`Slot harus 1–${servers.MAX_SERVERS}. Contoh: <code>/server ${sub} 1</code>`)
      }
      const slot = servers.getSlot(slotNumber)
      if (!slot.configured) return ctx.send(`Slot <b>${slotNumber}</b> belum dikonfigurasi — tidak ada server yang bisa diperiksa.`)

      if (sub === 'status') {
        const status = await servers.serverStatus(slotNumber)
        const usage = status.usage || {}
        if (status.status === 'empty') return ctx.send(status.message)
        return ctx.send([
          `🖥 <b>${escapeHtml(status.name || `Server ${slotNumber}`)}</b>`,
          '',
          `Status  : <b>${escapeHtml(status.status)}</b> ${status.online ? '🟢' : '🔴'}`,
          status.latencyMs ? `Latensi : ${status.latencyMs} ms` : null,
          usage.uptimeMs ? `Uptime  : ${duration(usage.uptimeMs)}` : null,
          usage.cpuPercent !== undefined ? `CPU     : ${usage.cpuPercent.toFixed(1)}%` : null,
          usage.memoryBytes !== undefined ? `RAM     : ${bytes(usage.memoryBytes)}` : null,
          usage.diskBytes !== undefined ? `Disk    : ${bytes(usage.diskBytes)}` : null,
          status.message ? `\n<i>${escapeHtml(status.message)}</i>` : null,
          '',
          `<i>Sumber: ${escapeHtml(status.source || 'panel-api')} · ${new Date(status.checkedAt).toLocaleString('id-ID')}</i>`,
        ].filter(Boolean).join('\n'))
      }

      if (sub === 'logs') {
        const result = await servers.serverAction(slotNumber, 'logs', { actor: ctx.actor, role: ctx.role })
        const text = result.lines.length ? result.lines.join('\n') : '(log kosong)'
        return ctx.send(`📜 <b>Log server ${slotNumber}</b>\n<pre>${escapeHtml(text.slice(-3500))}</pre>`)
      }

      // start/stop/restart → konfirmasi dua langkah
      if (!can(ctx.role, 'server.control')) return ctx.send('⛔ Peran kamu tidak boleh mengontrol server.')
      const token = createCallback({
        userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
        action: 'server.action', payload: { slot: slotNumber, action: sub },
      })
      return ctx.send(`⚠️ Jalankan <b>${sub}</b> pada server <b>${escapeHtml(slot.name || String(slotNumber))}</b>?`, {
        reply_markup: inline([[
          { text: `✅ Ya, ${sub}`, callback_data: `cb:${token}` },
          { text: 'Batal', callback_data: `cb:${createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view: 'server' } })}` },
        ]]),
      })
    },
  })

  /* ─────────────── SAHAM ─────────────── */
  define('saham', {
    description: 'Pasar saham & portofolio',
    permission: 'stock.read',
    handler: async (ctx, parsed) => {
      const sub = String(parsed.args[0] || 'pasar').toLowerCase()
      const jid = whatsappJidFor(ctx.userId)
      const number = String(jid || '').replace(/\D/g, '')

      if (sub === 'pasar' || sub === 'market') {
        const data = await stock.market()
        const lines = ['💹 <b>PASAR UMI TRADE</b>', '', `Sumber: <code>${escapeHtml(data.source)}</code>`, data.session ? `Sesi: ${data.session.open ? '🟢 buka' : '🔴 tutup'}${data.session.timezone ? ` · ${data.session.timezone}` : ''}` : null, '']
        if (!data.stocks.length) lines.push('<i>Belum ada emiten dari API.</i>')
        for (const item of data.stocks.slice(0, 15)) {
          const arrow = item.change > 0 ? '🟢▲' : item.change < 0 ? '🔴▼' : '⚪️'
          lines.push(`${arrow} <b>${escapeHtml(item.symbol)}</b> · ${as(item.price)} · ${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`)
        }
        lines.push('', `Diambil ${new Date(data.fetchedAt).toLocaleTimeString('id-ID')}${data.dataAt ? ` · data ${new Date(data.dataAt).toLocaleTimeString('id-ID')}` : ''}`)
        return ctx.send(lines.filter(line => line !== null).join('\n'))
      }

      if (sub === 'me' || sub === 'portofolio') {
        if (!number) return ctx.send('🔴 Tautkan akun dulu: dashboard web → Tautkan Telegram, lalu /link KODE.')
        const me = await stock.portfolio(number)
        const summary = me.summary || me
        const lines = [
          '💼 <b>PORTOFOLIO</b>', '',
          `Kas      : ${as(summary.balance)}`,
          `Saham    : ${as(summary.equity)}`,
          `Total    : ${as(summary.netWorth)}`,
          `Peringkat: #${summary.rank || '-'} / ${summary.total || '-'}`,
        ]
        const positions = Array.isArray(summary.positions) ? summary.positions : []
        if (positions.length) {
          lines.push('', '<b>Posisi</b>')
          for (const pos of positions.slice(0, 10)) lines.push(`• ${escapeHtml(pos.symbol)} ${Number(pos.qty).toFixed(2)} lot @ ${as(pos.avgPrice)} · ${as(pos.value)}`)
        }
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'top' || sub === 'peringkat') {
        const rows = await stock.leaderboard(10)
        const lines = ['🏆 <b>TRADER TERATAS</b>', '']
        rows.forEach((row, index) => lines.push(`${index + 1}. ${escapeHtml(row.username || row.name || '-')} · ${as(row.netWorth ?? row.balance ?? 0)}`))
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'beli' || sub === 'jual') return tradePrompt(ctx, { side: sub === 'beli' ? 'buy' : 'sell', args: parsed.args.slice(1), number })

      return ctx.send([
        '<b>Perintah saham</b>',
        '/saham — daftar harga pasar',
        '/saham me — portofolio akun tertaut',
        '/saham top — peringkat trader',
        '/saham beli &lt;KODE&gt; &lt;lot&gt;',
        '/saham jual &lt;KODE&gt; &lt;lot&gt;',
      ].join('\n'))
    },
  })

  async function tradePrompt(ctx, { side, args, number }) {
    if (!number) return ctx.send('🔴 Tautkan akun WhatsApp dulu (dashboard → Tautkan Telegram) sebelum transaksi.')
    const symbol = String(args[0] || '').toUpperCase()
    const lots = Number(args[1])
    if (!/^[A-Z0-9]{2,12}$/.test(symbol) || !Number.isInteger(lots) || lots <= 0) {
      return ctx.send(`Format: <code>/saham ${side} KODE LOT</code>\nContoh: <code>/saham ${side} UMI 5</code>`)
    }
    if (!can(ctx.role, 'stock.trade')) return ctx.send('⛔ Peran kamu tidak boleh bertransaksi.')
    const token = createCallback({
      userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'stock.trade', payload: { side, symbol, lots, number },
    })
    return ctx.send(`⚠️ Konfirmasi ${side === 'buy' ? 'BELI' : 'JUAL'} <b>${lots}</b> lot <b>${escapeHtml(symbol)}</b>?\nOrder dieksekusi backend UMI TRADE dengan validasi saldo.`, {
      reply_markup: inline([[
        { text: '✅ Konfirmasi', callback_data: `cb:${token}` },
        { text: 'Batal', callback_data: `cb:${createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'menu.nav', payload: { view: 'saham' } })}` },
      ]]),
    })
  }

  /* ─────────────── RPG ─────────────── */
  define('rpg', {
    description: 'Profil, inventori, hadiah harian',
    permission: 'rpg.read',
    handler: async (ctx, parsed) => {
      const sub = String(parsed.args[0] || 'profil').toLowerCase()
      const jid = whatsappJidFor(ctx.userId)
      if (!jid) {
        return ctx.send('🎮 <b>RPG</b>\n\nAkun WhatsApp belum tertaut.\nBuka dashboard web → Tautkan Telegram, lalu kirim <code>/link KODE</code>.\n\n<i>Progres RPG tidak dibuat terpisah di Telegram supaya tidak ada data ganda.</i>')
      }

      if (sub === 'profil' || sub === 'profile') {
        const profile = rpg.profile(jid)
        if (!profile.hasProfile) return ctx.send(profile.message)
        const r = profile.rpg || {}
        return ctx.send([
          '🎮 <b>PROFIL RPG</b>', '',
          `Level    : <b>${profile.level}</b>`,
          `EXP      : ${rupiah(profile.exp)}`,
          `Koin     : ${rupiah(profile.koin)}`,
          `HP/Mana  : ${r.health ?? '-'}/${r.maxHealth ?? '-'} · ${r.mana ?? '-'}/${r.maxMana ?? '-'}`,
          `Pet      : ${r.pet ? escapeHtml(r.pet.name || r.pet.type || 'ada') : '-'}`,
          `Inventori: ${profile.inventoryCount} jenis · ${rupiah(profile.totalItems)} item`,
          '', '<i>Sumber: rpg_users (database yang sama dengan WhatsApp)</i>',
        ].join('\n'))
      }

      if (sub === 'inv' || sub === 'inventory') {
        const profile = rpg.profile(jid)
        if (!profile.hasProfile) return ctx.send(profile.message)
        const lines = ['🎒 <b>INVENTORI</b>', '']
        if (!profile.inventory.length) lines.push('<i>Kosong.</i>')
        for (const item of profile.inventory) lines.push(`• ${escapeHtml(item.item)} × ${rupiah(item.count)}`)
        if (profile.inventoryCount > profile.inventory.length) lines.push(`… dan ${profile.inventoryCount - profile.inventory.length} jenis lain`)
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'top' || sub === 'peringkat') {
        const rows = rpg.leaderboard({ limit: 10, by: parsed.args[1] === 'exp' ? 'exp' : 'koin' })
        const lines = [`🏆 <b>PERINGKAT RPG (${parsed.args[1] === 'exp' ? 'EXP' : 'KOIN'})</b>`, '']
        rows.forEach(row => lines.push(`${row.rank}. ${row.masked} · Lv ${row.level} · ${rupiah(row.koin)} koin`))
        if (!rows.length) lines.push('<i>Belum ada data.</i>')
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'daily' || sub === 'harian') {
        const token = createCallback({ userId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'rpg.daily', payload: { jid } })
        return ctx.send(`🎁 Klaim hadiah harian: <b>${rpg.DAILY.koin}</b> koin + <b>${rpg.DAILY.exp}</b> EXP?\nCooldown ${Math.round(rpg.DAILY.cooldownMs / 3600000)} jam.`, {
          reply_markup: inline([[{ text: '🎁 Klaim', callback_data: `cb:${token}` }]]),
        })
      }

      return ctx.send('<b>RPG</b>\n/rpg — profil\n/rpg inv — inventori\n/rpg top [exp] — peringkat\n/rpg daily — hadiah harian')
    },
  })

  /* ─────────────── TO URL ─────────────── */
  define('tourl', {
    description: 'Ubah foto/video/dokumen jadi tautan',
    permission: 'media.upload',
    handler: async (ctx) => {
      await ctx.send([
        '🔗 <b>MEDIA → URL</b>',
        '',
        'Kirim foto, video (≤20 MB lewat Telegram), atau dokumen PDF/ZIP.',
        'Bot menyimpan di penyimpanan internal dan membalas tautan bertanda tangan.',
        '',
        `Batas internal: gambar ${media.MAX_BYTES.image / 1048576} MB · video ${media.MAX_BYTES.video / 1048576} MB · dokumen ${media.MAX_BYTES.document / 1048576} MB.`,
        'Tautan kedaluwarsa 7 hari; berkas tidak dieksekusi dan nama objek acak.',
      ].join('\n'))
    },
  })

  /* ─────────────── ADMIN ─────────────── */
  define('admin', {
    description: 'Panel pengelola (owner/developer)',
    permission: 'telegram.status',
    sensitive: true,
    handler: async (ctx, parsed) => {
      const sub = String(parsed.args[0] || 'ringkas').toLowerCase()
      if (sub === 'bot' || sub === 'bots') {
        if (!can(ctx.role, 'telegram.manage')) return ctx.send('⛔ Butuh izin telegram.manage.')
        const rows = globalThis.__umiTelegramBots?.listBots?.() || []
        const lines = ['🤖 <b>BOT TELEGRAM</b>', '']
        if (!rows.length) lines.push('<i>Belum ada konfigurasi tersimpan.</i>')
        for (const row of rows) {
          lines.push(`• <b>${escapeHtml(row.label)}</b> — @${escapeHtml(row.username || '-')} (${row.botId || '-'})`)
          lines.push(`  status: ${row.status} · ${row.enabled ? 'aktif' : 'nonaktif'} · mode ${row.mode}`)
        }
        lines.push('', 'Kelola (aktif/nonaktif/cabut) lewat panel web /panel → Telegram.')
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'users') {
        if (!can(ctx.role, 'platform.users.read')) return ctx.send('⛔ Butuh izin platform.users.read.')
        const { items, total } = globalThis.__umiPlatformIdentity.listUsers({ limit: 10 })
        const lines = [`👥 <b>PENGGUNA</b> (${total})`, '']
        for (const user of items) lines.push(`• <code>${escapeHtml(user.id)}</code> · ${roleBadge(user.role)} · ${user.identities} identitas`)
        lines.push('', 'Ubah role lewat panel web agar tercatat penuh di audit.')
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'audit') {
        if (!can(ctx.role, 'platform.audit.read')) return ctx.send('⛔ Butuh izin platform.audit.read.')
        const { items } = globalThis.__umiPlatformAudit.listAudit({ limit: 12 })
        const lines = ['🧾 <b>AUDIT TERBARU</b>', '']
        for (const item of items) lines.push(`${new Date(item.at).toLocaleString('id-ID')} · ${item.action} · ${item.result}`)
        if (!items.length) lines.push('<i>Belum ada event.</i>')
        return ctx.send(lines.join('\n'))
      }

      if (sub === 'health') {
        const rows = globalThis.__umiPlatformAudit.getHealth()
        const lines = ['🩺 <b>HEALTH INTEGRASI</b>', '']
        if (!rows.length) lines.push('<i>Belum ada pemeriksaan.</i>')
        for (const row of rows) lines.push(`${row.status === 'ok' ? '🟢' : row.status === 'error' ? '🔴' : '🟡'} <b>${escapeHtml(row.name)}</b> · ${escapeHtml(row.detail || '')}`)
        return ctx.send(lines.join('\n'))
      }

      const lines = [
        '⚙️ <b>ADMIN</b>', '',
        '/admin bot — konfigurasi bot Telegram',
        '/admin users — daftar pengguna & role',
        '/admin audit — audit log terbaru',
        '/admin health — status integrasi',
        '', 'Aksi tulis (ganti token, ubah role, slot server) dilakukan di panel web: /panel',
      ]
      return ctx.send(lines.join('\n'))
    },
  })

  /* ─────────────── RESELLER ─────────────── */
  define('reseller', {
    description: 'Ringkasan reseller',
    permission: 'reseller.read',
    handler: async (ctx) => {
      const data = globalThis.__umiPlatformReseller?.summary?.(ctx.userId) || { customers: 0, orders: 0, commission: 0, currency: 'IDR', available: false }
      const lines = [
        '🤝 <b>RESELLER</b>', '',
        `Pelanggan : ${data.available ? data.customers : '—'}`,
        `Pesanan   : ${data.available ? data.orders : '—'}`,
        `Komisi    : ${data.available ? `Rp ${rupiah(data.commission)}` : '—'}`,
        '',
      ]
      if (!data.available) lines.push('<i>Data reseller belum tersedia di backend ini. Panel wallet/reseller akan menampilkan angka nyata setelah tabel reseller diisi.</i>')
      lines.push('Kelola pelanggan lewat panel web: /panel')
      await ctx.send(lines.join('\n'))
    },
  })

  define('panel', {
    description: 'Tautan panel web',
    handler: async (ctx) => {
      const url = globalThis.__umiPlatformWebUrl || 'https://jadibot-alzriss.gwenna.my.id'
      await ctx.send(`🖥 <b>PANEL WEB</b>\n\n${url}/platform\n\nLogin memakai akun web kamu (sesi Supabase). Peran yang tampil di panel = peran database.`)
    },
  })

  /* ─────────────── Callback actions ─────────────── */
  router.registerCallback('menu.nav', async (ctx, payload) => {
    const map = { status: 'status', profile: 'profile', jadibot: 'jadibot', saham: 'saham', rpg: 'rpg', tourl: 'tourl', server: 'server', admin: 'admin', reseller: 'reseller', help: 'help' }
    const name = map[payload?.view]
    if (!name || !router.allowed(ctx, name)) return ctx.send('Menu tidak tersedia untuk peran kamu.')
    const command = router.commands.get(name)
    return command.handler(ctx, { name, args: [], text: '' }, null)
  })

  router.registerCallback('server.action', async (ctx, payload) => {
    if (!can(ctx.role, 'server.control')) return ctx.send('⛔ Akses ditolak.')
    const result = await servers.serverAction(payload.slot, payload.action, { actor: ctx.actor, role: ctx.role })
    await ctx.send(`✅ <b>${escapeHtml(payload.action)}</b> dikirim ke server ${payload.slot} (<code>${escapeHtml(result.name || '-')}</code>).\nStatus panel: HTTP ${result.httpStatus}.`)
  })

  router.registerCallback('jadibot.stop', async (ctx, payload) => {
    const jid = whatsappJidFor(ctx.userId)
    const owned = wa.sessionsForUser(ctx.userId, jid).find(row => row.number === payload.number)
    if (!owned) return ctx.send('❌ Nomor itu bukan sesi milikmu.')
    await wa.stopSession(payload.number, { deleteSession: false, actor: ctx.actor })
    audit({ actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'jadibot.stop', resource: payload.number })
    await ctx.send(`⏹ Sesi <code>${owned.masked}</code> dihentikan.`)
  })

  router.registerCallback('stock.trade', async (ctx, payload) => {
    if (!can(ctx.role, 'stock.trade')) return ctx.send('⛔ Akses ditolak.')
    const result = await stock.trade({
      number: payload.number, symbol: payload.symbol, side: payload.side, amount: payload.lots,
      idempotencyKey: `tg-trade:${ctx.platformUserId}:${payload.side}:${payload.symbol}:${payload.lots}:${Math.floor(Date.now() / 60000)}`,
    }, { db: globalThis.__umiPlatformDb?.() })
    audit({
      actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId,
      action: 'stock.trade', resource: `${payload.symbol}:${payload.side}`,
      meta: { lots: payload.lots, duplicate: Boolean(result.duplicate) },
    })
    await ctx.send(result.duplicate
      ? 'ℹ️ Order ini sudah diproses sebelumnya (idempotent), tidak dieksekusi dua kali.'
      : `✅ Order <b>${payload.side === 'buy' ? 'BELI' : 'JUAL'}</b> ${payload.lots} lot ${escapeHtml(payload.symbol)} dikirim.\n${result.message ? escapeHtml(result.message) : ''}`)
  })

  router.registerCallback('rpg.daily', async (ctx, payload) => {
    const result = await rpg.claimDaily(payload.jid, { idempotencyKey: `${ctx.platformUserId}:${Math.floor(Date.now() / 1000)}` })
    if (result.ok) {
      audit({ actorUserId: ctx.userId, platform: 'telegram', platformUserId: ctx.platformUserId, action: 'rpg.daily', resource: payload.jid, meta: { koin: result.koin, exp: result.exp } })
      await ctx.send(`🎁 Hadiah diterima: +${rupiah(result.koin)} koin, +${rupiah(result.exp)} EXP.\nTotal: ${rupiah(result.totalKoin)} koin · Level ${result.level}.`)
    } else if (result.reason === 'cooldown') {
      await ctx.send(`⏳ Hadiah harian sudah diklaim. Bisa lagi dalam ${duration(result.remainingMs)}.`)
    } else if (result.reason === 'duplicate') {
      await ctx.send('ℹ️ Hadiah ini sudah diproses sebelumnya.')
    } else {
      await ctx.send('❌ Hadiah gagal diproses.')
    }
  })

  return router
}

export async function handleMediaMessage(ctx, message, { baseUrl = '' } = {}) {
  const kind = message.photo ? 'photo' : message.video ? 'video' : message.document ? 'document' : message.audio ? 'audio' : null
  if (!kind) return ctx.send('Kirim foto, video, atau dokumen.')
  const fileId = kind === 'photo'
    ? message.photo[message.photo.length - 1].file_id
    : message[kind].file_id
  const name = message[kind].file_name || (kind === 'photo' ? 'foto.jpg' : null)
  await ctx.sendChatAction('upload_document')
  const { buffer } = await ctx.downloadFile(fileId)
  const stored = media.storeMedia(buffer, {
    userId: ctx.userId, platform: 'telegram', name,
    actor: { platformUserId: ctx.platformUserId },
  })
  const url = media.mediaUrl(stored.id, { baseUrl: baseUrl || publicBase(ctx), userId: ctx.userId })
  return ctx.send([
    '✅ <b>Upload berhasil</b>', '',
    `Tipe : <code>${stored.mime}</code>`,
    `Ukuran: ${bytes(stored.bytes)}`,
    `SHA256: <code>${stored.sha256.slice(0, 24)}…</code>`,
    stored.expiresAt ? `Kedaluwarsa: ${new Date(stored.expiresAt).toLocaleString('id-ID')}` : null,
    '',
    `<a href="${escapeHtml(url)}">Buka media</a>`,
    `<code>${escapeHtml(url)}</code>`,
  ].filter(Boolean).join('\n'), { disable_web_page_preview: true })
}

function publicBase(ctx) {
  return globalThis.__umiPlatformPublicBase || ctx.publicBaseUrl || ''
}
