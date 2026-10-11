/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/clip.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clip", "category": "search", "aliasMap": {"rimuru-search-clip": "clip", "rimuru-clip": "clip", "clip": "clip"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/clip.js", metadata, m, extra)
handler.help = ["rimuru-search-clip"]
handler.command = ["rimuru-search-clip", "rimuru-clip", "clip"]
handler.tags = ["search"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clip", "alias": [], "category": "search", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-clip": "clip", "rimuru-clip": "clip", "clip": "clip"}
export default handler
