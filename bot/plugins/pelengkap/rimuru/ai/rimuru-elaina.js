/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/elaina.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "elainaai", "category": "ai", "aliasMap": {"rimuru-ai-elainaai": "elainaai", "rimuru-elainaai": "elainaai", "elainaai": "elainaai"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/elaina.js", metadata, m, extra)
handler.help = ["rimuru-ai-elainaai"]
handler.command = ["rimuru-ai-elainaai", "rimuru-elainaai", "elainaai"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "elainaai", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-elainaai": "elainaai", "rimuru-elainaai": "elainaai", "elainaai": "elainaai"}
export default handler
