/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/bocchi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bocchi", "category": "ai", "aliasMap": {"rimuru-ai-bocchi": "bocchi", "rimuru-bocchi": "bocchi", "rimuru-bocchiai": "bocchiai", "bocchi": "bocchi", "bocchiai": "bocchiai"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/bocchi.js", metadata, m, extra)
handler.help = ["rimuru-ai-bocchi"]
handler.command = ["rimuru-ai-bocchi", "rimuru-bocchi", "rimuru-bocchiai", "bocchi", "bocchiai"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bocchi", "alias": ["bocchiai"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-bocchi": "bocchi", "rimuru-bocchi": "bocchi", "rimuru-bocchiai": "bocchiai", "bocchi": "bocchi", "bocchiai": "bocchiai"}
export default handler
