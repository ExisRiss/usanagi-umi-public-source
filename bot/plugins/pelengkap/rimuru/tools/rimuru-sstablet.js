/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/sstablet.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sstablet", "category": "tools", "aliasMap": {"rimuru-tools-sstablet": "sstablet", "rimuru-sstablet": "sstablet", "rimuru-sstab": "sstab", "rimuru-sweb": "sweb", "sstablet": "sstablet", "sstab": "sstab", "sweb": "sweb"}, "description": "Mengambil screenshot website tampilan tablet", "usage": ".sstablet <url>", "example": ".sstablet https://google.com", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/sstablet.js", metadata, m, extra)
handler.help = ["rimuru-tools-sstablet <url>"]
handler.command = ["rimuru-tools-sstablet", "rimuru-sstablet", "rimuru-sstab", "rimuru-sweb", "sstablet", "sstab", "sweb"]
handler.tags = ["tools"]
handler.description = "Mengambil screenshot website tampilan tablet"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sstablet", "alias": ["sstablet", "sstab", "sweb"], "category": "tools", "description": "Mengambil screenshot website tampilan tablet", "usage": ".sstablet <url>", "example": ".sstablet https://google.com", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-sstablet": "sstablet", "rimuru-sstablet": "sstablet", "rimuru-sstab": "sstab", "rimuru-sweb": "sweb", "sstablet": "sstablet", "sstab": "sstab", "sweb": "sweb"}
export default handler
