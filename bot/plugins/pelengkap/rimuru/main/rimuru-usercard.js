/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/usercard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "usercard", "category": "main", "aliasMap": {"rimuru-main-usercard": "usercard", "rimuru-usercard": "usercard", "rimuru-kartu": "kartu", "rimuru-mycard": "mycard", "usercard": "usercard", "kartu": "kartu", "mycard": "mycard"}, "description": "Menampilkan kartu profil pengguna", "usage": ".usercard [reply/tag]", "example": ".usercard", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/usercard.js", metadata, m, extra)
handler.help = ["rimuru-main-usercard [reply/tag]"]
handler.command = ["rimuru-main-usercard", "rimuru-usercard", "rimuru-kartu", "rimuru-mycard", "usercard", "kartu", "mycard"]
handler.tags = ["main"]
handler.description = "Menampilkan kartu profil pengguna"
handler.importSource = "rimuru"
handler.importConfig = {"name": "usercard", "alias": ["kartu", "mycard"], "category": "main", "description": "Menampilkan kartu profil pengguna", "usage": ".usercard [reply/tag]", "example": ".usercard", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-usercard": "usercard", "rimuru-usercard": "usercard", "rimuru-kartu": "kartu", "rimuru-mycard": "mycard", "usercard": "usercard", "kartu": "kartu", "mycard": "mycard"}
export default handler
