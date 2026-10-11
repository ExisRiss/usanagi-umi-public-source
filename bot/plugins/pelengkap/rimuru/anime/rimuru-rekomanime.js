/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/rekomanime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rekom-anime", "category": "anime", "aliasMap": {"rimuru-anime-rekom-anime": "rekom-anime", "rimuru-rekom-anime": "rekom-anime", "rimuru-anime-rekom": "anime-rekom", "rimuru-rekanime": "rekanime", "rekom-anime": "rekom-anime", "anime-rekom": "anime-rekom", "rekanime": "rekanime"}, "description": "Rekomendasi anime random", "usage": ".rekom-anime", "example": ".rekom-anime", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/rekomanime.js", metadata, m, extra)
handler.help = ["rimuru-anime-rekom-anime"]
handler.command = ["rimuru-anime-rekom-anime", "rimuru-rekom-anime", "rimuru-anime-rekom", "rimuru-rekanime", "rekom-anime", "anime-rekom", "rekanime"]
handler.tags = ["anime"]
handler.description = "Rekomendasi anime random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rekom-anime", "alias": ["anime-rekom", "rekanime"], "category": "anime", "description": "Rekomendasi anime random", "usage": ".rekom-anime", "example": ".rekom-anime", "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-anime-rekom-anime": "rekom-anime", "rimuru-rekom-anime": "rekom-anime", "rimuru-anime-rekom": "anime-rekom", "rimuru-rekanime": "rekanime", "rekom-anime": "rekom-anime", "anime-rekom": "anime-rekom", "rekanime": "rekanime"}
export default handler
