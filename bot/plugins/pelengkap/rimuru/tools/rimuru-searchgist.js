/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/searchgist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "searchgist", "category": "tools", "aliasMap": {"rimuru-tools-searchgist": "searchgist", "rimuru-searchgist": "searchgist", "searchgist": "searchgist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/searchgist.js", metadata, m, extra)
handler.help = ["rimuru-tools-searchgist"]
handler.command = ["rimuru-tools-searchgist", "rimuru-searchgist", "searchgist"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "searchgist", "alias": [], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-searchgist": "searchgist", "rimuru-searchgist": "searchgist", "searchgist": "searchgist"}
export default handler
