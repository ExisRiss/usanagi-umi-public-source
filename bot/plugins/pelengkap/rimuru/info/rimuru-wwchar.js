/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/wwchar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wwchar", "category": "info", "aliasMap": {"rimuru-info-wwchar": "wwchar", "rimuru-wwchar": "wwchar", "wwchar": "wwchar"}, "description": "Informasi karakter Wuthering Waves", "usage": ".wwchar <nama karakter>", "example": ".wwchar Chisa", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/wwchar.js", metadata, m, extra)
handler.help = ["rimuru-info-wwchar <nama karakter>"]
handler.command = ["rimuru-info-wwchar", "rimuru-wwchar", "wwchar"]
handler.tags = ["info"]
handler.description = "Informasi karakter Wuthering Waves"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wwchar", "alias": [], "category": "info", "description": "Informasi karakter Wuthering Waves", "usage": ".wwchar <nama karakter>", "example": ".wwchar Chisa", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-wwchar": "wwchar", "rimuru-wwchar": "wwchar", "wwchar": "wwchar"}
export default handler
