/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ekspedisilist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ekspedisilist", "category": "tools", "aliasMap": {"rimuru-tools-ekspedisilist": "ekspedisilist", "rimuru-ekspedisilist": "ekspedisilist", "ekspedisilist": "ekspedisilist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ekspedisilist.js", metadata, m, extra)
handler.help = ["rimuru-tools-ekspedisilist"]
handler.command = ["rimuru-tools-ekspedisilist", "rimuru-ekspedisilist", "ekspedisilist"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ekspedisilist", "alias": [], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-ekspedisilist": "ekspedisilist", "rimuru-ekspedisilist": "ekspedisilist", "ekspedisilist": "ekspedisilist"}
export default handler
