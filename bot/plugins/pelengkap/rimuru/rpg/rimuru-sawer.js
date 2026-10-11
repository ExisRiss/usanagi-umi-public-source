/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/sawer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sawer", "category": "rpg", "aliasMap": {"rimuru-rpg-sawer": "sawer", "rimuru-sawer": "sawer", "rimuru-nyawer": "nyawer", "sawer": "sawer", "nyawer": "nyawer"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/sawer.js", metadata, m, extra)
handler.help = ["rimuru-rpg-sawer"]
handler.command = ["rimuru-rpg-sawer", "rimuru-sawer", "rimuru-nyawer", "sawer", "nyawer"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sawer", "alias": ["nyawer"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-sawer": "sawer", "rimuru-sawer": "sawer", "rimuru-nyawer": "nyawer", "sawer": "sawer", "nyawer": "nyawer"}
export default handler
