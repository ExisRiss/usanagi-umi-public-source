/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/resetlimit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetlimit", "category": "main", "aliasMap": {"rimuru-main-resetlimit": "resetlimit", "rimuru-resetlimit": "resetlimit"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/resetlimit.js", metadata, m, extra)
handler.help = ["rimuru-main-resetlimit"]
handler.command = ["rimuru-main-resetlimit", "rimuru-resetlimit"]
handler.tags = ["main"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetlimit", "alias": [], "category": "main", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-resetlimit": "resetlimit", "rimuru-resetlimit": "resetlimit"}
export default handler
