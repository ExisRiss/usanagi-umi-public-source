/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/ewe.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ewe", "category": "rpg", "aliasMap": {"rimuru-rpg-ewe": "ewe", "rimuru-ewe": "ewe", "rimuru-anu": "anu", "ewe": "ewe", "anu": "anu"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/ewe.js", metadata, m, extra)
handler.help = ["rimuru-rpg-ewe"]
handler.command = ["rimuru-rpg-ewe", "rimuru-ewe", "rimuru-anu", "ewe", "anu"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ewe", "alias": ["anu"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-ewe": "ewe", "rimuru-ewe": "ewe", "rimuru-anu": "anu", "ewe": "ewe", "anu": "anu"}
export default handler
