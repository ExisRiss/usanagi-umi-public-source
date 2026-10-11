/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/religi/audioquran.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "audioquran", "category": "religi", "aliasMap": {"rimuru-religi-audioquran": "audioquran", "rimuru-audio-quran": "audio-quran", "audio-quran": "audio-quran"}, "description": "Cari dan putar audio Al-Quran dari berbagai Qari (mp3quran)", "usage": ".audio-quran [mode] [args]", "example": ".audio-quran audio Sudais 1\n.audio-quran reciters\n.audio-quran suwar", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/religi/audioquran.js", metadata, m, extra)
handler.help = ["rimuru-religi-audioquran [mode] [args]"]
handler.command = ["rimuru-religi-audioquran", "rimuru-audio-quran", "audio-quran"]
handler.tags = ["religi"]
handler.description = "Cari dan putar audio Al-Quran dari berbagai Qari (mp3quran)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "audioquran", "alias": ["audio-quran", "murottal"], "category": "religi", "description": "Cari dan putar audio Al-Quran dari berbagai Qari (mp3quran)", "usage": ".audio-quran [mode] [args]", "example": ".audio-quran audio Sudais 1\n.audio-quran reciters\n.audio-quran suwar", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-religi-audioquran": "audioquran", "rimuru-audio-quran": "audio-quran", "audio-quran": "audio-quran"}
export default handler
