/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/lottery.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lottery", "category": "rpg", "aliasMap": {"rimuru-rpg-lottery": "lottery", "rimuru-lottery": "lottery", "rimuru-undian": "undian"}, "description": "Gacha/lottery untuk hadiah random", "usage": ".lottery <1/10>", "example": ".lottery 10", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/lottery.js", metadata, m, extra)
handler.help = ["rimuru-rpg-lottery <1/10>"]
handler.command = ["rimuru-rpg-lottery", "rimuru-lottery", "rimuru-undian"]
handler.tags = ["rpg"]
handler.description = "Gacha/lottery untuk hadiah random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lottery", "alias": ["gacha", "spin", "undian"], "category": "rpg", "description": "Gacha/lottery untuk hadiah random", "usage": ".lottery <1/10>", "example": ".lottery 10", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-lottery": "lottery", "rimuru-lottery": "lottery", "rimuru-undian": "undian"}
export default handler
