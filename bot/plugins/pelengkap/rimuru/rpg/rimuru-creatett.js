/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/creatett.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "creatett", "category": "rpg", "aliasMap": {"rimuru-rpg-creatett": "creatett", "rimuru-creatett": "creatett", "creatett": "creatett"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/creatett.js", metadata, m, extra)
handler.help = ["rimuru-rpg-creatett"]
handler.command = ["rimuru-rpg-creatett", "rimuru-creatett", "creatett"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "creatett", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-creatett": "creatett", "rimuru-creatett": "creatett", "creatett": "creatett"}
export default handler
