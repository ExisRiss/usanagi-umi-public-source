/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/nixelgames.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nixelgames", "category": "game", "aliasMap": {"rimuru-game-nixelgames": "nixelgames", "rimuru-nixelgames": "nixelgames", "rimuru-nixel": "nixel", "rimuru-nixelgame": "nixelgame", "rimuru-minigames": "minigames", "nixelgames": "nixelgames", "nixel": "nixel", "nixelgame": "nixelgame", "minigames": "minigames"}, "description": "Kumpulan mini game AI Rich: Dino Runner, Tic Tac Toe, dan Doom", "usage": ".nixelgames", "example": ".nixelgames", "cooldown": 2, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/nixelgames.js", metadata, m, extra)
handler.help = ["rimuru-game-nixelgames"]
handler.command = ["rimuru-game-nixelgames", "rimuru-nixelgames", "rimuru-nixel", "rimuru-nixelgame", "rimuru-minigames", "nixelgames", "nixel", "nixelgame", "minigames"]
handler.tags = ["game"]
handler.description = "Kumpulan mini game AI Rich: Dino Runner, Tic Tac Toe, dan Doom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nixelgames", "alias": ["nixel", "nixelgame", "minigames"], "category": "game", "description": "Kumpulan mini game AI Rich: Dino Runner, Tic Tac Toe, dan Doom", "usage": ".nixelgames", "example": ".nixelgames", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 2, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-nixelgames": "nixelgames", "rimuru-nixelgames": "nixelgames", "rimuru-nixel": "nixel", "rimuru-nixelgame": "nixelgame", "rimuru-minigames": "minigames", "nixelgames": "nixelgames", "nixel": "nixel", "nixelgame": "nixelgame", "minigames": "minigames"}
export default handler
