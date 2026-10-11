/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/sistemenergi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sistemenergi", "category": "owner", "aliasMap": {"rimuru-owner-sistemenergi": "sistemenergi", "rimuru-sistemenergi": "sistemenergi", "rimuru-sistemlimit": "sistemlimit", "rimuru-energimode": "energimode", "rimuru-limitmode": "limitmode", "sistemenergi": "sistemenergi", "sistemlimit": "sistemlimit", "energimode": "energimode", "limitmode": "limitmode"}, "description": "Mengecek, menghidupkan, atau mematikan sistem energi secara global", "usage": ".sistemenergi [on / off]", "example": ".sistemenergi on", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/sistemenergi.js", metadata, m, extra)
handler.help = ["rimuru-owner-sistemenergi [on / off]"]
handler.command = ["rimuru-owner-sistemenergi", "rimuru-sistemenergi", "rimuru-sistemlimit", "rimuru-energimode", "rimuru-limitmode", "sistemenergi", "sistemlimit", "energimode", "limitmode"]
handler.tags = ["owner"]
handler.description = "Mengecek, menghidupkan, atau mematikan sistem energi secara global"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sistemenergi", "alias": ["sistemlimit", "energimode", "limitmode"], "category": "owner", "description": "Mengecek, menghidupkan, atau mematikan sistem energi secara global", "usage": ".sistemenergi [on / off]", "example": ".sistemenergi on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-sistemenergi": "sistemenergi", "rimuru-sistemenergi": "sistemenergi", "rimuru-sistemlimit": "sistemlimit", "rimuru-energimode": "energimode", "rimuru-limitmode": "limitmode", "sistemenergi": "sistemenergi", "sistemlimit": "sistemlimit", "energimode": "energimode", "limitmode": "limitmode"}
export default handler
