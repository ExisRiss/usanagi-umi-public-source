/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/crime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "crime", "category": "rpg", "aliasMap": {"rimuru-rpg-crime": "crime", "rimuru-crime": "crime", "rimuru-curi": "curi", "curi": "curi"}, "description": "Melakukan kejahatan membobol ATM (risiko tinggi)", "usage": ".crime", "example": ".crime", "cooldown": 300, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/crime.js", metadata, m, extra)
handler.help = ["rimuru-rpg-crime"]
handler.command = ["rimuru-rpg-crime", "rimuru-crime", "rimuru-curi", "curi"]
handler.tags = ["rpg"]
handler.description = "Melakukan kejahatan membobol ATM (risiko tinggi)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "crime", "alias": ["curi", "jahat"], "category": "rpg", "description": "Melakukan kejahatan membobol ATM (risiko tinggi)", "usage": ".crime", "example": ".crime", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 300, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-crime": "crime", "rimuru-crime": "crime", "rimuru-curi": "curi", "curi": "curi"}
export default handler
