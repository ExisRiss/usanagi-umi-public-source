/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/dino.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dino", "category": "game", "aliasMap": {"rimuru-game-dino": "dino", "rimuru-dino": "dino", "rimuru-dinorun": "dinorun"}, "description": "Game Dino Run inline HTML dengan endless runner, skor, combo, koin dan perisai", "usage": ".dino", "example": ".dino", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/dino.js", metadata, m, extra)
handler.help = ["rimuru-game-dino"]
handler.command = ["rimuru-game-dino", "rimuru-dino", "rimuru-dinorun"]
handler.tags = ["game"]
handler.description = "Game Dino Run inline HTML dengan endless runner, skor, combo, koin dan perisai"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dino", "alias": ["dinorun"], "category": "game", "description": "Game Dino Run inline HTML dengan endless runner, skor, combo, koin dan perisai", "usage": ".dino", "example": ".dino", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-dino": "dino", "rimuru-dino": "dino", "rimuru-dinorun": "dinorun"}
export default handler
