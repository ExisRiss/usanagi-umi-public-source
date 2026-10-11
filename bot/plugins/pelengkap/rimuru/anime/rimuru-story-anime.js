/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/story-anime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stor", "category": "anime", "aliasMap": {"rimuru-anime-stor": "stor", "rimuru-stor": "stor", "rimuru-ya": "ya", "rimuru-nime": "nime", "rimuru-nimestor": "nimestor", "ya": "ya"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/story-anime.js", metadata, m, extra)
handler.help = ["rimuru-anime-stor"]
handler.command = ["rimuru-anime-stor", "rimuru-stor", "rimuru-ya", "rimuru-nime", "rimuru-nimestor", "ya"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stor", "alias": ["ya", "nime", "nimestor"], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-stor": "stor", "rimuru-stor": "stor", "rimuru-ya": "ya", "rimuru-nime": "nime", "rimuru-nimestor": "nimestor", "ya": "ya"}
export default handler
