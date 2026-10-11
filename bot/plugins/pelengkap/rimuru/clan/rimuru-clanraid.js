/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanraid.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanraid", "category": "clan", "aliasMap": {"rimuru-clan-clanraid": "clanraid", "rimuru-clanraid": "clanraid", "rimuru-raid": "raid", "rimuru-clanevent": "clanevent", "clanraid": "clanraid", "raid": "raid", "clanevent": "clanevent"}, "description": "Mulai raid event clan", "usage": ".clanraid", "example": ".clanraid", "cooldown": 3600, "energi": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanraid.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanraid"]
handler.command = ["rimuru-clan-clanraid", "rimuru-clanraid", "rimuru-raid", "rimuru-clanevent", "clanraid", "raid", "clanevent"]
handler.tags = ["clan"]
handler.description = "Mulai raid event clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanraid", "alias": ["raid", "clanevent"], "category": "clan", "description": "Mulai raid event clan", "usage": ".clanraid", "example": ".clanraid", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3600, "energi": 10, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-clan-clanraid": "clanraid", "rimuru-clanraid": "clanraid", "rimuru-raid": "raid", "rimuru-clanevent": "clanevent", "clanraid": "clanraid", "raid": "raid", "clanevent": "clanevent"}
export default handler
