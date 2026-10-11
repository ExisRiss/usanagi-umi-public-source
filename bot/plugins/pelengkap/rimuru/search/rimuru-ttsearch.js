/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/ttsearch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ttsearch", "category": "search", "aliasMap": {"rimuru-search-ttsearch": "ttsearch", "rimuru-ttsearch": "ttsearch", "rimuru-tiktoksearch": "tiktoksearch", "rimuru-tts": "tts", "rimuru-searchtiktok": "searchtiktok", "searchtiktok": "searchtiktok"}, "description": "Cari video TikTok", "usage": ".ttsearch <query>", "example": ".ttsearch jj epep", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/ttsearch.js", metadata, m, extra)
handler.help = ["rimuru-search-ttsearch <query>"]
handler.command = ["rimuru-search-ttsearch", "rimuru-ttsearch", "rimuru-tiktoksearch", "rimuru-tts", "rimuru-searchtiktok", "searchtiktok"]
handler.tags = ["search"]
handler.description = "Cari video TikTok"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ttsearch", "alias": ["tiktoksearch", "tts", "searchtiktok"], "category": "search", "description": "Cari video TikTok", "usage": ".ttsearch <query>", "example": ".ttsearch jj epep", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-ttsearch": "ttsearch", "rimuru-ttsearch": "ttsearch", "rimuru-tiktoksearch": "tiktoksearch", "rimuru-tts": "tts", "rimuru-searchtiktok": "searchtiktok", "searchtiktok": "searchtiktok"}
export default handler
