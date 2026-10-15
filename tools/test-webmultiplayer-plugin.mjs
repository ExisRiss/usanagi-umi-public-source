#!/usr/bin/env node
/**
 * Uji plugin bot plugins/game/game-webmultiplayer.js terhadap server game live.
 *
 * Harness ini MEMUAT modul plugin yang sebenarnya (bukan salinan logikanya) lalu
 * memanggil handler-nya dengan conn/m tiruan, jadi jalur kode yang diuji adalah
 * berkas yang benar-benar di-deploy ke server bot.
 *
 * Pakai:
 *   node tools/test-webmultiplayer-plugin.mjs
 *   UMI_GAME_TOKEN=xxx node tools/test-webmultiplayer-plugin.mjs
 */
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const PLUGIN = process.env.PLUGIN_PATH || '/home/user/usanagi-umi-public-source/bot/plugins/game/game-webmultiplayer.js'
const handler = (await import(pathToFileURL(path.resolve(PLUGIN)).href)).default

let pass = 0, fail = 0
const ok = (cond, label) => { if (cond) { pass++; console.log('  ✔', label) } else { fail++; console.log('  ✘ GAGAL:', label) } }

global.db = { data: { users: { '628111111111@s.whatsapp.net': { name: 'Pemilik Uji' } } } }

const replies = []
const conn = { reply: async (chat, text) => { replies.push(String(text)); return { id: 'mock' + replies.length } } }
const mkMsg = (sender = '628111111111@s.whatsapp.net') => ({ chat: 'chat@s.whatsapp.net', sender, pushName: 'Pengirim' })
const run = async (command, args = [], sender) => {
  replies.length = 0
  await handler(mkMsg(sender), { conn, usedPrefix: '.', args, command })
  return replies.join('\n')
}

console.log('BANTUAN:')
let out = await run('webgame')
ok(/UMI WEB GAMES/.test(out), '.webgame menampilkan bantuan')
ok(/Server: aktif/.test(out), '.webgame melaporkan server aktif')
ok(out.includes('.caturweb') && out.includes('.wwweb'), 'bantuan memuat keenam meja')

console.log('BUAT MEJA:')
out = await run('uno')
const roomId = (out.match(/Room: `([A-Za-z0-9]{6,14})`/) || [])[1]
ok(Boolean(roomId), `.uno membuat meja (id ${roomId})`)
ok(/sudah duduk sebagai host/.test(out), 'host langsung terverifikasi')
ok(out.includes(`uno join ${roomId}`), 'balasan memuat petunjuk join')

console.log('GABUNG & VERIFIKASI:')
const friend = '628222222222@s.whatsapp.net'
global.db.data.users[friend] = { name: 'Teman Uji' }
out = await run('uno', ['join', roomId], friend)
ok(/menunggu verifikasi/.test(out), '.uno join <id> → kursi pending')
out = await run('uno', [roomId], friend)
const code = (out.match(/Kode masuk: \*(\d{6})\*/) || [])[1]
ok(/^\d{6}$/.test(code || ''), `.uno <id> → kode masuk 6 digit (${code})`)
ok(out.includes(roomId), 'kode masuk menyebut room yang benar')

console.log('INTIP MEJA:')
out = await run('webgame', ['room', roomId])
ok(/Meja UNO/.test(out), '.webgame room <id> merangkum meja')
ok(/✅ terverifikasi/.test(out) || /terverifikasi/.test(out), 'daftar kursi menampilkan status verifikasi')

console.log('PERMAINAN LAIN:')
out = await run('monopoli')
ok(/Meja Monopoli Web/.test(out), '.monopoli membuat meja monopoli')
out = await run('caturweb')
ok(/Meja Catur Web/.test(out), '.caturweb membuat meja catur')

console.log('GALAT:')
let threw = ''
try { await run('uno', ['join', 'bukanid!!']) } catch (e) { threw = String(e.message || e) }
ok(/tidak dikenal/.test(threw), 'id room cacat ditolak dengan pesan jelas')
threw = ''
try { await run('uno', ['join', 'zzzzzzzz']) } catch (e) { threw = String(e.message || e) }
ok(/tidak ditemukan/.test(threw), 'room tak ada dibalas pesan server, bukan crash')

console.log(`\nTOTAL: ${pass} lolos, ${fail} gagal`)
process.exit(fail ? 1 : 0)
