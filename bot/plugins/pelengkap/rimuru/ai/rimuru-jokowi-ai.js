/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/jokowi-ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jokowi-ai", "category": "ai", "aliasMap": {"rimuru-ai-jokowi-ai": "jokowi-ai", "rimuru-jokowi-ai": "jokowi-ai", "rimuru-jokowiai": "jokowiai", "rimuru-jokowi": "jokowi", "rimuru-pakjokowi": "pakjokowi", "jokowi-ai": "jokowi-ai", "jokowiai": "jokowiai", "jokowi": "jokowi", "pakjokowi": "pakjokowi"}, "description": "Chat dengan Pak Jokowi — Pria Solo", "usage": ".jokowi-ai <pertanyaan>", "example": ".jokowi-ai Pak, gimana kabar?", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/jokowi-ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-jokowi-ai <pertanyaan>"]
handler.command = ["rimuru-ai-jokowi-ai", "rimuru-jokowi-ai", "rimuru-jokowiai", "rimuru-jokowi", "rimuru-pakjokowi", "jokowi-ai", "jokowiai", "jokowi", "pakjokowi"]
handler.tags = ["ai"]
handler.description = "Chat dengan Pak Jokowi — Pria Solo"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jokowi-ai", "alias": ["jokowiai", "jokowi", "pakjokowi"], "category": "ai", "description": "Chat dengan Pak Jokowi — Pria Solo", "usage": ".jokowi-ai <pertanyaan>", "example": ".jokowi-ai Pak, gimana kabar?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-jokowi-ai": "jokowi-ai", "rimuru-jokowi-ai": "jokowi-ai", "rimuru-jokowiai": "jokowiai", "rimuru-jokowi": "jokowi", "rimuru-pakjokowi": "pakjokowi", "jokowi-ai": "jokowi-ai", "jokowiai": "jokowiai", "jokowi": "jokowi", "pakjokowi": "pakjokowi"}
export default handler
