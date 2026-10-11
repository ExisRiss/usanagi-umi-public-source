/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/callingcode.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "callingcode", "category": "info", "aliasMap": {"rimuru-info-callingcode": "callingcode", "rimuru-callingcode": "callingcode", "callingcode": "callingcode"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/callingcode.js", metadata, m, extra)
handler.help = ["rimuru-info-callingcode"]
handler.command = ["rimuru-info-callingcode", "rimuru-callingcode", "callingcode"]
handler.tags = ["info"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "callingcode", "alias": [], "category": "info", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-callingcode": "callingcode", "rimuru-callingcode": "callingcode", "callingcode": "callingcode"}
export default handler
