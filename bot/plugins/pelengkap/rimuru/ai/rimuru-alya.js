/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/alya.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "alya", "category": "ai", "aliasMap": {"rimuru-ai-alya": "alya", "rimuru-alya": "alya", "alya": "alya"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/alya.js", metadata, m, extra)
handler.help = ["rimuru-ai-alya"]
handler.command = ["rimuru-ai-alya", "rimuru-alya", "alya"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "alya", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-alya": "alya", "rimuru-alya": "alya", "alya": "alya"}
export default handler
