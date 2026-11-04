/* Task204 — uji plugin cpanel & data tebak baru (tanpa jaringan). */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'

test('cpanel: cariServer cocok nama, id, dan prefix', async () => {
  const { cariServer, formatServer } = await import('../plugins/owner/owner-cpanel.js')
  const rows = [
    { attributes: { name: 'alzmc', identifier: '5cf3831d', status: 'running', limits: { cpu: 100, memory: 2048, disk: 10240 } } },
    { attributes: { name: 'panel-bot', identifier: 'ae4de6fb', status: 'offline', limits: { cpu: 100, memory: 512, disk: 2048 } } },
  ]

  assert.equal(cariServer(rows, 'alzmc')?.attributes.name, 'alzmc')
  assert.equal(cariServer(rows, '5cf3831d')?.attributes.name, 'alzmc')
  assert.equal(cariServer(rows, 'ALZMC')?.attributes.name, 'alzmc')
  assert.equal(cariServer(rows, '5cf')?.attributes.name, 'alzmc')
  assert.equal(cariServer(rows, 'panel-bot')?.attributes.name, 'panel-bot')
  assert.equal(cariServer(rows, 'tidak-ada'), null)
  assert.equal(cariServer(rows, ''), null)

  const t = formatServer(rows[0].attributes)
  assert.match(t, /alzmc/)
  assert.match(t, /🟢/)
  assert.match(t, /running/)
})

test('cpanel: formatServer offline jadi merah', async () => {
  const { formatServer } = await import('../plugins/owner/owner-cpanel.js')
  const t = formatServer({ name: 'x', identifier: 'abcd1234', status: 'offline', limits: {} })
  assert.match(t, /🔴/)
})

test('dataset tebakheroml: 150 hero, semua punya jawaban+gambar', () => {
  const d = JSON.parse(fs.readFileSync(new URL('../json/tebakheroml.json', import.meta.url), 'utf8'))
  assert.ok(d.length >= 100, 'minimal 100 hero, dapat ' + d.length)
  for (const x of d) {
    assert.ok(x.jawaban && x.jawaban.length >= 2, 'jawaban valid: ' + JSON.stringify(x))
    assert.match(x.img, /^https:\/\//, 'gambar https')
    assert.ok(x.deskripsi, 'deskripsi ada')
  }
})

test('dataset tebak baru (7 kategori) valid', () => {
  for (const k of ['film', 'kota', 'hewan', 'negara', 'profesi', 'makanan', 'anime']) {
    const p = new URL(`../json/tebak${k}.json`, import.meta.url)
    const d = JSON.parse(fs.readFileSync(p, 'utf8'))
    assert.ok(Array.isArray(d) && d.length >= 5, k + ' minimal 5 soal')
    for (const x of d) {
      assert.ok(x.soal, k + ' punya soal')
      assert.ok(x.jawaban, k + ' punya jawaban')
    }
  }
})

test('7 plugin tebak baru ter-load dan command benar', async () => {
  const daftar = [
    'tebakfilm', 'tebakkota', 'tebakhewan', 'tebaknegara',
    'tebakprofesi', 'tebakmakanan', 'tebakanime',
  ]
  for (const key of daftar) {
    const mod = await import(`../plugins/game/game-${key}.js`)
    const h = mod.default
    assert.ok(h, key + ' punya default export')
    assert.equal(typeof h, 'function', key + ' handler fungsi')
    assert.ok(h.before, key + ' punya handler.before')
    const re = h.command
    assert.ok(re instanceof RegExp, key + ' command RegExp')
    assert.ok(re.test(key), key + ' menerima "' + key + '"')
    assert.ok(!re.test(key + 'x'), key + ' tidak menerima tambahan huruf')
  }
})

test('tebakheroml pakai dataset lokal (bukan api.deline yang mati)', async () => {
  const src = fs.readFileSync(new URL('../plugins/game/game-tebakheroml.js', import.meta.url), 'utf8')
  assert.ok(!src.includes('api.deline.web.id'), 'tidak boleh memanggil api.deline.web.id')
  assert.ok(src.includes('json/tebakheroml.json'), 'wajib baca dataset lokal')
})
