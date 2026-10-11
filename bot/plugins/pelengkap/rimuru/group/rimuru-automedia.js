/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/automedia.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "automedia", "category": "group", "aliasMap": {"rimuru-group-automedia": "automedia", "rimuru-automedia": "automedia", "rimuru-automedi": "automedi", "automedia": "automedia", "automedi": "automedi"}, "description": "Toggle auto media - otomatis jadikan sticker jadi gambar/video", "usage": ".automedia on/off", "example": ".automedia on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/automedia.js", metadata, m, extra)
handler.help = ["rimuru-group-automedia on/off"]
handler.command = ["rimuru-group-automedia", "rimuru-automedia", "rimuru-automedi", "automedia", "automedi"]
handler.tags = ["group"]
handler.description = "Toggle auto media - otomatis jadikan sticker jadi gambar/video"
handler.importSource = "rimuru"
handler.importConfig = {"name": "automedia", "alias": ["automedi", "am"], "category": "group", "description": "Toggle auto media - otomatis jadikan sticker jadi gambar/video", "usage": ".automedia on/off", "example": ".automedia on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-automedia": "automedia", "rimuru-automedia": "automedia", "rimuru-automedi": "automedi", "automedia": "automedia", "automedi": "automedi"}
export default handler
