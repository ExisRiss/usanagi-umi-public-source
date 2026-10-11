/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/tiktokstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tiktokstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-tiktokstalk": "tiktokstalk", "rimuru-tiktokstalk": "tiktokstalk", "rimuru-ttstalk": "ttstalk", "rimuru-stalktt": "stalktt", "tiktokstalk": "tiktokstalk", "stalktt": "stalktt"}, "description": "Stalk akun TikTok", "usage": ".tiktokstalk <username>", "example": ".tiktokstalk mrbeast", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/tiktokstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-tiktokstalk <username>"]
handler.command = ["rimuru-stalker-tiktokstalk", "rimuru-tiktokstalk", "rimuru-ttstalk", "rimuru-stalktt", "tiktokstalk", "stalktt"]
handler.tags = ["stalker"]
handler.description = "Stalk akun TikTok"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tiktokstalk", "alias": ["ttstalk", "stalktt"], "category": "stalker", "description": "Stalk akun TikTok", "usage": ".tiktokstalk <username>", "example": ".tiktokstalk mrbeast", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-tiktokstalk": "tiktokstalk", "rimuru-tiktokstalk": "tiktokstalk", "rimuru-ttstalk": "ttstalk", "rimuru-stalktt": "stalktt", "tiktokstalk": "tiktokstalk", "stalktt": "stalktt"}
export default handler
