/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/buyenergi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "buyenergi", "category": "user", "aliasMap": {"rimuru-user-buyenergi": "buyenergi", "rimuru-buyenergi": "buyenergi", "rimuru-belienergi": "belienergi", "rimuru-purchaseenergi": "purchaseenergi", "rimuru-buyenergy": "buyenergy", "buyenergi": "buyenergi", "belienergi": "belienergi", "purchaseenergi": "purchaseenergi", "buyenergy": "buyenergy"}, "description": "Beli energi dengan koin (1 energi = 100 koin)", "usage": ".buyenergi <jumlah>", "example": ".buyenergi 10", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/buyenergi.js", metadata, m, extra)
handler.help = ["rimuru-user-buyenergi <jumlah>"]
handler.command = ["rimuru-user-buyenergi", "rimuru-buyenergi", "rimuru-belienergi", "rimuru-purchaseenergi", "rimuru-buyenergy", "buyenergi", "belienergi", "purchaseenergi", "buyenergy"]
handler.tags = ["user"]
handler.description = "Beli energi dengan koin (1 energi = 100 koin)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "buyenergi", "alias": ["belienergi", "purchaseenergi", "buyenergy"], "category": "user", "description": "Beli energi dengan koin (1 energi = 100 koin)", "usage": ".buyenergi <jumlah>", "example": ".buyenergi 10", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-buyenergi": "buyenergi", "rimuru-buyenergi": "buyenergi", "rimuru-belienergi": "belienergi", "rimuru-purchaseenergi": "purchaseenergi", "rimuru-buyenergy": "buyenergy", "buyenergi": "buyenergi", "belienergi": "belienergi", "purchaseenergi": "purchaseenergi", "buyenergy": "buyenergy"}
export default handler
