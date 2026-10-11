/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/seberapagila.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "seberapagila", "category": "fun", "aliasMap": {"rimuru-fun-seberapagila": "seberapagila", "rimuru-seberapagila": "seberapagila", "seberapagila": "seberapagila"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/seberapagila.js", metadata, m, extra)
handler.help = ["rimuru-fun-seberapagila"]
handler.command = ["rimuru-fun-seberapagila", "rimuru-seberapagila", "seberapagila"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "seberapagila", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-seberapagila": "seberapagila", "rimuru-seberapagila": "seberapagila", "seberapagila": "seberapagila"}
export default handler
