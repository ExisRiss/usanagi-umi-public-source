/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/twitter.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "twitterstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-twitterstalk": "twitterstalk", "rimuru-twitterstalk": "twitterstalk", "rimuru-twstalk": "twstalk", "twitterstalk": "twitterstalk", "twstalk": "twstalk"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/twitter.js", metadata, m, extra)
handler.help = ["rimuru-stalker-twitterstalk"]
handler.command = ["rimuru-stalker-twitterstalk", "rimuru-twitterstalk", "rimuru-twstalk", "twitterstalk", "twstalk"]
handler.tags = ["stalker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "twitterstalk", "alias": ["twstalk"], "category": "stalker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-twitterstalk": "twitterstalk", "rimuru-twitterstalk": "twitterstalk", "rimuru-twstalk": "twstalk", "twitterstalk": "twitterstalk", "twstalk": "twstalk"}
export default handler
