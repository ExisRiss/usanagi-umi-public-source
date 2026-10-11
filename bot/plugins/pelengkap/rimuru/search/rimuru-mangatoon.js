/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/mangatoon.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mangatoon", "category": "search", "aliasMap": {"rimuru-search-mangatoon": "mangatoon", "rimuru-mangatoon": "mangatoon", "rimuru-mtoon": "mtoon", "rimuru-mangatoonsearch": "mangatoonsearch", "rimuru-searchmangatoon": "searchmangatoon", "mangatoon": "mangatoon", "mtoon": "mtoon", "mangatoonsearch": "mangatoonsearch", "searchmangatoon": "searchmangatoon"}, "description": "Cari komik di Mangatoon", "usage": ".mangatoon <query>", "example": ".mangatoon love", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/mangatoon.js", metadata, m, extra)
handler.help = ["rimuru-search-mangatoon <query>"]
handler.command = ["rimuru-search-mangatoon", "rimuru-mangatoon", "rimuru-mtoon", "rimuru-mangatoonsearch", "rimuru-searchmangatoon", "mangatoon", "mtoon", "mangatoonsearch", "searchmangatoon"]
handler.tags = ["search"]
handler.description = "Cari komik di Mangatoon"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mangatoon", "alias": ["mtoon", "mangatoonsearch", "searchmangatoon"], "category": "search", "description": "Cari komik di Mangatoon", "usage": ".mangatoon <query>", "example": ".mangatoon love", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-mangatoon": "mangatoon", "rimuru-mangatoon": "mangatoon", "rimuru-mtoon": "mtoon", "rimuru-mangatoonsearch": "mangatoonsearch", "rimuru-searchmangatoon": "searchmangatoon", "mangatoon": "mangatoon", "mtoon": "mtoon", "mangatoonsearch": "mangatoonsearch", "searchmangatoon": "searchmangatoon"}
export default handler
