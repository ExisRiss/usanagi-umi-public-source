/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/toisland.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "toisland", "category": "ai", "aliasMap": {"rimuru-ai-toisland": "toisland", "rimuru-toisland": "toisland", "rimuru-island": "island", "rimuru-tropical": "tropical", "toisland": "toisland", "island": "island", "tropical": "tropical"}, "description": "Ubah foto menjadi suasana pulau tropis", "usage": ".toisland (reply/kirim gambar)", "example": ".toisland", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/toisland.js", metadata, m, extra)
handler.help = ["rimuru-ai-toisland (reply/kirim gambar)"]
handler.command = ["rimuru-ai-toisland", "rimuru-toisland", "rimuru-island", "rimuru-tropical", "toisland", "island", "tropical"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi suasana pulau tropis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "toisland", "alias": ["island", "tropical"], "category": "ai", "description": "Ubah foto menjadi suasana pulau tropis", "usage": ".toisland (reply/kirim gambar)", "example": ".toisland", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-toisland": "toisland", "rimuru-toisland": "toisland", "rimuru-island": "island", "rimuru-tropical": "tropical", "toisland": "toisland", "island": "island", "tropical": "tropical"}
export default handler
