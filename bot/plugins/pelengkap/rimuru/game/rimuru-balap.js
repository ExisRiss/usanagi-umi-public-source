/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/balap.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "balap", "category": "game", "aliasMap": {"rimuru-game-balap": "balap", "rimuru-balap": "balap", "rimuru-racing": "racing", "rimuru-race": "race", "rimuru-turborace": "turborace", "balap": "balap", "race": "race", "turborace": "turborace"}, "description": "Game Turbo Race HTML AI Rich.", "usage": ".balap", "example": ".balap", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/balap.js", metadata, m, extra)
handler.help = ["rimuru-game-balap"]
handler.command = ["rimuru-game-balap", "rimuru-balap", "rimuru-racing", "rimuru-race", "rimuru-turborace", "balap", "race", "turborace"]
handler.tags = ["game"]
handler.description = "Game Turbo Race HTML AI Rich."
handler.importSource = "rimuru"
handler.importConfig = {"name": "balap", "alias": ["racing", "race", "turborace"], "category": "game", "description": "Game Turbo Race HTML AI Rich.", "usage": ".balap", "example": ".balap", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-balap": "balap", "rimuru-balap": "balap", "rimuru-racing": "racing", "rimuru-race": "race", "rimuru-turborace": "turborace", "balap": "balap", "race": "race", "turborace": "turborace"}
export default handler
