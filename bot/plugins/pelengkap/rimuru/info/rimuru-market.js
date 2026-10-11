/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/market.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "market", "category": "info", "aliasMap": {"rimuru-info-market": "market", "rimuru-market": "market"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/market.js", metadata, m, extra)
handler.help = ["rimuru-info-market"]
handler.command = ["rimuru-info-market", "rimuru-market"]
handler.tags = ["info"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "market", "alias": [], "category": "info", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-market": "market", "rimuru-market": "market"}
export default handler
