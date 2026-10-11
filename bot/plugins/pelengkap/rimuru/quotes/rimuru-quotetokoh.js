/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/quotes/quotetokoh.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quotetokoh", "category": "quotes", "aliasMap": {"rimuru-quotes-quotetokoh": "quotetokoh", "rimuru-quotetokoh": "quotetokoh", "rimuru-katatokoh": "katatokoh", "rimuru-quotes": "quotes", "rimuru-quotestokoh": "quotestokoh", "rimuru-katabijak": "katabijak", "quotetokoh": "quotetokoh", "katatokoh": "katatokoh", "quotes": "quotes", "quotestokoh": "quotestokoh", "katabijak": "katabijak"}, "description": "Mendapatkan kata-kata bijak / quote acak dari tokoh terkenal", "usage": ".quotetokoh", "example": ".quotetokoh", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/quotes/quotetokoh.js", metadata, m, extra)
handler.help = ["rimuru-quotes-quotetokoh"]
handler.command = ["rimuru-quotes-quotetokoh", "rimuru-quotetokoh", "rimuru-katatokoh", "rimuru-quotes", "rimuru-quotestokoh", "rimuru-katabijak", "quotetokoh", "katatokoh", "quotes", "quotestokoh", "katabijak"]
handler.tags = ["quotes"]
handler.description = "Mendapatkan kata-kata bijak / quote acak dari tokoh terkenal"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quotetokoh", "alias": ["katatokoh", "quotes", "quotestokoh", "katabijak"], "category": "quotes", "description": "Mendapatkan kata-kata bijak / quote acak dari tokoh terkenal", "usage": ".quotetokoh", "example": ".quotetokoh", "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-quotes-quotetokoh": "quotetokoh", "rimuru-quotetokoh": "quotetokoh", "rimuru-katatokoh": "katatokoh", "rimuru-quotes": "quotes", "rimuru-quotestokoh": "quotestokoh", "rimuru-katabijak": "katabijak", "quotetokoh": "quotetokoh", "katatokoh": "katatokoh", "quotes": "quotes", "quotestokoh": "quotestokoh", "katabijak": "katabijak"}
export default handler
