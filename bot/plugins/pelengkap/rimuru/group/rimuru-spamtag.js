/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/spamtag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spamtag", "category": "group", "aliasMap": {"rimuru-group-spamtag": "spamtag", "rimuru-spamtag": "spamtag", "spamtag": "spamtag"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/spamtag.js", metadata, m, extra)
handler.help = ["rimuru-group-spamtag"]
handler.command = ["rimuru-group-spamtag", "rimuru-spamtag", "spamtag"]
handler.tags = ["group"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spamtag", "alias": [], "category": "group", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-spamtag": "spamtag", "rimuru-spamtag": "spamtag", "spamtag": "spamtag"}
export default handler
