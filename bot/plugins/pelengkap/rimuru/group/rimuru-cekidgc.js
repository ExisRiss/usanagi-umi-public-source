/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/cekidgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekidgc", "category": "group", "aliasMap": {"rimuru-group-cekidgc": "cekidgc", "rimuru-cekidgc": "cekidgc", "rimuru-idgc": "idgc", "rimuru-idgrup": "idgrup", "rimuru-groupid": "groupid", "rimuru-infogc": "infogc", "idgrup": "idgrup", "groupid": "groupid", "infogc": "infogc"}, "description": "Cek ID dan info lengkap grup", "usage": ".cekidgc [link grup]", "example": ".cekidgc https://chat.whatsapp.com/xxxxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/cekidgc.js", metadata, m, extra)
handler.help = ["rimuru-group-cekidgc [link grup]"]
handler.command = ["rimuru-group-cekidgc", "rimuru-cekidgc", "rimuru-idgc", "rimuru-idgrup", "rimuru-groupid", "rimuru-infogc", "idgrup", "groupid", "infogc"]
handler.tags = ["group"]
handler.description = "Cek ID dan info lengkap grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekidgc", "alias": ["idgc", "idgrup", "groupid", "infogc", "groupinfo"], "category": "group", "description": "Cek ID dan info lengkap grup", "usage": ".cekidgc [link grup]", "example": ".cekidgc https://chat.whatsapp.com/xxxxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "isAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-cekidgc": "cekidgc", "rimuru-cekidgc": "cekidgc", "rimuru-idgc": "idgc", "rimuru-idgrup": "idgrup", "rimuru-groupid": "groupid", "rimuru-infogc": "infogc", "idgrup": "idgrup", "groupid": "groupid", "infogc": "infogc"}
export default handler
