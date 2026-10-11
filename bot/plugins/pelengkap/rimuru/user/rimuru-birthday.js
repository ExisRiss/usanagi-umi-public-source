/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/birthday.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "birthday", "category": "user", "aliasMap": {"rimuru-user-birthday": "birthday", "rimuru-birthday": "birthday", "rimuru-bday": "bday", "rimuru-ultah": "ultah", "rimuru-ulangtahun": "ulangtahun", "ulangtahun": "ulangtahun"}, "description": "Lihat ulang tahun member", "usage": ".birthday [@user]", "example": ".birthday @user", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/birthday.js", metadata, m, extra)
handler.help = ["rimuru-user-birthday [@user]"]
handler.command = ["rimuru-user-birthday", "rimuru-birthday", "rimuru-bday", "rimuru-ultah", "rimuru-ulangtahun", "ulangtahun"]
handler.tags = ["user"]
handler.description = "Lihat ulang tahun member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "birthday", "alias": ["bday", "ultah", "ulangtahun"], "category": "user", "description": "Lihat ulang tahun member", "usage": ".birthday [@user]", "example": ".birthday @user", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-birthday": "birthday", "rimuru-birthday": "birthday", "rimuru-bday": "bday", "rimuru-ultah": "ultah", "rimuru-ulangtahun": "ulangtahun", "ulangtahun": "ulangtahun"}
export default handler
