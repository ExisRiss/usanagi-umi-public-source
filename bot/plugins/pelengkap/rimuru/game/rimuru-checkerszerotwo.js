/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/checkerszerotwo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "checkers", "category": "game", "aliasMap": {"rimuru-game-checkers": "checkers", "rimuru-checkers": "checkers", "rimuru-dam": "dam", "rimuru-caturdam": "caturdam", "rimuru-zerocheckers": "zerocheckers", "checkers": "checkers", "dam": "dam", "caturdam": "caturdam", "zerocheckers": "zerocheckers"}, "description": "Game catur dam / checkers Rimuru! Makan semua pion lawan untuk menang.", "usage": ".checkers [@lawan]", "example": ".checkers @user", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/checkerszerotwo.js", metadata, m, extra)
handler.help = ["rimuru-game-checkers [@lawan]"]
handler.command = ["rimuru-game-checkers", "rimuru-checkers", "rimuru-dam", "rimuru-caturdam", "rimuru-zerocheckers", "checkers", "dam", "caturdam", "zerocheckers"]
handler.tags = ["game"]
handler.description = "Game catur dam / checkers Rimuru! Makan semua pion lawan untuk menang."
handler.importSource = "rimuru"
handler.importConfig = {"name": "checkers", "alias": ["dam", "caturdam", "zerocheckers"], "category": "game", "description": "Game catur dam / checkers Rimuru! Makan semua pion lawan untuk menang.", "usage": ".checkers [@lawan]", "example": ".checkers @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-checkers": "checkers", "rimuru-checkers": "checkers", "rimuru-dam": "dam", "rimuru-caturdam": "caturdam", "rimuru-zerocheckers": "zerocheckers", "checkers": "checkers", "dam": "dam", "caturdam": "caturdam", "zerocheckers": "zerocheckers"}
export default handler
