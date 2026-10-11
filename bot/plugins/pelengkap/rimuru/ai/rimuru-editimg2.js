/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/editimg2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "editimg2", "category": "ai", "aliasMap": {"rimuru-ai-editimg2": "editimg2", "rimuru-editimg2": "editimg2", "editimg2": "editimg2"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/editimg2.js", metadata, m, extra)
handler.help = ["rimuru-ai-editimg2"]
handler.command = ["rimuru-ai-editimg2", "rimuru-editimg2", "editimg2"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "editimg2", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-editimg2": "editimg2", "rimuru-editimg2": "editimg2", "editimg2": "editimg2"}
export default handler
