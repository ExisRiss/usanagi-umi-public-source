/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/tiktokfoto.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tiktokfoto", "category": "search", "aliasMap": {"rimuru-search-tiktokfoto": "tiktokfoto", "rimuru-tiktokfoto": "tiktokfoto", "rimuru-ttfoto": "ttfoto", "rimuru-ttphotosearch": "ttphotosearch", "rimuru-searchtiktokfoto": "searchtiktokfoto", "tiktokfoto": "tiktokfoto", "ttfoto": "ttfoto", "ttphotosearch": "ttphotosearch", "searchtiktokfoto": "searchtiktokfoto"}, "description": "Cari foto TikTok dan kirim album gambar", "usage": ".tiktokfoto <query>", "example": ".tiktokfoto cosplay", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/tiktokfoto.js", metadata, m, extra)
handler.help = ["rimuru-search-tiktokfoto <query>"]
handler.command = ["rimuru-search-tiktokfoto", "rimuru-tiktokfoto", "rimuru-ttfoto", "rimuru-ttphotosearch", "rimuru-searchtiktokfoto", "tiktokfoto", "ttfoto", "ttphotosearch", "searchtiktokfoto"]
handler.tags = ["search"]
handler.description = "Cari foto TikTok dan kirim album gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tiktokfoto", "alias": ["ttfoto", "ttphotosearch", "searchtiktokfoto"], "category": "search", "description": "Cari foto TikTok dan kirim album gambar", "usage": ".tiktokfoto <query>", "example": ".tiktokfoto cosplay", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-tiktokfoto": "tiktokfoto", "rimuru-tiktokfoto": "tiktokfoto", "rimuru-ttfoto": "ttfoto", "rimuru-ttphotosearch": "ttphotosearch", "rimuru-searchtiktokfoto": "searchtiktokfoto", "tiktokfoto": "tiktokfoto", "ttfoto": "ttfoto", "ttphotosearch": "ttphotosearch", "searchtiktokfoto": "searchtiktokfoto"}
export default handler
