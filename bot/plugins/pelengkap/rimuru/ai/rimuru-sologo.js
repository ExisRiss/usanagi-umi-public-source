/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/sologo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sologo", "category": "ai", "aliasMap": {"rimuru-ai-sologo": "sologo", "rimuru-sologo": "sologo", "rimuru-ailogo": "ailogo", "rimuru-bikinlogo": "bikinlogo", "sologo": "sologo", "ailogo": "ailogo", "bikinlogo": "bikinlogo"}, "description": "Membuat logo menggunakan AI dari teks (prompt)", "usage": ".sologo <prompt>", "example": ".sologo Kucing lucu warna biru", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/sologo.js", metadata, m, extra)
handler.help = ["rimuru-ai-sologo <prompt>"]
handler.command = ["rimuru-ai-sologo", "rimuru-sologo", "rimuru-ailogo", "rimuru-bikinlogo", "sologo", "ailogo", "bikinlogo"]
handler.tags = ["ai"]
handler.description = "Membuat logo menggunakan AI dari teks (prompt)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sologo", "alias": ["ailogo", "bikinlogo"], "category": "ai", "description": "Membuat logo menggunakan AI dari teks (prompt)", "usage": ".sologo <prompt>", "example": ".sologo Kucing lucu warna biru", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-sologo": "sologo", "rimuru-sologo": "sologo", "rimuru-ailogo": "ailogo", "rimuru-bikinlogo": "bikinlogo", "sologo": "sologo", "ailogo": "ailogo", "bikinlogo": "bikinlogo"}
export default handler
