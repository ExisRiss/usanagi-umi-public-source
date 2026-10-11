/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/sonik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sonik", "category": "game", "aliasMap": {"rimuru-game-sonik": "sonik", "rimuru-sonik": "sonik", "rimuru-dash": "dash", "rimuru-speedy": "speedy", "rimuru-speeddash": "speeddash"}, "description": "Inline Speedy Dash game", "usage": ".sonik", "example": ".sonik", "cooldown": 1, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/sonik.js", metadata, m, extra)
handler.help = ["rimuru-game-sonik"]
handler.command = ["rimuru-game-sonik", "rimuru-sonik", "rimuru-dash", "rimuru-speedy", "rimuru-speeddash"]
handler.tags = ["game"]
handler.description = "Inline Speedy Dash game"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sonik", "alias": ["dash", "speedy", "speeddash"], "category": "game", "description": "Inline Speedy Dash game", "usage": ".sonik", "example": ".sonik", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 1, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-sonik": "sonik", "rimuru-sonik": "sonik", "rimuru-dash": "dash", "rimuru-speedy": "speedy", "rimuru-speeddash": "speeddash"}
export default handler
