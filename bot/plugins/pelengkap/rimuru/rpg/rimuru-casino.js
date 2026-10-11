/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/casino.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "casino", "category": "rpg", "aliasMap": {"rimuru-rpg-casino": "casino", "rimuru-casino": "casino", "rimuru-judi": "judi", "rimuru-gamble": "gamble"}, "description": "Bermain casino untuk judi", "usage": ".casino <jumlah>", "example": ".casino 10000", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/casino.js", metadata, m, extra)
handler.help = ["rimuru-rpg-casino <jumlah>"]
handler.command = ["rimuru-rpg-casino", "rimuru-casino", "rimuru-judi", "rimuru-gamble"]
handler.tags = ["rpg"]
handler.description = "Bermain casino untuk judi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "casino", "alias": ["judi", "gamble"], "category": "rpg", "description": "Bermain casino untuk judi", "usage": ".casino <jumlah>", "example": ".casino 10000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-casino": "casino", "rimuru-casino": "casino", "rimuru-judi": "judi", "rimuru-gamble": "gamble"}
export default handler
