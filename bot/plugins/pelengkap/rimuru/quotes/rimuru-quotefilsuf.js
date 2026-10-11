/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/quotes/quotefilsuf.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quotefilsuf", "category": "quotes", "aliasMap": {"rimuru-quotes-quotefilsuf": "quotefilsuf", "rimuru-quotefilsuf": "quotefilsuf", "rimuru-katafilsuf": "katafilsuf", "rimuru-filsuf": "filsuf", "rimuru-quotesfilsuf": "quotesfilsuf", "rimuru-filsafat": "filsafat", "quotefilsuf": "quotefilsuf", "katafilsuf": "katafilsuf", "filsuf": "filsuf", "quotesfilsuf": "quotesfilsuf", "filsafat": "filsafat"}, "description": "Mendapatkan kata-kata bijak / quote acak dari filsuf terkenal", "usage": ".quotefilsuf", "example": ".quotefilsuf", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/quotes/quotefilsuf.js", metadata, m, extra)
handler.help = ["rimuru-quotes-quotefilsuf"]
handler.command = ["rimuru-quotes-quotefilsuf", "rimuru-quotefilsuf", "rimuru-katafilsuf", "rimuru-filsuf", "rimuru-quotesfilsuf", "rimuru-filsafat", "quotefilsuf", "katafilsuf", "filsuf", "quotesfilsuf", "filsafat"]
handler.tags = ["quotes"]
handler.description = "Mendapatkan kata-kata bijak / quote acak dari filsuf terkenal"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quotefilsuf", "alias": ["katafilsuf", "filsuf", "quotesfilsuf", "filsafat"], "category": "quotes", "description": "Mendapatkan kata-kata bijak / quote acak dari filsuf terkenal", "usage": ".quotefilsuf", "example": ".quotefilsuf", "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-quotes-quotefilsuf": "quotefilsuf", "rimuru-quotefilsuf": "quotefilsuf", "rimuru-katafilsuf": "katafilsuf", "rimuru-filsuf": "filsuf", "rimuru-quotesfilsuf": "quotesfilsuf", "rimuru-filsafat": "filsafat", "quotefilsuf": "quotefilsuf", "katafilsuf": "katafilsuf", "filsuf": "filsuf", "quotesfilsuf": "quotesfilsuf", "filsafat": "filsafat"}
export default handler
