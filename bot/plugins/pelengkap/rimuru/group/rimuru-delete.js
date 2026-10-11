/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/delete.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delete", "category": "group", "aliasMap": {"rimuru-group-delete": "delete", "rimuru-delete": "delete", "rimuru-del": "del", "rimuru-hapus": "hapus", "rimuru-d": "d"}, "description": "Hapus pesan dengan reply", "usage": ".delete (reply pesan)", "example": ".delete", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/delete.js", metadata, m, extra)
handler.help = ["rimuru-group-delete (reply pesan)"]
handler.command = ["rimuru-group-delete", "rimuru-delete", "rimuru-del", "rimuru-hapus", "rimuru-d"]
handler.tags = ["group"]
handler.description = "Hapus pesan dengan reply"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delete", "alias": ["del", "hapus", "d"], "category": "group", "description": "Hapus pesan dengan reply", "usage": ".delete (reply pesan)", "example": ".delete", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-delete": "delete", "rimuru-delete": "delete", "rimuru-del": "del", "rimuru-hapus": "hapus", "rimuru-d": "d"}
export default handler
