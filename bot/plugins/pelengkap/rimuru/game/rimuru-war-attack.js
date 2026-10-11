/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/war-attack.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "attack", "category": "game", "aliasMap": {"rimuru-game-attack": "attack", "rimuru-attack": "attack", "rimuru-atk": "atk", "attack": "attack", "atk": "atk"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/war-attack.js", metadata, m, extra)
handler.help = ["rimuru-game-attack"]
handler.command = ["rimuru-game-attack", "rimuru-attack", "rimuru-atk", "attack", "atk"]
handler.tags = ["game"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "attack", "alias": ["atk"], "category": "game", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-attack": "attack", "rimuru-attack": "attack", "rimuru-atk": "atk", "attack": "attack", "atk": "atk"}
export default handler
