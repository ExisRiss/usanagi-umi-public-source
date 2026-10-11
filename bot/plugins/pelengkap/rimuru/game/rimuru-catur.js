/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/catur.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "catur", "category": "game", "aliasMap": {"rimuru-game-catur": "catur", "rimuru-catur": "catur", "rimuru-chess": "chess", "rimuru-caturn": "caturn", "rimuru-rcatur": "rcatur", "caturn": "caturn", "rcatur": "rcatur"}, "description": "Inline Chess game", "usage": ".catur", "example": ".catur", "cooldown": 1, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/catur.js", metadata, m, extra)
handler.help = ["rimuru-game-catur"]
handler.command = ["rimuru-game-catur", "rimuru-catur", "rimuru-chess", "rimuru-caturn", "rimuru-rcatur", "caturn", "rcatur"]
handler.tags = ["game"]
handler.description = "Inline Chess game"
handler.importSource = "rimuru"
handler.importConfig = {"name": "catur", "alias": ["chess", "caturn", "rcatur"], "category": "game", "description": "Inline Chess game", "usage": ".catur", "example": ".catur", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 1, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-catur": "catur", "rimuru-catur": "catur", "rimuru-chess": "chess", "rimuru-caturn": "caturn", "rimuru-rcatur": "rcatur", "caturn": "caturn", "rcatur": "rcatur"}
export default handler
