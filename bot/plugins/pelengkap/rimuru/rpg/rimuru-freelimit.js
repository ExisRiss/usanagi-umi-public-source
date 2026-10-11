/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/freelimit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "freelimit", "category": "rpg", "aliasMap": {"rimuru-rpg-freelimit": "freelimit", "rimuru-freelimit": "freelimit", "freelimit": "freelimit"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/freelimit.js", metadata, m, extra)
handler.help = ["rimuru-rpg-freelimit"]
handler.command = ["rimuru-rpg-freelimit", "rimuru-freelimit", "freelimit"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "freelimit", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-freelimit": "freelimit", "rimuru-freelimit": "freelimit", "freelimit": "freelimit"}
export default handler
