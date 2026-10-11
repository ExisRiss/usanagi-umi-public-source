/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/addstok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addstok", "category": "store", "aliasMap": {"rimuru-store-addstok": "addstok", "rimuru-addstok": "addstok", "rimuru-addstock": "addstock", "rimuru-importstok": "importstok", "rimuru-importstock": "importstock", "addstok": "addstok", "addstock": "addstock", "importstok": "importstok", "importstock": "importstock"}, "description": "📦 Tambah stok item ke produk (hanya di private chat)", "usage": ".addstok <nomor_produk>|<detail> atau .addstok <nomor> <jumlah> (fisik)", "example": ".addstok 1|Email: user@mail.com;;Password: pass123", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/addstok.js", metadata, m, extra)
handler.help = ["rimuru-store-addstok <nomor_produk>|<detail> atau .addstok <nomor> <jumlah> (fisik)"]
handler.command = ["rimuru-store-addstok", "rimuru-addstok", "rimuru-addstock", "rimuru-importstok", "rimuru-importstock", "addstok", "addstock", "importstok", "importstock"]
handler.tags = ["store"]
handler.description = "📦 Tambah stok item ke produk (hanya di private chat)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addstok", "alias": ["addstock", "importstok", "importstock"], "category": "store", "description": "📦 Tambah stok item ke produk (hanya di private chat)", "usage": ".addstok <nomor_produk>|<detail> atau .addstok <nomor> <jumlah> (fisik)", "example": ".addstok 1|Email: user@mail.com;;Password: pass123", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-addstok": "addstok", "rimuru-addstok": "addstok", "rimuru-addstock": "addstock", "rimuru-importstok": "importstok", "rimuru-importstock": "importstock", "addstok": "addstok", "addstock": "addstock", "importstok": "importstok", "importstock": "importstock"}
export default handler
