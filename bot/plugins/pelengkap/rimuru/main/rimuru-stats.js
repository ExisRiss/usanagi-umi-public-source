/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/stats.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stats", "category": "main", "aliasMap": {"rimuru-main-stats": "stats", "rimuru-botstats": "botstats", "rimuru-stat": "stat", "botstats": "botstats"}, "description": "Menampilkan statistik bot", "usage": ".stats", "example": ".stats", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/stats.js", metadata, m, extra)
handler.help = ["rimuru-main-stats"]
handler.command = ["rimuru-main-stats", "rimuru-botstats", "rimuru-stat", "botstats"]
handler.tags = ["main"]
handler.description = "Menampilkan statistik bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stats", "alias": ["botstats", "status", "stat"], "category": "main", "description": "Menampilkan statistik bot", "usage": ".stats", "example": ".stats", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-stats": "stats", "rimuru-botstats": "botstats", "rimuru-stat": "stat", "botstats": "botstats"}
export default handler
