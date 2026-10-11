/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/anime2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anime2", "category": "search", "aliasMap": {"rimuru-search-anime2": "anime2", "rimuru-anime2": "anime2", "rimuru-animeku2": "animeku2", "rimuru-nime2": "nime2", "rimuru-ani2": "ani2", "anime2": "anime2", "animeku2": "animeku2", "nime2": "nime2", "ani2": "ani2"}, "description": "Cari info anime, streaming, download", "usage": ".anime <subcommand>", "example": ".anime search naruto", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/anime2.js", metadata, m, extra)
handler.help = ["rimuru-search-anime2 <subcommand>"]
handler.command = ["rimuru-search-anime2", "rimuru-anime2", "rimuru-animeku2", "rimuru-nime2", "rimuru-ani2", "anime2", "animeku2", "nime2", "ani2"]
handler.tags = ["search"]
handler.description = "Cari info anime, streaming, download"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anime2", "alias": ["animeku2", "nime2", "ani2"], "category": "search", "description": "Cari info anime, streaming, download", "usage": ".anime <subcommand>", "example": ".anime search naruto", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-anime2": "anime2", "rimuru-anime2": "anime2", "rimuru-animeku2": "animeku2", "rimuru-nime2": "nime2", "rimuru-ani2": "ani2", "anime2": "anime2", "animeku2": "animeku2", "nime2": "nime2", "ani2": "ani2"}
export default handler
