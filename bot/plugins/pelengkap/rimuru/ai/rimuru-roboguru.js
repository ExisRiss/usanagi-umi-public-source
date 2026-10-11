/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/roboguru.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "roboguru", "category": "ai", "aliasMap": {"rimuru-ai-roboguru": "roboguru", "rimuru-roboguru": "roboguru", "roboguru": "roboguru"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/roboguru.js", metadata, m, extra)
handler.help = ["rimuru-ai-roboguru"]
handler.command = ["rimuru-ai-roboguru", "rimuru-roboguru", "roboguru"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "roboguru", "alias": [], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-roboguru": "roboguru", "rimuru-roboguru": "roboguru", "roboguru": "roboguru"}
export default handler
