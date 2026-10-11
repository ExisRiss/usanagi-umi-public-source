/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/birthdaylist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "birthdaylist", "category": "user", "aliasMap": {"rimuru-user-birthdaylist": "birthdaylist", "rimuru-birthdaylist": "birthdaylist", "rimuru-bdaylist": "bdaylist", "rimuru-listultah": "listultah", "rimuru-ultahlist": "ultahlist", "birthdaylist": "birthdaylist", "bdaylist": "bdaylist", "listultah": "listultah", "ultahlist": "ultahlist"}, "description": "Lihat daftar ulang tahun member", "usage": ".birthdaylist", "example": ".birthdaylist", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/birthdaylist.js", metadata, m, extra)
handler.help = ["rimuru-user-birthdaylist"]
handler.command = ["rimuru-user-birthdaylist", "rimuru-birthdaylist", "rimuru-bdaylist", "rimuru-listultah", "rimuru-ultahlist", "birthdaylist", "bdaylist", "listultah", "ultahlist"]
handler.tags = ["user"]
handler.description = "Lihat daftar ulang tahun member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "birthdaylist", "alias": ["bdaylist", "listultah", "ultahlist"], "category": "user", "description": "Lihat daftar ulang tahun member", "usage": ".birthdaylist", "example": ".birthdaylist", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-birthdaylist": "birthdaylist", "rimuru-birthdaylist": "birthdaylist", "rimuru-bdaylist": "bdaylist", "rimuru-listultah": "listultah", "rimuru-ultahlist": "ultahlist", "birthdaylist": "birthdaylist", "bdaylist": "bdaylist", "listultah": "listultah", "ultahlist": "ultahlist"}
export default handler
