/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/tocermin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tocermin", "category": "ai", "aliasMap": {"rimuru-ai-tocermin": "tocermin", "rimuru-tocermin": "tocermin", "rimuru-mirror": "mirror", "rimuru-tomirror": "tomirror", "tocermin": "tocermin", "mirror": "mirror"}, "description": "Ubah foto menjadi efek cermin (mirror reflection)", "usage": ".tocermin (reply/kirim gambar)", "example": ".tocermin", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/tocermin.js", metadata, m, extra)
handler.help = ["rimuru-ai-tocermin (reply/kirim gambar)"]
handler.command = ["rimuru-ai-tocermin", "rimuru-tocermin", "rimuru-mirror", "rimuru-tomirror", "tocermin", "mirror"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi efek cermin (mirror reflection)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tocermin", "alias": ["mirror", "tomirror"], "category": "ai", "description": "Ubah foto menjadi efek cermin (mirror reflection)", "usage": ".tocermin (reply/kirim gambar)", "example": ".tocermin", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-tocermin": "tocermin", "rimuru-tocermin": "tocermin", "rimuru-mirror": "mirror", "rimuru-tomirror": "tomirror", "tocermin": "tocermin", "mirror": "mirror"}
export default handler
