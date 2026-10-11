/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/productinfo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "productinfo", "category": "store", "aliasMap": {"rimuru-store-productinfo": "productinfo", "rimuru-productinfo": "productinfo", "rimuru-infoproduk": "infoproduk", "rimuru-detailproduk": "detailproduk", "productinfo": "productinfo", "infoproduk": "infoproduk", "detailproduk": "detailproduk"}, "description": "Lihat detail produk", "usage": ".productinfo <nomor>", "example": ".productinfo 1", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/productinfo.js", metadata, m, extra)
handler.help = ["rimuru-store-productinfo <nomor>"]
handler.command = ["rimuru-store-productinfo", "rimuru-productinfo", "rimuru-infoproduk", "rimuru-detailproduk", "productinfo", "infoproduk", "detailproduk"]
handler.tags = ["store"]
handler.description = "Lihat detail produk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "productinfo", "alias": ["infoproduk", "detailproduk"], "category": "store", "description": "Lihat detail produk", "usage": ".productinfo <nomor>", "example": ".productinfo 1", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-productinfo": "productinfo", "rimuru-productinfo": "productinfo", "rimuru-infoproduk": "infoproduk", "rimuru-detailproduk": "detailproduk", "productinfo": "productinfo", "infoproduk": "infoproduk", "detailproduk": "detailproduk"}
export default handler
