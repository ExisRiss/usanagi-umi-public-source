/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/sellall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sellall", "category": "rpg", "aliasMap": {"rimuru-rpg-sellall": "sellall", "rimuru-sellall": "sellall", "rimuru-jualsemua": "jualsemua", "rimuru-quicksell": "quicksell"}, "description": "Jual semua item yang bisa dijual sekaligus", "usage": ".sellall", "example": ".sellall", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/sellall.js", metadata, m, extra)
handler.help = ["rimuru-rpg-sellall"]
handler.command = ["rimuru-rpg-sellall", "rimuru-sellall", "rimuru-jualsemua", "rimuru-quicksell"]
handler.tags = ["rpg"]
handler.description = "Jual semua item yang bisa dijual sekaligus"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sellall", "alias": ["jualsemua", "quicksell"], "category": "rpg", "description": "Jual semua item yang bisa dijual sekaligus", "usage": ".sellall", "example": ".sellall", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-sellall": "sellall", "rimuru-sellall": "sellall", "rimuru-jualsemua": "jualsemua", "rimuru-quicksell": "quicksell"}
export default handler
