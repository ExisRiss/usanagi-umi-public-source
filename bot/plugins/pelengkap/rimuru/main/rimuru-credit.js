/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/credit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "credit", "category": "main", "aliasMap": {"rimuru-main-credit": "credit", "rimuru-credit": "credit", "credit": "credit"}, "description": "Menampilkan credit Rimuru MD.", "usage": ".credit", "example": ".credit", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/credit.js", metadata, m, extra)
handler.help = ["rimuru-main-credit"]
handler.command = ["rimuru-main-credit", "rimuru-credit", "credit"]
handler.tags = ["main"]
handler.description = "Menampilkan credit Rimuru MD."
handler.importSource = "rimuru"
handler.importConfig = {"name": "credit", "alias": [], "category": "main", "description": "Menampilkan credit Rimuru MD.", "usage": ".credit", "example": ".credit", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-credit": "credit", "rimuru-credit": "credit", "credit": "credit"}
export default handler
