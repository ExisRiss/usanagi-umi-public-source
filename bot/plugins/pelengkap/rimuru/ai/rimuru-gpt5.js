/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/gpt5.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gpt5", "category": "ai", "aliasMap": {"rimuru-ai-gpt5": "gpt5", "rimuru-gpt5": "gpt5", "rimuru-gpt5nano": "gpt5nano", "rimuru-gpt41": "gpt41", "gpt5": "gpt5", "gpt5nano": "gpt5nano", "gpt41": "gpt41"}, "description": "Chat dengan GPT-4.1 Nano via OverChat", "usage": ".gpt5 <pertanyaan>", "example": ".gpt5 Apa itu quantum computing?", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/gpt5.js", metadata, m, extra)
handler.help = ["rimuru-ai-gpt5 <pertanyaan>"]
handler.command = ["rimuru-ai-gpt5", "rimuru-gpt5", "rimuru-gpt5nano", "rimuru-gpt41", "gpt5", "gpt5nano", "gpt41"]
handler.tags = ["ai"]
handler.description = "Chat dengan GPT-4.1 Nano via OverChat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gpt5", "alias": ["gpt5nano", "gpt41"], "category": "ai", "description": "Chat dengan GPT-4.1 Nano via OverChat", "usage": ".gpt5 <pertanyaan>", "example": ".gpt5 Apa itu quantum computing?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-gpt5": "gpt5", "rimuru-gpt5": "gpt5", "rimuru-gpt5nano": "gpt5nano", "rimuru-gpt41": "gpt41", "gpt5": "gpt5", "gpt5nano": "gpt5nano", "gpt41": "gpt41"}
export default handler
