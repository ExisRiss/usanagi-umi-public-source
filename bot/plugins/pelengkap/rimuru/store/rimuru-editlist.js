/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/editlist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "editlist", "category": "store", "aliasMap": {"rimuru-store-editlist": "editlist", "rimuru-editlist": "editlist", "rimuru-editinfo": "editinfo", "editlist": "editlist", "editinfo": "editinfo"}, "description": "✏️ Edit informasi toko (hanya di private chat)", "usage": ".editlist <nomor> <field> <nilai>", "example": ".editlist 1 isi Konten baru di sini", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/editlist.js", metadata, m, extra)
handler.help = ["rimuru-store-editlist <nomor> <field> <nilai>"]
handler.command = ["rimuru-store-editlist", "rimuru-editlist", "rimuru-editinfo", "editlist", "editinfo"]
handler.tags = ["store"]
handler.description = "✏️ Edit informasi toko (hanya di private chat)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "editlist", "alias": ["editinfo"], "category": "store", "description": "✏️ Edit informasi toko (hanya di private chat)", "usage": ".editlist <nomor> <field> <nilai>", "example": ".editlist 1 isi Konten baru di sini", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-editlist": "editlist", "rimuru-editlist": "editlist", "rimuru-editinfo": "editinfo", "editlist": "editlist", "editinfo": "editinfo"}
export default handler
