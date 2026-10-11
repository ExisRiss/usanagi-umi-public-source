/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/notiflimit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "notiflimit", "category": "owner", "aliasMap": {"rimuru-owner-notiflimit": "notiflimit", "rimuru-notiflimit": "notiflimit", "rimuru-notifenergi": "notifenergi", "notiflimit": "notiflimit", "notifenergi": "notifenergi"}, "description": "Mengaktifkan atau mematikan notifikasi potong limit secara global.", "usage": ".notiflimit", "example": ".notiflimit", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/notiflimit.js", metadata, m, extra)
handler.help = ["rimuru-owner-notiflimit"]
handler.command = ["rimuru-owner-notiflimit", "rimuru-notiflimit", "rimuru-notifenergi", "notiflimit", "notifenergi"]
handler.tags = ["owner"]
handler.description = "Mengaktifkan atau mematikan notifikasi potong limit secara global."
handler.importSource = "rimuru"
handler.importConfig = {"name": "notiflimit", "alias": ["notifenergi"], "category": "owner", "description": "Mengaktifkan atau mematikan notifikasi potong limit secara global.", "usage": ".notiflimit", "example": ".notiflimit", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-notiflimit": "notiflimit", "rimuru-notiflimit": "notiflimit", "rimuru-notifenergi": "notifenergi", "notiflimit": "notiflimit", "notifenergi": "notifenergi"}
export default handler
