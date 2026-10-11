/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/islam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "q-islam", "category": "random", "aliasMap": {"rimuru-random-q-islam": "q-islam", "rimuru-q-islam": "q-islam", "q-islam": "q-islam"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/islam.js", metadata, m, extra)
handler.help = ["rimuru-random-q-islam"]
handler.command = ["rimuru-random-q-islam", "rimuru-q-islam", "q-islam"]
handler.tags = ["random"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "q-islam", "alias": [], "category": "random", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-q-islam": "q-islam", "rimuru-q-islam": "q-islam", "q-islam": "q-islam"}
export default handler
