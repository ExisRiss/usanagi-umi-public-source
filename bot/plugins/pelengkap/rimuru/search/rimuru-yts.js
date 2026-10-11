/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/yts.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "yts", "category": "search", "aliasMap": {"rimuru-search-yts": "yts", "rimuru-yts": "yts", "rimuru-ytsearch": "ytsearch", "rimuru-youtubesearch": "youtubesearch", "yts": "yts", "ytsearch": "ytsearch", "youtubesearch": "youtubesearch"}, "description": "Mencari video di YouTube berdasarkan kata kunci dan menampilkan detail lengkap beserta thumbnail.", "usage": ".yts <query>", "example": ".yts lagu pop terbaru", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/yts.js", metadata, m, extra)
handler.help = ["rimuru-search-yts <query>"]
handler.command = ["rimuru-search-yts", "rimuru-yts", "rimuru-ytsearch", "rimuru-youtubesearch", "yts", "ytsearch", "youtubesearch"]
handler.tags = ["search"]
handler.description = "Mencari video di YouTube berdasarkan kata kunci dan menampilkan detail lengkap beserta thumbnail."
handler.importSource = "rimuru"
handler.importConfig = {"name": "yts", "alias": ["ytsearch", "youtubesearch"], "category": "search", "description": "Mencari video di YouTube berdasarkan kata kunci dan menampilkan detail lengkap beserta thumbnail.", "usage": ".yts <query>", "example": ".yts lagu pop terbaru", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-yts": "yts", "rimuru-yts": "yts", "rimuru-ytsearch": "ytsearch", "rimuru-youtubesearch": "youtubesearch", "yts": "yts", "ytsearch": "ytsearch", "youtubesearch": "youtubesearch"}
export default handler
