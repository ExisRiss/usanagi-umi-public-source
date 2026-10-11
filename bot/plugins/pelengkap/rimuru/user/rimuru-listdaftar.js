/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/listdaftar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listdaftar", "category": "user", "aliasMap": {"rimuru-user-listdaftar": "listdaftar", "rimuru-listdaftar": "listdaftar", "rimuru-listuser": "listuser", "rimuru-registeredusers": "registeredusers", "rimuru-daftarlist": "daftarlist", "listdaftar": "listdaftar", "listuser": "listuser", "registeredusers": "registeredusers", "daftarlist": "daftarlist"}, "description": "Lihat daftar user yang sudah terdaftar dengan filter dan pagination", "usage": ".listdaftar [page <nomor>] [search <nama>] [sort terbaru]", "example": ".listdaftar search zann sort terbaru page 2", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/listdaftar.js", metadata, m, extra)
handler.help = ["rimuru-user-listdaftar [page <nomor>] [search <nama>] [sort terbaru]"]
handler.command = ["rimuru-user-listdaftar", "rimuru-listdaftar", "rimuru-listuser", "rimuru-registeredusers", "rimuru-daftarlist", "listdaftar", "listuser", "registeredusers", "daftarlist"]
handler.tags = ["user"]
handler.description = "Lihat daftar user yang sudah terdaftar dengan filter dan pagination"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listdaftar", "alias": ["listuser", "registeredusers", "daftarlist"], "category": "user", "description": "Lihat daftar user yang sudah terdaftar dengan filter dan pagination", "usage": ".listdaftar [page <nomor>] [search <nama>] [sort terbaru]", "example": ".listdaftar search zann sort terbaru page 2", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-listdaftar": "listdaftar", "rimuru-listdaftar": "listdaftar", "rimuru-listuser": "listuser", "rimuru-registeredusers": "registeredusers", "rimuru-daftarlist": "daftarlist", "listdaftar": "listdaftar", "listuser": "listuser", "registeredusers": "registeredusers", "daftarlist": "daftarlist"}
export default handler
