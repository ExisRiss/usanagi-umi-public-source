/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/media/setaudio.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setaudio", "category": "media", "aliasMap": {"rimuru-media-setaudio": "setaudio", "rimuru-setaudio": "setaudio", "setaudio": "setaudio"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/media/setaudio.js", metadata, m, extra)
handler.help = ["rimuru-media-setaudio"]
handler.command = ["rimuru-media-setaudio", "rimuru-setaudio", "setaudio"]
handler.tags = ["media"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setaudio", "alias": [], "category": "media", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-media-setaudio": "setaudio", "rimuru-setaudio": "setaudio", "setaudio": "setaudio"}
export default handler
