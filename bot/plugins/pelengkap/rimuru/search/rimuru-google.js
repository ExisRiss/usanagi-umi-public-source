/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/google.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "google", "category": "search", "aliasMap": {"rimuru-search-google": "google", "rimuru-google": "google", "rimuru-gsearch": "gsearch", "rimuru-googlenews": "googlenews", "google": "google", "gsearch": "gsearch", "googlenews": "googlenews"}, "description": "Cari berita di Google News", "usage": ".google <query>", "example": ".google gempa hari ini", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/google.js", metadata, m, extra)
handler.help = ["rimuru-search-google <query>"]
handler.command = ["rimuru-search-google", "rimuru-google", "rimuru-gsearch", "rimuru-googlenews", "google", "gsearch", "googlenews"]
handler.tags = ["search"]
handler.description = "Cari berita di Google News"
handler.importSource = "rimuru"
handler.importConfig = {"name": "google", "alias": ["gsearch", "googlenews"], "category": "search", "description": "Cari berita di Google News", "usage": ".google <query>", "example": ".google gempa hari ini", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-google": "google", "rimuru-google": "google", "rimuru-gsearch": "gsearch", "rimuru-googlenews": "googlenews", "google": "google", "gsearch": "gsearch", "googlenews": "googlenews"}
export default handler
