/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/wikipedia.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wikipedia", "category": "search", "aliasMap": {"rimuru-search-wikipedia": "wikipedia", "rimuru-wikipedia": "wikipedia", "rimuru-wiki": "wiki", "rimuru-wp": "wp", "wp": "wp"}, "description": "Mencari artikel lengkap dari Wikipedia", "usage": ".wikipedia <query>", "example": ".wikipedia Rendang", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/wikipedia.js", metadata, m, extra)
handler.help = ["rimuru-search-wikipedia <query>"]
handler.command = ["rimuru-search-wikipedia", "rimuru-wikipedia", "rimuru-wiki", "rimuru-wp", "wp"]
handler.tags = ["search"]
handler.description = "Mencari artikel lengkap dari Wikipedia"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wikipedia", "alias": ["wiki", "wp"], "category": "search", "description": "Mencari artikel lengkap dari Wikipedia", "usage": ".wikipedia <query>", "example": ".wikipedia Rendang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-wikipedia": "wikipedia", "rimuru-wikipedia": "wikipedia", "rimuru-wiki": "wiki", "rimuru-wp": "wp", "wp": "wp"}
export default handler
