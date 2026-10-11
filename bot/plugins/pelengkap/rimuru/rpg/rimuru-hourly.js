/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/hourly.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hourly", "category": "rpg", "aliasMap": {"rimuru-rpg-hourly": "hourly", "rimuru-hourly": "hourly", "rimuru-jam": "jam", "rimuru-perjam": "perjam"}, "description": "Klaim hadiah per jam", "usage": ".hourly", "example": ".hourly", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/hourly.js", metadata, m, extra)
handler.help = ["rimuru-rpg-hourly"]
handler.command = ["rimuru-rpg-hourly", "rimuru-hourly", "rimuru-jam", "rimuru-perjam"]
handler.tags = ["rpg"]
handler.description = "Klaim hadiah per jam"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hourly", "alias": ["jam", "perjam"], "category": "rpg", "description": "Klaim hadiah per jam", "usage": ".hourly", "example": ".hourly", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-hourly": "hourly", "rimuru-hourly": "hourly", "rimuru-jam": "jam", "rimuru-perjam": "perjam"}
export default handler
