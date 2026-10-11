/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/infoloker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "infoloker", "category": "general", "aliasMap": {"rimuru-general-infoloker": "infoloker", "rimuru-infoloker": "infoloker", "infoloker": "infoloker"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/infoloker.js", metadata, m, extra)
handler.help = ["rimuru-general-infoloker"]
handler.command = ["rimuru-general-infoloker", "rimuru-infoloker", "infoloker"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "infoloker", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-general-infoloker": "infoloker", "rimuru-infoloker": "infoloker", "infoloker": "infoloker"}
export default handler
