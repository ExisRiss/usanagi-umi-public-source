/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/spotplay.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spotplay", "category": "search", "aliasMap": {"rimuru-search-spotplay": "spotplay", "rimuru-spotplay": "spotplay", "rimuru-splay": "splay", "spotplay": "spotplay", "splay": "splay"}, "description": "Putar musik dari Spotify", "usage": ".spotplay <query>", "example": ".spotplay neffex grateful", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/spotplay.js", metadata, m, extra)
handler.help = ["rimuru-search-spotplay <query>"]
handler.command = ["rimuru-search-spotplay", "rimuru-spotplay", "rimuru-splay", "spotplay", "splay"]
handler.tags = ["search"]
handler.description = "Putar musik dari Spotify"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spotplay", "alias": ["splay", "sp"], "category": "search", "description": "Putar musik dari Spotify", "usage": ".spotplay <query>", "example": ".spotplay neffex grateful", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-spotplay": "spotplay", "rimuru-spotplay": "spotplay", "rimuru-splay": "splay", "spotplay": "spotplay", "splay": "splay"}
export default handler
