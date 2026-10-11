/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/grab.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "taksi", "category": "rpg", "aliasMap": {"rimuru-rpg-taksi": "taksi", "rimuru-taksi": "taksi", "rimuru-grab": "grab", "rimuru-megrab": "megrab", "taksi": "taksi", "grab": "grab", "megrab": "megrab"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/grab.js", metadata, m, extra)
handler.help = ["rimuru-rpg-taksi"]
handler.command = ["rimuru-rpg-taksi", "rimuru-taksi", "rimuru-grab", "rimuru-megrab", "taksi", "grab", "megrab"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "taksi", "alias": ["grab", "megrab"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-taksi": "taksi", "rimuru-taksi": "taksi", "rimuru-grab": "grab", "rimuru-megrab": "megrab", "taksi": "taksi", "grab": "grab", "megrab": "megrab"}
export default handler
