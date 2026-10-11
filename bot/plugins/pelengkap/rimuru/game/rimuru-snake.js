/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/snake.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "snake", "category": "game", "aliasMap": {"rimuru-game-snake": "snake", "rimuru-snake": "snake", "rimuru-ular": "ular", "rimuru-ularrimba": "ularrimba", "rimuru-snakegame": "snakegame"}, "description": "Game Snake inline HTML dengan kontrol sentuh dan keyboard", "usage": ".snake", "example": ".snake", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/snake.js", metadata, m, extra)
handler.help = ["rimuru-game-snake"]
handler.command = ["rimuru-game-snake", "rimuru-snake", "rimuru-ular", "rimuru-ularrimba", "rimuru-snakegame"]
handler.tags = ["game"]
handler.description = "Game Snake inline HTML dengan kontrol sentuh dan keyboard"
handler.importSource = "rimuru"
handler.importConfig = {"name": "snake", "alias": ["ular", "ularrimba", "snakegame"], "category": "game", "description": "Game Snake inline HTML dengan kontrol sentuh dan keyboard", "usage": ".snake", "example": ".snake", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-snake": "snake", "rimuru-snake": "snake", "rimuru-ular": "ular", "rimuru-ularrimba": "ularrimba", "rimuru-snakegame": "snakegame"}
export default handler
