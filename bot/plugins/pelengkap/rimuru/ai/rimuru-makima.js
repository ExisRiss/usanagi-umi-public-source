/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/makima.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "makima", "category": "ai", "aliasMap": {"rimuru-ai-makima": "makima", "rimuru-makima": "makima", "makima": "makima"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/makima.js", metadata, m, extra)
handler.help = ["rimuru-ai-makima"]
handler.command = ["rimuru-ai-makima", "rimuru-makima", "makima"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "makima", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-makima": "makima", "rimuru-makima": "makima", "makima": "makima"}
export default handler
