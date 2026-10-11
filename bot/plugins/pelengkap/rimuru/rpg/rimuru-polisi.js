/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/polisi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "polisi", "category": "rpg", "aliasMap": {"rimuru-rpg-polisi": "polisi", "rimuru-polisi": "polisi", "polisi": "polisi"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/polisi.js", metadata, m, extra)
handler.help = ["rimuru-rpg-polisi"]
handler.command = ["rimuru-rpg-polisi", "rimuru-polisi", "polisi"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "polisi", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-polisi": "polisi", "rimuru-polisi": "polisi", "polisi": "polisi"}
export default handler
