/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/beli.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "beli", "category": "store", "aliasMap": {"rimuru-store-beli": "beli", "rimuru-order": "order", "rimuru-pesan": "pesan", "order": "order", "pesan": "pesan"}, "description": "🛒 Pesan produk dan dapatkan nomor transaksi", "usage": ".beli <nomor_produk>", "example": ".beli 1", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/beli.js", metadata, m, extra)
handler.help = ["rimuru-store-beli <nomor_produk>"]
handler.command = ["rimuru-store-beli", "rimuru-order", "rimuru-pesan", "order", "pesan"]
handler.tags = ["store"]
handler.description = "🛒 Pesan produk dan dapatkan nomor transaksi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "beli", "alias": ["order", "pesan", "buy"], "category": "store", "description": "🛒 Pesan produk dan dapatkan nomor transaksi", "usage": ".beli <nomor_produk>", "example": ".beli 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-beli": "beli", "rimuru-order": "order", "rimuru-pesan": "pesan", "order": "order", "pesan": "pesan"}
export default handler
