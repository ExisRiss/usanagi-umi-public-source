/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/ayat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ayat", "category": "religi", "aliasMap": {"rimuru-religi-ayat": "ayat", "rimuru-ayat": "ayat", "rimuru-ayatpilihan": "ayatpilihan", "rimuru-suratpilihan": "suratpilihan", "ayat": "ayat", "ayatpilihan": "ayatpilihan", "suratpilihan": "suratpilihan"}, "description": "Kumpulan Ayat Pilihan Al-Quran (Arsy, Kursi, Ruqyah, dll)", "usage": ".ayat <nama ayat>", "example": ".ayat kursi", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/ayat.js", metadata, m, extra)
handler.help = ["rimuru-religi-ayat <nama ayat>"]
handler.command = ["rimuru-religi-ayat", "rimuru-ayat", "rimuru-ayatpilihan", "rimuru-suratpilihan", "ayat", "ayatpilihan", "suratpilihan"]
handler.tags = ["religi"]
handler.description = "Kumpulan Ayat Pilihan Al-Quran (Arsy, Kursi, Ruqyah, dll)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ayat", "alias": ["ayatpilihan", "suratpilihan"], "category": "religi", "description": "Kumpulan Ayat Pilihan Al-Quran (Arsy, Kursi, Ruqyah, dll)", "usage": ".ayat <nama ayat>", "example": ".ayat kursi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-ayat": "ayat", "rimuru-ayat": "ayat", "rimuru-ayatpilihan": "ayatpilihan", "rimuru-suratpilihan": "suratpilihan", "ayat": "ayat", "ayatpilihan": "ayatpilihan", "suratpilihan": "suratpilihan"}
export default handler
