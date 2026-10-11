/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/tambahproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autotambahproduk", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autotambahproduk": "autotambahproduk", "rimuru-autotambahproduk": "autotambahproduk", "rimuru-autoaddproduk": "autoaddproduk", "autotambahproduk": "autotambahproduk", "autoaddproduk": "autoaddproduk"}, "description": "🛍️ Menambah produk ke autoorder store", "usage": ".autotambahproduk <nama> | <harga> | <deskripsi>", "example": ".autotambahproduk Netflix 1 Bulan | 35000 | Akun sharing anti screen limit", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/tambahproduk.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autotambahproduk <nama> | <harga> | <deskripsi>"]
handler.command = ["rimuru-store_autoorder-autotambahproduk", "rimuru-autotambahproduk", "rimuru-autoaddproduk", "autotambahproduk", "autoaddproduk"]
handler.tags = ["store_autoorder"]
handler.description = "🛍️ Menambah produk ke autoorder store"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autotambahproduk", "alias": ["autoaddproduk"], "category": "store_autoorder", "description": "🛍️ Menambah produk ke autoorder store", "usage": ".autotambahproduk <nama> | <harga> | <deskripsi>", "example": ".autotambahproduk Netflix 1 Bulan | 35000 | Akun sharing anti screen limit", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autotambahproduk": "autotambahproduk", "rimuru-autotambahproduk": "autotambahproduk", "rimuru-autoaddproduk": "autoaddproduk", "autotambahproduk": "autotambahproduk", "autoaddproduk": "autoaddproduk"}
export default handler
