/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/copilot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "copilot", "category": "ai", "aliasMap": {"rimuru-ai-copilot": "copilot", "rimuru-copilot": "copilot", "copilot": "copilot"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/copilot.js", metadata, m, extra)
handler.help = ["rimuru-ai-copilot"]
handler.command = ["rimuru-ai-copilot", "rimuru-copilot", "copilot"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "copilot", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-copilot": "copilot", "rimuru-copilot": "copilot", "copilot": "copilot"}
export default handler
