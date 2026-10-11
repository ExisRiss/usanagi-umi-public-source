/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/filmget.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "filmget", "category": "search", "aliasMap": {"rimuru-search-filmget": "filmget", "rimuru-filmget": "filmget", "rimuru-getfilm": "getfilm", "rimuru-filmdetail": "filmdetail", "rimuru-filminfo": "filminfo", "filmget": "filmget", "getfilm": "getfilm", "filmdetail": "filmdetail", "filminfo": "filminfo"}, "description": "Ambil detail film", "usage": ".filmget <url>", "example": ".filmget https://tv.neoxr.eu/film/civil-war-2024", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/filmget.js", metadata, m, extra)
handler.help = ["rimuru-search-filmget <url>"]
handler.command = ["rimuru-search-filmget", "rimuru-filmget", "rimuru-getfilm", "rimuru-filmdetail", "rimuru-filminfo", "filmget", "getfilm", "filmdetail", "filminfo"]
handler.tags = ["search"]
handler.description = "Ambil detail film"
handler.importSource = "rimuru"
handler.importConfig = {"name": "filmget", "alias": ["getfilm", "filmdetail", "filminfo"], "category": "search", "description": "Ambil detail film", "usage": ".filmget <url>", "example": ".filmget https://tv.neoxr.eu/film/civil-war-2024", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-filmget": "filmget", "rimuru-filmget": "filmget", "rimuru-getfilm": "getfilm", "rimuru-filmdetail": "filmdetail", "rimuru-filminfo": "filminfo", "filmget": "filmget", "getfilm": "getfilm", "filmdetail": "filmdetail", "filminfo": "filminfo"}
export default handler
