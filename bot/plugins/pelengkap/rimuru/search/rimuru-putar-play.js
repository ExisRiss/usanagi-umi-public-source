/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/putar-play.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "putar-play", "category": "search", "aliasMap": {"rimuru-search-putar-play": "putar-play", "rimuru-putar-play": "putar-play", "rimuru-putar": "putar", "putar-play": "putar-play", "putar": "putar"}, "description": "Putar musik dari YouTube (Faa API)", "usage": ".putar-play <url>", "example": ".putar-play https://youtube.com/watch?v=xxxxx", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/putar-play.js", metadata, m, extra)
handler.help = ["rimuru-search-putar-play <url>"]
handler.command = ["rimuru-search-putar-play", "rimuru-putar-play", "rimuru-putar", "putar-play", "putar"]
handler.tags = ["search"]
handler.description = "Putar musik dari YouTube (Faa API)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "putar-play", "alias": ["putar-play", "putar"], "category": "search", "description": "Putar musik dari YouTube (Faa API)", "usage": ".putar-play <url>", "example": ".putar-play https://youtube.com/watch?v=xxxxx", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-putar-play": "putar-play", "rimuru-putar-play": "putar-play", "rimuru-putar": "putar", "putar-play": "putar-play", "putar": "putar"}
export default handler
