import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'
const out = '/home/user/shots-panel'
fs.mkdirSync(out, { recursive: true })
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] })
const errors = []
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })
page.on('pageerror', e => errors.push('PAGEERROR ' + e.message.slice(0, 160)))
await page.setRequestInterception(true)
page.on('request', req => {
  const u = req.url()
  if (u.includes('/api/panel?')) {
    const action = new URL(u).searchParams.get('action')
    const mocks = {
      servers: { servers: [{ identifier: '66e9c2c8', name: 'umi-panel-1gb', itemName: 'Panel 1 GB', username: 'umiabc', panelUrl: 'https://panel2.ikyhost.cloud', createdAt: '2026-10-15T08:00:00.000Z', state: 'running', resources: { cpu_absolute: 12.4, memory_bytes: 134217728, disk_bytes: 52428800 }, limits: { memory: 1024, disk: 1024 } }] },
      resources: { state: 'running', resources: { cpu_absolute: 12.4, memory_bytes: 134217728, disk_bytes: 52428800 } },
      websocket: { socket: 'wss://127.0.0.1:9/ws', token: 'dummy' },
      files_list: { directory: '/', files: [
        { name: 'index.js', size: 2048, isFile: true, modifiedAt: '2026-10-15T08:00:00Z', mimetype: 'text/javascript' },
        { name: 'package.json', size: 320, isFile: true, modifiedAt: '2026-10-15T08:00:00Z', mimetype: 'application/json' },
        { name: 'plugins', size: 0, isFile: false, modifiedAt: '2026-10-15T08:00:00Z', mimetype: '' },
        { name: 'backup.zip', size: 1048576, isFile: true, modifiedAt: '2026-10-15T08:00:00Z', mimetype: 'application/zip' },
      ] },
      startup: { startupCommand: 'if [[ -d .git ]]; then git pull; fi; /usr/local/bin/${CMD_RUN};', dockerImage: 'ghcr.io/parkervcp/yolks:nodejs_24', variables: [
        { key: 'CMD_RUN', name: 'Command Run', description: 'Perintah utama yang dijalankan', value: 'npm start', editable: true },
        { key: 'GIT_ADDRESS', name: 'Git Address', description: 'Repo git (opsional)', value: '', editable: true },
      ] },
    }
    return req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify(mocks[action] || { ok: true }) })
  }
  if (u.includes('/api/platform/me')) return req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ user: { id: 'u1', email: 'tester@example.com', roles: [] } }) })
  if (u.startsWith('http://127.0.0.1:8126/api/')) return req.respond({ status: 200, contentType: 'application/json', body: '{}' })
  req.continue()
})
await page.evaluateOnNewDocument(() => {
  localStorage.setItem('umi_studio_session_v2', JSON.stringify({ access_token: 'test-token-1234567890', refresh_token: 'test-refresh-1234567890', user: { id: 'u1', email: 'tester@example.com' } }))
})
await page.goto('http://127.0.0.1:8126/#panel', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise(r => setTimeout(r, 2500))
await page.screenshot({ path: out + '/panel-servers.png' })
const opened = await page.evaluate(() => { const b = document.querySelector('[data-open-server]'); if (b) { b.click(); return true } return false })
console.log('server dibuka:', opened)
await new Promise(r => setTimeout(r, 1500))
await page.screenshot({ path: out + '/panel-console.png' })
await page.evaluate(() => document.querySelector('[data-ptab="files"]').click())
await new Promise(r => setTimeout(r, 1300))
await page.screenshot({ path: out + '/panel-files.png' })
await page.evaluate(() => document.querySelector('[data-ptab="startup"]').click())
await new Promise(r => setTimeout(r, 1300))
await page.screenshot({ path: out + '/panel-startup.png' })
await page.setViewport({ width: 390, height: 844 })
await page.evaluate(() => document.querySelector('[data-ptab="console"]').click())
await new Promise(r => setTimeout(r, 900))
await page.screenshot({ path: out + '/panel-console-mobile.png' })
console.log('ERRORS:', errors.length ? errors.slice(0, 6).join(' | ') : 'tidak ada')
await browser.close()
console.log('DONE')
