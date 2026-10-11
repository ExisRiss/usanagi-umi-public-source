/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/mining.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mining", "category": "rpg", "aliasMap": {"rimuru-rpg-mining": "mining", "rimuru-mining": "mining", "rimuru-mine": "mine", "rimuru-tambang": "tambang"}, "description": "Menambang untuk mendapatkan ores dan gems", "usage": ".mining", "example": ".mining", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/mining.js", metadata, m, extra)
handler.help = ["rimuru-rpg-mining"]
handler.command = ["rimuru-rpg-mining", "rimuru-mining", "rimuru-mine", "rimuru-tambang"]
handler.tags = ["rpg"]
handler.description = "Menambang untuk mendapatkan ores dan gems"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mining", "alias": ["mine", "tambang"], "category": "rpg", "description": "Menambang untuk mendapatkan ores dan gems", "usage": ".mining", "example": ".mining", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-mining": "mining", "rimuru-mining": "mining", "rimuru-mine": "mine", "rimuru-tambang": "tambang"}
export default handler
