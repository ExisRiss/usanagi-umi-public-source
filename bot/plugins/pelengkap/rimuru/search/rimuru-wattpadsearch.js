/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/wattpadsearch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wattpadsearch", "category": "search", "aliasMap": {"rimuru-search-wattpadsearch": "wattpadsearch", "rimuru-wattpadsearch": "wattpadsearch", "wattpadsearch": "wattpadsearch"}, "description": "Mencari cerita Wattpad", "usage": ".wattpadsearch <query>", "example": ".wattpadsearch cinta", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/wattpadsearch.js", metadata, m, extra)
handler.help = ["rimuru-search-wattpadsearch <query>"]
handler.command = ["rimuru-search-wattpadsearch", "rimuru-wattpadsearch", "wattpadsearch"]
handler.tags = ["search"]
handler.description = "Mencari cerita Wattpad"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wattpadsearch", "alias": ["wattpad"], "category": "search", "description": "Mencari cerita Wattpad", "usage": ".wattpadsearch <query>", "example": ".wattpadsearch cinta", "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-wattpadsearch": "wattpadsearch", "rimuru-wattpadsearch": "wattpadsearch", "wattpadsearch": "wattpadsearch"}
export default handler
