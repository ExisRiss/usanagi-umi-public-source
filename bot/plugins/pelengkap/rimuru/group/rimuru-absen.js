/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/absen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "absen", "category": "group", "aliasMap": {"rimuru-group-absen": "absen", "rimuru-absen": "absen", "rimuru-hadir": "hadir", "rimuru-present": "present", "hadir": "hadir", "present": "present"}, "description": "Tandai kehadiran di sesi absen", "usage": ".absen", "example": ".absen", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/absen.js", metadata, m, extra)
handler.help = ["rimuru-group-absen"]
handler.command = ["rimuru-group-absen", "rimuru-absen", "rimuru-hadir", "rimuru-present", "hadir", "present"]
handler.tags = ["group"]
handler.description = "Tandai kehadiran di sesi absen"
handler.importSource = "rimuru"
handler.importConfig = {"name": "absen", "alias": ["hadir", "present"], "category": "group", "description": "Tandai kehadiran di sesi absen", "usage": ".absen", "example": ".absen", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-absen": "absen", "rimuru-absen": "absen", "rimuru-hadir": "hadir", "rimuru-present": "present", "hadir": "hadir", "present": "present"}
export default handler
