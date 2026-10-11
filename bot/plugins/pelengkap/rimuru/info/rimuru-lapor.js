/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/lapor.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lapor", "category": "info", "aliasMap": {"rimuru-info-lapor": "lapor", "rimuru-lapor": "lapor", "rimuru-report": "report", "lapor": "lapor", "report": "report"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/lapor.js", metadata, m, extra)
handler.help = ["rimuru-info-lapor"]
handler.command = ["rimuru-info-lapor", "rimuru-lapor", "rimuru-report", "lapor", "report"]
handler.tags = ["info"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lapor", "alias": ["report"], "category": "info", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-lapor": "lapor", "rimuru-lapor": "lapor", "rimuru-report": "report", "lapor": "lapor", "report": "report"}
export default handler
