/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/kobo-ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kobo-ai", "category": "ai", "aliasMap": {"rimuru-ai-kobo-ai": "kobo-ai", "rimuru-kobo-ai": "kobo-ai", "rimuru-koboai": "koboai", "rimuru-kobo": "kobo", "kobo-ai": "kobo-ai", "koboai": "koboai", "kobo": "kobo"}, "description": "Chat dengan Kobo Kanaeru — VTuber Hololive ID", "usage": ".kobo-ai <pertanyaan>", "example": ".kobo-ai Kobo lagi apa?", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/kobo-ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-kobo-ai <pertanyaan>"]
handler.command = ["rimuru-ai-kobo-ai", "rimuru-kobo-ai", "rimuru-koboai", "rimuru-kobo", "kobo-ai", "koboai", "kobo"]
handler.tags = ["ai"]
handler.description = "Chat dengan Kobo Kanaeru — VTuber Hololive ID"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kobo-ai", "alias": ["koboai", "kobo"], "category": "ai", "description": "Chat dengan Kobo Kanaeru — VTuber Hololive ID", "usage": ".kobo-ai <pertanyaan>", "example": ".kobo-ai Kobo lagi apa?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-kobo-ai": "kobo-ai", "rimuru-kobo-ai": "kobo-ai", "rimuru-koboai": "koboai", "rimuru-kobo": "kobo", "kobo-ai": "kobo-ai", "koboai": "koboai", "kobo": "kobo"}
export default handler
