/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/genshinprofile.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "genshinprofile", "category": "game", "aliasMap": {"rimuru-game-genshinprofile": "genshinprofile", "rimuru-genshinprofile": "genshinprofile", "genshinprofile": "genshinprofile"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/genshinprofile.js", metadata, m, extra)
handler.help = ["rimuru-game-genshinprofile"]
handler.command = ["rimuru-game-genshinprofile", "rimuru-genshinprofile", "genshinprofile"]
handler.tags = ["game"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "genshinprofile", "alias": [], "category": "game", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-genshinprofile": "genshinprofile", "rimuru-genshinprofile": "genshinprofile", "genshinprofile": "genshinprofile"}
export default handler
