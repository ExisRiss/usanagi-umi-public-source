/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/couple.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ppcouple", "category": "random", "aliasMap": {"rimuru-random-ppcouple": "ppcouple", "rimuru-ppcouple": "ppcouple", "rimuru-cp": "cp", "rimuru-ppcp": "ppcp"}, "description": "Random gambar pp couple", "usage": ".ppcouple", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/couple.js", metadata, m, extra)
handler.help = ["rimuru-random-ppcouple"]
handler.command = ["rimuru-random-ppcouple", "rimuru-ppcouple", "rimuru-cp", "rimuru-ppcp"]
handler.tags = ["random"]
handler.description = "Random gambar pp couple"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ppcouple", "alias": ["cp", "ppcp"], "category": "random", "description": "Random gambar pp couple", "usage": ".ppcouple", "isGroup": true, "isBotAdmin": false, "isAdmin": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-random-ppcouple": "ppcouple", "rimuru-ppcouple": "ppcouple", "rimuru-cp": "cp", "rimuru-ppcp": "ppcp"}
export default handler
