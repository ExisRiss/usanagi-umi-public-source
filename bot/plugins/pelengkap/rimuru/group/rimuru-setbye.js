/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setbye.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setbye", "category": "group", "aliasMap": {"rimuru-group-setbye": "setbye", "rimuru-setbye": "setbye"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setbye.js", metadata, m, extra)
handler.help = ["rimuru-group-setbye"]
handler.command = ["rimuru-group-setbye", "rimuru-setbye"]
handler.tags = ["group"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setbye", "alias": [], "category": "group", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-setbye": "setbye", "rimuru-setbye": "setbye"}
export default handler
