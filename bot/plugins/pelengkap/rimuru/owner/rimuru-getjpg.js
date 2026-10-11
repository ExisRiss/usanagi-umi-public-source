/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/getjpg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getjpg", "category": "owner", "aliasMap": {"rimuru-owner-getjpg": "getjpg", "rimuru-getjpg": "getjpg", "rimuru-lihatjpg": "lihatjpg", "rimuru-showjpg": "showjpg", "getjpg": "getjpg", "lihatjpg": "lihatjpg", "showjpg": "showjpg"}, "description": "Ambil gambar dari folder assets/images", "usage": ".getjpg <nama_file.jpg>", "example": ".getjpg zerotwo.jpg", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/getjpg.js", metadata, m, extra)
handler.help = ["rimuru-owner-getjpg <nama_file.jpg>"]
handler.command = ["rimuru-owner-getjpg", "rimuru-getjpg", "rimuru-lihatjpg", "rimuru-showjpg", "getjpg", "lihatjpg", "showjpg"]
handler.tags = ["owner"]
handler.description = "Ambil gambar dari folder assets/images"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getjpg", "alias": ["lihatjpg", "showjpg"], "category": "owner", "description": "Ambil gambar dari folder assets/images", "usage": ".getjpg <nama_file.jpg>", "example": ".getjpg zerotwo.jpg", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-getjpg": "getjpg", "rimuru-getjpg": "getjpg", "rimuru-lihatjpg": "lihatjpg", "rimuru-showjpg": "showjpg", "getjpg": "getjpg", "lihatjpg": "lihatjpg", "showjpg": "showjpg"}
export default handler
