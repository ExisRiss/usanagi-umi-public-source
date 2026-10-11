/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/hok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hok", "category": "info", "aliasMap": {"rimuru-info-hok": "hok", "rimuru-hok": "hok", "rimuru-hokinfo": "hokinfo", "rimuru-honorofkings": "honorofkings", "hok": "hok", "hokinfo": "hokinfo", "honorofkings": "honorofkings"}, "description": "Informasi karakter Honor of Kings", "usage": ".hok <nama karakter>", "example": ".hok Dyadia", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/hok.js", metadata, m, extra)
handler.help = ["rimuru-info-hok <nama karakter>"]
handler.command = ["rimuru-info-hok", "rimuru-hok", "rimuru-hokinfo", "rimuru-honorofkings", "hok", "hokinfo", "honorofkings"]
handler.tags = ["info"]
handler.description = "Informasi karakter Honor of Kings"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hok", "alias": ["hokinfo", "honorofkings"], "category": "info", "description": "Informasi karakter Honor of Kings", "usage": ".hok <nama karakter>", "example": ".hok Dyadia", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-hok": "hok", "rimuru-hok": "hok", "rimuru-hokinfo": "hokinfo", "rimuru-honorofkings": "honorofkings", "hok": "hok", "hokinfo": "hokinfo", "honorofkings": "honorofkings"}
export default handler
