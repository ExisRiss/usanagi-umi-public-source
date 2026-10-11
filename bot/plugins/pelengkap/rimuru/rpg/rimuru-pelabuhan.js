/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/pelabuhan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pelabuhan", "category": "rpg", "aliasMap": {"rimuru-rpg-pelabuhan": "pelabuhan", "rimuru-pelabuhan": "pelabuhan", "pelabuhan": "pelabuhan"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/pelabuhan.js", metadata, m, extra)
handler.help = ["rimuru-rpg-pelabuhan"]
handler.command = ["rimuru-rpg-pelabuhan", "rimuru-pelabuhan", "pelabuhan"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pelabuhan", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-pelabuhan": "pelabuhan", "rimuru-pelabuhan": "pelabuhan", "pelabuhan": "pelabuhan"}
export default handler
