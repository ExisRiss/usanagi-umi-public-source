/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/hijrah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hijriyah", "category": "islamic", "aliasMap": {"rimuru-islamic-hijriyah": "hijriyah", "rimuru-hijriyah": "hijriyah", "rimuru-hijri": "hijri", "rimuru-tahunislam": "tahunislam", "hijriyah": "hijriyah", "hijri": "hijri", "tahunislam": "tahunislam"}, "description": "Menampilkan tahun hijriah saat ini", "usage": ".hijriyah", "example": ".hijriyah", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/hijrah.js", metadata, m, extra)
handler.help = ["rimuru-islamic-hijriyah"]
handler.command = ["rimuru-islamic-hijriyah", "rimuru-hijriyah", "rimuru-hijri", "rimuru-tahunislam", "hijriyah", "hijri", "tahunislam"]
handler.tags = ["islamic"]
handler.description = "Menampilkan tahun hijriah saat ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hijriyah", "alias": ["hijri", "tahunislam"], "category": "islamic", "description": "Menampilkan tahun hijriah saat ini", "usage": ".hijriyah", "example": ".hijriyah", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-islamic-hijriyah": "hijriyah", "rimuru-hijriyah": "hijriyah", "rimuru-hijri": "hijri", "rimuru-tahunislam": "tahunislam", "hijriyah": "hijriyah", "hijri": "hijri", "tahunislam": "tahunislam"}
export default handler
