/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/game.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "game", "category": "group", "aliasMap": {"rimuru-group-game": "game", "rimuru-game": "game", "rimuru-togglegame": "togglegame", "game": "game", "togglegame": "togglegame"}, "description": "Mengaktifkan atau menonaktifkan fitur game di grup", "usage": ".game <on/off>", "example": ".game on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/game.js", metadata, m, extra)
handler.help = ["rimuru-group-game <on/off>"]
handler.command = ["rimuru-group-game", "rimuru-game", "rimuru-togglegame", "game", "togglegame"]
handler.tags = ["group"]
handler.description = "Mengaktifkan atau menonaktifkan fitur game di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "game", "alias": ["togglegame"], "category": "group", "description": "Mengaktifkan atau menonaktifkan fitur game di grup", "usage": ".game <on/off>", "example": ".game on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-game": "game", "rimuru-game": "game", "rimuru-togglegame": "togglegame", "game": "game", "togglegame": "togglegame"}
export default handler
