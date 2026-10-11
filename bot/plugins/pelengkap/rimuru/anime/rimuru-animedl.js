/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animedl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animedl", "category": "anime", "aliasMap": {"rimuru-anime-animedl": "animedl", "rimuru-animedl": "animedl", "rimuru-anime-download": "anime-download", "rimuru-animedownload": "animedownload", "rimuru-dlanime": "dlanime", "animedl": "animedl", "anime-download": "anime-download", "animedownload": "animedownload", "dlanime": "dlanime"}, "description": "Download anime batch/single episode dari Kusonime", "usage": ".animedl <judul | eps>", "example": ".animedl jujutsu kaisen season 2 | 1", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animedl.js", metadata, m, extra)
handler.help = ["rimuru-anime-animedl <judul | eps>"]
handler.command = ["rimuru-anime-animedl", "rimuru-animedl", "rimuru-anime-download", "rimuru-animedownload", "rimuru-dlanime", "animedl", "anime-download", "animedownload", "dlanime"]
handler.tags = ["anime"]
handler.description = "Download anime batch/single episode dari Kusonime"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animedl", "alias": ["anime-download", "animedownload", "dlanime"], "category": "anime", "description": "Download anime batch/single episode dari Kusonime", "usage": ".animedl <judul | eps>", "example": ".animedl jujutsu kaisen season 2 | 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animedl": "animedl", "rimuru-animedl": "animedl", "rimuru-anime-download": "anime-download", "rimuru-animedownload": "animedownload", "rimuru-dlanime": "dlanime", "animedl": "animedl", "anime-download": "anime-download", "animedownload": "animedownload", "dlanime": "dlanime"}
export default handler
