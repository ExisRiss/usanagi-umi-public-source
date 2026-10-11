/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cosba.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cosba", "category": "random", "aliasMap": {"rimuru-random-cosba": "cosba", "rimuru-cosba": "cosba", "rimuru-cosplayba": "cosplayba", "cosba": "cosba", "cosplayba": "cosplayba"}, "description": "Random gambar cosplay Blue Archive", "usage": ".cosba", "example": ".cosba", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cosba.js", metadata, m, extra)
handler.help = ["rimuru-random-cosba"]
handler.command = ["rimuru-random-cosba", "rimuru-cosba", "rimuru-cosplayba", "cosba", "cosplayba"]
handler.tags = ["random"]
handler.description = "Random gambar cosplay Blue Archive"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cosba", "alias": ["cosplayba", "cosba"], "category": "random", "description": "Random gambar cosplay Blue Archive", "usage": ".cosba", "example": ".cosba", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-cosba": "cosba", "rimuru-cosba": "cosba", "rimuru-cosplayba": "cosplayba", "cosba": "cosba", "cosplayba": "cosplayba"}
export default handler
