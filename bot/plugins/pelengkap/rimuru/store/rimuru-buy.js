/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/buy.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "beliproduk", "category": "store", "aliasMap": {"rimuru-store-beliproduk": "beliproduk", "rimuru-beliproduk": "beliproduk", "rimuru-buyproduk": "buyproduk", "rimuru-belisaldo": "belisaldo", "rimuru-buywithkoin": "buywithkoin", "rimuru-ordersaldo": "ordersaldo", "beliproduk": "beliproduk", "buyproduk": "buyproduk", "belisaldo": "belisaldo", "buywithkoin": "buywithkoin", "ordersaldo": "ordersaldo"}, "description": "Beli produk dengan saldo/koin", "usage": ".beliproduk [nomor_produk] [jumlah]", "example": ".beliproduk 1", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/buy.js", metadata, m, extra)
handler.help = ["rimuru-store-beliproduk [nomor_produk] [jumlah]"]
handler.command = ["rimuru-store-beliproduk", "rimuru-beliproduk", "rimuru-buyproduk", "rimuru-belisaldo", "rimuru-buywithkoin", "rimuru-ordersaldo", "beliproduk", "buyproduk", "belisaldo", "buywithkoin", "ordersaldo"]
handler.tags = ["store"]
handler.description = "Beli produk dengan saldo/koin"
handler.importSource = "rimuru"
handler.importConfig = {"name": "beliproduk", "alias": ["buyproduk", "belisaldo", "buywithkoin", "ordersaldo"], "category": "store", "description": "Beli produk dengan saldo/koin", "usage": ".beliproduk [nomor_produk] [jumlah]", "example": ".beliproduk 1", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-beliproduk": "beliproduk", "rimuru-beliproduk": "beliproduk", "rimuru-buyproduk": "buyproduk", "rimuru-belisaldo": "belisaldo", "rimuru-buywithkoin": "buywithkoin", "rimuru-ordersaldo": "ordersaldo", "beliproduk": "beliproduk", "buyproduk": "buyproduk", "belisaldo": "belisaldo", "buywithkoin": "buywithkoin", "ordersaldo": "ordersaldo"}
export default handler
