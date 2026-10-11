/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/numbgen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "numbgen", "category": "tools", "aliasMap": {"rimuru-tools-numbgen": "numbgen", "rimuru-numbgen": "numbgen", "numbgen": "numbgen"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/numbgen.js", metadata, m, extra)
handler.help = ["rimuru-tools-numbgen"]
handler.command = ["rimuru-tools-numbgen", "rimuru-numbgen", "numbgen"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "numbgen", "alias": [], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-numbgen": "numbgen", "rimuru-numbgen": "numbgen", "numbgen": "numbgen"}
export default handler
