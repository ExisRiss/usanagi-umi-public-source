/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/breakout.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "breakout", "category": "game", "aliasMap": {"rimuru-game-breakout": "breakout", "rimuru-breakout": "breakout", "rimuru-arrowbreakout": "arrowbreakout", "breakout": "breakout", "arrowbreakout": "arrowbreakout"}, "description": "Game webview Arrow Breakout interaktif", "usage": ".breakout", "example": ".breakout", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/breakout.js", metadata, m, extra)
handler.help = ["rimuru-game-breakout"]
handler.command = ["rimuru-game-breakout", "rimuru-breakout", "rimuru-arrowbreakout", "breakout", "arrowbreakout"]
handler.tags = ["game"]
handler.description = "Game webview Arrow Breakout interaktif"
handler.importSource = "rimuru"
handler.importConfig = {"name": "breakout", "alias": ["arrowbreakout"], "category": "game", "description": "Game webview Arrow Breakout interaktif", "usage": ".breakout", "example": ".breakout", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-breakout": "breakout", "rimuru-breakout": "breakout", "rimuru-arrowbreakout": "arrowbreakout", "breakout": "breakout", "arrowbreakout": "arrowbreakout"}
export default handler
