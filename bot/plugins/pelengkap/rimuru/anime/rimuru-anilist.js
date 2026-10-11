/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/anilist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anilist", "category": "anime", "aliasMap": {"rimuru-anime-anilist": "anilist", "rimuru-anilist": "anilist", "anilist": "anilist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/anilist.js", metadata, m, extra)
handler.help = ["rimuru-anime-anilist"]
handler.command = ["rimuru-anime-anilist", "rimuru-anilist", "anilist"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anilist", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-anime-anilist": "anilist", "rimuru-anilist": "anilist", "anilist": "anilist"}
export default handler
