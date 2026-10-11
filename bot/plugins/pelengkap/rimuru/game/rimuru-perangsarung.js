/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/perangsarung.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "perangsarung", "category": "game", "aliasMap": {"rimuru-game-perangsarung": "perangsarung", "rimuru-perangsarung": "perangsarung", "perangsarung": "perangsarung"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/perangsarung.js", metadata, m, extra)
handler.help = ["rimuru-game-perangsarung"]
handler.command = ["rimuru-game-perangsarung", "rimuru-perangsarung", "perangsarung"]
handler.tags = ["game"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "perangsarung", "alias": [], "category": "game", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-perangsarung": "perangsarung", "rimuru-perangsarung": "perangsarung", "perangsarung": "perangsarung"}
export default handler
