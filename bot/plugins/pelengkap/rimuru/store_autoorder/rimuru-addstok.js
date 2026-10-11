/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/addstok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoaddstok", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autoaddstok": "autoaddstok", "rimuru-autoaddstok": "autoaddstok", "rimuru-autotambahstok": "autotambahstok", "autoaddstok": "autoaddstok", "autotambahstok": "autotambahstok"}, "description": "📦 Menambah stok digital ke produk", "usage": ".autoaddstok <id_produk/nomor> | <data_stok>", "example": ".autoaddstok 1 | email:pass:profile", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/addstok.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autoaddstok <id_produk/nomor> | <data_stok>"]
handler.command = ["rimuru-store_autoorder-autoaddstok", "rimuru-autoaddstok", "rimuru-autotambahstok", "autoaddstok", "autotambahstok"]
handler.tags = ["store_autoorder"]
handler.description = "📦 Menambah stok digital ke produk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoaddstok", "alias": ["autotambahstok"], "category": "store_autoorder", "description": "📦 Menambah stok digital ke produk", "usage": ".autoaddstok <id_produk/nomor> | <data_stok>", "example": ".autoaddstok 1 | email:pass:profile", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autoaddstok": "autoaddstok", "rimuru-autoaddstok": "autoaddstok", "rimuru-autotambahstok": "autotambahstok", "autoaddstok": "autoaddstok", "autotambahstok": "autotambahstok"}
export default handler
