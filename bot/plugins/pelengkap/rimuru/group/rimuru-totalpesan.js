/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/totalpesan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "totalpesan", "category": "group", "aliasMap": {"rimuru-group-totalpesan": "totalpesan", "rimuru-totalpesan": "totalpesan"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/totalpesan.js", metadata, m, extra)
handler.help = ["rimuru-group-totalpesan"]
handler.command = ["rimuru-group-totalpesan", "rimuru-totalpesan"]
handler.tags = ["group"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "totalpesan", "alias": [], "category": "group", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-totalpesan": "totalpesan", "rimuru-totalpesan": "totalpesan"}
export default handler
