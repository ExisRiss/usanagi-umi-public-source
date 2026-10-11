/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/tooilpainting.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tooilpainting", "category": "ai", "aliasMap": {"rimuru-ai-tooilpainting": "tooilpainting", "rimuru-tooilpainting": "tooilpainting", "rimuru-oilpainting": "oilpainting", "rimuru-tooil": "tooil", "rimuru-oil": "oil", "tooilpainting": "tooilpainting", "oilpainting": "oilpainting", "tooil": "tooil", "oil": "oil"}, "description": "Ubah foto menjadi gaya lukisan minyak (oil painting)", "usage": ".tooilpainting (reply/kirim gambar)", "example": ".tooilpainting", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/tooilpainting.js", metadata, m, extra)
handler.help = ["rimuru-ai-tooilpainting (reply/kirim gambar)"]
handler.command = ["rimuru-ai-tooilpainting", "rimuru-tooilpainting", "rimuru-oilpainting", "rimuru-tooil", "rimuru-oil", "tooilpainting", "oilpainting", "tooil", "oil"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi gaya lukisan minyak (oil painting)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tooilpainting", "alias": ["oilpainting", "tooil", "oil"], "category": "ai", "description": "Ubah foto menjadi gaya lukisan minyak (oil painting)", "usage": ".tooilpainting (reply/kirim gambar)", "example": ".tooilpainting", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-tooilpainting": "tooilpainting", "rimuru-tooilpainting": "tooilpainting", "rimuru-oilpainting": "oilpainting", "rimuru-tooil": "tooil", "rimuru-oil": "oil", "tooilpainting": "tooilpainting", "oilpainting": "oilpainting", "tooil": "tooil", "oil": "oil"}
export default handler
