/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animereco.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animereco", "category": "anime", "aliasMap": {"rimuru-anime-animereco": "animereco", "rimuru-animereco": "animereco", "rimuru-animekomen": "animekomen", "rimuru-rekomenanime": "rekomenanime", "rimuru-animerank": "animerank", "rimuru-recoanime": "recoanime", "animereco": "animereco", "animekomen": "animekomen", "rekomenanime": "rekomenanime", "animerank": "animerank", "recoanime": "recoanime"}, "description": "Dapat rekomendasi anime berdasarkan genre atau top rating", "usage": ".animereco [genre]", "example": ".animereco\n.animereco action\n.animereco romance\n.animereco top", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animereco.js", metadata, m, extra)
handler.help = ["rimuru-anime-animereco [genre]"]
handler.command = ["rimuru-anime-animereco", "rimuru-animereco", "rimuru-animekomen", "rimuru-rekomenanime", "rimuru-animerank", "rimuru-recoanime", "animereco", "animekomen", "rekomenanime", "animerank", "recoanime"]
handler.tags = ["anime"]
handler.description = "Dapat rekomendasi anime berdasarkan genre atau top rating"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animereco", "alias": ["animekomen", "rekomenanime", "animerank", "recoanime"], "category": "anime", "description": "Dapat rekomendasi anime berdasarkan genre atau top rating", "usage": ".animereco [genre]", "example": ".animereco\n.animereco action\n.animereco romance\n.animereco top", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animereco": "animereco", "rimuru-animereco": "animereco", "rimuru-animekomen": "animekomen", "rimuru-rekomenanime": "rekomenanime", "rimuru-animerank": "animerank", "rimuru-recoanime": "recoanime", "animereco": "animereco", "animekomen": "animekomen", "rekomenanime": "rekomenanime", "animerank": "animerank", "recoanime": "recoanime"}
export default handler
