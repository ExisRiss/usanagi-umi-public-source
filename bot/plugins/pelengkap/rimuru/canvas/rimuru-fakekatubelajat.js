/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakekatubelajat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakekartupelajar", "category": "canvas", "aliasMap": {"rimuru-canvas-fakekartupelajar": "fakekartupelajar", "rimuru-fakekartupelajar": "fakekartupelajar", "rimuru-kartupelajarfake": "kartupelajarfake", "rimuru-fakestudentid": "fakestudentid", "rimuru-fakekps": "fakekps", "fakekartupelajar": "fakekartupelajar", "kartupelajarfake": "kartupelajarfake", "fakestudentid": "fakestudentid", "fakekps": "fakekps"}, "description": "Bikin fake kartu pelajar (buat konten/gaguan doang)", "usage": ".fakekartupelajar <nama> | <sekolah>", "example": ".fakekartupelajar Rimuru | SMA Negeri 02", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakekatubelajat.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakekartupelajar <nama> | <sekolah>"]
handler.command = ["rimuru-canvas-fakekartupelajar", "rimuru-fakekartupelajar", "rimuru-kartupelajarfake", "rimuru-fakestudentid", "rimuru-fakekps", "fakekartupelajar", "kartupelajarfake", "fakestudentid", "fakekps"]
handler.tags = ["canvas"]
handler.description = "Bikin fake kartu pelajar (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakekartupelajar", "alias": ["kartupelajarfake", "fakestudentid", "fakekps"], "category": "canvas", "description": "Bikin fake kartu pelajar (buat konten/gaguan doang)", "usage": ".fakekartupelajar <nama> | <sekolah>", "example": ".fakekartupelajar Rimuru | SMA Negeri 02", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakekartupelajar": "fakekartupelajar", "rimuru-fakekartupelajar": "fakekartupelajar", "rimuru-kartupelajarfake": "kartupelajarfake", "rimuru-fakestudentid": "fakestudentid", "rimuru-fakekps": "fakekps", "fakekartupelajar": "fakekartupelajar", "kartupelajarfake": "kartupelajarfake", "fakestudentid": "fakestudentid", "fakekps": "fakekps"}
export default handler
