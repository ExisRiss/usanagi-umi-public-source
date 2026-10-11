/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/lyrics.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lirik", "category": "search", "aliasMap": {"rimuru-search-lirik": "lirik", "rimuru-lirik": "lirik", "rimuru-lyric": "lyric", "rimuru-lyrics": "lyrics", "rimuru-liriklagu": "liriklagu", "lyric": "lyric", "liriklagu": "liriklagu"}, "description": "Cari lirik lagu", "usage": ".lirik <query>", "example": ".lirik sempurna", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/lyrics.js", metadata, m, extra)
handler.help = ["rimuru-search-lirik <query>"]
handler.command = ["rimuru-search-lirik", "rimuru-lirik", "rimuru-lyric", "rimuru-lyrics", "rimuru-liriklagu", "lyric", "liriklagu"]
handler.tags = ["search"]
handler.description = "Cari lirik lagu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lirik", "alias": ["lyric", "lyrics", "liriklagu"], "category": "search", "description": "Cari lirik lagu", "usage": ".lirik <query>", "example": ".lirik sempurna", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-lirik": "lirik", "rimuru-lirik": "lirik", "rimuru-lyric": "lyric", "rimuru-lyrics": "lyrics", "rimuru-liriklagu": "liriklagu", "lyric": "lyric", "liriklagu": "liriklagu"}
export default handler
