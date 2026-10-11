/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/notifgantitag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "notifgantitag", "category": "group", "aliasMap": {"rimuru-group-notifgantitag": "notifgantitag", "rimuru-notifgantitag": "notifgantitag", "rimuru-notiflabel": "notiflabel", "rimuru-notiftag": "notiftag", "rimuru-labeltag": "labeltag", "notifgantitag": "notifgantitag", "notiflabel": "notiflabel", "notiftag": "notiftag", "labeltag": "labeltag"}, "description": "Mengatur notifikasi perubahan label/tag member", "usage": ".notifgantitag <on/off>", "example": ".notifgantitag on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/notifgantitag.js", metadata, m, extra)
handler.help = ["rimuru-group-notifgantitag <on/off>"]
handler.command = ["rimuru-group-notifgantitag", "rimuru-notifgantitag", "rimuru-notiflabel", "rimuru-notiftag", "rimuru-labeltag", "notifgantitag", "notiflabel", "notiftag", "labeltag"]
handler.tags = ["group"]
handler.description = "Mengatur notifikasi perubahan label/tag member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "notifgantitag", "alias": ["notiflabel", "notiftag", "labeltag"], "category": "group", "description": "Mengatur notifikasi perubahan label/tag member", "usage": ".notifgantitag <on/off>", "example": ".notifgantitag on", "isGroup": true, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-notifgantitag": "notifgantitag", "rimuru-notifgantitag": "notifgantitag", "rimuru-notiflabel": "notiflabel", "rimuru-notiftag": "notiftag", "rimuru-labeltag": "labeltag", "notifgantitag": "notifgantitag", "notiflabel": "notiflabel", "notiftag": "notiftag", "labeltag": "labeltag"}
export default handler
