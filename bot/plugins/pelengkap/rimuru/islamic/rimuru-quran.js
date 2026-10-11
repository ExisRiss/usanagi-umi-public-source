/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/quran.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quran", "category": "islamic", "aliasMap": {"rimuru-islamic-quran": "quran", "rimuru-quran": "quran", "rimuru-alquran": "alquran", "rimuru-bacaquran": "bacaquran", "quran": "quran", "surah": "surah", "alquran": "alquran", "bacaquran": "bacaquran"}, "description": "Baca ayat Al-Quran berdasarkan nama surah", "usage": ".quran <nama surah>", "example": ".quran al fatihah", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/quran.js", metadata, m, extra)
handler.help = ["rimuru-islamic-quran <nama surah>"]
handler.command = ["rimuru-islamic-quran", "rimuru-quran", "rimuru-alquran", "rimuru-bacaquran", "quran", "surah", "alquran", "bacaquran"]
handler.tags = ["islamic"]
handler.description = "Baca ayat Al-Quran berdasarkan nama surah"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quran", "alias": ["surah", "alquran", "bacaquran"], "category": "islamic", "description": "Baca ayat Al-Quran berdasarkan nama surah", "usage": ".quran <nama surah>", "example": ".quran al fatihah", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-islamic-quran": "quran", "rimuru-quran": "quran", "rimuru-alquran": "alquran", "rimuru-bacaquran": "bacaquran", "quran": "quran", "surah": "surah", "alquran": "alquran", "bacaquran": "bacaquran"}
export default handler
