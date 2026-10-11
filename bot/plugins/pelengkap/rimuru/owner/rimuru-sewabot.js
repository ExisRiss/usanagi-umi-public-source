/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/sewabot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sewabot", "category": "owner", "aliasMap": {"rimuru-owner-sewabot": "sewabot", "rimuru-sewabot": "sewabot", "rimuru-sewa": "sewa", "sewabot": "sewabot", "sewa": "sewa"}, "description": "Toggle dan kelola sistem sewa bot", "usage": ".sewabot <on/off/leave/status>", "example": ".sewabot on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/sewabot.js", metadata, m, extra)
handler.help = ["rimuru-owner-sewabot <on/off/leave/status>"]
handler.command = ["rimuru-owner-sewabot", "rimuru-sewabot", "rimuru-sewa", "sewabot", "sewa"]
handler.tags = ["owner"]
handler.description = "Toggle dan kelola sistem sewa bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sewabot", "alias": ["sewa"], "category": "owner", "description": "Toggle dan kelola sistem sewa bot", "usage": ".sewabot <on/off/leave/status>", "example": ".sewabot on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-sewabot": "sewabot", "rimuru-sewabot": "sewabot", "rimuru-sewa": "sewa", "sewabot": "sewabot", "sewa": "sewa"}
export default handler
