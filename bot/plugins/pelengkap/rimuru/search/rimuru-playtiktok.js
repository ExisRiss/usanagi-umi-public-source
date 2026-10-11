/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/playtiktok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "playtiktok", "category": "search", "aliasMap": {"rimuru-search-playtiktok": "playtiktok", "rimuru-playtiktok": "playtiktok", "rimuru-ttplay": "ttplay", "rimuru-tiktokplay": "tiktokplay", "playtiktok": "playtiktok", "ttplay": "ttplay", "tiktokplay": "tiktokplay"}, "description": "Cari dan kirim satu video TikTok terbaik", "usage": ".playtiktok <query>", "example": ".playtiktok cewe tiktok", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/playtiktok.js", metadata, m, extra)
handler.help = ["rimuru-search-playtiktok <query>"]
handler.command = ["rimuru-search-playtiktok", "rimuru-playtiktok", "rimuru-ttplay", "rimuru-tiktokplay", "playtiktok", "ttplay", "tiktokplay"]
handler.tags = ["search"]
handler.description = "Cari dan kirim satu video TikTok terbaik"
handler.importSource = "rimuru"
handler.importConfig = {"name": "playtiktok", "alias": ["ttplay", "tiktokplay"], "category": "search", "description": "Cari dan kirim satu video TikTok terbaik", "usage": ".playtiktok <query>", "example": ".playtiktok cewe tiktok", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-playtiktok": "playtiktok", "rimuru-playtiktok": "playtiktok", "rimuru-ttplay": "ttplay", "rimuru-tiktokplay": "tiktokplay", "playtiktok": "playtiktok", "ttplay": "ttplay", "tiktokplay": "tiktokplay"}
export default handler
