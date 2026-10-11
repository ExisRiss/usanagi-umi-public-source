/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addpremall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addpremall", "category": "owner", "aliasMap": {"rimuru-owner-addpremall": "addpremall", "rimuru-addpremall": "addpremall", "rimuru-addpremiumall": "addpremiumall", "rimuru-setpremall": "setpremall", "addpremall": "addpremall", "addpremiumall": "addpremiumall", "setpremall": "setpremall"}, "description": "Menambahkan semua member grup ke premium", "usage": ".addprem all", "example": ".addprem all", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addpremall.js", metadata, m, extra)
handler.help = ["rimuru-owner-addpremall all"]
handler.command = ["rimuru-owner-addpremall", "rimuru-addpremall", "rimuru-addpremiumall", "rimuru-setpremall", "addpremall", "addpremiumall", "setpremall"]
handler.tags = ["owner"]
handler.description = "Menambahkan semua member grup ke premium"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addpremall", "alias": ["addpremiumall", "setpremall"], "category": "owner", "description": "Menambahkan semua member grup ke premium", "usage": ".addprem all", "example": ".addprem all", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addpremall": "addpremall", "rimuru-addpremall": "addpremall", "rimuru-addpremiumall": "addpremiumall", "rimuru-setpremall": "setpremall", "addpremall": "addpremall", "addpremiumall": "addpremiumall", "setpremall": "setpremall"}
export default handler
