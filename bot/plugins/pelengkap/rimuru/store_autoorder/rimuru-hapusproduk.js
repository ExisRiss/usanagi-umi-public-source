/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/hapusproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autohapusproduk", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autohapusproduk": "autohapusproduk", "rimuru-autohapusproduk": "autohapusproduk", "rimuru-autodelproduk": "autodelproduk", "autohapusproduk": "autohapusproduk", "autodelproduk": "autodelproduk"}, "description": "🛍️ Menghapus produk dari autoorder store", "usage": ".autohapusproduk <id_produk/nomor>", "example": ".autohapusproduk 1", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/hapusproduk.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autohapusproduk <id_produk/nomor>"]
handler.command = ["rimuru-store_autoorder-autohapusproduk", "rimuru-autohapusproduk", "rimuru-autodelproduk", "autohapusproduk", "autodelproduk"]
handler.tags = ["store_autoorder"]
handler.description = "🛍️ Menghapus produk dari autoorder store"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autohapusproduk", "alias": ["autodelproduk"], "category": "store_autoorder", "description": "🛍️ Menghapus produk dari autoorder store", "usage": ".autohapusproduk <id_produk/nomor>", "example": ".autohapusproduk 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autohapusproduk": "autohapusproduk", "rimuru-autohapusproduk": "autohapusproduk", "rimuru-autodelproduk": "autodelproduk", "autohapusproduk": "autohapusproduk", "autodelproduk": "autodelproduk"}
export default handler
