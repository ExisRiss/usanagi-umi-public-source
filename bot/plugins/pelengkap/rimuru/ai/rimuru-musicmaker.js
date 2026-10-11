/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/musicmaker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "musicmaker", "category": "ai", "aliasMap": {"rimuru-ai-musicmaker": "musicmaker", "rimuru-musicmaker": "musicmaker", "rimuru-bikinlagu": "bikinlagu", "rimuru-suno": "suno", "musicmaker": "musicmaker", "bikinlagu": "bikinlagu", "suno": "suno"}, "description": "Membuat musik atau lagu menggunakan AI dari teks (prompt)", "usage": ".musicmaker <prompt>", "example": ".musicmaker Lagu sedih tentang perpisahan dengan musik piano", "cooldown": 30, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/musicmaker.js", metadata, m, extra)
handler.help = ["rimuru-ai-musicmaker <prompt>"]
handler.command = ["rimuru-ai-musicmaker", "rimuru-musicmaker", "rimuru-bikinlagu", "rimuru-suno", "musicmaker", "bikinlagu", "suno"]
handler.tags = ["ai"]
handler.description = "Membuat musik atau lagu menggunakan AI dari teks (prompt)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "musicmaker", "alias": ["bikinlagu", "suno"], "category": "ai", "description": "Membuat musik atau lagu menggunakan AI dari teks (prompt)", "usage": ".musicmaker <prompt>", "example": ".musicmaker Lagu sedih tentang perpisahan dengan musik piano", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-musicmaker": "musicmaker", "rimuru-musicmaker": "musicmaker", "rimuru-bikinlagu": "bikinlagu", "rimuru-suno": "suno", "musicmaker": "musicmaker", "bikinlagu": "bikinlagu", "suno": "suno"}
export default handler
