/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/marketplace.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "7eleven", "category": "rpg", "aliasMap": {"rimuru-rpg-7eleven": "7eleven", "rimuru-7eleven": "7eleven", "rimuru-foodshop": "foodshop", "rimuru-marketstall": "marketstall", "rimuru-buyfood": "buyfood", "7eleven": "7eleven", "foodshop": "foodshop", "marketstall": "marketstall", "buyfood": "buyfood"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/marketplace.js", metadata, m, extra)
handler.help = ["rimuru-rpg-7eleven"]
handler.command = ["rimuru-rpg-7eleven", "rimuru-7eleven", "rimuru-foodshop", "rimuru-marketstall", "rimuru-buyfood", "7eleven", "foodshop", "marketstall", "buyfood"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "7eleven", "alias": ["foodshop", "marketstall", "buyfood"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-7eleven": "7eleven", "rimuru-7eleven": "7eleven", "rimuru-foodshop": "foodshop", "rimuru-marketstall": "marketstall", "rimuru-buyfood": "buyfood", "7eleven": "7eleven", "foodshop": "foodshop", "marketstall": "marketstall", "buyfood": "buyfood"}
export default handler
