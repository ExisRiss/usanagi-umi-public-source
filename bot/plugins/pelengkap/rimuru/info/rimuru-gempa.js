/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/gempa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gempa", "category": "info", "aliasMap": {"rimuru-info-gempa": "gempa", "rimuru-gempa": "gempa", "rimuru-bmkg": "bmkg", "rimuru-infogempa": "infogempa", "rimuru-earthquake": "earthquake", "bmkg": "bmkg", "infogempa": "infogempa", "earthquake": "earthquake"}, "description": "Info gempa terkini dari BMKG", "usage": ".gempa", "example": ".gempa", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/gempa.js", metadata, m, extra)
handler.help = ["rimuru-info-gempa"]
handler.command = ["rimuru-info-gempa", "rimuru-gempa", "rimuru-bmkg", "rimuru-infogempa", "rimuru-earthquake", "bmkg", "infogempa", "earthquake"]
handler.tags = ["info"]
handler.description = "Info gempa terkini dari BMKG"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gempa", "alias": ["bmkg", "infogempa", "earthquake"], "category": "info", "description": "Info gempa terkini dari BMKG", "usage": ".gempa", "example": ".gempa", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-info-gempa": "gempa", "rimuru-gempa": "gempa", "rimuru-bmkg": "bmkg", "rimuru-infogempa": "infogempa", "rimuru-earthquake": "earthquake", "bmkg": "bmkg", "infogempa": "infogempa", "earthquake": "earthquake"}
export default handler
