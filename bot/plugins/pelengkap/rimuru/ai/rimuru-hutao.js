/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/hutao.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hutao", "category": "ai", "aliasMap": {"rimuru-ai-hutao": "hutao", "rimuru-hutao": "hutao", "rimuru-hutaoai": "hutaoai", "hutao": "hutao", "hutaoai": "hutaoai"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/hutao.js", metadata, m, extra)
handler.help = ["rimuru-ai-hutao"]
handler.command = ["rimuru-ai-hutao", "rimuru-hutao", "rimuru-hutaoai", "hutao", "hutaoai"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hutao", "alias": ["hutaoai"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-hutao": "hutao", "rimuru-hutao": "hutao", "rimuru-hutaoai": "hutaoai", "hutao": "hutao", "hutaoai": "hutaoai"}
export default handler
