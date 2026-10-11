/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/slot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "slot", "category": "rpg", "aliasMap": {"rimuru-rpg-slot": "slot", "rimuru-slot": "slot", "rimuru-slots": "slots", "rimuru-mesin": "mesin"}, "description": "Main slot machine gambling", "usage": ".slot <bet>", "example": ".slot 5000", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/slot.js", metadata, m, extra)
handler.help = ["rimuru-rpg-slot <bet>"]
handler.command = ["rimuru-rpg-slot", "rimuru-slot", "rimuru-slots", "rimuru-mesin"]
handler.tags = ["rpg"]
handler.description = "Main slot machine gambling"
handler.importSource = "rimuru"
handler.importConfig = {"name": "slot", "alias": ["slots", "mesin"], "category": "rpg", "description": "Main slot machine gambling", "usage": ".slot <bet>", "example": ".slot 5000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-slot": "slot", "rimuru-slot": "slot", "rimuru-slots": "slots", "rimuru-mesin": "mesin"}
export default handler
