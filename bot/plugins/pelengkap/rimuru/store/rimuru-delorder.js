/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/delorder.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delorder", "category": "store", "aliasMap": {"rimuru-store-delorder": "delorder", "rimuru-delorder": "delorder", "delorder": "delorder"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/delorder.js", metadata, m, extra)
handler.help = ["rimuru-store-delorder"]
handler.command = ["rimuru-store-delorder", "rimuru-delorder", "delorder"]
handler.tags = ["store"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delorder", "alias": [], "category": "store", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-store-delorder": "delorder", "rimuru-delorder": "delorder", "delorder": "delorder"}
export default handler
