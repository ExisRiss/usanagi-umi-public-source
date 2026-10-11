/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/daily.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "daily", "category": "rpg", "aliasMap": {"rimuru-rpg-daily": "daily"}, "description": "Klaim hadiah harian", "usage": ".daily", "example": ".daily", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/daily.js", metadata, m, extra)
handler.help = ["rimuru-rpg-daily"]
handler.command = ["rimuru-rpg-daily"]
handler.tags = ["rpg"]
handler.description = "Klaim hadiah harian"
handler.importSource = "rimuru"
handler.importConfig = {"name": "daily", "alias": ["harian", "claim"], "category": "rpg", "description": "Klaim hadiah harian", "usage": ".daily", "example": ".daily", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-daily": "daily"}
export default handler
