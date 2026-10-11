/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/husbu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "husbu", "category": "random", "aliasMap": {"rimuru-random-husbu": "husbu", "rimuru-husbu": "husbu", "rimuru-husbando": "husbando", "husbu": "husbu", "husbando": "husbando"}, "description": "Random gambar husbu/husbando anime", "usage": ".husbu", "example": ".husbu", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/husbu.js", metadata, m, extra)
handler.help = ["rimuru-random-husbu"]
handler.command = ["rimuru-random-husbu", "rimuru-husbu", "rimuru-husbando", "husbu", "husbando"]
handler.tags = ["random"]
handler.description = "Random gambar husbu/husbando anime"
handler.importSource = "rimuru"
handler.importConfig = {"name": "husbu", "alias": ["husbando"], "category": "random", "description": "Random gambar husbu/husbando anime", "usage": ".husbu", "example": ".husbu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-husbu": "husbu", "rimuru-husbu": "husbu", "rimuru-husbando": "husbando", "husbu": "husbu", "husbando": "husbando"}
export default handler
