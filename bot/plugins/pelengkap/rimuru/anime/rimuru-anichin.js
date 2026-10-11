/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/anichin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anichin", "category": "anime", "aliasMap": {"rimuru-anime-anichin": "anichin", "rimuru-anichin": "anichin", "anichin": "anichin"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/anichin.js", metadata, m, extra)
handler.help = ["rimuru-anime-anichin"]
handler.command = ["rimuru-anime-anichin", "rimuru-anichin", "anichin"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anichin", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-anichin": "anichin", "rimuru-anichin": "anichin", "anichin": "anichin"}
export default handler
