/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/npmstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "npmstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-npmstalk": "npmstalk", "rimuru-npmstalk": "npmstalk", "rimuru-stalknpm": "stalknpm", "rimuru-npms": "npms", "npmstalk": "npmstalk", "stalknpm": "stalknpm", "npms": "npms"}, "description": "Stalk akun NPM (Node Package Manager)", "usage": ".npmstalk <username>", "example": ".npmstalk hanya_zann", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/npmstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-npmstalk <username>"]
handler.command = ["rimuru-stalker-npmstalk", "rimuru-npmstalk", "rimuru-stalknpm", "rimuru-npms", "npmstalk", "stalknpm", "npms"]
handler.tags = ["stalker"]
handler.description = "Stalk akun NPM (Node Package Manager)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "npmstalk", "alias": ["stalknpm", "npms"], "category": "stalker", "description": "Stalk akun NPM (Node Package Manager)", "usage": ".npmstalk <username>", "example": ".npmstalk hanya_zann", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-npmstalk": "npmstalk", "rimuru-npmstalk": "npmstalk", "rimuru-stalknpm": "stalknpm", "rimuru-npms": "npms", "npmstalk": "npmstalk", "stalknpm": "stalknpm", "npms": "npms"}
export default handler
