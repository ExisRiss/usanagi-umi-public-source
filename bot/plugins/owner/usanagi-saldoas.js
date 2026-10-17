/* By AlzRiss - Usanagi Umi AI
 *
 * SALDO $AS — atur saldo akun trading (khusus owner).
 *
 * Perintah:
 *   {prefix}setas AlzRiss 11000     saldo jadi $AS 11.000
 *   {prefix}addas AlzRiss 500       saldo + $AS 500
 *   {prefix}addas 6287813709432 500 tambah lewat nomor WhatsApp
 *   {prefix}listas                  daftar akun trading + saldo
 *
 * Memanggil POST /api/trading/admin/balance dengan header X-UMI-Game-Token.
 * Token dibaca dari lib/webgame.json → env → game-token.txt; host dicoba
 * 127.0.0.1:3900 (container yang sama) lalu game.gwenna.my.id.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONFIG_FILE = path.resolve(__dirname, '../../lib/webgame.json')
const BRAND = global.brandCredit || 'By AlzRiss - Usanagi Umi AI'

function gameConfig() {
  let parsed = {}
  try { parsed = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) } catch { }
  let token = String(parsed.token || process.env.UMI_GAME_TOKEN || process.env.GAME_TOKEN || '').trim()
  if (!token) {
    for (const file of [path.resolve(__dirname, '../../game-token.txt'), path.resolve(process.cwd(), 'game-token.txt')]) {
      try { token = fs.readFileSync(file, 'utf8').trim(); if (token) break } catch { }
    }
  }
  const baseUrl = String(process.env.UMI_GAME_INTERNAL_URL || 'http://127.0.0.1:3900').replace(/\/+$/, '')
  const publicUrl = String(parsed.baseUrl || process.env.UMI_GAME_BASE || 'https://game.gwenna.my.id').replace(/\/+$/, '')
  return { token, baseUrl, publicUrl }
}

async function callGame(pathname, body, method = 'POST') {
  const { token, baseUrl, publicUrl } = gameConfig()
  if (!token) throw new Error('Token game belum disetel (game-token.txt / webgame.json / UMI_GAME_TOKEN).')
  const hosts = [...new Set([baseUrl, publicUrl].filter(Boolean))]
  let lastError = null
  for (const host of hosts) {
    try {
      const res = await fetch(`${host}${pathname}`, {
        method,
        headers: { 'Content-Type': 'application/json', 'X-UMI-Game-Token': token, Accept: 'application/json' },
        body: method === 'POST' ? JSON.stringify(body || {}) : undefined,
        signal: AbortSignal.timeout(20000),
      })
      const text = await res.text()
      let json = {}
      try { json = JSON.parse(text) } catch { }
      if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`)
      return json
    } catch (error) {
      lastError = error
      if (!/fetch failed|ECONNREFUSED|ENOTFOUND|network/i.test(String(error && error.message))) throw error
    }
  }
  throw lastError || new Error('Tidak bisa menghubungi server game.')
}

const money = (n) => Number(n || 0).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const parseAmount = (raw) => {
  let clean = String(raw || '').replace(/[^0-9.,-]/g, '')
  if (/^\d{1,3}(,\d{3})+$/.test(clean)) clean = clean.replace(/,/g, '')       // 11,000 → 11000
  else clean = clean.replace(/\.(?=\d{3}\b)/g, '').replace(',', '.')        // 11.000 → 11000 · 1,5 → 1.5
  return Number(clean)
}

let handler = async (m, { text, command, usedPrefix, isOwner }) => {
  if (!isOwner) return m.reply('❌ Perintah ini khusus owner.')

  const cmd = String(command || '').toLowerCase()
  const args = String(text || '').trim().split(/\s+/).filter(Boolean)

  try {
    /* ── daftar akun ── */
    if (cmd === 'listas') {
      const d = await callGame('/api/trading/admin/accounts', null, 'GET')
      if (!d.accounts || !d.accounts.length) return m.reply('Belum ada akun trading.')
      const rows = d.accounts.map((a, i) => {
        const who = a.username || a.number || a.id
        return `${i + 1}. *${who}*${a.number ? ` (wa ${a.number})` : ''}\n   saldo $AS ${money(a.balance)} · total $AS ${money(a.netWorth)} · ${a.positions} emiten`
      }).join('\n')
      return m.reply([
        `💼 *AKUN TRADING* (${d.total})`,
        '',
        rows,
        '',
        `Set saldo: ${usedPrefix}setas <nama|nomor> <jumlah>`,
        `Tambah   : ${usedPrefix}addas <nama|nomor> <jumlah>`,
        '',
        BRAND,
      ].join('\n'))
    }

    /* ── butuh nama akun + jumlah ── */
    const account = args[0]
    const amount = parseAmount(args[1])
    if (!account || !Number.isFinite(amount)) {
      return m.reply([
        '💵 *ATUR SALDO $AS*',
        '',
        `Format: ${usedPrefix}${cmd === 'addas' ? 'addas' : 'setas'} <akun> <jumlah>`,
        `Contoh: ${usedPrefix}setas AlzRiss 11000`,
        `        ${usedPrefix}addas AlzRiss 500`,
        '',
        `Daftar akun: ${usedPrefix}listas`,
      ].join('\n'))
    }

    const mode = cmd === 'addas' ? 'add' : 'set'
    const d = await callGame('/api/trading/admin/balance', {
      account,
      amount,
      mode,
      note: `via ${usedPrefix}${cmd} oleh owner`,
    })

    return m.reply([
      mode === 'add' ? '✅ *SALDO DITAMBAH*' : '✅ *SALDO DISETEL*',
      '',
      `Akun    : ${(d.account && d.account.username) || account}${d.account && d.account.number ? ` (wa ${d.account.number})` : ''}`,
      `Sebelum : $AS ${money(d.before)}`,
      `Sesudah : $AS ${money(d.balance)}`,
      `Total   : $AS ${money(d.netWorth)}`,
      '',
      'Buka game.gwenna.my.id/trading untuk lihat.',
      '',
      BRAND,
    ].join('\n'))
  } catch (error) {
    console.error('[SALDO-AS]', error && error.message ? error.message : error)
    return m.reply(`❌ Gagal mengatur saldo.\n\nAlasan: ${(error && error.message) || 'kesalahan tidak diketahui'}\n\n${BRAND}`)
  }
}

handler.help = ['setas <akun> <jumlah>', 'addas <akun> <jumlah>', 'listas']
handler.tags = ['owner', 'game']
handler.command = /^(setas|addas|listas)$/i
handler.owner = true
handler.limit = false

export default handler
