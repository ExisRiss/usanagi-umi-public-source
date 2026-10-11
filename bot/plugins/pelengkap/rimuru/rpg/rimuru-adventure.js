/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/adventure.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "adventure", "category": "rpg", "aliasMap": {"rimuru-rpg-adventure": "adventure", "rimuru-adventure": "adventure", "rimuru-adv": "adv", "rimuru-petualangan": "petualangan"}, "description": "Berpetualang untuk mendapat Exp dan hadiah", "usage": ".adventure", "example": ".adventure", "cooldown": 120, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/adventure.js", metadata, m, extra)
handler.help = ["rimuru-rpg-adventure"]
handler.command = ["rimuru-rpg-adventure", "rimuru-adventure", "rimuru-adv", "rimuru-petualangan"]
handler.tags = ["rpg"]
handler.description = "Berpetualang untuk mendapat Exp dan hadiah"
handler.importSource = "rimuru"
handler.importConfig = {"name": "adventure", "alias": ["adv", "petualangan"], "category": "rpg", "description": "Berpetualang untuk mendapat Exp dan hadiah", "usage": ".adventure", "example": ".adventure", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-adventure": "adventure", "rimuru-adventure": "adventure", "rimuru-adv": "adv", "rimuru-petualangan": "petualangan"}
export default handler
