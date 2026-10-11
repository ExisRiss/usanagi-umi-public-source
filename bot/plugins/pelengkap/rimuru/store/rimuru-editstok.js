/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/editstok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "editstok", "category": "store", "aliasMap": {"rimuru-store-editstok": "editstok", "rimuru-editstok": "editstok", "rimuru-editstock": "editstock", "editstok": "editstok", "editstock": "editstock"}, "description": "✏️ Edit stok item produk (hanya di private chat)", "usage": ".editstok <nomor_produk> <nomor_item>|<detail_baru>", "example": ".editstok 1 3|Email: baru@mail.com;;Password: newpass", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/editstok.js", metadata, m, extra)
handler.help = ["rimuru-store-editstok <nomor_produk> <nomor_item>|<detail_baru>"]
handler.command = ["rimuru-store-editstok", "rimuru-editstok", "rimuru-editstock", "editstok", "editstock"]
handler.tags = ["store"]
handler.description = "✏️ Edit stok item produk (hanya di private chat)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "editstok", "alias": ["editstock"], "category": "store", "description": "✏️ Edit stok item produk (hanya di private chat)", "usage": ".editstok <nomor_produk> <nomor_item>|<detail_baru>", "example": ".editstok 1 3|Email: baru@mail.com;;Password: newpass", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-editstok": "editstok", "rimuru-editstok": "editstok", "rimuru-editstock": "editstock", "editstok": "editstok", "editstock": "editstock"}
export default handler
