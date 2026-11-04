/* Task206 — uji arsip backup pres <100 MB: exclude aktif + panduan ikut. */
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { buatArsip, komponenAda } from '../lib/backup/arsip.js'

function buatRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'umi-arsip-test-'))
  const tulis = (rel, isi) => {
    const p = path.join(root, rel)
    fs.mkdirSync(path.dirname(p), { recursive: true })
    fs.writeFileSync(p, isi)
  }
  tulis('sessions/jadibot/6281111/creds.json', JSON.stringify({ noise: 'x'.repeat(5000) }))
  tulis('data/seleksi/db.json', '{"ok":true}')
  tulis('data/seleksi/foto/besar.png', Buffer.alloc(600 * 1024, 7))
  tulis('data/latency-119.jsonl', 'x'.repeat(200000))
  tulis('data/latency-abc.jsonl', 'y'.repeat(1000))
  tulis('data/jadibot-backups/sesi.tar', 'z')
  tulis('public/index.html', '<html>halaman web</html>')
  tulis('assets/igqc/template.json', '["a","b"]')
  tulis('assets/ttqc/t.json', '[]')
  tulis('assets/wacall_meme/m.json', '{}')
  tulis('assets/video/menu.mp4', Buffer.alloc(4096, 1))
  tulis('assets/image/hero.png', Buffer.alloc(2048, 2))
  tulis('database.json', '{"users":{}}')
  tulis('config.js', 'export default {}')
  for (let i = 0; i < 12; i += 1) tulis(`json/bonus-${i}.json`, `{"i":${i}}`)
  fs.mkdirSync(path.join(root, 'situs'), { recursive: true })
  fs.writeFileSync(path.join(root, 'situs', 'index.html'), '<html>situs user</html>')
  return root
}

function cfg(root) {
  const dir = path.join(root, 'data', 'backup-system')
  return {
    root,
    dir,
    arsipDir: path.join(dir, 'archives'),
    lokalSimpan: 6,
    minFreeByte: 0,
  }
}

test('komponenAda memilih hanya folder yang ada', () => {
  const root = buatRoot()
  try {
    const k = komponenAda(root)
    assert.ok(k.includes('sessions') && k.includes('data'))
    assert.ok(!k.includes('node_modules'))
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})

test('buatArsip: exclude pres aktif, panduan ikut, arsip valid', async () => {
  const root = buatRoot()
  try {
    const hasil = await buatArsip(cfg(root))
    assert.ok(hasil.berkas && fs.existsSync(hasil.berkas), 'arsip harus ada')
    assert.ok(hasil.ukuran > 0 && hasil.jumlahBerkas >= 20)

    const daftar = execFileSync('tar', ['-tzf', hasil.berkas], { encoding: 'utf8' })
      .split('\n').filter(Boolean)

    // Wajib ikut:
    assert.ok(daftar.some((n) => n.includes('sessions/jadibot')), 'sesi jadibot ikut')
    assert.ok(daftar.some((n) => n.includes('data/seleksi/db.json')), 'db seleksi ikut')
    assert.ok(daftar.some((n) => n.includes('assets/image/hero.png')), 'gambar menu ikut')
    assert.ok(daftar.some((n) => n.includes('situs/')), 'situs user ikut')
    assert.ok(daftar.some((n) => n.includes('_CARA-PULIH.txt')), 'panduan pulih ikut')

    // Task206 wajib DIBUANG:
    assert.ok(!daftar.some((n) => n.includes('seleksi/foto')), 'foto seleksi dibuang')
    assert.ok(!daftar.some((n) => n.includes('latency-')), 'log latency dibuang')
    assert.ok(!daftar.some((n) => n.includes('jadibot-backups')), 'backup-dalam-backup dibuang')
    assert.ok(!daftar.some((n) => n.includes('assets/igqc')), 'template igqc dibuang')
    assert.ok(!daftar.some((n) => n.includes('assets/ttqc')), 'template ttqc dibuang')
    assert.ok(!daftar.some((n) => n.includes('wacall_meme')), 'template wacall dibuang')
    assert.ok(!daftar.some((n) => n.includes('assets/video')), 'video dibuang')
    assert.ok(!daftar.some((n) => n.includes('public/')), 'public (repo git) dibuang')
    assert.ok(!daftar.some((n) => n.endsWith('.mp4')), 'mp4 global dibuang')

    // Panduan memuat langkah pemulihan:
    const isi = execFileSync('tar', ['-xzOf', hasil.berkas, daftar.find((n) => n.includes('_CARA-PULIH'))],
      { encoding: 'utf8' })
    assert.match(isi, /CARA PULIH DI SERVER TUNNEL BARU/)
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
