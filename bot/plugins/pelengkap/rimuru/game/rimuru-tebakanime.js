/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/tebakanime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tebakanime", "category": "game", "aliasMap": {"rimuru-game-tebakanime": "tebakanime", "rimuru-tebakanime": "tebakanime", "rimuru-tebaknime": "tebaknime", "rimuru-guessanime": "guessanime", "tebakanime": "tebakanime", "tebaknime": "tebaknime", "guessanime": "guessanime"}, "description": "Tebak anime dari deskripsi (dapat limit)", "usage": ".tebakanime", "example": ".tebakanime", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/tebakanime.js", metadata, m, extra)
handler.help = ["rimuru-game-tebakanime"]
handler.command = ["rimuru-game-tebakanime", "rimuru-tebakanime", "rimuru-tebaknime", "rimuru-guessanime", "tebakanime", "tebaknime", "guessanime"]
handler.tags = ["game"]
handler.description = "Tebak anime dari deskripsi (dapat limit)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tebakanime", "alias": ["tebaknime", "guessanime"], "category": "game", "description": "Tebak anime dari deskripsi (dapat limit)", "usage": ".tebakanime", "example": ".tebakanime", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-tebakanime": "tebakanime", "rimuru-tebakanime": "tebakanime", "rimuru-tebaknime": "tebaknime", "rimuru-guessanime": "guessanime", "tebakanime": "tebakanime", "tebaknime": "tebaknime", "guessanime": "guessanime"}
export default handler
