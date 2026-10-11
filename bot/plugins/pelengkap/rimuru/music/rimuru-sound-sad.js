/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/music/sound-sad.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sad", "category": "music", "aliasMap": {"rimuru-music-sad": "sad", "rimuru-sad": "sad"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/music/sound-sad.js", metadata, m, extra)
handler.help = ["rimuru-music-sad"]
handler.command = ["rimuru-music-sad", "rimuru-sad"]
handler.tags = ["music"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sad", "alias": [], "category": "music", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-music-sad": "sad", "rimuru-sad": "sad"}
export default handler
