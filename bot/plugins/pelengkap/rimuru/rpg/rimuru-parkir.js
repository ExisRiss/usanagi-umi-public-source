/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/parkir.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "parkir", "category": "rpg", "aliasMap": {"rimuru-rpg-parkir": "parkir", "rimuru-parkir": "parkir", "rimuru-kangparkir": "kangparkir", "rimuru-markir": "markir"}, "description": "Jadi tukang parkir minimarket, waspada satpol PP!", "usage": ".parkir", "example": ".parkir", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/parkir.js", metadata, m, extra)
handler.help = ["rimuru-rpg-parkir"]
handler.command = ["rimuru-rpg-parkir", "rimuru-parkir", "rimuru-kangparkir", "rimuru-markir"]
handler.tags = ["rpg"]
handler.description = "Jadi tukang parkir minimarket, waspada satpol PP!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "parkir", "alias": ["kangparkir", "markir"], "category": "rpg", "description": "Jadi tukang parkir minimarket, waspada satpol PP!", "usage": ".parkir", "example": ".parkir", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-parkir": "parkir", "rimuru-parkir": "parkir", "rimuru-kangparkir": "kangparkir", "rimuru-markir": "markir"}
export default handler
