/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/alkitab.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "alkitab", "category": "general", "aliasMap": {"rimuru-general-alkitab": "alkitab", "rimuru-alkitab": "alkitab", "alkitab": "alkitab"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/alkitab.js", metadata, m, extra)
handler.help = ["rimuru-general-alkitab"]
handler.command = ["rimuru-general-alkitab", "rimuru-alkitab", "alkitab"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "alkitab", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-general-alkitab": "alkitab", "rimuru-alkitab": "alkitab", "alkitab": "alkitab"}
export default handler
