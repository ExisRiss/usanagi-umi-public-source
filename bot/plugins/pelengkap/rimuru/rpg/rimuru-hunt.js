/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/hunt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hunt", "category": "rpg", "aliasMap": {"rimuru-rpg-hunt": "hunt", "rimuru-hunt": "hunt", "rimuru-hunting": "hunting", "hunting": "hunting"}, "description": "Berburu hewan untuk mendapatkan daging dan kulit", "usage": ".hunt", "example": ".hunt", "cooldown": 90, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/hunt.js", metadata, m, extra)
handler.help = ["rimuru-rpg-hunt"]
handler.command = ["rimuru-rpg-hunt", "rimuru-hunt", "rimuru-hunting", "hunting"]
handler.tags = ["rpg"]
handler.description = "Berburu hewan untuk mendapatkan daging dan kulit"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hunt", "alias": ["berburu", "hunting"], "category": "rpg", "description": "Berburu hewan untuk mendapatkan daging dan kulit", "usage": ".hunt", "example": ".hunt", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 90, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-hunt": "hunt", "rimuru-hunt": "hunt", "rimuru-hunting": "hunting", "hunting": "hunting"}
export default handler
