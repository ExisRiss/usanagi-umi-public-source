/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/lahelu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lahelu", "category": "random", "aliasMap": {"rimuru-random-lahelu": "lahelu", "rimuru-lahelu": "lahelu", "rimuru-randommeme": "randommeme", "lahelu": "lahelu", "randommeme": "randommeme"}, "description": "Random gambar lahelu", "usage": ".lahelu", "example": ".lahelu", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/lahelu.js", metadata, m, extra)
handler.help = ["rimuru-random-lahelu"]
handler.command = ["rimuru-random-lahelu", "rimuru-lahelu", "rimuru-randommeme", "lahelu", "randommeme"]
handler.tags = ["random"]
handler.description = "Random gambar lahelu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lahelu", "alias": ["randommeme"], "category": "random", "description": "Random gambar lahelu", "usage": ".lahelu", "example": ".lahelu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-lahelu": "lahelu", "rimuru-lahelu": "lahelu", "rimuru-randommeme": "randommeme", "lahelu": "lahelu", "randommeme": "randommeme"}
export default handler
