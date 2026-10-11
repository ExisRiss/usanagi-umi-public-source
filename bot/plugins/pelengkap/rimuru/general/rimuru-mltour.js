/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/mltour.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mltour", "category": "general", "aliasMap": {"rimuru-general-mltour": "mltour", "rimuru-mltour": "mltour", "mltour": "mltour"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/mltour.js", metadata, m, extra)
handler.help = ["rimuru-general-mltour"]
handler.command = ["rimuru-general-mltour", "rimuru-mltour", "mltour"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mltour", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-mltour": "mltour", "rimuru-mltour": "mltour", "mltour": "mltour"}
export default handler
