/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/saluranbot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "saluran", "category": "main", "aliasMap": {"rimuru-main-saluran": "saluran", "rimuru-saluran": "saluran", "rimuru-channel": "channel", "rimuru-ch": "ch", "rimuru-joinch": "joinch", "saluran": "saluran", "channel": "channel", "ch": "ch", "joinch": "joinch"}, "description": "Join saluran resmi Rimuru 😈", "usage": ".saluran", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/saluranbot.js", metadata, m, extra)
handler.help = ["rimuru-main-saluran"]
handler.command = ["rimuru-main-saluran", "rimuru-saluran", "rimuru-channel", "rimuru-ch", "rimuru-joinch", "saluran", "channel", "ch", "joinch"]
handler.tags = ["main"]
handler.description = "Join saluran resmi Rimuru 😈"
handler.importSource = "rimuru"
handler.importConfig = {"name": "saluran", "alias": ["channel", "ch", "joinch"], "category": "main", "description": "Join saluran resmi Rimuru 😈", "usage": ".saluran", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-saluran": "saluran", "rimuru-saluran": "saluran", "rimuru-channel": "channel", "rimuru-ch": "ch", "rimuru-joinch": "joinch", "saluran": "saluran", "channel": "channel", "ch": "ch", "joinch": "joinch"}
export default handler
