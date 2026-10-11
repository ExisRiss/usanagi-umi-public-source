/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/burik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "burik", "category": "fun", "aliasMap": {"rimuru-fun-burik": "burik", "rimuru-burik": "burik", "rimuru-rusak": "rusak", "rimuru-jelek": "jelek", "burik": "burik", "rusak": "rusak"}, "description": "Membuat foto menjadi burik/rusak", "usage": ".burik (reply foto)", "example": ".burik (reply foto)", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/burik.js", metadata, m, extra)
handler.help = ["rimuru-fun-burik (reply foto)"]
handler.command = ["rimuru-fun-burik", "rimuru-burik", "rimuru-rusak", "rimuru-jelek", "burik", "rusak"]
handler.tags = ["fun"]
handler.description = "Membuat foto menjadi burik/rusak"
handler.importSource = "rimuru"
handler.importConfig = {"name": "burik", "alias": ["rusak", "jelek"], "category": "fun", "description": "Membuat foto menjadi burik/rusak", "usage": ".burik (reply foto)", "example": ".burik (reply foto)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-burik": "burik", "rimuru-burik": "burik", "rimuru-rusak": "rusak", "rimuru-jelek": "jelek", "burik": "burik", "rusak": "rusak"}
export default handler
