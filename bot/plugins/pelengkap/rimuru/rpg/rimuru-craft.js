/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/craft.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "craft", "category": "rpg", "aliasMap": {"rimuru-rpg-craft": "craft", "rimuru-craft": "craft", "rimuru-buat": "buat", "rimuru-create": "create"}, "description": "Craft item dari materials", "usage": ".craft <item>", "example": ".craft sword", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/craft.js", metadata, m, extra)
handler.help = ["rimuru-rpg-craft <item>"]
handler.command = ["rimuru-rpg-craft", "rimuru-craft", "rimuru-buat", "rimuru-create"]
handler.tags = ["rpg"]
handler.description = "Craft item dari materials"
handler.importSource = "rimuru"
handler.importConfig = {"name": "craft", "alias": ["buat", "create"], "category": "rpg", "description": "Craft item dari materials", "usage": ".craft <item>", "example": ".craft sword", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-craft": "craft", "rimuru-craft": "craft", "rimuru-buat": "buat", "rimuru-create": "create"}
export default handler
