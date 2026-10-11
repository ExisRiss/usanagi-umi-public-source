/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/wwkill.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wwkill", "category": "game", "aliasMap": {"rimuru-game-wwkill": "wwkill", "rimuru-wwkill": "wwkill", "rimuru-wolfkill": "wolfkill", "rimuru-wk": "wk", "wwkill": "wwkill", "wolfkill": "wolfkill", "wk": "wk"}, "description": "Werewolf night action - Kill target", "usage": ".wwkill <nomor>", "example": ".wwkill 2", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/wwkill.js", metadata, m, extra)
handler.help = ["rimuru-game-wwkill <nomor>"]
handler.command = ["rimuru-game-wwkill", "rimuru-wwkill", "rimuru-wolfkill", "rimuru-wk", "wwkill", "wolfkill", "wk"]
handler.tags = ["game"]
handler.description = "Werewolf night action - Kill target"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wwkill", "alias": ["wolfkill", "wk"], "category": "game", "description": "Werewolf night action - Kill target", "usage": ".wwkill <nomor>", "example": ".wwkill 2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-wwkill": "wwkill", "rimuru-wwkill": "wwkill", "rimuru-wolfkill": "wolfkill", "rimuru-wk": "wk", "wwkill": "wwkill", "wolfkill": "wolfkill", "wk": "wk"}
export default handler
