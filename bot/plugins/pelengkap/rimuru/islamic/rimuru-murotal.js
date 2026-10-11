/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/murotal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "murothal", "category": "islamic", "aliasMap": {"rimuru-islamic-murothal": "murothal", "rimuru-murothal": "murothal", "murothal": "murothal"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/murotal.js", metadata, m, extra)
handler.help = ["rimuru-islamic-murothal"]
handler.command = ["rimuru-islamic-murothal", "rimuru-murothal", "murothal"]
handler.tags = ["islamic"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "murothal", "alias": [], "category": "islamic", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-islamic-murothal": "murothal", "rimuru-murothal": "murothal", "murothal": "murothal"}
export default handler
