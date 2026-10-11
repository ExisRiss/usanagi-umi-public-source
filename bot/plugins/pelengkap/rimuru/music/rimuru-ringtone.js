/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/music/ringtone.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ringtone", "category": "music", "aliasMap": {"rimuru-music-ringtone": "ringtone", "rimuru-ringtone": "ringtone", "ringtone": "ringtone"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/music/ringtone.js", metadata, m, extra)
handler.help = ["rimuru-music-ringtone"]
handler.command = ["rimuru-music-ringtone", "rimuru-ringtone", "ringtone"]
handler.tags = ["music"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ringtone", "alias": [], "category": "music", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-music-ringtone": "ringtone", "rimuru-ringtone": "ringtone", "ringtone": "ringtone"}
export default handler
