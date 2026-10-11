/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/textlogo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "textlogo", "category": "maker", "aliasMap": {"rimuru-maker-textlogo": "textlogo", "rimuru-textlogo": "textlogo", "textlogo": "textlogo"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/textlogo.js", metadata, m, extra)
handler.help = ["rimuru-maker-textlogo"]
handler.command = ["rimuru-maker-textlogo", "rimuru-textlogo", "textlogo"]
handler.tags = ["maker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "textlogo", "alias": [], "category": "maker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-textlogo": "textlogo", "rimuru-textlogo": "textlogo", "textlogo": "textlogo"}
export default handler
