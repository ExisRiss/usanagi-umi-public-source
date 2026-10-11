/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animequotes.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animequotes", "category": "anime", "aliasMap": {"rimuru-anime-animequotes": "animequotes", "rimuru-animequotes": "animequotes"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animequotes.js", metadata, m, extra)
handler.help = ["rimuru-anime-animequotes"]
handler.command = ["rimuru-anime-animequotes", "rimuru-animequotes"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animequotes", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-anime-animequotes": "animequotes", "rimuru-animequotes": "animequotes"}
export default handler
