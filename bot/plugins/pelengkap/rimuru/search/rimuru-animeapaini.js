/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/animeapaini.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animeapaini", "category": "search", "aliasMap": {"rimuru-search-animeapaini": "animeapaini", "rimuru-animeapaini": "animeapaini", "rimuru-whatanime": "whatanime", "rimuru-animesearch": "animesearch", "rimuru-sauceanime": "sauceanime", "rimuru-searchanime": "searchanime", "rimuru-anime-checker": "anime-checker", "rimuru-animechecker": "animechecker", "animeapaini": "animeapaini", "whatanime": "whatanime", "animesearch": "animesearch", "sauceanime": "sauceanime", "searchanime": "searchanime", "anime-checker": "anime-checker", "animechecker": "animechecker"}, "description": "Identifikasi judul anime dari gambar/screenshot", "usage": ".animeapaini (reply gambar)", "example": ".animeapaini", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/animeapaini.js", metadata, m, extra)
handler.help = ["rimuru-search-animeapaini (reply gambar)"]
handler.command = ["rimuru-search-animeapaini", "rimuru-animeapaini", "rimuru-whatanime", "rimuru-animesearch", "rimuru-sauceanime", "rimuru-searchanime", "rimuru-anime-checker", "rimuru-animechecker", "animeapaini", "whatanime", "animesearch", "sauceanime", "searchanime", "anime-checker", "animechecker"]
handler.tags = ["search"]
handler.description = "Identifikasi judul anime dari gambar/screenshot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animeapaini", "alias": ["whatanime", "animesearch", "sauceanime", "searchanime", "anime-checker", "animechecker"], "category": "search", "description": "Identifikasi judul anime dari gambar/screenshot", "usage": ".animeapaini (reply gambar)", "example": ".animeapaini", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-animeapaini": "animeapaini", "rimuru-animeapaini": "animeapaini", "rimuru-whatanime": "whatanime", "rimuru-animesearch": "animesearch", "rimuru-sauceanime": "sauceanime", "rimuru-searchanime": "searchanime", "rimuru-anime-checker": "anime-checker", "rimuru-animechecker": "animechecker", "animeapaini": "animeapaini", "whatanime": "whatanime", "animesearch": "animesearch", "sauceanime": "sauceanime", "searchanime": "searchanime", "anime-checker": "anime-checker", "animechecker": "animechecker"}
export default handler
