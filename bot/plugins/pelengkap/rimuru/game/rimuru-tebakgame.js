/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/tebakgame.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tebakgame", "category": "game", "aliasMap": {"rimuru-game-tebakgame": "tebakgame", "rimuru-tebakgame": "tebakgame"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/tebakgame.js", metadata, m, extra)
handler.help = ["rimuru-game-tebakgame"]
handler.command = ["rimuru-game-tebakgame", "rimuru-tebakgame"]
handler.tags = ["game"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tebakgame", "alias": [], "category": "game", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-tebakgame": "tebakgame", "rimuru-tebakgame": "tebakgame"}
export default handler
