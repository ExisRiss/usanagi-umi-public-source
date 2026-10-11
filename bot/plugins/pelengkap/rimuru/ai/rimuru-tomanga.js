/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/tomanga.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tomanga", "category": "ai", "aliasMap": {"rimuru-ai-tomanga": "tomanga", "rimuru-tomanga": "tomanga", "rimuru-manga": "manga", "rimuru-mangafy": "mangafy", "rimuru-mangastyle": "mangastyle", "mangafy": "mangafy", "mangastyle": "mangastyle"}, "description": "Ubah foto menjadi gaya manga Jepang", "usage": ".tomanga (reply/kirim gambar)", "example": ".tomanga", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/tomanga.js", metadata, m, extra)
handler.help = ["rimuru-ai-tomanga (reply/kirim gambar)"]
handler.command = ["rimuru-ai-tomanga", "rimuru-tomanga", "rimuru-manga", "rimuru-mangafy", "rimuru-mangastyle", "mangafy", "mangastyle"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi gaya manga Jepang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tomanga", "alias": ["manga", "mangafy", "mangastyle"], "category": "ai", "description": "Ubah foto menjadi gaya manga Jepang", "usage": ".tomanga (reply/kirim gambar)", "example": ".tomanga", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-tomanga": "tomanga", "rimuru-tomanga": "tomanga", "rimuru-manga": "manga", "rimuru-mangafy": "mangafy", "rimuru-mangastyle": "mangastyle", "mangafy": "mangafy", "mangastyle": "mangastyle"}
export default handler
