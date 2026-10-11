/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/listproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listproduk", "category": "store", "aliasMap": {"rimuru-store-listproduk": "listproduk", "rimuru-listproduk": "listproduk", "rimuru-produk": "produk", "rimuru-katalog": "katalog", "rimuru-catalog": "catalog", "listproduk": "listproduk", "produk": "produk", "katalog": "katalog", "catalog": "catalog"}, "description": "🛍️ Lihat daftar produk yang tersedia", "usage": ".listproduk", "example": ".listproduk", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/listproduk.js", metadata, m, extra)
handler.help = ["rimuru-store-listproduk"]
handler.command = ["rimuru-store-listproduk", "rimuru-listproduk", "rimuru-produk", "rimuru-katalog", "rimuru-catalog", "listproduk", "produk", "katalog", "catalog"]
handler.tags = ["store"]
handler.description = "🛍️ Lihat daftar produk yang tersedia"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listproduk", "alias": ["produk", "katalog", "catalog"], "category": "store", "description": "🛍️ Lihat daftar produk yang tersedia", "usage": ".listproduk", "example": ".listproduk", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-listproduk": "listproduk", "rimuru-listproduk": "listproduk", "rimuru-produk": "produk", "rimuru-katalog": "katalog", "rimuru-catalog": "catalog", "listproduk": "listproduk", "produk": "produk", "katalog": "katalog", "catalog": "catalog"}
export default handler
