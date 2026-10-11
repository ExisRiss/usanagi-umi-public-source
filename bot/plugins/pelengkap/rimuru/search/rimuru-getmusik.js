/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/getmusik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getmusik", "category": "search", "aliasMap": {"rimuru-search-getmusik": "getmusik", "rimuru-getmusik": "getmusik", "rimuru-dlmusik": "dlmusik", "rimuru-downloadmusik": "downloadmusik", "getmusik": "getmusik", "dlmusik": "dlmusik", "downloadmusik": "downloadmusik"}, "description": "Download lagu dari hasil carimusik", "usage": ".getmusik <nomor>", "example": ".getmusik 1", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/getmusik.js", metadata, m, extra)
handler.help = ["rimuru-search-getmusik <nomor>"]
handler.command = ["rimuru-search-getmusik", "rimuru-getmusik", "rimuru-dlmusik", "rimuru-downloadmusik", "getmusik", "dlmusik", "downloadmusik"]
handler.tags = ["search"]
handler.description = "Download lagu dari hasil carimusik"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getmusik", "alias": ["dlmusik", "downloadmusik"], "category": "search", "description": "Download lagu dari hasil carimusik", "usage": ".getmusik <nomor>", "example": ".getmusik 1", "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-getmusik": "getmusik", "rimuru-getmusik": "getmusik", "rimuru-dlmusik": "dlmusik", "rimuru-downloadmusik": "downloadmusik", "getmusik": "getmusik", "dlmusik": "dlmusik", "downloadmusik": "downloadmusik"}
export default handler
