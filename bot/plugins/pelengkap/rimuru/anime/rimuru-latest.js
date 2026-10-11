/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/latest.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animelatest", "category": "anime", "aliasMap": {"rimuru-anime-animelatest": "animelatest", "rimuru-animelatest": "animelatest", "rimuru-latestanime": "latestanime", "animelatest": "animelatest", "latestanime": "latestanime"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/latest.js", metadata, m, extra)
handler.help = ["rimuru-anime-animelatest"]
handler.command = ["rimuru-anime-animelatest", "rimuru-animelatest", "rimuru-latestanime", "animelatest", "latestanime"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animelatest", "alias": ["latestanime"], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animelatest": "animelatest", "rimuru-animelatest": "animelatest", "rimuru-latestanime": "latestanime", "animelatest": "animelatest", "latestanime": "latestanime"}
export default handler
