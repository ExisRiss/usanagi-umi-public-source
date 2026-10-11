/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/dice.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dice", "category": "rpg", "aliasMap": {"rimuru-rpg-dice": "dice", "rimuru-dice": "dice", "rimuru-dadu": "dadu", "rimuru-roll": "roll"}, "description": "Lempar dadu untuk gambling", "usage": ".dice <1-6> <bet>", "example": ".dice 6 5000", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/dice.js", metadata, m, extra)
handler.help = ["rimuru-rpg-dice <1-6> <bet>"]
handler.command = ["rimuru-rpg-dice", "rimuru-dice", "rimuru-dadu", "rimuru-roll"]
handler.tags = ["rpg"]
handler.description = "Lempar dadu untuk gambling"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dice", "alias": ["dadu", "roll"], "category": "rpg", "description": "Lempar dadu untuk gambling", "usage": ".dice <1-6> <bet>", "example": ".dice 6 5000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-dice": "dice", "rimuru-dice": "dice", "rimuru-dadu": "dadu", "rimuru-roll": "roll"}
export default handler
