/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/music/playncs.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "playncs", "category": "music", "aliasMap": {"rimuru-music-playncs": "playncs", "rimuru-playncs": "playncs", "rimuru-ncssearch": "ncssearch", "rimuru-ncsplay": "ncsplay", "playncs": "playncs", "ncssearch": "ncssearch", "ncsplay": "ncsplay"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/music/playncs.js", metadata, m, extra)
handler.help = ["rimuru-music-playncs"]
handler.command = ["rimuru-music-playncs", "rimuru-playncs", "rimuru-ncssearch", "rimuru-ncsplay", "playncs", "ncssearch", "ncsplay"]
handler.tags = ["music"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "playncs", "alias": ["ncssearch", "ncsplay"], "category": "music", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-music-playncs": "playncs", "rimuru-playncs": "playncs", "rimuru-ncssearch": "ncssearch", "rimuru-ncsplay": "ncsplay", "playncs": "playncs", "ncssearch": "ncssearch", "ncsplay": "ncsplay"}
export default handler
