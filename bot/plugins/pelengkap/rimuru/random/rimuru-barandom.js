/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/barandom.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "barandom", "category": "random", "aliasMap": {"rimuru-random-barandom": "barandom", "rimuru-barandom": "barandom", "rimuru-bluearchive": "bluearchive", "rimuru-ba": "ba", "barandom": "barandom", "ba": "ba"}, "description": "Random gambar Blue Archive", "usage": ".barandom", "example": ".barandom", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/barandom.js", metadata, m, extra)
handler.help = ["rimuru-random-barandom"]
handler.command = ["rimuru-random-barandom", "rimuru-barandom", "rimuru-bluearchive", "rimuru-ba", "barandom", "ba"]
handler.tags = ["random"]
handler.description = "Random gambar Blue Archive"
handler.importSource = "rimuru"
handler.importConfig = {"name": "barandom", "alias": ["bluearchive", "ba"], "category": "random", "description": "Random gambar Blue Archive", "usage": ".barandom", "example": ".barandom", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-barandom": "barandom", "rimuru-barandom": "barandom", "rimuru-bluearchive": "bluearchive", "rimuru-ba": "ba", "barandom": "barandom", "ba": "ba"}
export default handler
