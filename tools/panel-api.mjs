#!/usr/bin/env node
/**
 * Alat panel hosting (Pterodactyl client API) untuk deploy berkas bot.
 *
 * Kredensial dibaca dari env, BUKAN ditulis di file:
 *   PTERO_PANEL_URL, PTERO_CLIENT_API_KEY, PTERO_SERVER_ID
 * Biasanya: `set -a; . .secrets/panel-bot.env; set +a`
 *
 * Perintah:
 *   node tools/panel-api.mjs list <dir>
 *   node tools/panel-api.mjs read <file>
 *   node tools/panel-api.mjs put <file-lokal> [<file-lokal> ...]
 *   node tools/panel-api.mjs power <start|stop|restart|kill>
 *   node tools/panel-api.mjs resources
 *
 * Catatan penting: endpoint `files/write` panel ini menerima **raw body**
 * (bukan multipart). Multipart menghasilkan HTTP 200 tetapi berkas kosong.
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const BASE = String(process.env.PTERO_PANEL_URL || '').replace(/\/+$/, '')
const KEY = process.env.PTERO_CLIENT_API_KEY
const REF = process.env.PTERO_SERVER_ID

if (!BASE || !KEY || !REF) {
  console.error('Butuh PTERO_PANEL_URL, PTERO_CLIENT_API_KEY, PTERO_SERVER_ID.')
  process.exit(2)
}

const auth = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }

async function read(remote) {
  const response = await fetch(`${BASE}/api/client/servers/${REF}/files/contents?file=${encodeURIComponent(remote)}`, { headers: auth })
  if (!response.ok) throw new Error(`read ${remote}: HTTP ${response.status}`)
  return response.text()
}

async function write(remote, body, contentType = 'text/plain; charset=utf-8') {
  const response = await fetch(`${BASE}/api/client/servers/${REF}/files/write?file=${encodeURIComponent(remote)}`, {
    method: 'POST',
    headers: { ...auth, 'Content-Type': contentType },
    body,
  })
  if (!response.ok) throw new Error(`write ${remote}: HTTP ${response.status} ${(await response.text()).slice(0, 200)}`)
}

const [mode, ...args] = process.argv.slice(2)

if (mode === 'list') {
  const dir = args[0] || '/'
  const response = await fetch(`${BASE}/api/client/servers/${REF}/files/list?directory=${encodeURIComponent(dir)}`, { headers: auth })
  const json = await response.json()
  for (const item of (json.data || []).map(entry => entry.attributes)) {
    console.log(`${item.is_file ? '-' : 'd'} ${String(item.size).padStart(10)}  ${item.modified_at}  ${item.name}`)
  }
} else if (mode === 'read') {
  process.stdout.write(await read(args[0]))
} else if (mode === 'put') {
  for (const local of args) {
    const remote = '/' + local.replace(/^\.?\//, '')
    const content = await fs.readFile(local, 'utf8')
    await write(remote, content)
    const back = await read(remote)
    console.log(back === content ? 'OK  ' : 'BEDA', local, content.length)
    if (back !== content) process.exitCode = 1
  }
} else if (mode === 'put-bin') {
  // args: <lokal> <remote> — dipakai untuk video/gambar (raw body biner).
  const [local, remote] = args
  const buffer = await fs.readFile(local)
  await write(remote, buffer, 'application/octet-stream')
  console.log('OK  ', remote, buffer.length)
} else if (mode === 'power') {
  const response = await fetch(`${BASE}/api/client/servers/${REF}/power`, {
    method: 'POST', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify({ signal: args[0] || 'restart' }),
  })
  console.log(response.status)
} else if (mode === 'resources') {
  const response = await fetch(`${BASE}/api/client/servers/${REF}/resources`, { headers: auth })
  const json = await response.json()
  const attr = json.attributes || {}
  console.log(response.status, attr.current_state, JSON.stringify(attr.resources))
} else {
  console.error('Perintah: list | read | put | put-bin | power | resources')
  process.exit(2)
}

export { read, write, path }
