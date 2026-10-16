/* Companion services — dijalankan sebagai CMD_RUN container bot:
 *   node scripts/companion.js
 *
 * Menyalakan, di samping bot:
 *   1) game web Umi Games   (game/game.js, port internal 3900)
 *   2) Cloudflare tunnel    (cloudflared + tunnel-games.yml -> game & api)
 *   3) bot utama            (scripts/boot.js, foreground)
 *
 * Tiap layanan dihidupkan ulang otomatis kalau mati; bot tetap jadi proses
 * utama supaya perilaku container sama seperti sebelumnya.
 */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const bump = (msg) => console.log(`[companion] ${msg}`)

function keep(name, command, args, env = process.env, delay = 5000) {
  const child = spawn(command, args, { cwd: ROOT, stdio: 'inherit', env })
  bump(`${name} jalan (pid ${child.pid})`)
  child.on('error', (error) => bump(`${name} gagal dijalankan: ${error.message}`))
  child.on('exit', (code, signal) => {
    bump(`${name} berhenti (code=${code} signal=${signal}) — ulang dalam ${delay / 1000}s`)
    setTimeout(() => keep(name, command, args, env, Math.min(delay * 2, 60000)), delay)
  })
  return child
}

const has = (p) => { try { fs.accessSync(path.join(ROOT, p)); return true } catch { return false } }

if (has('game/game.js')) {
  keep('game', process.execPath, ['game/game.js'], { ...process.env, GAME_PORT: process.env.GAME_PORT || '3900' })
} else bump('game/game.js tidak ada — dilewati')

if (has('cloudflared') && has('tunnel-games.yml')) {
  try { fs.chmodSync(path.join(ROOT, 'cloudflared'), 0o700) } catch {}
  keep('tunnel', path.join(ROOT, 'cloudflared'), ['tunnel', '--no-autoupdate', '--config', path.join(ROOT, 'tunnel-games.yml'), 'run'])
} else bump('cloudflared / tunnel-games.yml tidak ada — tunnel dilewati')

bump('menjalankan bot: node scripts/boot.js')
const bot = spawn(process.execPath, ['scripts/boot.js'], { cwd: ROOT, stdio: 'inherit' })
bot.on('exit', (code) => { bump(`bot berhenti (code ${code})`); process.exit(code ?? 0) })
