/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/waifu_anime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anime-waifu, Waifu-anime", "category": "anime", "aliasMap": {"rimuru-anime-anime-waifu, waifu-anime": "anime-waifu, waifu-anime", "rimuru-randomwaifu": "randomwaifu", "rimuru-waifurandom": "waifurandom", "rimuru-waifupic": "waifupic", "randomwaifu": "randomwaifu", "waifurandom": "waifurandom", "waifupic": "waifupic"}, "description": "Random gambar waifu dari berbagai sumber", "usage": ".waifu", "example": ".waifu", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/waifu_anime.js", metadata, m, extra)
handler.help = ["rimuru-anime-anime-waifu, waifu-anime"]
handler.command = ["rimuru-anime-anime-waifu, waifu-anime", "rimuru-randomwaifu", "rimuru-waifurandom", "rimuru-waifupic", "randomwaifu", "waifurandom", "waifupic"]
handler.tags = ["anime"]
handler.description = "Random gambar waifu dari berbagai sumber"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anime-waifu, Waifu-anime", "alias": ["randomwaifu", "waifurandom", "waifupic"], "category": "anime", "description": "Random gambar waifu dari berbagai sumber", "usage": ".waifu", "example": ".waifu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-anime-waifu, waifu-anime": "anime-waifu, waifu-anime", "rimuru-randomwaifu": "randomwaifu", "rimuru-waifurandom": "waifurandom", "rimuru-waifupic": "waifupic", "randomwaifu": "randomwaifu", "waifurandom": "waifurandom", "waifupic": "waifupic"}
export default handler
