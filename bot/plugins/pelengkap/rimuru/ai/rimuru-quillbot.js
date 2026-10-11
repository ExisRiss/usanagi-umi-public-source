/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/quillbot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quilbot", "category": "ai", "aliasMap": {"rimuru-ai-quilbot": "quilbot", "rimuru-quilbot": "quilbot", "rimuru-quillbot": "quillbot", "rimuru-parafrase": "parafrase", "quilbot": "quilbot", "parafrase": "parafrase"}, "description": "AI Quillbot untuk menulis ulang atau menyempurnakan kalimat", "usage": ".quilbot <teks>", "example": ".quilbot Saya sedang makan nasi di rumah", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/quillbot.js", metadata, m, extra)
handler.help = ["rimuru-ai-quilbot <teks>"]
handler.command = ["rimuru-ai-quilbot", "rimuru-quilbot", "rimuru-quillbot", "rimuru-parafrase", "quilbot", "parafrase"]
handler.tags = ["ai"]
handler.description = "AI Quillbot untuk menulis ulang atau menyempurnakan kalimat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quilbot", "alias": ["quillbot", "parafrase"], "category": "ai", "description": "AI Quillbot untuk menulis ulang atau menyempurnakan kalimat", "usage": ".quilbot <teks>", "example": ".quilbot Saya sedang makan nasi di rumah", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-quilbot": "quilbot", "rimuru-quilbot": "quilbot", "rimuru-quillbot": "quillbot", "rimuru-parafrase": "parafrase", "quilbot": "quilbot", "parafrase": "parafrase"}
export default handler
