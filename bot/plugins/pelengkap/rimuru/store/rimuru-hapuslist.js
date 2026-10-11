/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/hapuslist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hapuslist", "category": "store", "aliasMap": {"rimuru-store-hapuslist": "hapuslist", "rimuru-hapuslist": "hapuslist", "rimuru-dellist": "dellist", "rimuru-deletelist": "deletelist", "hapuslist": "hapuslist", "deletelist": "deletelist"}, "description": "🗑️ Hapus informasi toko", "usage": ".hapuslist <nomor>", "example": ".hapuslist 1", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/hapuslist.js", metadata, m, extra)
handler.help = ["rimuru-store-hapuslist <nomor>"]
handler.command = ["rimuru-store-hapuslist", "rimuru-hapuslist", "rimuru-dellist", "rimuru-deletelist", "hapuslist", "deletelist"]
handler.tags = ["store"]
handler.description = "🗑️ Hapus informasi toko"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hapuslist", "alias": ["dellist", "deletelist"], "category": "store", "description": "🗑️ Hapus informasi toko", "usage": ".hapuslist <nomor>", "example": ".hapuslist 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-hapuslist": "hapuslist", "rimuru-hapuslist": "hapuslist", "rimuru-dellist": "dellist", "rimuru-deletelist": "deletelist", "hapuslist": "hapuslist", "deletelist": "deletelist"}
export default handler
