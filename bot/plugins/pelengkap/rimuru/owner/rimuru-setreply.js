/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setreply.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setreply", "category": "owner", "aliasMap": {"rimuru-owner-setreply": "setreply", "rimuru-setreply": "setreply", "rimuru-replyvariant": "replyvariant", "rimuru-replystyle": "replystyle", "replyvariant": "replyvariant", "replystyle": "replystyle"}, "description": "Mengatur variant tampilan reply", "usage": ".setreply <v1-v11>", "example": ".setreply v5", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setreply.js", metadata, m, extra)
handler.help = ["rimuru-owner-setreply <v1-v11>"]
handler.command = ["rimuru-owner-setreply", "rimuru-setreply", "rimuru-replyvariant", "rimuru-replystyle", "replyvariant", "replystyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan reply"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setreply", "alias": ["replyvariant", "replystyle"], "category": "owner", "description": "Mengatur variant tampilan reply", "usage": ".setreply <v1-v11>", "example": ".setreply v5", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setreply": "setreply", "rimuru-setreply": "setreply", "rimuru-replyvariant": "replyvariant", "rimuru-replystyle": "replystyle", "replyvariant": "replyvariant", "replystyle": "replystyle"}
export default handler
