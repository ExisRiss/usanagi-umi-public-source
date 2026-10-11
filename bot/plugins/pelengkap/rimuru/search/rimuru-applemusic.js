/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/applemusic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "applemusic", "category": "search", "aliasMap": {"rimuru-search-applemusic": "applemusic", "rimuru-amusic": "amusic", "amusic": "amusic"}, "description": "Cari lagu di Apple Music", "usage": ".applemusic <query>", "example": ".applemusic Best Friend", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/applemusic.js", metadata, m, extra)
handler.help = ["rimuru-search-applemusic <query>"]
handler.command = ["rimuru-search-applemusic", "rimuru-amusic", "amusic"]
handler.tags = ["search"]
handler.description = "Cari lagu di Apple Music"
handler.importSource = "rimuru"
handler.importConfig = {"name": "applemusic", "alias": ["amusic", "am"], "category": "search", "description": "Cari lagu di Apple Music", "usage": ".applemusic <query>", "example": ".applemusic Best Friend", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-applemusic": "applemusic", "rimuru-amusic": "amusic", "amusic": "amusic"}
export default handler
