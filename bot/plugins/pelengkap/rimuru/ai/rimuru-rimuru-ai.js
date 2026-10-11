/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/rimuru-ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rimuru-ai", "category": "ai", "aliasMap": {"rimuru-ai-rimuru-ai": "rimuru-ai", "rimuru-rimuru-ai": "rimuru-ai", "rimuru-rimuruai": "rimuruai", "rimuru-rimuru": "rimuru", "rimuru-ai": "ai", "rimuruai": "rimuruai", "rimuru": "rimuru"}, "description": "Chat dengan Rimuru AI — Asisten bot cerdas", "usage": ".rimuru-ai <pertanyaan>", "example": ".rimuru-ai Apa itu Node.js?", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/rimuru-ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-rimuru-ai <pertanyaan>"]
handler.command = ["rimuru-ai-rimuru-ai", "rimuru-rimuru-ai", "rimuru-rimuruai", "rimuru-rimuru", "rimuru-ai", "rimuruai", "rimuru"]
handler.tags = ["ai"]
handler.description = "Chat dengan Rimuru AI — Asisten bot cerdas"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rimuru-ai", "alias": ["rimuruai", "rimuru"], "category": "ai", "description": "Chat dengan Rimuru AI — Asisten bot cerdas", "usage": ".rimuru-ai <pertanyaan>", "example": ".rimuru-ai Apa itu Node.js?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-rimuru-ai": "rimuru-ai", "rimuru-rimuru-ai": "rimuru-ai", "rimuru-rimuruai": "rimuruai", "rimuru-rimuru": "rimuru", "rimuru-ai": "ai", "rimuruai": "rimuruai", "rimuru": "rimuru"}
export default handler
