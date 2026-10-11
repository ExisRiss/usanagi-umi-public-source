/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addjpg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addjpg", "category": "owner", "aliasMap": {"rimuru-owner-addjpg": "addjpg", "rimuru-addjpg": "addjpg", "rimuru-addimage": "addimage", "rimuru-tambahjpg": "tambahjpg", "rimuru-setjpg": "setjpg", "addjpg": "addjpg", "addimage": "addimage", "tambahjpg": "tambahjpg", "setjpg": "setjpg"}, "description": "Tambah gambar baru ke folder assets/images", "usage": ".addjpg <nama_file.jpg> (reply gambar)", "example": ".addjpg zerotwo.jpg", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addjpg.js", metadata, m, extra)
handler.help = ["rimuru-owner-addjpg <nama_file.jpg> (reply gambar)"]
handler.command = ["rimuru-owner-addjpg", "rimuru-addjpg", "rimuru-addimage", "rimuru-tambahjpg", "rimuru-setjpg", "addjpg", "addimage", "tambahjpg", "setjpg"]
handler.tags = ["owner"]
handler.description = "Tambah gambar baru ke folder assets/images"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addjpg", "alias": ["addimage", "tambahjpg", "setjpg"], "category": "owner", "description": "Tambah gambar baru ke folder assets/images", "usage": ".addjpg <nama_file.jpg> (reply gambar)", "example": ".addjpg zerotwo.jpg", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addjpg": "addjpg", "rimuru-addjpg": "addjpg", "rimuru-addimage": "addimage", "rimuru-tambahjpg": "tambahjpg", "rimuru-setjpg": "setjpg", "addjpg": "addjpg", "addimage": "addimage", "tambahjpg": "tambahjpg", "setjpg": "setjpg"}
export default handler
