/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/weekly.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "weekly", "category": "rpg", "aliasMap": {"rimuru-rpg-weekly": "weekly", "rimuru-weekly": "weekly", "rimuru-mingguan": "mingguan"}, "description": "Claim hadiah mingguan (lebih besar dari daily)", "usage": ".weekly", "example": ".weekly", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/weekly.js", metadata, m, extra)
handler.help = ["rimuru-rpg-weekly"]
handler.command = ["rimuru-rpg-weekly", "rimuru-weekly", "rimuru-mingguan"]
handler.tags = ["rpg"]
handler.description = "Claim hadiah mingguan (lebih besar dari daily)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "weekly", "alias": ["mingguan"], "category": "rpg", "description": "Claim hadiah mingguan (lebih besar dari daily)", "usage": ".weekly", "example": ".weekly", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-weekly": "weekly", "rimuru-weekly": "weekly", "rimuru-mingguan": "mingguan"}
export default handler
