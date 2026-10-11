/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/pantun2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pantun2", "category": "random", "aliasMap": {"rimuru-random-pantun2": "pantun2", "rimuru-pantun2": "pantun2", "pantun2": "pantun2"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/pantun2.js", metadata, m, extra)
handler.help = ["rimuru-random-pantun2"]
handler.command = ["rimuru-random-pantun2", "rimuru-pantun2", "pantun2"]
handler.tags = ["random"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pantun2", "alias": [], "category": "random", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-pantun2": "pantun2", "rimuru-pantun2": "pantun2", "pantun2": "pantun2"}
export default handler
