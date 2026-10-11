/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/bstation.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bstation", "category": "search", "aliasMap": {"rimuru-search-bstation": "bstation", "rimuru-bstation": "bstation", "rimuru-bili": "bili", "rimuru-bilibili": "bilibili", "bstation": "bstation"}, "description": "Cari video di Bilibili TV", "usage": ".bstation <query>", "example": ".bstation Oshi no ko", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/bstation.js", metadata, m, extra)
handler.help = ["rimuru-search-bstation <query>"]
handler.command = ["rimuru-search-bstation", "rimuru-bstation", "rimuru-bili", "rimuru-bilibili", "bstation"]
handler.tags = ["search"]
handler.description = "Cari video di Bilibili TV"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bstation", "alias": ["bili", "bilibili"], "category": "search", "description": "Cari video di Bilibili TV", "usage": ".bstation <query>", "example": ".bstation Oshi no ko", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-bstation": "bstation", "rimuru-bstation": "bstation", "rimuru-bili": "bili", "rimuru-bilibili": "bilibili", "bstation": "bstation"}
export default handler
