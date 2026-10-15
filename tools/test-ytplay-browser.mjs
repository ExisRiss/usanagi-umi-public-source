#!/usr/bin/env node
/**
 * Uji player ytplay di browser sungguhan.
 *
 * Membangun HTML player dengan data video nyata, membukanya di Chrome, lalu
 * memeriksa apakah video benar-benar terputar — bukan sekadar "HTML terbentuk".
 * Ini menguji rantai penuh: WebSocket → Blob → elemen <video>.
 *
 * Pakai: node tools/test-ytplay-browser.mjs
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const BOT = '/home/user/usanagi-umi-public-source/bot'
let pass = 0
let fail = 0
const check = (label, ok, detail = '') => {
  ok ? pass++ : fail++
  console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + detail : ''}`)
}

// ── Bangun HTML player dengan fungsi asli dari plugin ────────────────────
const src = fs.readFileSync(`${BOT}/plugins/music/play3.js`, 'utf8')
const body = src.slice(src.indexOf('function buildPlayerHtml'), src.indexOf('let handler = async (m, { conn, text })'))
const escFn = src.slice(src.indexOf('function escapeHtmlJs'), src.indexOf('function buildPlayerHtml'))
const buildPlayerHtml = new Function('return (function(){' + escFn + body + 'return buildPlayerHtml})()')()

process.chdir(BOT)
const { searchYoutube, getYoutubeDirectUrl } = await import(`${BOT}/lib/scrape/YouTube.js`)

console.log('\nMenyiapkan data video nyata...')
const ytUrl = await searchYoutube('Alan Walker Faded')
const info = await getYoutubeDirectUrl(ytUrl, '360')
console.log(`  video : ${info.title}`)
console.log(`  url   : ${String(info.url).slice(0, 70)}…`)

const html = buildPlayerHtml({
  title: info.title || 'YouTube Video',
  channel: 'Alan Walker',
  duration: `${Math.floor(info.duration / 60)}:${String(info.duration % 60).padStart(2, '0')}`,
  videoUrl: info.url,
  wsUrl: 'wss://stream.kanara.my.id/?url=' + encodeURIComponent(info.url),
  posterBase64: '',
})

fs.mkdirSync('/home/user/vendor/ytplay-test', { recursive: true })
fs.writeFileSync('/home/user/vendor/ytplay-test/player.html', html)
console.log(`  HTML  : ${html.length} byte`)

// ── Buka di Chrome ───────────────────────────────────────────────────────
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--autoplay-policy=no-user-gesture-required'],
})
const page = await browser.newPage()
await page.setViewport({ width: 460, height: 900 })

const logs = []
page.on('console', (m) => logs.push(`${m.type()}: ${m.text()}`))
page.on('pageerror', (e) => logs.push(`pageerror: ${e.message}`))

await page.goto('file:///home/user/vendor/ytplay-test/player.html', { waitUntil: 'domcontentloaded' })

console.log('\n═══ 1. Player dirender ═══')
await new Promise((r) => setTimeout(r, 1200))
const ui = await page.evaluate(() => {
  const g = (id) => document.getElementById(id)
  const txt = (id) => g(id)?.textContent?.trim() || ''
  return {
    judul: txt('songTitle'),
    artis: txt('artist'),
    durasi: txt('duration'),
    waktu: txt('currentTime'),
    wsState: txt('wsState'),
    wsServer: txt('wsServer'),
    adaVideo: !!g('videoPlayer'),
    adaFrame: !!g('videoFrame'),
  }
})
check('judul tampil di UI', ui.judul.length > 2, ui.judul)
check('nama channel tampil', ui.artis.length > 2, ui.artis)
check('durasi tampil', /^\d+:\d\d$/.test(ui.durasi), ui.durasi)
check('elemen <video> ada', ui.adaVideo)
check('panel debug menampilkan server', ui.wsServer.length > 2, ui.wsServer)

console.log('\n═══ 2. Streaming WebSocket → Blob ═══')
// Beri waktu WebSocket mengunduh (video 360p ±6 MB)
let connected = false
for (let i = 0; i < 40; i++) {
  const st = await page.evaluate(() => document.getElementById('wsState')?.textContent?.trim() || '')
  const jumlah = await page.evaluate(() => {
    const el = document.getElementById('dbgDownloaded')
    return el ? el.textContent.trim() : ''
  })
  if (/CONNECT|DOWNLOAD/i.test(st) && !connected) {
    connected = true
    console.log(`  ℹ️ status: ${st} · terunduh: ${jumlah}`)
  }
  if (/COMPLETE/i.test(st)) {
    console.log(`  ℹ️ status: ${st} · total terunduh: ${jumlah}`)
    break
  }
  await new Promise((r) => setTimeout(r, 1000))
}
const afterStream = await page.evaluate(() => ({
  state: document.getElementById('wsState')?.textContent?.trim() || '',
  downloaded: document.getElementById('dbgDownloaded')?.textContent?.trim() || '',
  total: document.getElementById('dbgTotal')?.textContent?.trim() || '',
  progress: document.getElementById('dbgProgress')?.textContent?.trim() || '',
  chunks: document.getElementById('dbgChunks')?.textContent?.trim() || '',
  mime: document.getElementById('dbgMime')?.textContent?.trim() || '',
  src: (() => { const v = document.getElementById('videoPlayer'); return v?.src ? v.src.slice(0, 24) : '' })(),
}))
check('unduhan WebSocket selesai', /COMPLETE/i.test(afterStream.state), afterStream.state)
check('menerima data video', afterStream.downloaded && afterStream.downloaded !== '0 B', afterStream.downloaded)
check('MIME terbaca', /video\//.test(afterStream.mime), afterStream.mime)
check('video diberi sumber blob', afterStream.src.startsWith('blob:'), afterStream.src)
check('chunk terkumpul', Number(afterStream.chunks) > 100, `${afterStream.chunks} chunk`)

console.log('\n═══ 3. Video benar-benar bisa diputar ═══')
const play = await page.evaluate(async () => {
  const v = document.getElementById('videoPlayer')
  if (!v || !v.src) return { ok: false, why: 'tanpa sumber' }
  try {
    await v.play()
    await new Promise((r) => setTimeout(r, 2500))
    return {
      ok: true,
      paused: v.paused,
      waktu: v.currentTime,
      durasi: v.duration,
      siap: v.readyState,
      lebar: v.videoWidth,
      tinggi: v.videoHeight,
    }
  } catch (e) {
    return { ok: false, why: e.message }
  }
})
check('perintah play() diterima', play.ok, play.why || '')
check('video sudah berjalan (tidak paused)', play.paused === false)
check('waktu berjalan maju', play.waktu > 0.3, `${play.waktu?.toFixed(2)}s dari ${isFinite(play.durasi) ? play.durasi.toFixed(0) + 's' : '?'}`)
check('resolusi video terbaca', play.lebar > 0 && play.tinggi > 0, `${play.lebar}×${play.tinggi}`)
check('tidak ada error JavaScript di player',
  !logs.some((l) => /pageerror|error:/i.test(l)),
  logs.filter((l) => /pageerror|error:/i.test(l))[0]?.slice(0, 70) || 'bersih')

console.log('\n═══ 4. Kontrol berfungsi ═══')
// Nama fungsi mengikuti play3.js: toggleMute, changeVolume, nextVideo,
// previousVideo, toggleVideo, toggleRepeat (bukan milik varian rimuru).
const ctrl = await page.evaluate(async () => {
  const v = document.getElementById('videoPlayer')
  const hasil = { tersedia: {} }
  for (const fn of ['toggleMute', 'changeVolume', 'nextVideo', 'previousVideo', 'toggleVideo', 'toggleRepeat', 'seekVideo']) {
    hasil.tersedia[fn] = typeof window[fn] === 'function'
  }
  window.toggleMute(); hasil.mute = v.muted
  window.toggleMute(); hasil.unmute = v.muted
  window.changeVolume('0.5'); hasil.volume = v.volume
  window.nextVideo(); hasil.maju = v.currentTime
  window.previousVideo(); hasil.mundur = v.currentTime
  window.seekVideo(50); hasil.seek = v.currentTime
  window.toggleRepeat(); hasil.loopOn = v.loop
  window.toggleRepeat(); hasil.loopOff = v.loop
  window.toggleVideo()
  hasil.setelahToggle = v.paused
  window.toggleVideo()
  hasil.setelahToggle2 = v.paused
  return hasil
})
const hilang = Object.entries(ctrl.tersedia).filter(([, ok]) => !ok).map(([n]) => n)
check('semua fungsi kontrol terpasang di window', hilang.length === 0, hilang.join(', ') || 'lengkap')
check('tombol mute berfungsi', ctrl.mute === true && ctrl.unmute === false)
check('slider volume berfungsi', Math.abs(ctrl.volume - 0.5) < 0.01, `volume=${ctrl.volume}`)
check('tombol maju 10s berfungsi', ctrl.maju > play.waktu, `${ctrl.maju?.toFixed(1)}s`)
check('tombol mundur 10s berfungsi', ctrl.mundur < ctrl.maju, `${ctrl.mundur?.toFixed(1)}s`)
check('tombol play/pause berfungsi', ctrl.setelahToggle === true && ctrl.setelahToggle2 === false)
check('slider geser (seek) berfungsi', ctrl.seek > 100 && ctrl.seek < 115, `${ctrl.seek?.toFixed(1)}s dari 213s`)
check('tombol ulang (loop) berfungsi', ctrl.loopOn === true && ctrl.loopOff === false)

await page.screenshot({ path: '/home/user/vendor/ytplay-test/player.png' })
console.log('\n  📸 tangkapan layar: /home/user/vendor/ytplay-test/player.png')

console.log(`\n═══ ${pass} lulus, ${fail} gagal ═══\n`)
await browser.close()
process.exit(fail ? 1 : 0)
