#!/usr/bin/env node
/**
 * Pembantu Pterodactyl Client API untuk deploy Usanagi Umi.
 * Membaca kredensial dari /home/user/.secrets/usanagi-credentials.env
 * (di luar repo — tidak pernah ikut ter-commit).
 *
 * Pakai:
 *   node tools/ptero.mjs list
 *   node tools/ptero.mjs upload <file-lokal> <tujuan-di-server>
 *   node tools/ptero.mjs decompress <file-di-server> <root-tujuan>
 *   node tools/ptero.mjs ls [dir]
 *   node tools/ptero.mjs var <KEY> <VALUE>
 *   node tools/ptero.mjs power start|stop|restart|kill
 *   node tools/ptero.mjs console "<perintah>"
 *   node tools/ptero.mjs watch [detik]
 */
import fs from 'node:fs'
import path from 'node:path'

// Panel mana yang dipakai ditentukan oleh berkas env ini. Default panel3;
// arahkan ke panel lain dengan: PTERO_ENV_FILE=/path/panel5-credentials.env
const CRED = process.env.PTERO_ENV_FILE || '/home/user/.secrets/usanagi-credentials.env'
const env = Object.fromEntries(
  fs
    .readFileSync(CRED, 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.trim().startsWith('#'))
    .map(l => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    })
)

const BASE = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY

// Server target: satu-satunya server di akun ini.
// Panel aktif: panel3.ikyhost.cloud · server serverkuVip.
// Override dengan PTERO_SERVER=<identifier> bila perlu.
// Jangan pernah menebak ID server. ID bawaan lama (d4116029) milik panel3;
// memakainya di panel lain menghasilkan 404 yang membingungkan ("resource not
// found") padahal masalahnya server target tidak ada di panel itu.
const SERVER =
  process.env.PTERO_SERVER ||
  process.env.PTERO_SERVER_ID ||
  env.PTERO_SERVER_ID ||
  (process.env.PTERO_ENV_FILE ? '' : 'd4116029')

const H = {
  Authorization: `Bearer ${KEY}`,
  Accept: 'application/json',
}

const api = (p, init = {}) => fetch(`${BASE}/api/client/servers/${SERVER}${p}`, { headers: H, ...init })

async function show(res) {
  const text = await res.text()
  let pretty = text
  try {
    pretty = JSON.stringify(JSON.parse(text), null, 2)
  } catch {}
  console.log(`HTTP ${res.status}`)
  console.log(pretty.slice(0, 3000))
  return res.status
}

const [cmd, ...args] = process.argv.slice(2)
if (!SERVER && cmd !== 'list') {
  console.error('[ptero] PTERO_SERVER_ID belum diisi di berkas env panel ini.')
  console.error('[ptero] Tambahkan: PTERO_SERVER_ID=<identifier> (lihat daftar via: ptero list)')
  process.exit(2)
}


switch (cmd) {
  case 'list': {
    const res = await fetch(`${BASE}/api/client`, { headers: H })
    const json = await res.json()
    for (const s of json.data || []) {
      const a = s.attributes
      console.log(`${a.identifier}  ${a.name}  ${a.status || 'offline'}  ${a.docker_image}`)
    }
    break
  }

  case 'ls': {
    const dir = args[0] || '/'
    const res = await api(`/files/list?directory=${encodeURIComponent(dir)}`)
    // Cek status lebih dulu: memanggil show() setelah json() membaca ulang body
    // akan melempar "Body is unusable".
    if (!res.ok) {
      console.log(`HTTP ${res.status} - direktori tidak ada / tidak bisa diakses: ${dir}`)
      break
    }
    const json = await res.json()
    if (!json.data) { console.log('(tidak ada data)'); break }
    const rows = json.data.map(x => x.attributes)
    rows.sort((a, b) => (a.is_file === b.is_file ? a.name.localeCompare(b.name) : a.is_file ? -1 : 1))
    for (const r of rows) {
      const kind = r.is_file ? 'file' : 'DIR '
      const size = r.is_file ? `${(r.size / 1024).toFixed(1)} KB` : `${(r.size / 1024 / 1024).toFixed(1)} MB`
      console.log(`${kind}  ${size.padStart(10)}  ${r.name}`)
    }
    console.log(`(${rows.length} entri)`)
    break
  }

  case 'upload': {
    const [local, target] = args
    const stat = fs.statSync(local)
    console.log(`Mengunggah ${path.basename(local)} (${(stat.size / 1048576).toFixed(2)} MB) -> ${target}`)
    const started = Date.now()
    const res = await api(`/files/write?file=${encodeURIComponent(target)}`, {
      method: 'POST',
      headers: { ...H, 'Content-Type': 'application/octet-stream' },
      body: fs.readFileSync(local),
      duplex: 'half',
    })
    const status = await show(res)
    if (status === 204 || status === 200) {
      console.log(`OK dalam ${((Date.now() - started) / 1000).toFixed(1)}s`)
    }
    break
  }

  case 'decompress': {
    const [file, root] = args
    const res = await api('/files/decompress', {
      method: 'POST',
      headers: { ...H, 'Content-Type': 'application/json' },
      body: JSON.stringify({ root: root || '/', file: path.basename(file) }),
    })
    await show(res)
    break
  }

  case 'delete': {
    const res = await api('/files/delete', {
      method: 'POST',
      headers: { ...H, 'Content-Type': 'application/json' },
      body: JSON.stringify({ root: '/', files: args }),
    })
    await show(res)
    break
  }

  case 'var': {
    const [key, ...rest] = args
    const value = rest.join(' ')
    const res = await api('/startup/variable', {
      method: 'PUT',
      headers: { ...H, 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    })
    await show(res)
    break
  }

  case 'power': {
    const res = await api('/power', {
      method: 'POST',
      headers: { ...H, 'Content-Type': 'application/json' },
      body: JSON.stringify({ signal: args[0] || 'start' }),
    })
    await show(res)
    break
  }

  case 'console': {
    const res = await api('/command', {
      method: 'POST',
      headers: { ...H, 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: args.join(' ') }),
    })
    await show(res)
    break
  }

  case 'watch': {
    const seconds = Number(args[0] || 30)
    const { createRequire } = await import('node:module')
    const require = createRequire('/home/user/vendor/noop.cjs')
    const WebSocket = require('/home/user/vendor/ws')

    const res = await api('/websocket')
    const json = await res.json()
    if (!json.data?.token) {
      await show(res)
      break
    }

    const ws = new WebSocket(json.data.socket, { origin: BASE })
    let buffer = ''
    const done = new Promise(resolve => {
      setTimeout(() => {
        ws.close()
        resolve()
      }, seconds * 1000)
    })
    ws.on('open', () => {
      ws.send(JSON.stringify({ event: 'auth', args: [json.data.token] }))
      console.log(`--- menonton konsol ${seconds}s ---`)
    })
    ws.on('message', raw => {
      const msg = JSON.parse(raw.toString())
      if (msg.event === 'console output') buffer = (buffer + msg.args[0]).slice(-8000)
      if (msg.event === 'status') console.log(`[status] ${msg.args[0]}`)
      if (msg.event === 'auth success') console.log('[auth] ok')
    })
    ws.on('error', e => console.log('[ws error]', e.message))
    await done
    console.log('--- keluaran konsol terakhir ---')
    console.log(buffer.trim() || '(kosong)')
    break
  }

  default:
    console.log('Perintah tidak dikenal. Lihat komentar di bagian atas file ini.')
}
