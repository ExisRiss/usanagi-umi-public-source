#!/usr/bin/env node
/**
 * Setup project Vercel "alzriss-comunity" + environment variables.
 * Kredensial dibaca dari /home/user/.secrets/usanagi-credentials.env (di luar repo).
 */
import fs from 'node:fs'

const env = Object.fromEntries(
  fs
    .readFileSync('/home/user/.secrets/usanagi-credentials.env', 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.trim().startsWith('#'))
    .map(l => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    })
)

const TOKEN = env.VERCEL_TOKEN
const PROJECT = env.VERCEL_PROJECT_NAME || 'alzriss-comunity'
const DOMAIN = env.VERCEL_DOMAIN || 'alzriss-comunity.vercel.app'
const H = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }

const call = async (path, init = {}) => {
  const res = await fetch(`https://api.vercel.com${path}`, { headers: H, ...init })
  const text = await res.text()
  let json = null
  try {
    json = JSON.parse(text)
  } catch {}
  return { status: res.status, json, text }
}

/* ------------------------------------------------------- 1. project */

console.log(`==> Project: ${PROJECT}`)
let project = (await call(`/v9/projects/${PROJECT}`)).json

if (!project || project.error) {
  const created = await call('/v11/projects', {
    method: 'POST',
    body: JSON.stringify({ name: PROJECT, framework: null }),
  })
  if (created.status >= 400 && created.status !== 409) {
    console.error('Gagal membuat project:', created.text.slice(0, 400))
    process.exit(1)
  }
  project = (await call(`/v9/projects/${PROJECT}`)).json
  console.log(`    dibuat baru`)
} else {
  console.log(`    sudah ada (id: ${project.id})`)
}

const projectId = project.id

/* --------------------------------------------- 2. environment variables */

const variables = [
  ['SUPABASE_URL', env.SUPABASE_URL],
  ['SUPABASE_ANON_KEY', env.SUPABASE_ANON_KEY],
  ['SUPABASE_SERVICE_ROLE_KEY', env.SUPABASE_SERVICE_ROLE_KEY],
  ['SUPABASE_PUBLISHABLE_KEY', env.SUPABASE_PUBLISHABLE_KEY],
  ['UMI_DATA_SUPABASE_URL', env.SUPABASE_URL],
  ['UMI_DATA_SERVICE_ROLE_KEY', env.SUPABASE_SERVICE_ROLE_KEY],
  ['BACKUP_CRON_SECRET', env.BACKUP_CRON_SECRET],
  ['BOT_BACKUP_EXPORT_SECRET', env.BOT_BACKUP_EXPORT_SECRET],
  ['UMI_CONSOLE_RELAY_SECRET', env.UMI_CONSOLE_RELAY_SECRET],
  ['UMI_ALLOWED_ORIGINS', `https://${DOMAIN}`],
]

// Opsional: hanya diisi bila tersedia.
if (env.UMI_API_ORIGIN) variables.push(['UMI_API_ORIGIN', env.UMI_API_ORIGIN])
if (env.UMI_CONFIG_GIST_URL) variables.push(['UMI_CONFIG_GIST_URL', env.UMI_CONFIG_GIST_URL])
if (env.BLOB_READ_WRITE_TOKEN) variables.push(['BLOB_READ_WRITE_TOKEN', env.BLOB_READ_WRITE_TOKEN])

const existing = (await call(`/v9/projects/${projectId}/env?decrypt=false`)).json?.envs || []
const existingKeys = new Set(existing.map(e => `${e.key}:${(e.target || []).join(',')}`))

console.log(`\n==> Environment variables (${variables.length} kunci × 3 environment)`)

for (const [key, value] of variables) {
  if (!value) {
    console.log(`    LEWAT ${key} (kosong)`)
    continue
  }

  // Hapus yang lama supaya idempoten.
  const dupes = existing.filter(e => e.key === key)
  for (const d of dupes) {
    await call(`/v9/projects/${projectId}/env/${d.id}`, { method: 'DELETE' })
  }

  const res = await call(`/v10/projects/${projectId}/env?upsert=true`, {
    method: 'POST',
    body: JSON.stringify({
      key,
      value,
      type: 'encrypted',
      target: ['production', 'preview', 'development'],
    }),
  })

  const ok = res.status < 400
  console.log(`    ${ok ? 'OK  ' : 'GAGAL'} ${key}${ok ? '' : ' -> ' + res.text.slice(0, 160)}`)
}

/* -------------------------------------------------------- 3. ringkasan */

const finalList = (await call(`/v9/projects/${projectId}/env?decrypt=false`)).json?.envs || []
console.log(`\n==> Terpasang di Vercel: ${finalList.length} entri`)
for (const e of finalList.sort((a, b) => a.key.localeCompare(b.key))) {
  console.log(`    ${e.key.padEnd(30)} ${(e.target || []).join(', ')}`)
}

console.log(`\nProject ID: ${projectId}`)
