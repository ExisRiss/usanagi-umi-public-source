/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/flappy.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "flappy", "category": "game", "aliasMap": {"rimuru-game-flappy": "flappy", "rimuru-flappy": "flappy", "rimuru-flappybird": "flappybird"}, "description": "Game webview Flappy Bird interaktif", "usage": ".flappy", "example": ".flappy", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/flappy.js", metadata, m, extra)
handler.help = ["rimuru-game-flappy"]
handler.command = ["rimuru-game-flappy", "rimuru-flappy", "rimuru-flappybird"]
handler.tags = ["game"]
handler.description = "Game webview Flappy Bird interaktif"
handler.importSource = "rimuru"
handler.importConfig = {"name": "flappy", "alias": ["flappybird"], "category": "game", "description": "Game webview Flappy Bird interaktif", "usage": ".flappy", "example": ".flappy", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-flappy": "flappy", "rimuru-flappy": "flappy", "rimuru-flappybird": "flappybird"}
export default handler
