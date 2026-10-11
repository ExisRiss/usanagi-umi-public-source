/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/list.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "list", "category": "store", "aliasMap": {"rimuru-store-list": "list", "rimuru-list": "list", "rimuru-liststore": "liststore", "rimuru-daftar": "daftar", "rimuru-info": "info", "info": "info"}, "description": "📋 Lihat daftar informasi toko", "usage": ".list atau .list <nomor>", "example": ".list 1", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/list.js", metadata, m, extra)
handler.help = ["rimuru-store-list atau .list <nomor>"]
handler.command = ["rimuru-store-list", "rimuru-list", "rimuru-liststore", "rimuru-daftar", "rimuru-info", "info"]
handler.tags = ["store"]
handler.description = "📋 Lihat daftar informasi toko"
handler.importSource = "rimuru"
handler.importConfig = {"name": "list", "alias": ["liststore", "daftar", "info"], "category": "store", "description": "📋 Lihat daftar informasi toko", "usage": ".list atau .list <nomor>", "example": ".list 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-list": "list", "rimuru-list": "list", "rimuru-liststore": "liststore", "rimuru-daftar": "daftar", "rimuru-info": "info", "info": "info"}
export default handler
