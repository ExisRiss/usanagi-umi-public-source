/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/listproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autolistproduk", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autolistproduk": "autolistproduk", "rimuru-autolistproduk": "autolistproduk", "rimuru-autoproduk": "autoproduk", "rimuru-autostore": "autostore", "autolistproduk": "autolistproduk", "autoproduk": "autoproduk", "autostore": "autostore"}, "description": "🛍️ Menampilkan daftar produk autoorder", "usage": ".autolistproduk", "example": ".autolistproduk", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/listproduk.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autolistproduk"]
handler.command = ["rimuru-store_autoorder-autolistproduk", "rimuru-autolistproduk", "rimuru-autoproduk", "rimuru-autostore", "autolistproduk", "autoproduk", "autostore"]
handler.tags = ["store_autoorder"]
handler.description = "🛍️ Menampilkan daftar produk autoorder"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autolistproduk", "alias": ["autoproduk", "autostore"], "category": "store_autoorder", "description": "🛍️ Menampilkan daftar produk autoorder", "usage": ".autolistproduk", "example": ".autolistproduk", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autolistproduk": "autolistproduk", "rimuru-autolistproduk": "autolistproduk", "rimuru-autoproduk": "autoproduk", "rimuru-autostore": "autostore", "autolistproduk": "autolistproduk", "autoproduk": "autoproduk", "autostore": "autostore"}
export default handler
