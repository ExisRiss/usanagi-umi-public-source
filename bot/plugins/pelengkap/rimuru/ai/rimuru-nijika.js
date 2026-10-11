/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/nijika.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nijika", "category": "ai", "aliasMap": {"rimuru-ai-nijika": "nijika", "rimuru-nijika": "nijika", "rimuru-nijikaai": "nijikaai", "nijika": "nijika", "nijikaai": "nijikaai"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/nijika.js", metadata, m, extra)
handler.help = ["rimuru-ai-nijika"]
handler.command = ["rimuru-ai-nijika", "rimuru-nijika", "rimuru-nijikaai", "nijika", "nijikaai"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nijika", "alias": ["nijikaai"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-nijika": "nijika", "rimuru-nijika": "nijika", "rimuru-nijikaai": "nijikaai", "nijika": "nijika", "nijikaai": "nijikaai"}
export default handler
