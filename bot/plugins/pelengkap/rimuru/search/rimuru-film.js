/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/film.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "film", "category": "search", "aliasMap": {"rimuru-search-film": "film", "rimuru-nonton": "nonton", "rimuru-lk21": "lk21", "film": "film", "movie": "movie", "nonton": "nonton", "lk21": "lk21"}, "description": "Cari film dan nonton online", "usage": ".film <judul>", "example": ".film civil war", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/film.js", metadata, m, extra)
handler.help = ["rimuru-search-film <judul>"]
handler.command = ["rimuru-search-film", "rimuru-nonton", "rimuru-lk21", "film", "movie", "nonton", "lk21"]
handler.tags = ["search"]
handler.description = "Cari film dan nonton online"
handler.importSource = "rimuru"
handler.importConfig = {"name": "film", "alias": ["movie", "nonton", "lk21"], "category": "search", "description": "Cari film dan nonton online", "usage": ".film <judul>", "example": ".film civil war", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-film": "film", "rimuru-nonton": "nonton", "rimuru-lk21": "lk21", "film": "film", "movie": "movie", "nonton": "nonton", "lk21": "lk21"}
export default handler
