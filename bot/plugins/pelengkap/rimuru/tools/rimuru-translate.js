/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/translate.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tran", "category": "tools", "aliasMap": {"rimuru-tools-tran": "tran", "rimuru-tran": "tran", "rimuru-slate": "slate", "rimuru-tr": "tr"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/translate.js", metadata, m, extra)
handler.help = ["rimuru-tools-tran"]
handler.command = ["rimuru-tools-tran", "rimuru-tran", "rimuru-slate", "rimuru-tr"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tran", "alias": ["slate", "tr"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-tran": "tran", "rimuru-tran": "tran", "rimuru-slate": "slate", "rimuru-tr": "tr"}
export default handler
