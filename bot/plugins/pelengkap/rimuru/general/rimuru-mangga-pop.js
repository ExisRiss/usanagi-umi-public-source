/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/mangga-pop.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mangalist", "category": "general", "aliasMap": {"rimuru-general-mangalist": "mangalist", "rimuru-mangalist": "mangalist", "mangalist": "mangalist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/mangga-pop.js", metadata, m, extra)
handler.help = ["rimuru-general-mangalist"]
handler.command = ["rimuru-general-mangalist", "rimuru-mangalist", "mangalist"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mangalist", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-mangalist": "mangalist", "rimuru-mangalist": "mangalist", "mangalist": "mangalist"}
export default handler
