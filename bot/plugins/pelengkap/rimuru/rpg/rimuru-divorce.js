/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/divorce.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "divorce", "category": "rpg", "aliasMap": {"rimuru-rpg-divorce": "divorce", "rimuru-divorce": "divorce", "rimuru-pisah": "pisah"}, "description": "Bercerai dari pasangan", "usage": ".divorce", "example": ".divorce", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/divorce.js", metadata, m, extra)
handler.help = ["rimuru-rpg-divorce"]
handler.command = ["rimuru-rpg-divorce", "rimuru-divorce", "rimuru-pisah"]
handler.tags = ["rpg"]
handler.description = "Bercerai dari pasangan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "divorce", "alias": ["cerai", "pisah"], "category": "rpg", "description": "Bercerai dari pasangan", "usage": ".divorce", "example": ".divorce", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-divorce": "divorce", "rimuru-divorce": "divorce", "rimuru-pisah": "pisah"}
export default handler
