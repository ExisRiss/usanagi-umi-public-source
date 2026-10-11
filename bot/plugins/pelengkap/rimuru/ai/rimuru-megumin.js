/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/megumin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "meguminai", "category": "ai", "aliasMap": {"rimuru-ai-meguminai": "meguminai", "rimuru-meguminai": "meguminai", "rimuru-megu": "megu", "meguminai": "meguminai", "megu": "megu"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/megumin.js", metadata, m, extra)
handler.help = ["rimuru-ai-meguminai"]
handler.command = ["rimuru-ai-meguminai", "rimuru-meguminai", "rimuru-megu", "meguminai", "megu"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "meguminai", "alias": ["megu"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-meguminai": "meguminai", "rimuru-meguminai": "meguminai", "rimuru-megu": "megu", "meguminai": "meguminai", "megu": "megu"}
export default handler
