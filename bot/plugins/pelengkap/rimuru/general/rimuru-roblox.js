/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/roblox.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "toproblox", "category": "general", "aliasMap": {"rimuru-general-toproblox": "toproblox", "rimuru-toproblox": "toproblox", "toproblox": "toproblox"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/roblox.js", metadata, m, extra)
handler.help = ["rimuru-general-toproblox"]
handler.command = ["rimuru-general-toproblox", "rimuru-toproblox", "toproblox"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "toproblox", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-toproblox": "toproblox", "rimuru-toproblox": "toproblox", "toproblox": "toproblox"}
export default handler
