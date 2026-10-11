/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/migen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "meigen", "category": "search", "aliasMap": {"rimuru-search-meigen": "meigen", "rimuru-meigen": "meigen", "rimuru-meigens": "meigens", "meigen": "meigen", "meigens": "meigens"}, "description": "Cari prompt dari Meigen AI", "usage": ".meigen <query>", "example": ".meigen anime girl", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/migen.js", metadata, m, extra)
handler.help = ["rimuru-search-meigen <query>"]
handler.command = ["rimuru-search-meigen", "rimuru-meigen", "rimuru-meigens", "meigen", "meigens"]
handler.tags = ["search"]
handler.description = "Cari prompt dari Meigen AI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "meigen", "alias": ["meigens"], "category": "search", "description": "Cari prompt dari Meigen AI", "usage": ".meigen <query>", "example": ".meigen anime girl", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-meigen": "meigen", "rimuru-meigen": "meigen", "rimuru-meigens": "meigens", "meigen": "meigen", "meigens": "meigens"}
export default handler
