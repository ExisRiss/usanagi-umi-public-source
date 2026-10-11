/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/supermario.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "supermario", "category": "game", "aliasMap": {"rimuru-game-supermario": "supermario", "rimuru-supermario": "supermario", "rimuru-mario": "mario", "supermario": "supermario", "mario": "mario"}, "description": "Super Mario Bros mini - lompatin musuh & kumpulin koin!", "usage": "", "example": ".mario", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/supermario.js", metadata, m, extra)
handler.help = ["rimuru-game-supermario"]
handler.command = ["rimuru-game-supermario", "rimuru-supermario", "rimuru-mario", "supermario", "mario"]
handler.tags = ["game"]
handler.description = "Super Mario Bros mini - lompatin musuh & kumpulin koin!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "supermario", "alias": ["mario"], "category": "game", "description": "Super Mario Bros mini - lompatin musuh & kumpulin koin!", "usage": "", "example": ".mario", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-supermario": "supermario", "rimuru-supermario": "supermario", "rimuru-mario": "mario", "supermario": "supermario", "mario": "mario"}
export default handler
