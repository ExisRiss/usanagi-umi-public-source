/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/mahjong-shinobu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mahjong", "category": "game", "aliasMap": {"rimuru-game-mahjong": "mahjong", "rimuru-mahjong": "mahjong", "rimuru-mjong": "mjong", "rimuru-kyoko": "kyoko", "mahjong": "mahjong", "mjong": "mjong", "mj": "mj", "kyoko": "kyoko"}, "description": "Kyoko Mahjong v6.2 dengan HTML AI Rich Message.", "usage": ".mahjong", "example": ".mahjong", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/mahjong-shinobu.js", metadata, m, extra)
handler.help = ["rimuru-game-mahjong"]
handler.command = ["rimuru-game-mahjong", "rimuru-mahjong", "rimuru-mjong", "rimuru-kyoko", "mahjong", "mjong", "mj", "kyoko"]
handler.tags = ["game"]
handler.description = "Kyoko Mahjong v6.2 dengan HTML AI Rich Message."
handler.importSource = "rimuru"
handler.importConfig = {"name": "mahjong", "alias": ["mjong", "mj", "kyoko"], "category": "game", "description": "Kyoko Mahjong v6.2 dengan HTML AI Rich Message.", "usage": ".mahjong", "example": ".mahjong", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-mahjong": "mahjong", "rimuru-mahjong": "mahjong", "rimuru-mjong": "mjong", "rimuru-kyoko": "kyoko", "mahjong": "mahjong", "mjong": "mjong", "mj": "mj", "kyoko": "kyoko"}
export default handler
