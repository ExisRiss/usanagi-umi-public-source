/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autojoingc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autojoingc", "category": "owner", "aliasMap": {"rimuru-owner-autojoingc": "autojoingc", "rimuru-autojoingc": "autojoingc", "rimuru-autojoin": "autojoin", "rimuru-autojoingroup": "autojoingroup", "autojoingc": "autojoingc", "autojoin": "autojoin", "autojoingroup": "autojoingroup"}, "description": "Auto join grup dari link yang terdeteksi di chat", "usage": ".autojoingc on/off", "example": ".autojoingc on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autojoingc.js", metadata, m, extra)
handler.help = ["rimuru-owner-autojoingc on/off"]
handler.command = ["rimuru-owner-autojoingc", "rimuru-autojoingc", "rimuru-autojoin", "rimuru-autojoingroup", "autojoingc", "autojoin", "autojoingroup"]
handler.tags = ["owner"]
handler.description = "Auto join grup dari link yang terdeteksi di chat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autojoingc", "alias": ["autojoin", "autojoingroup"], "category": "owner", "description": "Auto join grup dari link yang terdeteksi di chat", "usage": ".autojoingc on/off", "example": ".autojoingc on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-autojoingc": "autojoingc", "rimuru-autojoingc": "autojoingc", "rimuru-autojoin": "autojoin", "rimuru-autojoingroup": "autojoingroup", "autojoingc": "autojoingc", "autojoin": "autojoin", "autojoingroup": "autojoingroup"}
export default handler
