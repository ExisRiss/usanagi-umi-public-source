/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/oguricap.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "oguri", "category": "ai", "aliasMap": {"rimuru-ai-oguri": "oguri", "rimuru-oguri": "oguri", "rimuru-oguricap": "oguricap", "oguri": "oguri", "oguricap": "oguricap"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/oguricap.js", metadata, m, extra)
handler.help = ["rimuru-ai-oguri"]
handler.command = ["rimuru-ai-oguri", "rimuru-oguri", "rimuru-oguricap", "oguri", "oguricap"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "oguri", "alias": ["oguricap"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-oguri": "oguri", "rimuru-oguri": "oguri", "rimuru-oguricap": "oguricap", "oguri": "oguri", "oguricap": "oguricap"}
export default handler
