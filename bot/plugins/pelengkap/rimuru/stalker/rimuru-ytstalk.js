/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/ytstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ytstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-ytstalk": "ytstalk", "rimuru-ytstalk": "ytstalk", "rimuru-youtubestalk": "youtubestalk", "rimuru-stalkyt": "stalkyt", "ytstalk": "ytstalk", "youtubestalk": "youtubestalk", "stalkyt": "stalkyt"}, "description": "Stalk channel YouTube", "usage": ".ytstalk <username>", "example": ".ytstalk mrbeast", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/ytstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-ytstalk <username>"]
handler.command = ["rimuru-stalker-ytstalk", "rimuru-ytstalk", "rimuru-youtubestalk", "rimuru-stalkyt", "ytstalk", "youtubestalk", "stalkyt"]
handler.tags = ["stalker"]
handler.description = "Stalk channel YouTube"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ytstalk", "alias": ["youtubestalk", "stalkyt"], "category": "stalker", "description": "Stalk channel YouTube", "usage": ".ytstalk <username>", "example": ".ytstalk mrbeast", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-ytstalk": "ytstalk", "rimuru-ytstalk": "ytstalk", "rimuru-youtubestalk": "youtubestalk", "rimuru-stalkyt": "stalkyt", "ytstalk": "ytstalk", "youtubestalk": "youtubestalk", "stalkyt": "stalkyt"}
export default handler
