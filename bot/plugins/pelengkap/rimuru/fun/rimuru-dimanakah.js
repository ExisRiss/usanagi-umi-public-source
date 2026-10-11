/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/dimanakah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dimanakah", "category": "fun", "aliasMap": {"rimuru-fun-dimanakah": "dimanakah", "rimuru-dimanakah": "dimanakah"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/dimanakah.js", metadata, m, extra)
handler.help = ["rimuru-fun-dimanakah"]
handler.command = ["rimuru-fun-dimanakah", "rimuru-dimanakah"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dimanakah", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-dimanakah": "dimanakah", "rimuru-dimanakah": "dimanakah"}
export default handler
