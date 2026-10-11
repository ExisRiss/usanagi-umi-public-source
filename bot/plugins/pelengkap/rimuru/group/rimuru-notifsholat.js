/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/notifsholat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "notifsholat", "category": "group", "aliasMap": {"rimuru-group-notifsholat": "notifsholat", "rimuru-notifsholat": "notifsholat", "rimuru-notifsolat": "notifsolat", "notifsholat": "notifsholat", "notifsolat": "notifsolat"}, "description": "Toggle notifikasi sholat untuk grup ini", "usage": ".notifsholat on/off", "example": ".notifsholat on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/notifsholat.js", metadata, m, extra)
handler.help = ["rimuru-group-notifsholat on/off"]
handler.command = ["rimuru-group-notifsholat", "rimuru-notifsholat", "rimuru-notifsolat", "notifsholat", "notifsolat"]
handler.tags = ["group"]
handler.description = "Toggle notifikasi sholat untuk grup ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "notifsholat", "alias": ["notifsolat"], "category": "group", "description": "Toggle notifikasi sholat untuk grup ini", "usage": ".notifsholat on/off", "example": ".notifsholat on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-notifsholat": "notifsholat", "rimuru-notifsholat": "notifsholat", "rimuru-notifsolat": "notifsolat", "notifsholat": "notifsholat", "notifsolat": "notifsolat"}
export default handler
