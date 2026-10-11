/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/leave.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "leave", "category": "owner", "aliasMap": {"rimuru-owner-leave": "leave", "rimuru-leave": "leave", "rimuru-leavegrup": "leavegrup", "rimuru-leavegroup": "leavegroup", "rimuru-keluar": "keluar", "rimuru-bye": "bye", "leave": "leave", "leavegrup": "leavegrup", "leavegroup": "leavegroup", "keluar": "keluar"}, "description": "Bot keluar dari grup", "usage": ".leave [link]", "example": ".leave", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/leave.js", metadata, m, extra)
handler.help = ["rimuru-owner-leave [link]"]
handler.command = ["rimuru-owner-leave", "rimuru-leave", "rimuru-leavegrup", "rimuru-leavegroup", "rimuru-keluar", "rimuru-bye", "leave", "leavegrup", "leavegroup", "keluar"]
handler.tags = ["owner"]
handler.description = "Bot keluar dari grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "leave", "alias": ["leavegrup", "leavegroup", "keluar", "bye"], "category": "owner", "description": "Bot keluar dari grup", "usage": ".leave [link]", "example": ".leave", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-leave": "leave", "rimuru-leave": "leave", "rimuru-leavegrup": "leavegrup", "rimuru-leavegroup": "leavegroup", "rimuru-keluar": "keluar", "rimuru-bye": "bye", "leave": "leave", "leavegrup": "leavegrup", "leavegroup": "leavegroup", "keluar": "keluar"}
export default handler
