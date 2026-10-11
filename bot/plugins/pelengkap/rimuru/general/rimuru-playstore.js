/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/playstore.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "playstore", "category": "general", "aliasMap": {"rimuru-general-playstore": "playstore", "rimuru-playstore": "playstore", "rimuru-ps": "ps", "playstore": "playstore", "ps": "ps"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/playstore.js", metadata, m, extra)
handler.help = ["rimuru-general-playstore"]
handler.command = ["rimuru-general-playstore", "rimuru-playstore", "rimuru-ps", "playstore", "ps"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "playstore", "alias": ["ps"], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-playstore": "playstore", "rimuru-playstore": "playstore", "rimuru-ps": "ps", "playstore": "playstore", "ps": "ps"}
export default handler
