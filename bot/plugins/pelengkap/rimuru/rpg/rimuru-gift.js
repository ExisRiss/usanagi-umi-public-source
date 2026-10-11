/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/gift.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gift", "category": "rpg", "aliasMap": {"rimuru-rpg-gift": "gift", "rimuru-gift": "gift", "rimuru-kasih": "kasih", "rimuru-hadiah": "hadiah"}, "description": "Beri hadiah ke pasangan untuk meningkatkan love", "usage": ".gift <item> <jumlah>", "example": ".gift diamond 1", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/gift.js", metadata, m, extra)
handler.help = ["rimuru-rpg-gift <item> <jumlah>"]
handler.command = ["rimuru-rpg-gift", "rimuru-gift", "rimuru-kasih", "rimuru-hadiah"]
handler.tags = ["rpg"]
handler.description = "Beri hadiah ke pasangan untuk meningkatkan love"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gift", "alias": ["kasih", "hadiah"], "category": "rpg", "description": "Beri hadiah ke pasangan untuk meningkatkan love", "usage": ".gift <item> <jumlah>", "example": ".gift diamond 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-gift": "gift", "rimuru-gift": "gift", "rimuru-kasih": "kasih", "rimuru-hadiah": "hadiah"}
export default handler
