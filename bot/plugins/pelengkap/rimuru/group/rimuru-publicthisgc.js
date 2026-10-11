/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/publicthisgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "publicthisgc", "category": "group", "aliasMap": {"rimuru-group-publicthisgc": "publicthisgc", "rimuru-publicthisgc": "publicthisgc", "rimuru-publicgc": "publicgc", "rimuru-publicgroup": "publicgroup", "rimuru-publicthisgroup": "publicthisgroup", "publicthisgc": "publicthisgc", "publicgc": "publicgc", "publicgroup": "publicgroup", "publicthisgroup": "publicthisgroup"}, "description": "Aktifkan mode public hanya di grup ini", "usage": ".publicthisgc", "example": ".publicthisgc", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/publicthisgc.js", metadata, m, extra)
handler.help = ["rimuru-group-publicthisgc"]
handler.command = ["rimuru-group-publicthisgc", "rimuru-publicthisgc", "rimuru-publicgc", "rimuru-publicgroup", "rimuru-publicthisgroup", "publicthisgc", "publicgc", "publicgroup", "publicthisgroup"]
handler.tags = ["group"]
handler.description = "Aktifkan mode public hanya di grup ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "publicthisgc", "alias": ["publicgc", "publicgroup", "publicthisgroup"], "category": "group", "description": "Aktifkan mode public hanya di grup ini", "usage": ".publicthisgc", "example": ".publicthisgc", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-publicthisgc": "publicthisgc", "rimuru-publicthisgc": "publicthisgc", "rimuru-publicgc": "publicgc", "rimuru-publicgroup": "publicgroup", "rimuru-publicthisgroup": "publicthisgroup", "publicthisgc": "publicthisgc", "publicgc": "publicgc", "publicgroup": "publicgroup", "publicthisgroup": "publicthisgroup"}
export default handler
