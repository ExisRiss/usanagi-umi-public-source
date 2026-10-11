/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/sapa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sapa", "category": "general", "aliasMap": {"rimuru-general-sapa": "sapa", "rimuru-sapa": "sapa", "rimuru-greet": "greet", "rimuru-sayhi": "sayhi", "sapa": "sapa", "greet": "greet", "sayhi": "sayhi"}, "description": "Rimuru nyapa kamu dengan random pesan manis", "usage": ".sapa", "example": ".sapa", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/sapa.js", metadata, m, extra)
handler.help = ["rimuru-general-sapa"]
handler.command = ["rimuru-general-sapa", "rimuru-sapa", "rimuru-greet", "rimuru-sayhi", "sapa", "greet", "sayhi"]
handler.tags = ["general"]
handler.description = "Rimuru nyapa kamu dengan random pesan manis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sapa", "alias": ["greet", "sayhi"], "category": "general", "description": "Rimuru nyapa kamu dengan random pesan manis", "usage": ".sapa", "example": ".sapa", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-sapa": "sapa", "rimuru-sapa": "sapa", "rimuru-greet": "greet", "rimuru-sayhi": "sayhi", "sapa": "sapa", "greet": "greet", "sayhi": "sayhi"}
export default handler
