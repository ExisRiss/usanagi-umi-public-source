/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/stickman.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stickman", "category": "game", "aliasMap": {"rimuru-game-stickman": "stickman", "rimuru-stickman": "stickman", "rimuru-stick": "stick", "rimuru-stickgame": "stickgame", "stickman": "stickman", "stick": "stick", "stickgame": "stickgame"}, "description": "Game Stickman HTML AI Rich.", "usage": ".stickman", "example": ".stickman", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/stickman.js", metadata, m, extra)
handler.help = ["rimuru-game-stickman"]
handler.command = ["rimuru-game-stickman", "rimuru-stickman", "rimuru-stick", "rimuru-stickgame", "stickman", "stick", "stickgame"]
handler.tags = ["game"]
handler.description = "Game Stickman HTML AI Rich."
handler.importSource = "rimuru"
handler.importConfig = {"name": "stickman", "alias": ["stick", "stickgame"], "category": "game", "description": "Game Stickman HTML AI Rich.", "usage": ".stickman", "example": ".stickman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-stickman": "stickman", "rimuru-stickman": "stickman", "rimuru-stick": "stick", "rimuru-stickgame": "stickgame", "stickman": "stickman", "stick": "stick", "stickgame": "stickgame"}
export default handler
