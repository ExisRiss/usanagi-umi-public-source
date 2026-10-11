/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/reedem.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "reedem", "category": "rpg", "aliasMap": {"rimuru-rpg-reedem": "reedem", "rimuru-reedem": "reedem", "reedem": "reedem"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/reedem.js", metadata, m, extra)
handler.help = ["rimuru-rpg-reedem"]
handler.command = ["rimuru-rpg-reedem", "rimuru-reedem", "reedem"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "reedem", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-reedem": "reedem", "rimuru-reedem": "reedem", "reedem": "reedem"}
export default handler
