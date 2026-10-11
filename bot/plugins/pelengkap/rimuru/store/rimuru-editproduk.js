/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/editproduk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "editproduk", "category": "store", "aliasMap": {"rimuru-store-editproduk": "editproduk", "rimuru-editproduk": "editproduk", "rimuru-editproduct": "editproduct", "editproduk": "editproduk", "editproduct": "editproduct"}, "description": "✏️ Edit produk toko (hanya di private chat)", "usage": ".editproduk <nomor> <field> <nilai>", "example": ".editproduk 1 harga 30000", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/editproduk.js", metadata, m, extra)
handler.help = ["rimuru-store-editproduk <nomor> <field> <nilai>"]
handler.command = ["rimuru-store-editproduk", "rimuru-editproduk", "rimuru-editproduct", "editproduk", "editproduct"]
handler.tags = ["store"]
handler.description = "✏️ Edit produk toko (hanya di private chat)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "editproduk", "alias": ["editproduct"], "category": "store", "description": "✏️ Edit produk toko (hanya di private chat)", "usage": ".editproduk <nomor> <field> <nilai>", "example": ".editproduk 1 harga 30000", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-editproduk": "editproduk", "rimuru-editproduk": "editproduk", "rimuru-editproduct": "editproduct", "editproduk": "editproduk", "editproduct": "editproduct"}
export default handler
