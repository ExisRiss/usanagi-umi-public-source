/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/work.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "work", "category": "rpg", "aliasMap": {"rimuru-rpg-work": "work", "rimuru-work": "work", "rimuru-kerja": "kerja", "rimuru-job": "job"}, "description": "Bekerja untuk mendapatkan uang", "usage": ".work", "example": ".work", "cooldown": 180, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/work.js", metadata, m, extra)
handler.help = ["rimuru-rpg-work"]
handler.command = ["rimuru-rpg-work", "rimuru-work", "rimuru-kerja", "rimuru-job"]
handler.tags = ["rpg"]
handler.description = "Bekerja untuk mendapatkan uang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "work", "alias": ["kerja", "job"], "category": "rpg", "description": "Bekerja untuk mendapatkan uang", "usage": ".work", "example": ".work", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-work": "work", "rimuru-work": "work", "rimuru-kerja": "kerja", "rimuru-job": "job"}
export default handler
