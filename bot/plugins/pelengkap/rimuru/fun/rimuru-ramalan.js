/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/ramalan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ramal", "category": "fun", "aliasMap": {"rimuru-fun-ramal": "ramal", "rimuru-ramal": "ramal", "ramal": "ramal"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/ramalan.js", metadata, m, extra)
handler.help = ["rimuru-fun-ramal"]
handler.command = ["rimuru-fun-ramal", "rimuru-ramal", "ramal"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ramal", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-ramal": "ramal", "rimuru-ramal": "ramal", "ramal": "ramal"}
export default handler
