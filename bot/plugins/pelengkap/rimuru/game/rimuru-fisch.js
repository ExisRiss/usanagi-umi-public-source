/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/fisch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fisht", "category": "game", "aliasMap": {"rimuru-game-fisht": "fisht", "rimuru-fisht": "fisht", "rimuru-fishit": "fishit", "fisht": "fisht", "fishit": "fishit"}, "description": "Fishit - Fishing Rod Game", "usage": ".fisht <command>", "example": ".fisht help", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/fisch.js", metadata, m, extra)
handler.help = ["rimuru-game-fisht <command>"]
handler.command = ["rimuru-game-fisht", "rimuru-fisht", "rimuru-fishit", "fisht", "fishit"]
handler.tags = ["game"]
handler.description = "Fishit - Fishing Rod Game"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fisht", "alias": ["fishit"], "category": "game", "description": "Fishit - Fishing Rod Game", "usage": ".fisht <command>", "example": ".fisht help", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-fisht": "fisht", "rimuru-fisht": "fisht", "rimuru-fishit": "fishit", "fisht": "fisht", "fishit": "fishit"}
export default handler
