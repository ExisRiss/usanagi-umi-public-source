#!/usr/bin/env node
/**
 * Deploy game web Umi Games (db-mirror) ke dalam container bot di panel baru.
 *
 *   node tools/deploy-game.mjs            # upload + restart
 *   node tools/deploy-game.mjs --no-restart
 *   node tools/deploy-game.mjs --files    # hanya berkas game (tanpa tunnel/companion)
 *
 * Kenapa begini:
 *   Node lama (167.99.67.212) sudah mati. Game menumpang di container bot
 *   (server f7811b23, panel beyy-ganteng-store sejak Task77) dan diakses lewat
 *   tunnel umi-games-gwenna (6f82f294) yang dijalankan scripts/companion.js.
 *
 * Yang diunggah:
 *   game/{game.js,game.html,trading.html}  -> /game/
 *   game-token.txt, tunnel-games.yml, tunnel-games-creds.json -> /
 *   companion.js                           -> /scripts/
 *
 * Catatan: endpoint unggah panel selalu mendaratkan berkas di root, jadi
 * berkas dipindahkan ke subfolder lewat files/rename setelah diunggah.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' // panel lama & baru kadang salah sertifikat

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MIRROR = path.join(REPO, 'db-mirror')
const SECRETS = '/home/user/.secrets'
const args = process.argv.slice(2)
const NO_RESTART = args.includes('--no-restart')
const FILES_ONLY = args.includes('--files')

const CRED_FILE = ['panel4-credentials.env', 'panel-new-credentials.env']
  .map((name) => path.join(SECRETS, name))
  .find((file) => fs.existsSync(file))
const env = Object.fromEntries(
  fs.readFileSync(CRED_FILE, 'utf8')
    .split('\n').filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }),
)
const BASE = env.PTERO_PANEL_URL.replace(/\/+$/, '')
const KEY = env.PTERO_CLIENT_API_KEY
const SERVER = process.env.PTERO_SERVER || env.PTERO_SERVER_JADIBOT || 'f7811b23'
const API = `${BASE}/api/client/servers/${SERVER}`
const HEAD = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }

const log = (message) => console.log(`[deploy-game] ${message}`)

async function signedUpload(localFile, remoteDir, remoteName) {
  const res = await fetch(`${API}/files/upload?directory=${encodeURIComponent(remoteDir)}`, { headers: HEAD })
  if (!res.ok) throw new Error(`signed url gagal (${res.status})`)
  const { attributes } = await res.json()
  const form = new FormData()
  form.append('files', new Blob([fs.readFileSync(localFile)]), remoteName)
  const put = await fetch(attributes.url, { method: 'POST', body: form })
  if (!put.ok) throw new Error(`unggah ${remoteName} gagal (${put.status})`)
  log(`unggah ${remoteName} (${fs.statSync(localFile).size} byte)`)
}

async function api(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, {
    ...init,
    headers: { ...HEAD, ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...(init.headers || {}) },
  })
  return { status: res.status, text: await res.text() }
}

async function move(from, to) {
  // files/rename menolak kalau tujuan sudah ada (HTTP 400) — hapus dulu.
  await api('/files/delete', { method: 'POST', body: JSON.stringify({ root: '/', files: [to] }) })
  const { status } = await api('/files/rename', {
    method: 'PUT',
    body: JSON.stringify({ root: '/', files: [{ from, to }] }),
  })
  log(`pindah ${from} -> ${to} (${status})`)
  if (status >= 300) log(`  ! gagal pindah — berkas masih di ${from}`)
}

async function main() {
  const gameDir = path.join(MIRROR, 'game') // opsional: berkas siap-deploy
  const src = (name) => {
    const staged = path.join(gameDir, name)
    return fs.existsSync(staged) ? staged : path.join(MIRROR, name)
  }

  // pastikan /game ada
  await api('/files/create-folder', { method: 'POST', body: JSON.stringify({ root: '/', name: 'game' }) })

  for (const name of ['game.js', 'game.html', 'trading.html', 'trading-offline.html',
                      'empire.html', 'empire.js', 'empire-ui.js']) {
    const file = src(name)
    if (!fs.existsSync(file)) { log(`lewat ${name} (tidak ada)`); continue }
    await signedUpload(file, '/', name)
    await move(`/${name}`, `/game/${name}`)
  }

  // aset gambar/ikon/offline bundle -> /game/assets (rekursif, termasuk subfolder
  // seperti pieces/chess, pieces/pawn, pieces/ikon, pieces/ww)
  const assetsDir = path.join(MIRROR, 'assets')
  if (fs.existsSync(assetsDir)) {
    await api('/files/create-folder', { method: 'POST', body: JSON.stringify({ root: '/game', name: 'assets' }) })
    let count = 0
    const files = []
    const collect = (dir, rel) => {
      for (const name of fs.readdirSync(dir).sort()) {
        const full = path.join(dir, name)
        const relPath = rel ? `${rel}/${name}` : name
        if (fs.statSync(full).isDirectory()) collect(full, relPath)
        else files.push({ full, relPath })
      }
    }
    collect(assetsDir, '')
    for (const { full, relPath } of files) {
      const dirs = relPath.split('/').slice(0, -1)
      let root = '/game'
      for (const d of dirs) {
        await api('/files/create-folder', { method: 'POST', body: JSON.stringify({ root, name: d }) })
        root = `${root}/${d}`
      }
      const base = relPath.split('/').pop()
      await signedUpload(full, '/', base)
      await move(`/${base}`, `/game/assets/${relPath}`)
      count++
    }
    log(`assets: ${count} berkas -> /game/assets (rekursif)`)
  } else log('db-mirror/assets tidak ada — lewati')

  if (!FILES_ONLY) {
    const tokenEnv = fs.existsSync(path.join(SECRETS, 'game-token.env'))
      ? fs.readFileSync(path.join(SECRETS, 'game-token.env'), 'utf8').match(/UMI_GAME_TOKEN=(\S+)/)?.[1]
      : ''
    if (tokenEnv) {
      const tmp = '/tmp/deploy-game-token.txt'
      fs.writeFileSync(tmp, tokenEnv + '\n')
      await signedUpload(tmp, '/', 'game-token.txt')
      fs.unlinkSync(tmp)
    }

    await signedUpload(path.join(MIRROR, 'tunnel-games.yml'), '/', 'tunnel-games.yml')
    const creds = path.join(SECRETS, 'tunnel-creds-umi-games.json')
    if (fs.existsSync(creds)) await signedUpload(creds, '/', 'tunnel-games-creds.json')
    else log('tunnel-games-creds.json tidak ada di .secrets — lewati')

    if (fs.existsSync(path.join(MIRROR, 'companion.js'))) {
      await signedUpload(path.join(MIRROR, 'companion.js'), '/', 'companion.js')
      await move('/companion.js', '/scripts/companion.js')
    }
  }

  if (NO_RESTART) { log('selesai (tanpa restart)'); return }
  const power = await api('/power', { method: 'POST', body: JSON.stringify({ signal: 'restart' }) })
  log(`restart dikirim (${power.status}) — tunggu ~40 detik lalu cek https://game.gwenna.my.id/health`)
}

main().catch((error) => { console.error('[deploy-game] gagal:', error.message); process.exit(1) })
