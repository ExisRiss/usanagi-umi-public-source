/* Task206 — uji9 plugin asisten hasil port dari Kaguya (patungan, lembur,
 * listrik, packing, mathkit, lorem, ipk, acakan, bandingharga). */
import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const NAMA = [
  'usanagi-patungan', 'usanagi-lembur', 'usanagi-listrik', 'usanagi-packing',
  'usanagi-mathkit', 'usanagi-lorem', 'usanagi-ipk', 'usanagi-acakan',
  'usanagi-bandingharga',
]

function muat(nama) {
  return import(pathToFileURL(path.resolve(import.meta.dirname, `../plugins/tools/${nama}.js`)).href)
}

test('semua plugin asisten terimpor dan mengekspor handler valid', async () => {
  for (const nama of NAMA) {
    const mod = await muat(nama)
    const h = mod.default
    assert.equal(typeof h, 'function', `${nama}: default harus fungsi`)
    assert.ok(h.command, `${nama}: wajib punya handler.command`)
    assert.ok(Array.isArray(h.help) || typeof h.help === 'string', `${nama}: wajib ada help`)
    assert.equal(h.limit, false, `${nama}: limit=false`)
  }
})

test('regex command cocok dengan perintahnya sendiri', async () => {
  const cek = async (nama, perintah) => {
    const h = (await muat(nama)).default
    const cmd = Array.isArray(h.command) ? h.command : [h.command]
    const regex = cmd.length === 1 && cmd[0] instanceof RegExp ? cmd[0] : new RegExp(`^(${cmd.join('|')})$`, 'i')
    assert.ok(regex.test(perintah), `${nama}: ${perintah} harus cocok`)
  }
  await cek('usanagi-patungan', 'patungan')
  await cek('usanagi-lembur', 'lembur')
  await cek('usanagi-listrik', 'listrik')
  await cek('usanagi-packing', 'packing')
  await cek('usanagi-mathkit', 'mathkit')
  await cek('usanagi-lorem', 'lorem')
  await cek('usanagi-ipk', 'ipk')
  await cek('usanagi-ipk', 'nilai')
  await cek('usanagi-acakan', 'spin')
  await cek('usanagi-acakan', 'bagitim')
  await cek('usanagi-bandingharga', 'bandingharga')
})

test('parseNominal gaya kaguya bekerja (dipakai patungan/bandingharga)', async () => {
  // Uji lewat jalur command tak valid → balasan help (mengindikasikan parse NaN)
  const h = (await muat('usanagi-patungan')).default
  const replies = []
  const m = { reply: (t) => { replies.push(String(t)); return Promise.resolve() } }
  await h(m, { args: ['450rb', '5', '10', '5'], usedPrefix: '.' })
  assert.match(replies[0], /PATUNGAN/)
  assert.ok(!replies[0].includes('NaN'), 'hasil tidak boleh NaN')
  //450rb /5 orang + svc5% + pajak10% → total 519.750 → per orang103.950 → dibulat104.000
  assert.match(replies[0], /Rp 104\.000|Rp 104000|104\.000/)
})
