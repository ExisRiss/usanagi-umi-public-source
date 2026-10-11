/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/gag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gag", "category": "info", "aliasMap": {"rimuru-info-gag": "gag", "rimuru-gag": "gag", "rimuru-growagarden": "growagarden", "rimuru-gaginfo": "gaginfo", "gag": "gag", "growagarden": "growagarden", "gaginfo": "gaginfo"}, "description": "Menampilkan informasi stok Grow a Garden", "usage": ".gag", "example": ".gag", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/gag.js", metadata, m, extra)
handler.help = ["rimuru-info-gag"]
handler.command = ["rimuru-info-gag", "rimuru-gag", "rimuru-growagarden", "rimuru-gaginfo", "gag", "growagarden", "gaginfo"]
handler.tags = ["info"]
handler.description = "Menampilkan informasi stok Grow a Garden"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gag", "alias": ["growagarden", "gaginfo"], "category": "info", "description": "Menampilkan informasi stok Grow a Garden", "usage": ".gag", "example": ".gag", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-gag": "gag", "rimuru-gag": "gag", "rimuru-growagarden": "growagarden", "rimuru-gaginfo": "gaginfo", "gag": "gag", "growagarden": "growagarden", "gaginfo": "gaginfo"}
export default handler
