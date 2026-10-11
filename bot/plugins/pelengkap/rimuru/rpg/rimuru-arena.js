/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/arena.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "arena", "category": "rpg", "aliasMap": {"rimuru-rpg-arena": "arena", "rimuru-arena": "arena", "rimuru-battle": "battle"}, "description": "Bertarung di arena PvP", "usage": ".arena <@user>", "example": ".arena @user", "cooldown": 180, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/arena.js", metadata, m, extra)
handler.help = ["rimuru-rpg-arena <@user>"]
handler.command = ["rimuru-rpg-arena", "rimuru-arena", "rimuru-battle"]
handler.tags = ["rpg"]
handler.description = "Bertarung di arena PvP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "arena", "alias": ["pvp", "battle", "fight"], "category": "rpg", "description": "Bertarung di arena PvP", "usage": ".arena <@user>", "example": ".arena @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 180, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-arena": "arena", "rimuru-arena": "arena", "rimuru-battle": "battle"}
export default handler
