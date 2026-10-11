/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autoread.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoread", "category": "owner", "aliasMap": {"rimuru-owner-autoread": "autoread", "rimuru-autoread": "autoread", "rimuru-readchat": "readchat", "rimuru-autobaca": "autobaca", "autoread": "autoread", "readchat": "readchat", "autobaca": "autobaca"}, "description": "Auto read pesan masuk", "usage": ".autoread on/off", "example": ".autoread on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autoread.js", metadata, m, extra)
handler.help = ["rimuru-owner-autoread on/off"]
handler.command = ["rimuru-owner-autoread", "rimuru-autoread", "rimuru-readchat", "rimuru-autobaca", "autoread", "readchat", "autobaca"]
handler.tags = ["owner"]
handler.description = "Auto read pesan masuk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoread", "alias": ["readchat", "autobaca"], "category": "owner", "description": "Auto read pesan masuk", "usage": ".autoread on/off", "example": ".autoread on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-autoread": "autoread", "rimuru-autoread": "autoread", "rimuru-readchat": "readchat", "rimuru-autobaca": "autobaca", "autoread": "autoread", "readchat": "readchat", "autobaca": "autobaca"}
export default handler
