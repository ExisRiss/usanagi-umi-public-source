/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/treasure.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "treasure", "category": "rpg", "aliasMap": {"rimuru-rpg-treasure": "treasure", "rimuru-treasure": "treasure", "rimuru-chest": "chest", "rimuru-peti": "peti", "rimuru-openbox": "openbox"}, "description": "Buka treasure chest untuk hadiah random", "usage": ".treasure", "example": ".treasure", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/treasure.js", metadata, m, extra)
handler.help = ["rimuru-rpg-treasure"]
handler.command = ["rimuru-rpg-treasure", "rimuru-treasure", "rimuru-chest", "rimuru-peti", "rimuru-openbox"]
handler.tags = ["rpg"]
handler.description = "Buka treasure chest untuk hadiah random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "treasure", "alias": ["chest", "peti", "openbox"], "category": "rpg", "description": "Buka treasure chest untuk hadiah random", "usage": ".treasure", "example": ".treasure", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-treasure": "treasure", "rimuru-treasure": "treasure", "rimuru-chest": "chest", "rimuru-peti": "peti", "rimuru-openbox": "openbox"}
export default handler
