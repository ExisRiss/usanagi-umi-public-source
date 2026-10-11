/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/selfthisgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "selfthisgc", "category": "group", "aliasMap": {"rimuru-group-selfthisgc": "selfthisgc", "rimuru-selfthisgc": "selfthisgc", "rimuru-selfgc": "selfgc", "rimuru-selfgroup": "selfgroup", "rimuru-selfthisgroup": "selfthisgroup", "selfthisgc": "selfthisgc", "selfgc": "selfgc", "selfgroup": "selfgroup", "selfthisgroup": "selfthisgroup"}, "description": "Aktifkan mode self hanya di grup ini", "usage": ".selfthisgc", "example": ".selfthisgc", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/selfthisgc.js", metadata, m, extra)
handler.help = ["rimuru-group-selfthisgc"]
handler.command = ["rimuru-group-selfthisgc", "rimuru-selfthisgc", "rimuru-selfgc", "rimuru-selfgroup", "rimuru-selfthisgroup", "selfthisgc", "selfgc", "selfgroup", "selfthisgroup"]
handler.tags = ["group"]
handler.description = "Aktifkan mode self hanya di grup ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "selfthisgc", "alias": ["selfgc", "selfgroup", "selfthisgroup"], "category": "group", "description": "Aktifkan mode self hanya di grup ini", "usage": ".selfthisgc", "example": ".selfthisgc", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-selfthisgc": "selfthisgc", "rimuru-selfthisgc": "selfthisgc", "rimuru-selfgc": "selfgc", "rimuru-selfgroup": "selfgroup", "rimuru-selfthisgroup": "selfthisgroup", "selfthisgc": "selfthisgc", "selfgc": "selfgc", "selfgroup": "selfgroup", "selfthisgroup": "selfthisgroup"}
export default handler
