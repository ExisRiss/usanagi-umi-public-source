/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecanjapan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecanjapan", "category": "random", "aliasMap": {"rimuru-random-cecanjapan": "cecanjapan", "rimuru-cecanjapan": "cecanjapan", "cecanjapan": "cecanjapan"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecanjapan.js", metadata, m, extra)
handler.help = ["rimuru-random-cecanjapan"]
handler.command = ["rimuru-random-cecanjapan", "rimuru-cecanjapan", "cecanjapan"]
handler.tags = ["random"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecanjapan", "alias": [], "category": "random", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-cecanjapan": "cecanjapan", "rimuru-cecanjapan": "cecanjapan", "cecanjapan": "cecanjapan"}
export default handler
