/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/shop.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "shop", "category": "rpg", "aliasMap": {"rimuru-rpg-shop": "shop", "rimuru-shop": "shop", "rimuru-jual": "jual", "rimuru-store": "store", "rimuru-sell": "sell"}, "description": "Beli dan jual item RPG", "usage": ".shop <buy/sell> <item> <jumlah>", "example": ".shop buy potion 1", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/shop.js", metadata, m, extra)
handler.help = ["rimuru-rpg-shop <buy/sell> <item> <jumlah>"]
handler.command = ["rimuru-rpg-shop", "rimuru-shop", "rimuru-jual", "rimuru-store", "rimuru-sell"]
handler.tags = ["rpg"]
handler.description = "Beli dan jual item RPG"
handler.importSource = "rimuru"
handler.importConfig = {"name": "shop", "alias": ["beli", "jual", "toko", "store", "buy", "sell"], "category": "rpg", "description": "Beli dan jual item RPG", "usage": ".shop <buy/sell> <item> <jumlah>", "example": ".shop buy potion 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-shop": "shop", "rimuru-shop": "shop", "rimuru-jual": "jual", "rimuru-store": "store", "rimuru-sell": "sell"}
export default handler
