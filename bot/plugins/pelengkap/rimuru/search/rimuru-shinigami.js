/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/shinigami.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "shinigami", "category": "search", "aliasMap": {"rimuru-search-shinigami": "shinigami", "rimuru-shini": "shini", "rimuru-shinigamisearch": "shinigamisearch", "shini": "shini", "shinigamisearch": "shinigamisearch"}, "description": "Mencari manga/manhwa di Shinigami", "usage": ".shinigami <judul/genre>", "example": ".shinigami solo leveling", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/shinigami.js", metadata, m, extra)
handler.help = ["rimuru-search-shinigami <judul/genre>"]
handler.command = ["rimuru-search-shinigami", "rimuru-shini", "rimuru-shinigamisearch", "shini", "shinigamisearch"]
handler.tags = ["search"]
handler.description = "Mencari manga/manhwa di Shinigami"
handler.importSource = "rimuru"
handler.importConfig = {"name": "shinigami", "alias": ["shini", "shinigamisearch"], "category": "search", "description": "Mencari manga/manhwa di Shinigami", "usage": ".shinigami <judul/genre>", "example": ".shinigami solo leveling", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-shinigami": "shinigami", "rimuru-shini": "shini", "rimuru-shinigamisearch": "shinigamisearch", "shini": "shini", "shinigamisearch": "shinigamisearch"}
export default handler
