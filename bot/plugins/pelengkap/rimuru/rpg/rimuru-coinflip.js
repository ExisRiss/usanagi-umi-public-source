/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/coinflip.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "coinflip", "category": "rpg", "aliasMap": {"rimuru-rpg-coinflip": "coinflip", "rimuru-coinflip": "coinflip", "rimuru-cf": "cf", "rimuru-flip": "flip", "rimuru-toss": "toss"}, "description": "Gambling coin flip", "usage": ".coinflip <heads/tails> <bet>", "example": ".coinflip heads 5000", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/coinflip.js", metadata, m, extra)
handler.help = ["rimuru-rpg-coinflip <heads/tails> <bet>"]
handler.command = ["rimuru-rpg-coinflip", "rimuru-coinflip", "rimuru-cf", "rimuru-flip", "rimuru-toss"]
handler.tags = ["rpg"]
handler.description = "Gambling coin flip"
handler.importSource = "rimuru"
handler.importConfig = {"name": "coinflip", "alias": ["cf", "flip", "toss"], "category": "rpg", "description": "Gambling coin flip", "usage": ".coinflip <heads/tails> <bet>", "example": ".coinflip heads 5000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-coinflip": "coinflip", "rimuru-coinflip": "coinflip", "rimuru-cf": "cf", "rimuru-flip": "flip", "rimuru-toss": "toss"}
export default handler
