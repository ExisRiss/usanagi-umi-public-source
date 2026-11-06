/**
 * Task207 lanjutan — uji fitur tambahan:
 * 1. .delblacklist (hapus blacklist: nomer / @user / reply, izin owner)
 * 2. .ws tanpa argumen → tutorial cara pakai & cara main
 * 3. .spamrch / .stopspamrch (parse, rotasi emoji, dedup, auto-stop)
 */
import test from 'node:test'
import assert from 'node:assert/strict'

/* ================= /delblacklist ================= */

function mockPesan (extra = {}) {
  const kotak = { terakhir: '' }
  const m = {
    sender: '628000000000@s.whatsapp.net',
    quoted: null,
    mentionedJid: [],
    reply: async (teks) => { kotak.terakhir = String(teks || ''); return true },
    ...extra,
  }
  return { m, kotak }
}

async function loadDelblacklist () {
  return (await import('../plugins/group/delblacklist.js')).default
}

test('delblacklist: hapus lewat argumen nomer', async () => {
  const handler = await loadDelblacklist()
  global.db = { data: { blacklistUser: { '628111122223@s.whatsapp.net': { addedAt: 1 } } } }
  const { m, kotak } = mockPesan()
  await handler(m, { args: ['628111122223'], isAdmin: true, isOwner: false, usedPrefix: '.', command: 'delblacklist' })
  assert.equal(Object.keys(global.db.data.blacklistUser).length, 0, 'harus terhapus')
  assert.match(kotak.terakhir, /BLACKLIST DIHAPUS/)
})

test('delblacklist: hapus lewat mention @user', async () => {
  const handler = await loadDelblacklist()
  global.db = { data: { blacklistUser: { '628555566667@s.whatsapp.net': { addedAt: 1 } } } }
  const { m, kotak } = mockPesan({ mentionedJid: ['628555566667@s.whatsapp.net'] })
  await handler(m, { args: [], isAdmin: true, isOwner: false, usedPrefix: '.', command: 'delblacklist' })
  assert.equal(Object.keys(global.db.data.blacklistUser).length, 0)
  assert.match(kotak.terakhir, /BLACKLIST DIHAPUS/)
})

test('delblacklist: owner non-admin lolos, user biasa ditolak', async () => {
  const handler = await loadDelblacklist()
  global.db = { data: { blacklistUser: { '628111122223@s.whatsapp.net': { addedAt: 1 } } } }
  // owner yang BUKAN admin → tetap boleh
  const { m: mOwner, kotak: kotakOwner } = mockPesan()
  await handler(mOwner, { args: ['628111122223'], isAdmin: false, isOwner: true, usedPrefix: '.', command: 'delblacklist' })
  assert.equal(Object.keys(global.db.data.blacklistUser).length, 0)
  assert.match(kotakOwner.terakhir, /BLACKLIST DIHAPUS/)
  // bukan admin, bukan owner → ditolak
  global.db.data.blacklistUser['628111122223@s.whatsapp.net'] = { addedAt: 2 }
  const { m: mUser, kotak: kotakUser } = mockPesan()
  await handler(mUser, { args: ['628111122223'], isAdmin: false, isOwner: false, usedPrefix: '.', command: 'delblacklist' })
  assert.equal(Object.keys(global.db.data.blacklistUser).length, 1, 'tidak boleh terhapus')
  assert.match(kotakUser.terakhir, /admin grup atau owner/)
})

test('delblacklist: target tidak ada di blacklist → pesan jelas', async () => {
  const handler = await loadDelblacklist()
  global.db = { data: { blacklistUser: {} } }
  const { m, kotak } = mockPesan()
  await handler(m, { args: ['628999988887'], isAdmin: true, isOwner: false, usedPrefix: '.', command: 'delblacklist' })
  assert.match(kotak.terakhir, /tidak ada di blacklist/)
})

/* ================= .ws tanpa argumen → tutorial ================= */

test('ws: tutorialWs memuat cara pakai + cara main', async () => {
  const { tutorialWs } = await import('../plugins/game/whos-the-spy.js')
  const teks = tutorialWs('.')
  assert.match(teks, /TUTORIAL/)
  assert.match(teks, /\.ws buat/)
  assert.match(teks, /\.ws join/)
  assert.match(teks, /\.ws play/)
  assert.match(teks, /Cara main/)
  assert.match(teks, /REPLY pesan bot/)
  assert.match(teks, /MENTION bot/)
  assert.match(teks, /SPY/)
  assert.match(teks, /XP/)
})

test('ws: handler tanpa argumen membalas tutorial (grup)', async () => {
  const handler = (await import('../plugins/game/whos-the-spy.js')).default
  const kotak = { terakhir: '' }
  const m = {
    chat: '123456@g.us',
    sender: '6281234567890@s.whatsapp.net',
    pushName: 'Penguji',
    reply: async (teks) => { kotak.terakhir = String(teks || ''); return true },
  }
  await handler(m, { conn: { user: { id: '628000:1@s.whatsapp.net' } }, args: [], usedPrefix: '.' })
  assert.match(kotak.terakhir, /TUTORIAL/)
  assert.match(kotak.terakhir, /\.ws buat/)
})

test('ws: subcommand tak dikenal → pesan tidak dikenal + tutorial', async () => {
  const handler = (await import('../plugins/game/whos-the-spy.js')).default
  const kotak = { terakhir: '' }
  const m = {
    chat: '123456@g.us',
    sender: '6281234567890@s.whatsapp.net',
    pushName: 'Penguji',
    reply: async (teks) => { kotak.terakhir = String(teks || ''); return true },
  }
  await handler(m, { conn: { user: { id: '628000:1@s.whatsapp.net' } }, args: ['nyeleneh'], usedPrefix: '.' })
  assert.match(kotak.terakhir, /tidak dikenal/)
  assert.match(kotak.terakhir, /TUTORIAL/)
})

/* ================= /spamrch ================= */

test('spamrch: parse link channel + emoji (dengan/s tanpa nomor post)', async () => {
  const { parseSpamrch } = await import('../plugins/misc/spamrch.js')
  const a = parseSpamrch('https://whatsapp.com/channel/0029VbAbCdEf 🤣,🗿,😀,🙃,🙂')
  assert.ok(a, 'parse harus berhasil')
  assert.equal(a.invite, '0029VbAbCdEf')
  assert.deepEqual(a.emojis, ['🤣', '🗿', '😀', '🙃', '🙂'])
  // link dengan nomor post (gaya rch2) juga diterima, postId diabaikan
  const b = parseSpamrch('whatsapp.com/channel/0029VbAbCdEf/436 🗿,😀')
  assert.ok(b)
  assert.equal(b.invite, '0029VbAbCdEf')
  assert.deepEqual(b.emojis, ['🗿', '😀'])
  // duplikat emoji dibuang
  const c = parseSpamrch('https://whatsapp.com/channel/0029X 🤣,🤣,😀')
  assert.deepEqual(c.emojis, ['🤣', '😀'])
  // tanpa link → null
  assert.equal(parseSpamrch('🤣,🗿'), null)
  // Kasus asli laporan6/11 — emoji dipisah spasi di tengah: 🤣,🫣,🤔 🗿
  const d = parseSpamrch('https://whatsapp.com/channel/0029Vb8patRIiRouT6Cxqt18 🤣,🫣,🤔 🗿')
  assert.ok(d, 'parse spasi harus berhasil')
  assert.equal(d.invite, '0029Vb8patRIiRouT6Cxqt18')
  assert.deepEqual(d.emojis, ['🤣', '🫣', '🤔', '🗿'])
  // Kasus asli laporan6/11 — koma menempel setelah link: `link, 🤣…`
  const e = parseSpamrch('https://whatsapp.com/channel/0029Vb8patRIiRouT6Cxqt18, 🤣,🫣,🤔 🗿')
  assert.ok(e, 'parse koma setelah link harus berhasil')
  assert.equal(e.invite, '0029Vb8patRIiRouT6Cxqt18')
  assert.deepEqual(e.emojis, ['🤣', '🫣', '🤔', '🗿'])
})

test('spamrch: validEmoji menerima emoji, menolak teks biasa', async () => {
  const { validEmoji } = await import('../plugins/misc/spamrch.js')
  assert.equal(validEmoji('🤣'), true)
  assert.equal(validEmoji('😀'), true)
  assert.equal(validEmoji('abc'), false)
  assert.equal(validEmoji(''), false)
})

test('spamrch: prosesPolling — pesan baru di-spam semua koneksi, dedup, skip fromMe, rotasi emoji', async () => {
  const { buatStateSpam, prosesPolling } = await import('../plugins/misc/spamrch.js')
  const state = buatStateSpam({ invite: '0029X', channelId: '120363@newsletter', emojis: ['🤣', '🗿'] })
  const pesan = [
    { key: { id: 'A', server_id: '11', fromMe: false }, messageTimestamp: 10 },
    { key: { id: 'B', server_id: '22', fromMe: false }, messageTimestamp: 20 },
    { key: { id: 'C', server_id: '33', fromMe: true }, messageTimestamp: 30 }, // postingan bot sendiri
  ]
  // start: pesan lama ditandai seen (tidak di-spam)
  state.seen.add('LAMA')
  const aksi = prosesPolling(state, [...pesan, { key: { id: 'LAMA', server_id: '9' } }], 2)
  // A + B (C fromMe dilewati) ×2 koneksi =4 aksi
  assert.equal(aksi.length, 4)
  assert.deepEqual(aksi.map(a => a.serverId), ['11', '11', '22', '22'])
  // rotasi emoji global: 🤣,🗿,🤣,🗿
  assert.deepEqual(aksi.map(a => a.emoji), ['🤣', '🗿', '🤣', '🗿'])
  // fetch ulang (pesan sama) → tidak ada aksi baru (dedup)
  const ulang = prosesPolling(state, pesan, 2)
  assert.equal(ulang.length, 0)
  // pesan baru datang → langsung dapat aksi
  const baru = prosesPolling(state, [{ key: { id: 'D', server_id: '44', fromMe: false }, messageTimestamp: 40 }], 2)
  assert.equal(baru.length, 2)
})

test('spamrch: catatHasilTick — reset saat sukses, auto-stop setelah20 kegagalan berturut', async () => {
  const { buatStateSpam, catatHasilTick, GAGAL_BERTURUT_MAKS } = await import('../plugins/misc/spamrch.js')
  const state = buatStateSpam({ invite: '0029X', channelId: '120363@newsletter', emojis: ['🤣'] })
  assert.equal(catatHasilTick(state, [true, false]), 'lanjut')
  assert.equal(state.gagalBerturut, 0)
  for (let i = 0; i < GAGAL_BERTURUT_MAKS - 1; i += 1) {
    assert.equal(catatHasilTick(state, [false]), 'lanjut')
  }
  assert.equal(state.berjalan, true)
  assert.equal(catatHasilTick(state, [false]), 'stop')
  assert.equal(state.berjalan, false)
})

test('spamrch: handler — rowner, regex mencakup spamrch & stopspamrch', async () => {
  const handler = (await import('../plugins/misc/spamrch.js')).default
  assert.equal(handler.rowner, true)
  assert.ok(handler.command.test('spamrch'))
  assert.ok(handler.command.test('stopspamrch'))
  assert.ok(!handler.command.test('rch2'))
  // usage dipanggil saat input kosong (bukan error)
  const kotak = { terakhir: '' }
  const m = { reply: async (t) => { kotak.terakhir = String(t || ''); return true } }
  await handler(m, { text: '', usedPrefix: '.', command: 'spamrch' })
  assert.match(kotak.terakhir, /link channel/i)
})
