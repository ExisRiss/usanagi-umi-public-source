/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/hastag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hastag", "category": "user", "aliasMap": {"rimuru-user-hastag": "hastag", "rimuru-hastag": "hastag", "rimuru-sethastag": "sethastag", "rimuru-formathastag": "formathastag", "hastag": "hastag", "sethastag": "sethastag", "formathastag": "formathastag"}, "description": "Menampilkan template hastag KGR dengan tombol copy otomatis", "usage": ".hastag", "example": ".hastag", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/hastag.js", metadata, m, extra)
handler.help = ["rimuru-user-hastag"]
handler.command = ["rimuru-user-hastag", "rimuru-hastag", "rimuru-sethastag", "rimuru-formathastag", "hastag", "sethastag", "formathastag"]
handler.tags = ["user"]
handler.description = "Menampilkan template hastag KGR dengan tombol copy otomatis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hastag", "alias": ["hastag", "sethastag", "formathastag"], "category": "user", "description": "Menampilkan template hastag KGR dengan tombol copy otomatis", "usage": ".hastag", "example": ".hastag", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-hastag": "hastag", "rimuru-hastag": "hastag", "rimuru-sethastag": "sethastag", "rimuru-formathastag": "formathastag", "hastag": "hastag", "sethastag": "sethastag", "formathastag": "formathastag"}
export default handler
