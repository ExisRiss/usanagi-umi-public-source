/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/mahiru.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mahiru", "category": "ai", "aliasMap": {"rimuru-ai-mahiru": "mahiru", "rimuru-mahiru": "mahiru", "mahiru": "mahiru"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/mahiru.js", metadata, m, extra)
handler.help = ["rimuru-ai-mahiru"]
handler.command = ["rimuru-ai-mahiru", "rimuru-mahiru", "mahiru"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mahiru", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-mahiru": "mahiru", "rimuru-mahiru": "mahiru", "mahiru": "mahiru"}
export default handler
