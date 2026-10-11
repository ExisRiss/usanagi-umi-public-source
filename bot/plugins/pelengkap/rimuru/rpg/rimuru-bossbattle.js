/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/bossbattle.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bossbattle", "category": "rpg", "aliasMap": {"rimuru-rpg-bossbattle": "bossbattle", "rimuru-bossbattle": "bossbattle", "bossbattle": "bossbattle"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/bossbattle.js", metadata, m, extra)
handler.help = ["rimuru-rpg-bossbattle"]
handler.command = ["rimuru-rpg-bossbattle", "rimuru-bossbattle", "bossbattle"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bossbattle", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-bossbattle": "bossbattle", "rimuru-bossbattle": "bossbattle", "bossbattle": "bossbattle"}
export default handler
