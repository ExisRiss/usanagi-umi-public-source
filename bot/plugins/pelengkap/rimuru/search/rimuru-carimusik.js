/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/carimusik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "carimusik", "category": "search", "aliasMap": {"rimuru-search-carimusik": "carimusik", "rimuru-carimusik": "carimusik", "rimuru-searchmusik": "searchmusik", "rimuru-musiksearch": "musiksearch", "carimusik": "carimusik", "searchmusik": "searchmusik", "musiksearch": "musiksearch"}, "description": "Cari lagu dan siapkan hasil untuk diunduh", "usage": ".carimusik <judul lagu>", "example": ".carimusik night dancer", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/carimusik.js", metadata, m, extra)
handler.help = ["rimuru-search-carimusik <judul lagu>"]
handler.command = ["rimuru-search-carimusik", "rimuru-carimusik", "rimuru-searchmusik", "rimuru-musiksearch", "carimusik", "searchmusik", "musiksearch"]
handler.tags = ["search"]
handler.description = "Cari lagu dan siapkan hasil untuk diunduh"
handler.importSource = "rimuru"
handler.importConfig = {"name": "carimusik", "alias": ["searchmusik", "musiksearch", "cari lagu"], "category": "search", "description": "Cari lagu dan siapkan hasil untuk diunduh", "usage": ".carimusik <judul lagu>", "example": ".carimusik night dancer", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-carimusik": "carimusik", "rimuru-carimusik": "carimusik", "rimuru-searchmusik": "searchmusik", "rimuru-musiksearch": "musiksearch", "carimusik": "carimusik", "searchmusik": "searchmusik", "musiksearch": "musiksearch"}
export default handler
