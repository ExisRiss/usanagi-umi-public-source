#!/usr/bin/env node
/**
 * Screenshot cepat untuk verifikasi tema "Umi Studio refresh":
 * landing publik + halaman Upload ZIP + Saldo dipaksa tampil tanpa login.
 *
 * Pakai: node tools/shot-refresh.mjs [baseUrl] [outDir]
 */
import puppeteer from '/home/user/.local/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'node:fs'

const BASE = process.argv[2] || 'http://127.0.0.1:8099'
const OUT = process.argv[3] || '/home/user/shots-refresh'
fs.mkdirSync(OUT, { recursive: true })

async function forceAppView(page, pageId) {
    await page.evaluate(target => {
        document.body.classList.add('app-mode')
        document.body.classList.remove('auth-mode')
        document.querySelectorAll('section.public-view').forEach(s => s.classList.add('hidden'))
        const app = document.getElementById('appView')
        if (app) app.classList.remove('hidden')
        document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'))
        const wanted = document.getElementById(target)
        if (wanted) wanted.classList.remove('hidden')
    }, pageId)
}

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const shots = [
    { name: '1-landing', hash: '', w: 1440, h: 900 },
    { name: '2-upload-zip', hash: '', w: 1440, h: 900, forceApp: 'filesPage' },
    { name: '3-wallet', hash: '', w: 1440, h: 900, forceApp: 'walletPage' },
    { name: '4-upload-mobile', hash: '', w: 390, h: 844, forceApp: 'filesPage' },
]
for (const shot of shots) {
    const page = await browser.newPage()
    await page.setViewport({ width: shot.w, height: shot.h })
    const errors = []
    page.on('pageerror', e => errors.push(String(e.message).slice(0, 160)))
    await page.goto(`${BASE}/${shot.hash}`, { waitUntil: 'networkidle2', timeout: 45000 })
    if (shot.forceApp) await forceAppView(page, shot.forceApp)
    await new Promise(r => setTimeout(r, 1200))
    await page.screenshot({ path: `${OUT}/${shot.name}.png` })
    console.log(`${shot.name}: ${errors.length ? 'ERROR ' + errors.join(' | ') : 'ok'}`)
    await page.close()
}
await browser.close()
console.log('selesai →', OUT)
