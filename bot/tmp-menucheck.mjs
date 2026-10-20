// Cek menu ringkas dengan plugin asli yang dimuat bot (server punya semua deps).
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
const out = []
const log = (...a) => { const line = a.join(' '); out.push(line); console.log(line) }
global.plugins = {}
const root = path.resolve('plugins')
const files = []
;(function walk(dir){ for (const e of fs.readdirSync(dir,{withFileTypes:true})) { const f=path.join(dir,e.name); if(e.isDirectory()) walk(f); else if(/\.(js|mjs)$/.test(e.name)) files.push(f) } })(root)
let loaded = 0, failed = 0
for (const file of files) {
  const key = path.relative(root, file).replace(/\\/g,'/')
  try { const mod = await import(pathToFileURL(file).href); const p = mod.default || mod; if (p) { global.plugins[key] = p; loaded += 1 } } catch { failed += 1 }
}
const catalog = await import('./lib/platform/telegram/catalog.js')
catalog.resetCatalogCache()
log('PLUGIN termuat', loaded, 'gagal', failed, '| item katalog', catalog.catalog().total)
log('KATEGORI: ' + catalog.categories().map(c => `${c.id}=${c.count}`).join(' '))
const funcs = catalog.functions()
log(`\nFUNGSI ${funcs.length} grup / ${funcs.reduce((s,f)=>s+f.options.length,0)} opsi`)
for (const f of funcs) {
  log(`\n${f.icon} ${f.label} — ${f.description} [${f.options.length}]`)
  for (const o of f.options) log(`   /${o.command} — ${o.description}`)
}
// pastikan tidak ada opsi dobel
const all = funcs.flatMap(f => f.options.map(o => o.command))
const dup = all.filter((c, i) => all.indexOf(c) !== i)
log('\nopsi dobel:', dup.length ? dup.join(',') : 'tidak ada')
// cek perintah penting muncul
for (const must of ['brat','bratvid','stiker','play','fb','aiimg','qc']) log(`ada /${must}:`, Boolean(catalog.findItem(must)), '| di menu:', all.includes(must))
// pastikan bratvid2 & umi-extra tidak muncul
log('bratvid2 di katalog:', Boolean(catalog.findItem('bratvid2')), '| bratanya:', Boolean(catalog.findItem('bratanya')))
log('kategori umi-extra tampil:', catalog.categories().some(c => c.id === 'umi-extra'))
fs.writeFileSync('menucheck.txt', out.join('\n'))
console.log('MENUCHECK_SELESAI')
process.exit(0)
