/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/hapusstok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autohapusstok", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autohapusstok": "autohapusstok", "rimuru-autohapusstok": "autohapusstok", "rimuru-autodelstok": "autodelstok", "autohapusstok": "autohapusstok", "autodelstok": "autodelstok"}, "description": "📦 Menghapus stok digital tertentu dari produk", "usage": ".autohapusstok <id_produk/nomor> | <nomor_stok>", "example": ".autohapusstok 1 | 1", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/hapusstok.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autohapusstok <id_produk/nomor> | <nomor_stok>"]
handler.command = ["rimuru-store_autoorder-autohapusstok", "rimuru-autohapusstok", "rimuru-autodelstok", "autohapusstok", "autodelstok"]
handler.tags = ["store_autoorder"]
handler.description = "📦 Menghapus stok digital tertentu dari produk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autohapusstok", "alias": ["autodelstok"], "category": "store_autoorder", "description": "📦 Menghapus stok digital tertentu dari produk", "usage": ".autohapusstok <id_produk/nomor> | <nomor_stok>", "example": ".autohapusstok 1 | 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autohapusstok": "autohapusstok", "rimuru-autohapusstok": "autohapusstok", "rimuru-autodelstok": "autodelstok", "autohapusstok": "autohapusstok", "autodelstok": "autodelstok"}
export default handler
