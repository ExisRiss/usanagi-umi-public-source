/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ambulk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ambulk", "category": "tools", "aliasMap": {"rimuru-tools-ambulk": "ambulk", "rimuru-ambulk": "ambulk", "rimuru-amremlist": "amremlist", "rimuru-bulkam": "bulkam", "rimuru-ambulkgen": "ambulkgen", "ambulk": "ambulk", "amremlist": "amremlist", "bulkam": "bulkam", "ambulkgen": "ambulkgen"}, "description": "Membuat beberapa akun Alight Motion Premium sekaligus (bulk)", "usage": ".ambulk <jumlah> <prefix>", "example": ".ambulk 3 rimuru", "cooldown": 15, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ambulk.js", metadata, m, extra)
handler.help = ["rimuru-tools-ambulk <jumlah> <prefix>"]
handler.command = ["rimuru-tools-ambulk", "rimuru-ambulk", "rimuru-amremlist", "rimuru-bulkam", "rimuru-ambulkgen", "ambulk", "amremlist", "bulkam", "ambulkgen"]
handler.tags = ["tools"]
handler.description = "Membuat beberapa akun Alight Motion Premium sekaligus (bulk)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ambulk", "alias": ["amremlist", "bulkam", "ambulkgen"], "category": "tools", "description": "Membuat beberapa akun Alight Motion Premium sekaligus (bulk)", "usage": ".ambulk <jumlah> <prefix>", "example": ".ambulk 3 rimuru", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-ambulk": "ambulk", "rimuru-ambulk": "ambulk", "rimuru-amremlist": "amremlist", "rimuru-bulkam": "bulkam", "rimuru-ambulkgen": "ambulkgen", "ambulk": "ambulk", "amremlist": "amremlist", "bulkam": "bulkam", "ambulkgen": "ambulkgen"}
export default handler
