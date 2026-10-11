/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/igaudio.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "igaudio", "category": "download", "aliasMap": {"rimuru-download-igaudio": "igaudio", "rimuru-igaudio": "igaudio", "rimuru-igmp3": "igmp3"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/igaudio.js", metadata, m, extra)
handler.help = ["rimuru-download-igaudio"]
handler.command = ["rimuru-download-igaudio", "rimuru-igaudio", "rimuru-igmp3"]
handler.tags = ["download"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "igaudio", "alias": ["igmp3"], "category": "download", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-igaudio": "igaudio", "rimuru-igaudio": "igaudio", "rimuru-igmp3": "igmp3"}
export default handler
