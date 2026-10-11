/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/topcurrency.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "topcurrency", "category": "economy", "aliasMap": {"rimuru-economy-topcurrency": "topcurrency", "rimuru-topcurrency": "topcurrency", "rimuru-topmatauang": "topmatauang", "rimuru-rankcurrency": "rankcurrency", "topcurrency": "topcurrency", "topmatauang": "topmatauang", "rankcurrency": "rankcurrency"}, "description": "Lihat leaderboard per mata uang", "usage": ".topcurrency <matauang>", "example": ".topcurrency idr", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/topcurrency.js", metadata, m, extra)
handler.help = ["rimuru-economy-topcurrency <matauang>"]
handler.command = ["rimuru-economy-topcurrency", "rimuru-topcurrency", "rimuru-topmatauang", "rimuru-rankcurrency", "topcurrency", "topmatauang", "rankcurrency"]
handler.tags = ["economy"]
handler.description = "Lihat leaderboard per mata uang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "topcurrency", "alias": ["topmatauang", "rankcurrency"], "category": "economy", "description": "Lihat leaderboard per mata uang", "usage": ".topcurrency <matauang>", "example": ".topcurrency idr", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-economy-topcurrency": "topcurrency", "rimuru-topcurrency": "topcurrency", "rimuru-topmatauang": "topmatauang", "rimuru-rankcurrency": "rankcurrency", "topcurrency": "topcurrency", "topmatauang": "topmatauang", "rankcurrency": "rankcurrency"}
export default handler
