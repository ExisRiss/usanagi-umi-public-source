/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/soundmeme.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "soundmeme2", "category": "search", "aliasMap": {"rimuru-search-soundmeme2": "soundmeme2", "rimuru-soundmeme2": "soundmeme2", "soundmeme2": "soundmeme2"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/soundmeme.js", metadata, m, extra)
handler.help = ["rimuru-search-soundmeme2"]
handler.command = ["rimuru-search-soundmeme2", "rimuru-soundmeme2", "soundmeme2"]
handler.tags = ["search"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "soundmeme2", "alias": [], "category": "search", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-soundmeme2": "soundmeme2", "rimuru-soundmeme2": "soundmeme2", "soundmeme2": "soundmeme2"}
export default handler
