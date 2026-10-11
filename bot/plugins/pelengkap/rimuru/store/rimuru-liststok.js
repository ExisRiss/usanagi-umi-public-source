/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/liststok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "liststok", "category": "store", "aliasMap": {"rimuru-store-liststok": "liststok", "rimuru-liststok": "liststok", "rimuru-liststock": "liststock", "rimuru-stok": "stok", "rimuru-stock": "stock", "liststok": "liststok", "liststock": "liststock", "stok": "stok", "stock": "stock"}, "description": "📋 Lihat daftar stok item produk", "usage": ".liststok <nomor_produk>", "example": ".liststok 1", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/liststok.js", metadata, m, extra)
handler.help = ["rimuru-store-liststok <nomor_produk>"]
handler.command = ["rimuru-store-liststok", "rimuru-liststok", "rimuru-liststock", "rimuru-stok", "rimuru-stock", "liststok", "liststock", "stok", "stock"]
handler.tags = ["store"]
handler.description = "📋 Lihat daftar stok item produk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "liststok", "alias": ["liststock", "stok", "stock"], "category": "store", "description": "📋 Lihat daftar stok item produk", "usage": ".liststok <nomor_produk>", "example": ".liststok 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-liststok": "liststok", "rimuru-liststok": "liststok", "rimuru-liststock": "liststock", "rimuru-stok": "stok", "rimuru-stock": "stock", "liststok": "liststok", "liststock": "liststock", "stok": "stok", "stock": "stock"}
export default handler
