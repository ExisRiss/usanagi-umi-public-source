/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/imgprompt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "imgprompt", "category": "ai", "aliasMap": {"rimuru-ai-imgprompt": "imgprompt", "rimuru-imgprompt": "imgprompt"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/imgprompt.js", metadata, m, extra)
handler.help = ["rimuru-ai-imgprompt"]
handler.command = ["rimuru-ai-imgprompt", "rimuru-imgprompt"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "imgprompt", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-imgprompt": "imgprompt", "rimuru-imgprompt": "imgprompt"}
export default handler
