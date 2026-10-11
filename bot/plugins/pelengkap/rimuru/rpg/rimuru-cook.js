/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/cook.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cook", "category": "rpg", "aliasMap": {"rimuru-rpg-cook": "cook", "rimuru-cook": "cook", "rimuru-masak": "masak"}, "description": "Memasak makanan untuk menambah health", "usage": ".cook", "example": ".cook", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/cook.js", metadata, m, extra)
handler.help = ["rimuru-rpg-cook"]
handler.command = ["rimuru-rpg-cook", "rimuru-cook", "rimuru-masak"]
handler.tags = ["rpg"]
handler.description = "Memasak makanan untuk menambah health"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cook", "alias": ["masak"], "category": "rpg", "description": "Memasak makanan untuk menambah health", "usage": ".cook", "example": ".cook", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-cook": "cook", "rimuru-cook": "cook", "rimuru-masak": "masak"}
export default handler
