/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/hapusproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hapusproduk", "category": "store", "aliasMap": {"rimuru-store-hapusproduk": "hapusproduk", "rimuru-hapusproduk": "hapusproduk", "rimuru-delproduk": "delproduk", "rimuru-delproduct": "delproduct", "rimuru-deleteproduk": "deleteproduk", "hapusproduk": "hapusproduk", "delproduk": "delproduk", "delproduct": "delproduct", "deleteproduk": "deleteproduk"}, "description": "🗑️ Hapus produk dari toko", "usage": ".hapusproduk <nomor>", "example": ".hapusproduk 1", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/hapusproduk.js", metadata, m, extra)
handler.help = ["rimuru-store-hapusproduk <nomor>"]
handler.command = ["rimuru-store-hapusproduk", "rimuru-hapusproduk", "rimuru-delproduk", "rimuru-delproduct", "rimuru-deleteproduk", "hapusproduk", "delproduk", "delproduct", "deleteproduk"]
handler.tags = ["store"]
handler.description = "🗑️ Hapus produk dari toko"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hapusproduk", "alias": ["delproduk", "delproduct", "deleteproduk"], "category": "store", "description": "🗑️ Hapus produk dari toko", "usage": ".hapusproduk <nomor>", "example": ".hapusproduk 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-hapusproduk": "hapusproduk", "rimuru-hapusproduk": "hapusproduk", "rimuru-delproduk": "delproduk", "rimuru-delproduct": "delproduct", "rimuru-deleteproduk": "deleteproduk", "hapusproduk": "hapusproduk", "delproduk": "delproduk", "delproduct": "delproduct", "deleteproduk": "deleteproduk"}
export default handler
