/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/tetris.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tetris", "category": "game", "aliasMap": {"rimuru-game-tetris": "tetris", "rimuru-tetris": "tetris", "rimuru-tetri": "tetri"}, "description": "Game Tetris inline HTML", "usage": ".tetris", "example": ".tetris", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/tetris.js", metadata, m, extra)
handler.help = ["rimuru-game-tetris"]
handler.command = ["rimuru-game-tetris", "rimuru-tetris", "rimuru-tetri"]
handler.tags = ["game"]
handler.description = "Game Tetris inline HTML"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tetris", "alias": ["tetri"], "category": "game", "description": "Game Tetris inline HTML", "usage": ".tetris", "example": ".tetris", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-tetris": "tetris", "rimuru-tetris": "tetris", "rimuru-tetri": "tetri"}
export default handler
