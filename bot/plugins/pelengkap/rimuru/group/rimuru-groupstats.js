/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/groupstats.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "groupstats", "category": "group", "aliasMap": {"rimuru-group-groupstats": "groupstats", "rimuru-groupstats": "groupstats", "rimuru-statsgrup": "statsgrup", "rimuru-statsgroup": "statsgroup", "groupstats": "groupstats", "statsgrup": "statsgrup", "statsgroup": "statsgroup"}, "description": "Menampilkan statistik dasar grup saat ini", "usage": ".groupstats", "example": ".groupstats", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/groupstats.js", metadata, m, extra)
handler.help = ["rimuru-group-groupstats"]
handler.command = ["rimuru-group-groupstats", "rimuru-groupstats", "rimuru-statsgrup", "rimuru-statsgroup", "groupstats", "statsgrup", "statsgroup"]
handler.tags = ["group"]
handler.description = "Menampilkan statistik dasar grup saat ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "groupstats", "alias": ["statsgrup", "statsgroup"], "category": "group", "description": "Menampilkan statistik dasar grup saat ini", "usage": ".groupstats", "example": ".groupstats", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-groupstats": "groupstats", "rimuru-groupstats": "groupstats", "rimuru-statsgrup": "statsgrup", "rimuru-statsgroup": "statsgroup", "groupstats": "groupstats", "statsgrup": "statsgrup", "statsgroup": "statsgroup"}
export default handler
