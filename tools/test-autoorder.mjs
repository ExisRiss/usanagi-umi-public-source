#!/usr/bin/env node
/**
 * Uji mesin auto-order Umi Usanagi AI (bot/lib/panel-autoorder.js):
 * top-up manual QRIS → persetujuan owner → saldo → beli panel (provisioning
 * Pterodactyl ditiru) → beli premium → beli produk digital stok.
 * Termasuk jalur refund otomatis saat panel gagal.
 *
 * Pakai: node tools/test-autoorder.mjs
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

let pass = 0, fail = 0
const check = (label, ok, detail = '') => { ok ? pass++ : fail++; console.log(`  ${ok ? '✅' : '❌'} ${label}${detail ? ' → ' + String(detail).slice(0, 110) : ''}`) }

const BOT = '/home/user/usanagi-umi-public-source/bot'
const workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'umi-autoorder-'))
process.chdir(workdir)

global.db = { data: { users: {}, chats: {}, settings: {} } }

// ── Tiruan Pterodactyl Application API ────────────────────────────────
let panelShouldFail = false
const panelCalls = []
const realFetch = global.fetch
global.fetch = async (url, opts = {}) => {
    const u = String(url)
    if (u.includes('/api/application/users') && opts.method === 'POST') {
        panelCalls.push({ path: '/users', body: JSON.parse(opts.body) })
        return new Response(JSON.stringify({ attributes: { id: 77 } }), { status: 201, headers: { 'Content-Type': 'application/json' } })
    }
    if (u.includes('/api/application/servers') && opts.method === 'POST') {
        panelCalls.push({ path: '/servers', body: JSON.parse(opts.body) })
        if (panelShouldFail) return new Response(JSON.stringify({ errors: [{ detail: 'No available allocations' }] }), { status: 422, headers: { 'Content-Type': 'application/json' } })
        return new Response(JSON.stringify({ attributes: { id: 55, identifier: 'srv9x', uuid: 'uuid-1' } }), { status: 201, headers: { 'Content-Type': 'application/json' } })
    }
    return realFetch(url, opts)
}

const ao = await import(`${BOT}/lib/panel-autoorder.js`)
ao.startPanelAutoOrder(() => 'k'.repeat(64))

const user = { id: 'user-uji-0001', email: 'penguji@example.com' }
const user2 = { id: 'user-miskin-0002', email: '' }

// ── Konfigurasi owner ─────────────────────────────────────────────────
console.log('── konfigurasi & katalog ──')
await ao.updatePanelSettings({
    panelUrl: 'https://panel.ikyhost.cloud',
    plta: 'ptla_'.padEnd(40, 'A'),
    provisioning: { eggId: 15, locationId: 3, dockerImage: 'ghcr.io/pterodactyl/yolks:nodejs_20', startup: 'npm start', environment: { APP_ENV: 'production' } },
    products: [
        { id: 'prem-30', name: 'Premium Bot 30 Hari', description: 'Premium WhatsApp 30 hari', price: 5000, type: 'premium', days: 30, enabled: true },
        { id: 'akun-produk', name: 'Akun Digital Pro', description: 'Akun siap pakai', price: 3000, type: 'digital', stock: ['AKUN-001', 'AKUN-002'], enabled: true },
    ],
}, 'owner-uji')
await ao.updatePanelPackages({ packages: [
    { id: 'paket-2gb', name: 'Panel 2 GB', description: 'RAM 2GB', price: 25000, memoryMb: 2048, cpuPercent: 70, diskMb: 2048, enabled: true },
] }, 'owner-uji')
{
    const st = ao.panelAutoOrderStatus()
    check('provisioning ready', st.provisioning.ready === true, `egg=${st.provisioning.eggId}`)
    check('produk tampil tanpa stok mentah', st.products.length === 2 && st.products[1].inStock === 2 && !JSON.stringify(st.products).includes('AKUN-001'))
    const shop = ao.shopCatalog(user)
    check('katalog toko: 1 paket + 2 produk', shop.packages.length === 1 && shop.products.length === 2 && shop.panelReady === true)
}

// ── Top-up manual QRIS → approve → saldo ─────────────────────────────
console.log('── top-up manual ──')
await ao.createWalletTopup(user, { amount: 100000 })
{
    const pending = ao.manualTopupRequests()
    check('permintaan top-up menunggu persetujuan', pending.length === 1, `status=${pending[0]?.status}`)
    ao.reviewManualTopup({ id: pending[0].id, decision: 'approve', actor: 'owner-uji' })
    check('saldo terisi 100rb setelah approve', ao.walletStatus(user).balance === 100000, `saldo=${ao.walletStatus(user).balance}`)
}

// ── Beli panel ────────────────────────────────────────────────────────
console.log('── beli panel ──')
{
    const order = await ao.buyPanelPackage(user, 'paket-2gb')
    check('order panel aktif', order.status === 'active' && order.kind === 'panel')
    check('kredensial panel terkirim', !!order.panel?.username?.startsWith('umi') && !!order.password && order.panel.serverIdentifier === 'srv9x', `user=${order.panel?.username}`)
    check('saldo terpotong 25rb', ao.walletStatus(user).balance === 75000)
    const serverCall = panelCalls.find(c => c.path === '/servers')
    check('payload server benar', serverCall?.body?.egg === 15 && serverCall?.body?.limits?.memory === 2048 && serverCall?.body?.deploy?.locations?.[0] === 3)
}

console.log('── beli panel saat panel gagal → refund ──')
{
    panelShouldFail = true
    let message = ''
    try { await ao.buyPanelPackage(user, 'paket-2gb') } catch (e) { message = e.message }
    panelShouldFail = false
    check('error menyebut refund', /dikembalikan/.test(message), message.slice(0, 80))
    check('saldo utuh kembali', ao.walletStatus(user).balance === 75000, `saldo=${ao.walletStatus(user).balance}`)
    const refunded = ao.walletOrders(user).find(o => o.status === 'refunded')
    check('order gagal tercatat refunded', !!refunded)
}

console.log('── saldo kurang ──')
{
    let status = 0
    try { await ao.buyPanelPackage(user2, 'paket-2gb') } catch (e) { status = e.status }
    check('ditolak 409', status === 409)
    check('tidak ada order untuk user2', ao.walletOrders(user2).length === 0)
}

// ── Beli premium ──────────────────────────────────────────────────────
console.log('── beli premium ──')
{
    const before = Date.now()
    const order = await ao.buyProduct(user, 'prem-30', { whatsapp: '6281234567890' })
    const expiry = global.db.data.users['6281234567890@s.whatsapp.net']?.premiumTime || 0
    check('premium aktif ±30 hari', expiry > before + 29 * 86400000 && expiry < before + 31 * 86400000, new Date(expiry).toISOString())
    check('order premium aktif', order.status === 'active' && !!order.premium?.premiumUntil)
    check('saldo terpotong 5rb', ao.walletStatus(user).balance === 70000)
    let status = 0
    try { await ao.buyProduct(user, 'prem-30', { whatsapp: 'abc' }) } catch (e) { status = e.status }
    check('nomor WA invalid ditolak 400', status === 400)
}

// ── Beli produk digital ───────────────────────────────────────────────
console.log('── beli produk digital ──')
{
    const o1 = await ao.buyProduct(user, 'akun-produk', {})
    const o2 = await ao.buyProduct(user, 'akun-produk', {})
    check('stok terkirim berurutan', o1.delivery === 'AKUN-001' && o2.delivery === 'AKUN-002', `${o1.delivery}/${o2.delivery}`)
    check('saldo terpotong 2 x 3rb', ao.walletStatus(user).balance === 64000)
    let status = 0
    try { await ao.buyProduct(user, 'akun-produk', {}) } catch (e) { status = e.status }
    check('stok habis ditolak 409 tanpa potong saldo', status === 409 && ao.walletStatus(user).balance === 64000)
    const orders = ao.walletOrders(user)
    check('riwayat order lengkap', orders.filter(o => o.status === 'active').length === 4, `total=${orders.length}`)
}

global.fetch = realFetch
console.log(`\n══ HASIL: ${pass} lolos, ${fail} gagal ══`)
process.exit(fail ? 1 : 0)
