/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/cekonline.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekonline", "category": "group", "aliasMap": {"rimuru-group-cekonline": "cekonline", "rimuru-cekonline": "cekonline", "rimuru-checkonline": "checkonline", "rimuru-online": "online", "rimuru-siapayangonline": "siapayangonline", "rimuru-whosonline": "whosonline", "cekonline": "cekonline", "checkonline": "checkonline", "online": "online", "siapayangonline": "siapayangonline", "whosonline": "whosonline"}, "description": "Cek member yang online di grup", "usage": ".cekonline", "example": ".cekonline", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/cekonline.js", metadata, m, extra)
handler.help = ["rimuru-group-cekonline"]
handler.command = ["rimuru-group-cekonline", "rimuru-cekonline", "rimuru-checkonline", "rimuru-online", "rimuru-siapayangonline", "rimuru-whosonline", "cekonline", "checkonline", "online", "siapayangonline", "whosonline"]
handler.tags = ["group"]
handler.description = "Cek member yang online di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekonline", "alias": ["checkonline", "online", "siapayangonline", "whosonline"], "category": "group", "description": "Cek member yang online di grup", "usage": ".cekonline", "example": ".cekonline", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-cekonline": "cekonline", "rimuru-cekonline": "cekonline", "rimuru-checkonline": "checkonline", "rimuru-online": "online", "rimuru-siapayangonline": "siapayangonline", "rimuru-whosonline": "whosonline", "cekonline": "cekonline", "checkonline": "checkonline", "online": "online", "siapayangonline": "siapayangonline", "whosonline": "whosonline"}
export default handler
