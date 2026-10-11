/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/kyubigame.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kyubigame", "category": "game", "aliasMap": {"rimuru-game-kyubigame": "kyubigame", "rimuru-kyubigame": "kyubigame", "rimuru-kyubi": "kyubi", "rimuru-naruto": "naruto", "rimuru-shinobi": "shinobi", "kyubigame": "kyubigame", "kyubi": "kyubi", "naruto": "naruto", "shinobi": "shinobi"}, "description": "Jelajahi dunia shinobi dan hadapi musuh Ninja terkuat", "usage": ".kyubigame", "example": ".kyubigame", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/kyubigame.js", metadata, m, extra)
handler.help = ["rimuru-game-kyubigame"]
handler.command = ["rimuru-game-kyubigame", "rimuru-kyubigame", "rimuru-kyubi", "rimuru-naruto", "rimuru-shinobi", "kyubigame", "kyubi", "naruto", "shinobi"]
handler.tags = ["game"]
handler.description = "Jelajahi dunia shinobi dan hadapi musuh Ninja terkuat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kyubigame", "alias": ["kyubi", "naruto", "shinobi"], "category": "game", "description": "Jelajahi dunia shinobi dan hadapi musuh Ninja terkuat", "usage": ".kyubigame", "example": ".kyubigame", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-kyubigame": "kyubigame", "rimuru-kyubigame": "kyubigame", "rimuru-kyubi": "kyubi", "rimuru-naruto": "naruto", "rimuru-shinobi": "shinobi", "kyubigame": "kyubigame", "kyubi": "kyubi", "naruto": "naruto", "shinobi": "shinobi"}
export default handler
