/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/toanime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "toanime", "category": "ai", "aliasMap": {"rimuru-ai-toanime": "toanime", "rimuru-toanime": "toanime", "rimuru-anime": "anime", "rimuru-animefy": "animefy", "rimuru-ghibli": "ghibli", "toanime": "toanime", "animefy": "animefy"}, "description": "Ubah foto menjadi gaya anime/Ghibli Studio", "usage": ".toanime (reply/kirim gambar)", "example": ".toanime", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/toanime.js", metadata, m, extra)
handler.help = ["rimuru-ai-toanime (reply/kirim gambar)"]
handler.command = ["rimuru-ai-toanime", "rimuru-toanime", "rimuru-anime", "rimuru-animefy", "rimuru-ghibli", "toanime", "animefy"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi gaya anime/Ghibli Studio"
handler.importSource = "rimuru"
handler.importConfig = {"name": "toanime", "alias": ["anime", "animefy", "ghibli"], "category": "ai", "description": "Ubah foto menjadi gaya anime/Ghibli Studio", "usage": ".toanime (reply/kirim gambar)", "example": ".toanime", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-toanime": "toanime", "rimuru-toanime": "toanime", "rimuru-anime": "anime", "rimuru-animefy": "animefy", "rimuru-ghibli": "ghibli", "toanime": "toanime", "animefy": "animefy"}
export default handler
