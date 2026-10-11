/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/mistralai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mistral", "category": "ai", "aliasMap": {"rimuru-ai-mistral": "mistral", "rimuru-mistral": "mistral", "rimuru-mistralai": "mistralai", "rimuru-chatmistral": "chatmistral", "mistral": "mistral", "mistralai": "mistralai", "chatmistral": "chatmistral"}, "description": "AI Chat using Mistral AI", "usage": ".mistral <pesan>", "example": ".mistral Halo, apa kabar?", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/mistralai.js", metadata, m, extra)
handler.help = ["rimuru-ai-mistral <pesan>"]
handler.command = ["rimuru-ai-mistral", "rimuru-mistral", "rimuru-mistralai", "rimuru-chatmistral", "mistral", "mistralai", "chatmistral"]
handler.tags = ["ai"]
handler.description = "AI Chat using Mistral AI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mistral", "alias": ["mistralai", "chatmistral"], "category": "ai", "description": "AI Chat using Mistral AI", "usage": ".mistral <pesan>", "example": ".mistral Halo, apa kabar?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-mistral": "mistral", "rimuru-mistral": "mistral", "rimuru-mistralai": "mistralai", "rimuru-chatmistral": "chatmistral", "mistral": "mistral", "mistralai": "mistralai", "chatmistral": "chatmistral"}
export default handler
