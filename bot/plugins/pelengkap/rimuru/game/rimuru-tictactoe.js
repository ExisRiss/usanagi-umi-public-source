/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/tictactoe.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tictactoe", "category": "game", "aliasMap": {"rimuru-game-tictactoe": "tictactoe", "rimuru-tictactoe": "tictactoe", "rimuru-ttt": "ttt", "rimuru-xo": "xo", "xo": "xo"}, "description": "Main TicTacToe dengan player lain", "usage": ".tictactoe [room name] atau .ttt", "example": ".tictactoe", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/tictactoe.js", metadata, m, extra)
handler.help = ["rimuru-game-tictactoe [room name] atau .ttt"]
handler.command = ["rimuru-game-tictactoe", "rimuru-tictactoe", "rimuru-ttt", "rimuru-xo", "xo"]
handler.tags = ["game"]
handler.description = "Main TicTacToe dengan player lain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tictactoe", "alias": ["ttt", "xo"], "category": "game", "description": "Main TicTacToe dengan player lain", "usage": ".tictactoe [room name] atau .ttt", "example": ".tictactoe", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-tictactoe": "tictactoe", "rimuru-tictactoe": "tictactoe", "rimuru-ttt": "ttt", "rimuru-xo": "xo", "xo": "xo"}
export default handler
