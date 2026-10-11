/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/wwprotect.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wwprotect", "category": "game", "aliasMap": {"rimuru-game-wwprotect": "wwprotect", "rimuru-wwprotect": "wwprotect", "rimuru-protect": "protect", "rimuru-guardian": "guardian", "rimuru-wpr": "wpr", "wwprotect": "wwprotect", "protect": "protect", "guardian": "guardian", "wpr": "wpr"}, "description": "Guardian night action - Protect target", "usage": ".wwprotect <nomor>", "example": ".wwprotect 3", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/wwprotect.js", metadata, m, extra)
handler.help = ["rimuru-game-wwprotect <nomor>"]
handler.command = ["rimuru-game-wwprotect", "rimuru-wwprotect", "rimuru-protect", "rimuru-guardian", "rimuru-wpr", "wwprotect", "protect", "guardian", "wpr"]
handler.tags = ["game"]
handler.description = "Guardian night action - Protect target"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wwprotect", "alias": ["protect", "guardian", "wpr"], "category": "game", "description": "Guardian night action - Protect target", "usage": ".wwprotect <nomor>", "example": ".wwprotect 3", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-wwprotect": "wwprotect", "rimuru-wwprotect": "wwprotect", "rimuru-protect": "protect", "rimuru-guardian": "guardian", "rimuru-wpr": "wpr", "wwprotect": "wwprotect", "protect": "protect", "guardian": "guardian", "wpr": "wpr"}
export default handler
