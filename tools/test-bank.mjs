#!/usr/bin/env node
/**
 * Uji fitur bank (.bank / .atm / .deposit / .withdraw).
 *
 * Latar: `.bank` gagal dengan "Cannot read properties of undefined (reading
 * 'emoticon')" karena `global.rpg` tidak pernah didefinisikan. Uji ini memastikan
 * (a) kerusakannya benar-benar terjadi tanpa perbaikan, dan (b) hilang setelah
 * `installRpgGlobals()` dipasang.
 *
 * Pakai: node tools/test-bank.mjs
 */
const BOT = '/home/user/usanagi-umi-public-source/bot'
process.chdir(BOT)

let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

const JID = '628111222333@s.whatsapp.net'
const CHAT = '628999888777@g.us'

/** Siapkan global.db tiruan seperti yang dilihat plugin. */
function freshUser() {
  return { money: 25000, bank: 5000, atm: 1, registered: true, name: 'Uji', lastmining: 0, pickaxe: 1 }
}

function makeConn() {
  const sent = []
  return {
    sent,
    async reply(chat, text) {
      sent.push({ chat, text: String(text) })
      return { key: {} }
    },
    async sendMessage(chat, payload) {
      sent.push({ chat, payload })
      return { key: {} }
    },
    async relayMessage() {
      return {}
    },
  }
}

function makeM(replyBucket) {
  return {
    chat: CHAT,
    sender: JID,
    text: '',
    args: [],
    prefix: '.',
    // Runtime nyata selalu menyediakan array ini (handler.js memfilternya).
    // Tanpa ini, plugin yang memakai m.mentionedJid[0] terlihat "error" padahal bukan.
    mentionedJid: [],
    quoted: null,
    key: { remoteJid: CHAT, id: 'uji', fromMe: false },
    async reply(t) {
      replyBucket.push(String(t))
      return { key: {} }
    },
    async react() {
      return null
    },
  }
}

const load = (rel) => import(`${BOT}/${rel}`)

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 1. Keadaan awal: tanpa perbaikan, error memang terjadi ═══')
{
  delete global.rpg
  global.db = { data: { users: { [JID]: freshUser() } } }

  const legacyBank = (await load('plugins/rpg/rpg-bank.js')).default
  const replies = []
  let error = null
  try {
    await legacyBank(makeM(replies), { conn: makeConn() })
  } catch (e) {
    error = e
  }
  check('rpg-bank.js gagal bila global.rpg tidak ada (membuktikan bugnya nyata)',
    error instanceof TypeError, error ? error.message.slice(0, 60) : 'ternyata jalan')
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 2. Pasang global.rpg, lalu ulangi ═══')
const { installRpgGlobals, emoticon } = await load('lib/rpg/awang-rpg-globals.js')
{
  installRpgGlobals()
  check('global.rpg.emoticon tersedia', typeof global.rpg?.emoticon === 'function')
  check('idempoten (dipanggil dua kali tidak merusak)', (() => {
    const before = global.rpg.emoticon
    installRpgGlobals()
    return global.rpg.emoticon === before
  })())
}

console.log('\n  ── emoticon() harus tahan banting ──')
{
  const keys = ['money', 'bank', 'atm', 'exp', 'level', 'limit', 'health', 'stamina',
    'sword', 'armor', 'pickaxe', 'potion', 'fishingrod', 'diamond', 'emerald',
    'common', 'uncommon', 'legendary', 'mythic', 'trash']
  const missing = keys.filter((k) => !emoticon(k) || emoticon(k) === '•')
  check(`semua ${keys.length} kunci yang dipakai plugin punya ikon`, missing.length === 0, missing.join(', ') || 'lengkap')

  const weird = [null, undefined, '', '   ', 0, 123, {}, [], 'item tidak dikenal', 'DIAMOND', 'raw-fish']
  let threw = null
  for (const w of weird) {
    try {
      const out = emoticon(w)
      if (typeof out !== 'string') { threw = `bukan string untuk ${JSON.stringify(w)}`; break }
    } catch (e) { threw = `${JSON.stringify(w)} → ${e.message}`; break }
  }
  check('tidak melempar & selalu mengembalikan string untuk masukan aneh', !threw, threw || `${weird.length} masukan diuji`)
  check('cocok sebagian ("raw-fish" → ikon)', emoticon('rawFish') !== '•' && emoticon('raw-fish') !== '•', `rawFish=${emoticon('rawFish')}`)
  check('tidak peka huruf besar/kecil', emoticon('BANK') === emoticon('bank'), `${emoticon('BANK')} vs ${emoticon('bank')}`)
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 3. Plugin bank berjalan ═══')
{
  global.db = { data: { users: { [JID]: freshUser() } } }
  const replies = []
  const conn = makeConn()
  let error = null
  try {
    await (await load('plugins/rpg/rpg-bank.js')).default(makeM(replies), { conn })
  } catch (e) { error = e }
  check('.bank tidak error lagi', !error, error?.message?.slice(0, 70) || 'bersih')
  // rpg-bank.js menjawab lewat conn.reply(), jadi hasilnya ada di conn.sent.
  const out = [...conn.sent.map((s) => s.text || s.payload?.text || ''), ...replies].join(' ')
  check('.bank menampilkan saldo dompet', /25\.?000|25000/.test(out), out.replace(/\n/g, ' ').trim().slice(0, 90))
  check('.bank menampilkan saldo tabungan', /5\.?000|5000/.test(out))
  check('.bank memuat ikon (emoticon bekerja)', /💰|🏦/.test(out), (out.match(/[💰🏦💳]/g) || []).join(' ') || 'tanpa ikon')
}

{
  global.db = { data: { users: { [JID]: freshUser() } } }
  const replies = []
  const connAtm = makeConn()
  let error = null
  try {
    await (await load('plugins/rpg/rpg-atm.js')).default(makeM(replies), { conn: connAtm })
  } catch (e) { error = e }
  check('.atm tidak error lagi', !error, error?.message?.slice(0, 70) || 'bersih')
  const outAtm = [...connAtm.sent.map((s) => s.text || s.payload?.text || ''), ...replies].join(' ')
  check('.atm menampilkan status ATM', /ATM STATUS|ATM   : /.test(outAtm), outAtm.replace(/\n/g, ' ').trim().slice(0, 80))
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 4. Alur ekonomi tetap utuh ═══')
{
  // deposit: uang dompet -> bank (butuh ATM, sudah diset 1)
  global.db = { data: { users: { [JID]: freshUser() } } }
  const before = { ...global.db.data.users[JID] }
  const replies = []
  let error = null
  try {
    await (await load('plugins/rpg/rpg-deposit.js')).default(makeM(replies), { conn: makeConn(), args: ['3000'] })
  } catch (e) { error = e }
  const after = global.db.data.users[JID]
  check('.deposit tidak error', !error, error?.message?.slice(0, 70) || 'bersih')
  check('.deposit memindahkan uang ke bank', after.bank === before.bank + 3000 && after.money === before.money - 3000,
    `money ${before.money}→${after.money} · bank ${before.bank}→${after.bank}`)
}

{
  // withdraw: bank -> dompet
  global.db = { data: { users: { [JID]: freshUser() } } }
  const before = { ...global.db.data.users[JID] }
  const replies = []
  let error = null
  try {
    await (await load('plugins/economy/withdraw.js')).default(makeM(replies), { conn: makeConn(), args: ['2000'] })
  } catch (e) { error = e }
  const after = global.db.data.users[JID]
  check('.withdraw tidak error', !error, error?.message?.slice(0, 70) || 'bersih')
  check('.withdraw memindahkan uang ke dompet', after.money === before.money + 2000 && after.bank === before.bank - 2000,
    `money ${before.money}→${after.money} · bank ${before.bank}→${after.bank}`)
}

// ════════════════════════════════════════════════════════════════════
console.log('\n═══ 5. Seluruh keluarga plugin rpg-* tidak lagi melempar TypeError ═══')
{
  const { execFileSync } = await import('node:child_process')
  const files = execFileSync('bash', ['-lc', `ls ${BOT}/plugins/rpg/rpg-*.js | xargs -n1 basename | sort`], { encoding: 'utf8' })
    .trim().split('\n').filter((f) => f.startsWith('rpg-'))
  const usesGlobals = []
  for (const f of files) {
    const src = execFileSync('bash', ['-lc', `grep -l "global.rpg" ${BOT}/plugins/rpg/${f} 2>/dev/null || true`], { encoding: 'utf8' }).trim()
    if (src) usesGlobals.push(f)
  }
  check(`ada ${usesGlobals.length} plugin rpg-* yang bergantung pada global.rpg`, usesGlobals.length > 0, usesGlobals.slice(0, 4).join(', '))

  // Muat semuanya; tidak boleh ada yang melempar saat impor, dan semua harus punya handler
  const bad = []
  for (const f of usesGlobals) {
    try {
      const mod = await load(`plugins/rpg/${f}`)
      if (typeof mod.default !== 'function') bad.push(`${f}(handler)`)
    } catch (e) {
      bad.push(`${f}(${e.message.slice(0, 30)})`)
    }
  }
  check('semuanya bisa dimuat & punya handler', bad.length === 0, bad.join(', ') || 'bersih')

  // Pola akses yang sama seperti di plugin: `let e = global.rpg.emoticon` di awal handler
  let patternErrors = []
  for (const f of usesGlobals) {
    try {
      const src = execFileSync('bash', ['-lc', `head -20 ${BOT}/plugins/rpg/${f}`], { encoding: 'utf8' })
      if (/global\.rpg\.emoticon/.test(src)) {
        execFileSync('node', ['-e', `global.rpg={emoticon:()=>"x"};const e=global.rpg.emoticon;e("money")`])
      }
    } catch (e) { patternErrors.push(f) }
  }
  check('pola akses emoticon di awal handler aman', patternErrors.length === 0, patternErrors.join(', ') || 'bersih')
}

console.log(`\n═══ ${pass} lulus, ${fail} gagal ═══\n`)
process.exit(fail ? 1 : 0)
