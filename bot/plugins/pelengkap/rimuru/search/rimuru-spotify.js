/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/spotify.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spotify", "category": "search", "aliasMap": {"rimuru-search-spotify": "spotify", "rimuru-spotify": "spotify", "rimuru-spotifysearch": "spotifysearch", "rimuru-spsearch": "spsearch", "spsearch": "spsearch"}, "description": "Mencari daftar lagu di Spotify berdasarkan judul atau artis", "usage": ".spotify <query>", "example": ".spotify neffex grateful", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/spotify.js", metadata, m, extra)
handler.help = ["rimuru-search-spotify <query>"]
handler.command = ["rimuru-search-spotify", "rimuru-spotify", "rimuru-spotifysearch", "rimuru-spsearch", "spsearch"]
handler.tags = ["search"]
handler.description = "Mencari daftar lagu di Spotify berdasarkan judul atau artis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spotify", "alias": ["spotifysearch", "spsearch"], "category": "search", "description": "Mencari daftar lagu di Spotify berdasarkan judul atau artis", "usage": ".spotify <query>", "example": ".spotify neffex grateful", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-spotify": "spotify", "rimuru-spotify": "spotify", "rimuru-spotifysearch": "spotifysearch", "rimuru-spsearch": "spsearch", "spsearch": "spsearch"}
export default handler
