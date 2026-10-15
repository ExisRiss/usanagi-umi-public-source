// Perbarui env PANEL2_* di proyek Vercel website dari .secrets/panel2-keys-backup.txt
import fs from 'node:fs'
const readEnv = (p) => Object.fromEntries(fs.readFileSync(p, 'utf8').split('\n').filter(l => l.includes('=') && !l.trim().startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] }))
const creds = readEnv('/home/user/.secrets/usanagi-credentials.env')
const panel = readEnv('/home/user/.secrets/panel2-keys-backup.txt')
const TEAM = 'team_TwCNMEAL8AoOA0whO30gFU4S'
const PROJECT = 'prj_UPjBvflOYP8ureG3cCxHHQKxOb0s'
const H = { Authorization: 'Bearer ' + creds.VERCEL_TOKEN, 'Content-Type': 'application/json' }
for (const [key, value] of [['PANEL2_URL', panel.PANEL2_URL], ['PANEL2_PLTC', panel.PANEL2_PLTC]]) {
  const res = await fetch(`https://api.vercel.com/v10/projects/${PROJECT}/env?teamId=${TEAM}&upsert=true`, { method: 'POST', headers: H, body: JSON.stringify({ key, value, type: 'encrypted', target: ['production'] }) })
  console.log(key, '→ HTTP', res.status)
}
