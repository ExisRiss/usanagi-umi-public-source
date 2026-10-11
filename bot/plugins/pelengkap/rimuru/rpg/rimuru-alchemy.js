/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/alchemy.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "alchemy", "category": "rpg", "aliasMap": {"rimuru-rpg-alchemy": "alchemy", "rimuru-alchemy": "alchemy", "rimuru-potion": "potion", "rimuru-brew": "brew", "rimuru-ramuan": "ramuan"}, "description": "Buat potion dan ramuan dari herba", "usage": ".alchemy <potion>", "example": ".alchemy healthpotion", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/alchemy.js", metadata, m, extra)
handler.help = ["rimuru-rpg-alchemy <potion>"]
handler.command = ["rimuru-rpg-alchemy", "rimuru-alchemy", "rimuru-potion", "rimuru-brew", "rimuru-ramuan"]
handler.tags = ["rpg"]
handler.description = "Buat potion dan ramuan dari herba"
handler.importSource = "rimuru"
handler.importConfig = {"name": "alchemy", "alias": ["potion", "brew", "ramuan"], "category": "rpg", "description": "Buat potion dan ramuan dari herba", "usage": ".alchemy <potion>", "example": ".alchemy healthpotion", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-alchemy": "alchemy", "rimuru-alchemy": "alchemy", "rimuru-potion": "potion", "rimuru-brew": "brew", "rimuru-ramuan": "ramuan"}
export default handler
