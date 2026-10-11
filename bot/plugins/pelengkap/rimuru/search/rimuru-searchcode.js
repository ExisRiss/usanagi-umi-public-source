/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/searchcode.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "searchcode", "category": "search", "aliasMap": {"rimuru-search-searchcode": "searchcode", "rimuru-searchcode": "searchcode", "searchcode": "searchcode"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/searchcode.js", metadata, m, extra)
handler.help = ["rimuru-search-searchcode"]
handler.command = ["rimuru-search-searchcode", "rimuru-searchcode", "searchcode"]
handler.tags = ["search"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "searchcode", "alias": [], "category": "search", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-searchcode": "searchcode", "rimuru-searchcode": "searchcode", "searchcode": "searchcode"}
export default handler
