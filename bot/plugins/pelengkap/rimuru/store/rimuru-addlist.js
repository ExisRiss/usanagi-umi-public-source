/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/addlist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addlist", "category": "store", "aliasMap": {"rimuru-store-addlist": "addlist", "rimuru-addlist": "addlist", "rimuru-addinfo": "addinfo", "addinfo": "addinfo"}, "description": "➕ Tambah informasi toko baru (hanya di private chat)", "usage": ".addlist <nama>|<isi>", "example": ".addlist Syarat & Ketentuan|1. Pembelian tidak bisa dibatalkan;;2. Garansi 7 hari", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/addlist.js", metadata, m, extra)
handler.help = ["rimuru-store-addlist <nama>|<isi>"]
handler.command = ["rimuru-store-addlist", "rimuru-addlist", "rimuru-addinfo", "addinfo"]
handler.tags = ["store"]
handler.description = "➕ Tambah informasi toko baru (hanya di private chat)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addlist", "alias": ["addinfo"], "category": "store", "description": "➕ Tambah informasi toko baru (hanya di private chat)", "usage": ".addlist <nama>|<isi>", "example": ".addlist Syarat & Ketentuan|1. Pembelian tidak bisa dibatalkan;;2. Garansi 7 hari", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-addlist": "addlist", "rimuru-addlist": "addlist", "rimuru-addinfo": "addinfo", "addinfo": "addinfo"}
export default handler
