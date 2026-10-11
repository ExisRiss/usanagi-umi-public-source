/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/notifclosegroup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "notifclosegroup", "category": "group", "aliasMap": {"rimuru-group-notifclosegroup": "notifclosegroup", "rimuru-notifclosegroup": "notifclosegroup", "rimuru-notifclose": "notifclose", "notifclosegroup": "notifclosegroup", "notifclose": "notifclose"}, "description": "Toggle notifikasi saat grup ditutup", "usage": ".notifclosegroup on/off", "example": ".notifclosegroup on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/notifclosegroup.js", metadata, m, extra)
handler.help = ["rimuru-group-notifclosegroup on/off"]
handler.command = ["rimuru-group-notifclosegroup", "rimuru-notifclosegroup", "rimuru-notifclose", "notifclosegroup", "notifclose"]
handler.tags = ["group"]
handler.description = "Toggle notifikasi saat grup ditutup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "notifclosegroup", "alias": ["notifclose"], "category": "group", "description": "Toggle notifikasi saat grup ditutup", "usage": ".notifclosegroup on/off", "example": ".notifclosegroup on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-notifclosegroup": "notifclosegroup", "rimuru-notifclosegroup": "notifclosegroup", "rimuru-notifclose": "notifclose", "notifclosegroup": "notifclosegroup", "notifclose": "notifclose"}
export default handler
