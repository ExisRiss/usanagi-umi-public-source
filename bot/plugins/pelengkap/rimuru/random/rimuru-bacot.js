/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/bacot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bacot", "category": "random", "aliasMap": {"rimuru-random-bacot": "bacot", "rimuru-bacot": "bacot", "bacot": "bacot"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/bacot.js", metadata, m, extra)
handler.help = ["rimuru-random-bacot"]
handler.command = ["rimuru-random-bacot", "rimuru-bacot", "bacot"]
handler.tags = ["random"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bacot", "alias": [], "category": "random", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-bacot": "bacot", "rimuru-bacot": "bacot", "bacot": "bacot"}
export default handler
