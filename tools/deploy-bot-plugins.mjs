#!/usr/bin/env node
/**
 * Deploy bot plugins to Pterodactyl server.
 * 
 * Usage:
 *   node tools/deploy-bot-plugins.mjs              # deploy changed plugins only
 *   node tools/deploy-bot-plugins.mjs --all        # deploy all plugins
 *   node tools/deploy-bot-plugins.mjs --restart    # deploy + restart bot
 *   node tools/deploy-bot-plugins.mjs --dry-run    # show what would be uploaded
 * 
 * Env:
 *   PTERO_ENV_FILE  - credentials file (default: .secrets/panel3-credentials.env)
 *   PTERO_SERVER    - server identifier (default: from env file)
 * 
 * By AlzRiss - Usanagi Umi AI
 */

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PTERO = path.join(ROOT, 'tools', 'ptero.mjs')

const args = process.argv.slice(2)
const deployAll = args.includes('--all')
const restart = args.includes('--restart')
const dryRun = args.includes('--dry-run')
const verbose = args.includes('--verbose') || args.includes('-v')

const envFile = process.env.PTERO_ENV_FILE || path.join(ROOT, '..', '.secrets', 'panel3-credentials.env')

// Plugin directories to sync
const PLUGIN_DIRS = [
  'bot/plugins/store',
  'bot/plugins/music',
  'bot/plugins/game',
  'bot/plugins/economy',
  'bot/plugins/download',
  'bot/plugins/downloader',
  'bot/plugins/fun',
  'bot/plugins/group',
  'bot/plugins/info',
  'bot/plugins/maker',
  'bot/plugins/owner',
  'bot/plugins/search',
  'bot/plugins/sticker',
  'bot/plugins/tools',
  'bot/plugins/voice',
  'bot/plugins/ai',
  'bot/plugins/misc',
  'bot/plugins/umi-extra',
]

function log(...a) { console.log('[deploy]', ...a) }
function err(...a) { console.error('[deploy:ERR]', ...a) }

function getChangedFiles() {
  try {
    // Get files changed in last commit
    const lastCommit = execSync('git diff --name-only HEAD~1 HEAD', { cwd: ROOT, encoding: 'utf-8' }).trim()
    // Also include uncommitted changes
    const unstaged = execSync('git diff --name-only', { cwd: ROOT, encoding: 'utf-8' }).trim()
    const staged = execSync('git diff --name-only --cached', { cwd: ROOT, encoding: 'utf-8' }).trim()
    
    const all = new Set([...lastCommit.split('\n'), ...unstaged.split('\n'), ...staged.split('\n')])
    return [...all].filter(f => f && f.startsWith('bot/plugins/') && f.endsWith('.js'))
  } catch {
    return []
  }
}

function uploadFile(localPath, remotePath) {
  if (dryRun) {
    log(`[DRY-RUN] Would upload: ${localPath} -> ${remotePath}`)
    return true
  }
  
  try {
    const result = execSync(
      `PTERO_ENV_FILE="${envFile}" node "${PTERO}" upload "${localPath}" "${remotePath}"`,
      { cwd: ROOT, encoding: 'utf-8', timeout: 30000 }
    )
    if (verbose) log(result.trim())
    return true
  } catch (e) {
    err(`Failed to upload ${localPath}: ${e.message}`)
    return false
  }
}

function restartBot() {
  if (dryRun) {
    log('[DRY-RUN] Would restart bot')
    return
  }
  
  try {
    execSync(
      `PTERO_ENV_FILE="${envFile}" node "${PTERO}" power restart`,
      { cwd: ROOT, encoding: 'utf-8', timeout: 15000 }
    )
    log('Bot restarted')
  } catch (e) {
    err(`Failed to restart: ${e.message}`)
  }
}

// Main
let filesToUpload = []

if (deployAll) {
  log('Deploying ALL plugins...')
  for (const dir of PLUGIN_DIRS) {
    const fullDir = path.join(ROOT, dir)
    if (!fs.existsSync(fullDir)) continue
    
    const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.js'))
    for (const f of files) {
      filesToUpload.push(path.join(dir, f))
    }
  }
} else {
  log('Deploying changed plugins...')
  filesToUpload = getChangedFiles()
}

if (!filesToUpload.length) {
  log('No plugin changes to deploy.')
  process.exit(0)
}

log(`Found ${filesToUpload.length} file(s) to deploy:`)
for (const f of filesToUpload) {
  log(`  - ${f}`)
}

let success = 0
let failed = 0

for (const file of filesToUpload) {
  const localPath = path.join(ROOT, file)
  // Bot berjalan dari root container dan memuat `./plugins` (lihat handler.js).
  // Dulu berkas diunggah ke `bot/plugins/...` yang tidak pernah dibaca bot,
  // sehingga perbaikan plugin tampak berhasil di panel tetapi tidak berpengaruh.
  const remotePath = '/' + file.replace(/^bot\//, '')

  if (!fs.existsSync(localPath)) {
    // Berkas yang dihapus di repo bukan kegagalan deploy.
    log(`Lewati (tidak ada di repo): ${file}`)
    continue
  }

  if (uploadFile(localPath, remotePath)) {
    success++
  } else {
    failed++
  }
}

log(`Deploy complete: ${success} uploaded, ${failed} failed`)

if (restart && success > 0) {
  log('Restarting bot...')
  restartBot()
}

process.exit(failed > 0 ? 1 : 0)