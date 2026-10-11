/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/topanime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "topanime", "category": "anime", "aliasMap": {"rimuru-anime-topanime": "topanime", "rimuru-topanime": "topanime", "rimuru-top-anime": "top-anime", "rimuru-waifutop": "waifutop", "topanime": "topanime", "top-anime": "top-anime", "waifutop": "waifutop"}, "description": "Melihat daftar karakter anime / waifu terpopuler", "usage": ".topanime", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/topanime.js", metadata, m, extra)
handler.help = ["rimuru-anime-topanime"]
handler.command = ["rimuru-anime-topanime", "rimuru-topanime", "rimuru-top-anime", "rimuru-waifutop", "topanime", "top-anime", "waifutop"]
handler.tags = ["anime"]
handler.description = "Melihat daftar karakter anime / waifu terpopuler"
handler.importSource = "rimuru"
handler.importConfig = {"name": "topanime", "alias": ["top-anime", "waifutop"], "category": "anime", "description": "Melihat daftar karakter anime / waifu terpopuler", "usage": ".topanime", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-topanime": "topanime", "rimuru-topanime": "topanime", "rimuru-top-anime": "top-anime", "rimuru-waifutop": "waifutop", "topanime": "topanime", "top-anime": "top-anime", "waifutop": "waifutop"}
export default handler
