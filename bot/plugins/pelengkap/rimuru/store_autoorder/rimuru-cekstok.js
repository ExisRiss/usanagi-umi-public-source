/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/cekstok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autocekstok", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autocekstok": "autocekstok", "rimuru-autocekstok": "autocekstok", "rimuru-autoliststok": "autoliststok", "rimuru-autostok": "autostok", "autocekstok": "autocekstok", "autoliststok": "autoliststok", "autostok": "autostok"}, "description": "📦 Melihat daftar stok digital suatu produk", "usage": ".autocekstok <id_produk/nomor>", "example": ".autocekstok 1", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/cekstok.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autocekstok <id_produk/nomor>"]
handler.command = ["rimuru-store_autoorder-autocekstok", "rimuru-autocekstok", "rimuru-autoliststok", "rimuru-autostok", "autocekstok", "autoliststok", "autostok"]
handler.tags = ["store_autoorder"]
handler.description = "📦 Melihat daftar stok digital suatu produk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autocekstok", "alias": ["autoliststok", "autostok"], "category": "store_autoorder", "description": "📦 Melihat daftar stok digital suatu produk", "usage": ".autocekstok <id_produk/nomor>", "example": ".autocekstok 1", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autocekstok": "autocekstok", "rimuru-autocekstok": "autocekstok", "rimuru-autoliststok": "autoliststok", "rimuru-autostok": "autostok", "autocekstok": "autocekstok", "autoliststok": "autoliststok", "autostok": "autostok"}
export default handler
