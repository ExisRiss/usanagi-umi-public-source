#!/usr/bin/env node
/**
 * Uji paket hiburan Umi Usanagi AI: gim susun kata, tebak-tebakan, duel koin,
 * editor foto (Jimp), dan pengubah suara (FFmpeg). Semuanya fitur asli.
 *
 * Pakai: node tools/test-umi-fun.mjs
 */
import { spawnSync } from 'node:child_process'

const BOT = '/home/user/usanagi-umi-public-source/bot'
process.chdir(BOT)

let pass = 0, fail = 0
const check = (label, ok, detail = '') => { ok ? pass++ : fail++; console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`) }

const GROUP = '628999888777@g.us'
const A = '628111222333@s.whatsapp.net'
const B = '628444555666@s.whatsapp.net'

global.db = { data: { users: { [A]: { money: 50000 }, [B]: { money: 50000 } }, chats: {}, settings: {} } }

function makeM(sent, { chat = GROUP, sender = A, args = [], mentionedJid = [], quoted = null } = {}) {
    return {
        chat, sender, args, mentionedJid, quoted, text: '',
        key: { remoteJid: chat, id: 'uji' },
        async reply(t, _q, opts) { sent.push({ text: String(t), mentions: opts?.mentions }); return { key: {} } },
        async react() { return null },
    }
}
function makeConn(sent) {
    return {
        async sendFile(chat, data, name, caption) { sent.push({ file: { isBuffer: Buffer.isBuffer(data), len: data?.length || 0, name, caption: String(caption || '') } }); return { key: {} } },
        async sendMessage(chat, payload) { sent.push({ payload }); return { key: {} } },
    }
}
const load = (rel) => import(`${BOT}/${rel}`)

// ── Susun kata ────────────────────────────────────────────────────────
console.log('── umi-susun ──')
{
    const { default: h } = await load('plugins/game/umi-susun.js')
    const sent = []
    await h(makeM(sent), { conn: makeConn(sent), args: [], usedPrefix: '.', command: 'umisusun' })
    check('soal muncul dengan huruf acak', /SUSUN KATA/.test(sent[0].text), '')
    await h(makeM(sent), { conn: makeConn(sent), args: ['ngawur'], usedPrefix: '.', command: 'umisusun' })
    check('jawaban salah dihitung', /Belum tepat/.test(sent[1].text))
    await h(makeM(sent), { conn: makeConn(sent), args: ['nyerah'], usedPrefix: '.', command: 'umisusun' })
    check('nyerah menampilkan kata', /Katanya adalah/.test(sent[2].text))
    // mulai lagi lalu paksa jawab dari state internal lewat brute kata bank: kirim nyerah & pastikan sesi bersih
    await h(makeM(sent), { conn: makeConn(sent), args: [], usedPrefix: '.', command: 'umisusun' })
    check('sesi baru bisa dimulai', /SUSUN KATA/.test(sent[3].text))
    await h(makeM(sent), { conn: makeConn(sent), args: ['nyerah'], usedPrefix: '.', command: 'umisusun' })
}

// ── Tebak-tebakan ─────────────────────────────────────────────────────
console.log('── umi-tebakan ──')
{
    const { default: h } = await load('plugins/game/umi-tebakan.js')
    const sent = []
    await h(makeM(sent), { conn: makeConn(sent), args: [], usedPrefix: '.', command: 'umitebakan' })
    check('soal muncul', /TEBAK-TEBAKAN RECEH/.test(sent[0].text))
    await h(makeM(sent), { conn: makeConn(sent), args: ['jawaban', 'asal'], usedPrefix: '.', command: 'umitebakan' })
    check('jawaban salah dihitung', /Bukan itu/.test(sent[1].text))
    await h(makeM(sent), { conn: makeConn(sent), args: ['nyerah'], usedPrefix: '.', command: 'umitebakan' })
    check('nyerah menampilkan jawaban', /Jawabannya:/.test(sent[2].text))
}

// ── Duel koin ─────────────────────────────────────────────────────────
console.log('── umi-duel ──')
{
    const { default: h } = await load('plugins/game/umi-duel.js')
    const sent = []
    const before = global.db.data.users[A].money + global.db.data.users[B].money
    await h(makeM(sent, { sender: A, args: ['5000'], mentionedJid: [B] }), { conn: makeConn(sent), args: ['5000'], usedPrefix: '.', command: 'umiduel' })
    check('tantangan dibuat', /TANTANGAN DUEL KOIN/.test(sent[0].text))
    const bet = 5000
    await h(makeM(sent, { sender: B, args: ['terima'] }), { conn: makeConn(sent), args: ['terima'], usedPrefix: '.', command: 'umiduel' })
    check('duel selesai dengan pemenang', /Pemenang:/.test(sent[1].text))
    const after = global.db.data.users[A].money + global.db.data.users[B].money
    check('total saldo tetap (pot berpindah penuh)', before === after, `${before} → ${after}`)
    const diff = Math.abs(global.db.data.users[A].money - global.db.data.users[B].money)
    check('selisih saldo = 2x taruhan dari posisi awal', diff === bet * 2, `diff=${diff}`)
    await h(makeM(sent, { sender: A, args: ['terima'] }), { conn: makeConn(sent), args: ['terima'], usedPrefix: '.', command: 'umiduel' })
    check('terima tanpa tantangan ditolak sopan', /Tidak ada tantangan aktif/.test(sent[2].text))
}

// ── Editor foto ───────────────────────────────────────────────────────
console.log('── umi-foto ──')
{
    const { createRequire } = await import('node:module')
    const { pathToFileURL } = await import('node:url')
    const reqBot = createRequire(`${BOT}/noop.js`)
    const { Jimp } = await import(pathToFileURL(reqBot.resolve('jimp')).href)
    const img = new Jimp({ width: 60, height: 40, color: 0xff5533ff })
    const pngBuf = await img.getBuffer('image/png')
    const { default: h } = await load('plugins/maker/umi-foto.js')
    const sent = []
    const quoted = { msg: { mimetype: 'image/png' }, download: async () => pngBuf }
    await h(makeM(sent, { args: ['sepia'], quoted }), { conn: makeConn(sent), args: ['sepia'], usedPrefix: '.', command: 'umifoto' })
    const file = sent.find((x) => x.file)
    check('efek sepia menghasilkan buffer gambar', !!file && file.file.isBuffer && file.file.len > 100, file ? `${file.file.len}B` : 'tidak ada file')
    const out = file ? null : null
    const sent2 = []
    await h(makeM(sent2, { args: ['aneh'], quoted }), { conn: makeConn(sent2), args: ['aneh'], usedPrefix: '.', command: 'umifoto' })
    check('efek tak dikenal → daftar efek', /EDITOR FOTO/.test(sent2[0].text))
}

// ── Pengubah suara ────────────────────────────────────────────────────
console.log('── umi-suara ──')
{
    const FFMPEG_BIN = `${BOT}/node_modules/@ffmpeg-installer/linux-x64/ffmpeg`
    const ff = spawnSync(FFMPEG_BIN, ['-v', 'error', '-f', 'lavfi', '-i', 'sine=frequency=440:duration=1', '-c:a', 'libmp3lame', '-f', 'mp3', 'pipe:1'], { maxBuffer: 4 * 1024 * 1024 })
    const tone = ff.stdout
    check('nada uji dibuat', Buffer.isBuffer(tone) && tone.length > 1000, `${tone?.length || 0}B`)
    if (tone?.length) {
        const { default: h } = await load('plugins/tools/umi-suara.js')
        const sent = []
        const quoted = { msg: { mimetype: 'audio/ogg; codecs=opus' }, download: async () => tone }
        await h(makeM(sent, { args: ['tupai'], quoted }), { conn: makeConn(sent), args: ['tupai'], usedPrefix: '.', command: 'umisuara' })
        const payload = sent.find((x) => x.payload)?.payload
        check('efek tupai menghasilkan voice note OGG', !!payload && payload.ptt === true && payload.audio.subarray(0, 4).toString() === 'OggS', payload ? `${payload.audio.length}B` : 'tidak ada payload')
        const sent2 = []
        await h(makeM(sent2, { args: [] }), { conn: makeConn(sent2), args: [], usedPrefix: '.', command: 'umisuara' })
        check('tanpa efek → daftar efek', /PENGUBAH SUARA/.test(sent2[0].text))
    }
}

// ── Cek tabrakan perintah ─────────────────────────────────────────────
console.log('── tabrakan perintah ──')
{
    const fs = await import('node:fs')
    const path = await import('node:path')
    const mine = ['umi-susun.js', 'umi-tebakan.js', 'umi-duel.js', 'umi-foto.js', 'umi-suara.js']
    const mineRegex = [/umisusun/, /umitebakan|tebakanreceh/, /umiduel|duelkoin/, /umifoto|editfoto/, /umisuara|editvoice|voicefx/]
    let collisions = 0, scanned = 0
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(dir, e.name)) : (e.name.endsWith('.js') ? [path.join(dir, e.name)] : []))
    for (const file of walk(`${BOT}/plugins`)) {
        scanned++
        if (mine.includes(path.basename(file))) continue
        const src = fs.readFileSync(file, 'utf8')
        const cmdLines = src.split('\n').filter((l) => /\.command\s*=/.test(l)).join(' ')
        for (const re of mineRegex) if (re.test(cmdLines)) { collisions++; console.log(`   tabrakan di ${path.relative(BOT, file)}`) }
    }
    check(`tidak ada tabrakan (${scanned} berkas dipindai)`, collisions === 0)
}

console.log(`\n══ HASIL: ${pass} lolos, ${fail} gagal ══`)
process.exit(fail ? 1 : 0)
