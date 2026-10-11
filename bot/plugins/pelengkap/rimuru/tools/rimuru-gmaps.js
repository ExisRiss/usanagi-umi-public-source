/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/gmaps.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jarak", "category": "tools", "aliasMap": {"rimuru-tools-jarak": "jarak", "rimuru-jarak": "jarak", "jarak": "jarak"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/gmaps.js", metadata, m, extra)
handler.help = ["rimuru-tools-jarak"]
handler.command = ["rimuru-tools-jarak", "rimuru-jarak", "jarak"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jarak", "alias": [], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-jarak": "jarak", "rimuru-jarak": "jarak", "jarak": "jarak"}
export default handler
