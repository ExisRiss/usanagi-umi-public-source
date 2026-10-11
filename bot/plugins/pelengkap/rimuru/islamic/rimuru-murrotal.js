/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/murrotal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "murrotal", "category": "islamic", "aliasMap": {"rimuru-islamic-murrotal": "murrotal", "rimuru-murrotal": "murrotal", "rimuru-quraudio": "quraudio", "murrotal": "murrotal", "murottal": "murottal", "audioquran": "audioquran", "quraudio": "quraudio"}, "description": "Dengarkan audio murottal Al-Quran berdasarkan surah", "usage": ".murrotal <nama surah>", "example": ".murrotal al fatihah", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/murrotal.js", metadata, m, extra)
handler.help = ["rimuru-islamic-murrotal <nama surah>"]
handler.command = ["rimuru-islamic-murrotal", "rimuru-murrotal", "rimuru-quraudio", "murrotal", "murottal", "audioquran", "quraudio"]
handler.tags = ["islamic"]
handler.description = "Dengarkan audio murottal Al-Quran berdasarkan surah"
handler.importSource = "rimuru"
handler.importConfig = {"name": "murrotal", "alias": ["murottal", "audioquran", "quraudio"], "category": "islamic", "description": "Dengarkan audio murottal Al-Quran berdasarkan surah", "usage": ".murrotal <nama surah>", "example": ".murrotal al fatihah", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-islamic-murrotal": "murrotal", "rimuru-murrotal": "murrotal", "rimuru-quraudio": "quraudio", "murrotal": "murrotal", "murottal": "murottal", "audioquran": "audioquran", "quraudio": "quraudio"}
export default handler
