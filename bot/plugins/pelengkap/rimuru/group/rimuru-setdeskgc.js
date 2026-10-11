/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setdeskgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setdeskgc", "category": "group", "aliasMap": {"rimuru-group-setdeskgc": "setdeskgc", "rimuru-setdeskgc": "setdeskgc", "rimuru-setdesc": "setdesc", "rimuru-setdescgc": "setdescgc", "rimuru-setdeskripsi": "setdeskripsi", "rimuru-setdesk": "setdesk", "setdeskgc": "setdeskgc", "setdesc": "setdesc", "setdescgc": "setdescgc", "setdeskripsi": "setdeskripsi", "setdesk": "setdesk"}, "description": "Mengubah deskripsi grup", "usage": ".setdeskgc <deskripsi baru>", "example": ".setdeskgc Grup untuk diskusi", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setdeskgc.js", metadata, m, extra)
handler.help = ["rimuru-group-setdeskgc <deskripsi baru>"]
handler.command = ["rimuru-group-setdeskgc", "rimuru-setdeskgc", "rimuru-setdesc", "rimuru-setdescgc", "rimuru-setdeskripsi", "rimuru-setdesk", "setdeskgc", "setdesc", "setdescgc", "setdeskripsi", "setdesk"]
handler.tags = ["group"]
handler.description = "Mengubah deskripsi grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setdeskgc", "alias": ["setdesc", "setdescgc", "setdeskripsi", "setdesk"], "category": "group", "description": "Mengubah deskripsi grup", "usage": ".setdeskgc <deskripsi baru>", "example": ".setdeskgc Grup untuk diskusi", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-setdeskgc": "setdeskgc", "rimuru-setdeskgc": "setdeskgc", "rimuru-setdesc": "setdesc", "rimuru-setdescgc": "setdescgc", "rimuru-setdeskripsi": "setdeskripsi", "rimuru-setdesk": "setdesk", "setdeskgc": "setdeskgc", "setdesc": "setdesc", "setdescgc": "setdescgc", "setdeskripsi": "setdeskripsi", "setdesk": "setdesk"}
export default handler
