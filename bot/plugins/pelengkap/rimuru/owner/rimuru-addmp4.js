/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addmp4.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addmp4", "category": "owner", "aliasMap": {"rimuru-owner-addmp4": "addmp4", "rimuru-addmp4": "addmp4", "rimuru-addvideo": "addvideo", "rimuru-tambahmp4": "tambahmp4", "rimuru-setmp4": "setmp4", "rimuru-addvid": "addvid", "addmp4": "addmp4", "addvideo": "addvideo", "tambahmp4": "tambahmp4", "setmp4": "setmp4", "addvid": "addvid"}, "description": "Tambah video baru ke folder assets/video", "usage": ".addmp4 <nama_file.mp4> (reply video)", "example": ".addmp4 opening.mp4", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addmp4.js", metadata, m, extra)
handler.help = ["rimuru-owner-addmp4 <nama_file.mp4> (reply video)"]
handler.command = ["rimuru-owner-addmp4", "rimuru-addmp4", "rimuru-addvideo", "rimuru-tambahmp4", "rimuru-setmp4", "rimuru-addvid", "addmp4", "addvideo", "tambahmp4", "setmp4", "addvid"]
handler.tags = ["owner"]
handler.description = "Tambah video baru ke folder assets/video"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addmp4", "alias": ["addvideo", "tambahmp4", "setmp4", "addvid"], "category": "owner", "description": "Tambah video baru ke folder assets/video", "usage": ".addmp4 <nama_file.mp4> (reply video)", "example": ".addmp4 opening.mp4", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addmp4": "addmp4", "rimuru-addmp4": "addmp4", "rimuru-addvideo": "addvideo", "rimuru-tambahmp4": "tambahmp4", "rimuru-setmp4": "setmp4", "rimuru-addvid": "addvid", "addmp4": "addmp4", "addvideo": "addvideo", "tambahmp4": "tambahmp4", "setmp4": "setmp4", "addvid": "addvid"}
export default handler
