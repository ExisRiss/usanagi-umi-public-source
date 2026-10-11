/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/createakunyt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "createakun", "category": "rpg", "aliasMap": {"rimuru-rpg-createakun": "createakun", "rimuru-createakun": "createakun", "createakun": "createakun"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/createakunyt.js", metadata, m, extra)
handler.help = ["rimuru-rpg-createakun"]
handler.command = ["rimuru-rpg-createakun", "rimuru-createakun", "createakun"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "createakun", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-createakun": "createakun", "rimuru-createakun": "createakun", "createakun": "createakun"}
export default handler
