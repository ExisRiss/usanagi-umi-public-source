/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/listown.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listown", "category": "owner", "aliasMap": {"rimuru-owner-listown": "listown", "rimuru-listown": "listown", "rimuru-er": "er", "rimuru-ers": "ers", "listown": "listown", "er": "er", "ers": "ers"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/listown.js", metadata, m, extra)
handler.help = ["rimuru-owner-listown"]
handler.command = ["rimuru-owner-listown", "rimuru-listown", "rimuru-er", "rimuru-ers", "listown", "er", "ers"]
handler.tags = ["owner"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listown", "alias": ["er", "ers"], "category": "owner", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-owner-listown": "listown", "rimuru-listown": "listown", "rimuru-er": "er", "rimuru-ers": "ers", "listown": "listown", "er": "er", "ers": "ers"}
export default handler
