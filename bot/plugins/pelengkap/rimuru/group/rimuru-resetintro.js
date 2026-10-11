/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetintro.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetintro", "category": "group", "aliasMap": {"rimuru-group-resetintro": "resetintro", "rimuru-resetintro": "resetintro", "rimuru-introdel": "introdel", "rimuru-delintro": "delintro", "rimuru-deleteintro": "deleteintro", "resetintro": "resetintro", "introdel": "introdel", "deleteintro": "deleteintro"}, "description": "Reset intro grup ke default (admin only)", "usage": ".resetintro", "example": ".resetintro", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetintro.js", metadata, m, extra)
handler.help = ["rimuru-group-resetintro"]
handler.command = ["rimuru-group-resetintro", "rimuru-resetintro", "rimuru-introdel", "rimuru-delintro", "rimuru-deleteintro", "resetintro", "introdel", "deleteintro"]
handler.tags = ["group"]
handler.description = "Reset intro grup ke default (admin only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetintro", "alias": ["introdel", "delintro", "deleteintro"], "category": "group", "description": "Reset intro grup ke default (admin only)", "usage": ".resetintro", "example": ".resetintro", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetintro": "resetintro", "rimuru-resetintro": "resetintro", "rimuru-introdel": "introdel", "rimuru-delintro": "delintro", "rimuru-deleteintro": "deleteintro", "resetintro": "resetintro", "introdel": "introdel", "deleteintro": "deleteintro"}
export default handler
