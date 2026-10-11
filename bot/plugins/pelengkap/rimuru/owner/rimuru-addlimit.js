/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addlimit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addlimit", "category": "owner", "aliasMap": {"rimuru-owner-addlimit": "addlimit", "rimuru-addlimit": "addlimit", "rimuru-user": "user"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addlimit.js", metadata, m, extra)
handler.help = ["rimuru-owner-addlimit"]
handler.command = ["rimuru-owner-addlimit", "rimuru-addlimit", "rimuru-user"]
handler.tags = ["owner"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addlimit", "alias": ["user"], "category": "owner", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-owner-addlimit": "addlimit", "rimuru-addlimit": "addlimit", "rimuru-user": "user"}
export default handler
