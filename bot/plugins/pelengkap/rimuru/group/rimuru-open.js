/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/open.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "open", "category": "group", "aliasMap": {"rimuru-group-open": "open", "rimuru-buka": "buka", "rimuru-opengroup": "opengroup", "rimuru-bukagroup": "bukagroup", "opengroup": "opengroup", "bukagroup": "bukagroup"}, "description": "Membuka grup agar semua member bisa chat", "usage": ".open", "example": ".open", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/open.js", metadata, m, extra)
handler.help = ["rimuru-group-open"]
handler.command = ["rimuru-group-open", "rimuru-buka", "rimuru-opengroup", "rimuru-bukagroup", "opengroup", "bukagroup"]
handler.tags = ["group"]
handler.description = "Membuka grup agar semua member bisa chat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "open", "alias": ["buka", "opengroup", "bukagroup"], "category": "group", "description": "Membuka grup agar semua member bisa chat", "usage": ".open", "example": ".open", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-open": "open", "rimuru-buka": "buka", "rimuru-opengroup": "opengroup", "rimuru-bukagroup": "bukagroup", "opengroup": "opengroup", "bukagroup": "bukagroup"}
export default handler
