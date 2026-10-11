/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/enable.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "enable", "category": "main", "aliasMap": {"rimuru-main-enable": "enable", "rimuru-enable": "enable", "rimuru-disable": "disable", "rimuru-on": "on", "rimuru-off": "off"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/enable.js", metadata, m, extra)
handler.help = ["rimuru-main-enable"]
handler.command = ["rimuru-main-enable", "rimuru-enable", "rimuru-disable", "rimuru-on", "rimuru-off"]
handler.tags = ["main"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "enable", "alias": ["disable", "on", "off"], "category": "main", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-enable": "enable", "rimuru-enable": "enable", "rimuru-disable": "disable", "rimuru-on": "on", "rimuru-off": "off"}
export default handler
