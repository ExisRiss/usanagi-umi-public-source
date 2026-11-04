/* Task206 — uji saringZip (filter zip .getsc tanpa kompresi ulang). */
import test from 'node:test'
import assert from 'node:assert/strict'
import { saringZip, daftarEntri, cariEOCD } from '../lib/zip-filter.js'

/* CRC32 kecil (tabel) untuk membangun zip uji. */
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return (c ^ 0xffffffff) >>> 0
}

/** Bangun zip STORE sederhana (tanpa kompresi). */
function buatZip(entries) {
  const bagian = []
  const pusat = []
  let offset = 0
  for (const { nama, data } of entries) {
    const nb = Buffer.from(nama, 'utf8')
    const crc = crc32(data)
    const lh = Buffer.alloc(30)
    lh.writeUInt32LE(0x04034b50, 0)
    lh.writeUInt16LE(20, 4)
    lh.writeUInt16LE(0, 6)
    lh.writeUInt16LE(0, 8)      // method: store
    lh.writeUInt32LE(crc, 14)
    lh.writeUInt32LE(data.length, 18)
    lh.writeUInt32LE(data.length, 22)
    lh.writeUInt16LE(nb.length, 26)
    bagian.push(lh, nb, data)

    const cd = Buffer.alloc(46)
    cd.writeUInt32LE(0x02014b50, 0)
    cd.writeUInt16LE(20, 4)
    cd.writeUInt16LE(20, 6)
    cd.writeUInt16LE(0, 8)
    cd.writeUInt16LE(0, 10)
    cd.writeUInt32LE(crc, 16)
    cd.writeUInt32LE(data.length, 20)
    cd.writeUInt32LE(data.length, 24)
    cd.writeUInt16LE(nb.length, 28)
    cd.writeUInt32LE(offset, 42)
    pusat.push(cd, nb)
    offset += 30 + nb.length + data.length
  }
  const cdBuf = Buffer.concat(pusat)
  const eocd = Buffer.alloc(22)
  eocd.writeUInt32LE(0x06054b50, 0)
  eocd.writeUInt16LE(entries.length, 8)
  eocd.writeUInt16LE(entries.length, 10)
  eocd.writeUInt32LE(cdBuf.length, 12)
  eocd.writeUInt32LE(offset, 16)
  return Buffer.concat([...bagian, cdBuf, eocd])
}

const ISI = [
  { nama: 'akar-repo/bin/app.bin', data: Buffer.alloc(4096, 9) },
  { nama: 'akar-repo/bin/lagi.dll', data: Buffer.alloc(1024, 8) },
  { nama: 'akar-repo/lib/index.js', data: Buffer.from('export const halo = 1\n') },
  { nama: 'akar-repo/package.json', data: Buffer.from('{"name":"uji"}') },
]

const rel = (n) => { const i = n.indexOf('/'); return i < 0 ? n : n.slice(i + 1) }

test('saringZip membuang bin/ dan mempertahankan isi entri lain', () => {
  const asli = buatZip(ISI)
  const hasil = saringZip(asli, (n) => rel(n).startsWith('bin/'))

  assert.ok(cariEOCD(hasil) >= 0, 'EOCD valid')
  const { entri } = daftarEntri(hasil)
  assert.equal(entri.length, 2)
  assert.deepEqual(entri.map((e) => e.nama).sort(), ['akar-repo/lib/index.js', 'akar-repo/package.json'])

  // Isi byte tiap entri identik dengan asli:
  for (const e of entri) {
    const src = ISI.find((x) => x.nama === e.nama)
    const lh = e.lokalOffset
    const nl = hasil.readUInt16LE(lh + 26)
    const el = hasil.readUInt16LE(lh + 28)
    const data = hasil.subarray(lh + 30 + nl + el, lh + 30 + nl + el + e.kompresi)
    assert.deepEqual(data, src.data, `isi ${e.nama} identik`)
    assert.equal(e.crc, crc32(src.data), `CRC ${e.nama} sah`)
  }
  assert.ok(hasil.length < asli.length, 'ukuran turun')
})

test('saringZip menolak bila semua entri terbuang', () => {
  const asli = buatZip(ISI)
  assert.throws(() => saringZip(asli, () => true), /terbuang/)
})

test('saringZip pada zip tanpa prefix akar tetap bekerja', () => {
  const asli = buatZip([
    { nama: 'bin/x', data: Buffer.from('x') },
    { nama: 'ok.txt', data: Buffer.from('ok') },
  ])
  const hasil = saringZip(asli, (n) => n.startsWith('bin/'))
  const { entri } = daftarEntri(hasil)
  assert.deepEqual(entri.map((e) => e.nama), ['ok.txt'])
})
