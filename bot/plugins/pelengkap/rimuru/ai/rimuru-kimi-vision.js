/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/kimi-vision.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kimi-vision", "category": "ai", "aliasMap": {"rimuru-ai-kimi-vision": "kimi-vision", "rimuru-kimi-vision": "kimi-vision", "rimuru-kimivision": "kimivision", "rimuru-kimi-v": "kimi-v", "kimi-vision": "kimi-vision", "kimivision": "kimivision", "kimi-v": "kimi-v"}, "description": "Analisis gambar memakai Kimi Vision", "usage": ".kimi-vision <pertanyaan> (reply gambar)", "example": ".kimi-vision jelaskan gambar ini", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/kimi-vision.js", metadata, m, extra)
handler.help = ["rimuru-ai-kimi-vision <pertanyaan> (reply gambar)"]
handler.command = ["rimuru-ai-kimi-vision", "rimuru-kimi-vision", "rimuru-kimivision", "rimuru-kimi-v", "kimi-vision", "kimivision", "kimi-v"]
handler.tags = ["ai"]
handler.description = "Analisis gambar memakai Kimi Vision"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kimi-vision", "alias": ["kimivision", "kimi-v"], "category": "ai", "description": "Analisis gambar memakai Kimi Vision", "usage": ".kimi-vision <pertanyaan> (reply gambar)", "example": ".kimi-vision jelaskan gambar ini", "isPremium": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-kimi-vision": "kimi-vision", "rimuru-kimi-vision": "kimi-vision", "rimuru-kimivision": "kimivision", "rimuru-kimi-v": "kimi-v", "kimi-vision": "kimi-vision", "kimivision": "kimivision", "kimi-v": "kimi-v"}
export default handler
