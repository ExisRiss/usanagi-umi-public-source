/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/ikiru.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ikiru", "category": "anime", "aliasMap": {"rimuru-anime-ikiru": "ikiru", "rimuru-ikiru": "ikiru", "ikiru": "ikiru"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/ikiru.js", metadata, m, extra)
handler.help = ["rimuru-anime-ikiru"]
handler.command = ["rimuru-anime-ikiru", "rimuru-ikiru", "ikiru"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ikiru", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-ikiru": "ikiru", "rimuru-ikiru": "ikiru", "ikiru": "ikiru"}
export default handler
