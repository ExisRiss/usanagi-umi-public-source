/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/uppastebin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "up-pb", "category": "tools", "aliasMap": {"rimuru-tools-up-pb": "up-pb", "rimuru-up-pb": "up-pb", "rimuru-uppastebin": "uppastebin", "up-pb": "up-pb", "uppastebin": "uppastebin"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/uppastebin.js", metadata, m, extra)
handler.help = ["rimuru-tools-up-pb"]
handler.command = ["rimuru-tools-up-pb", "rimuru-up-pb", "rimuru-uppastebin", "up-pb", "uppastebin"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "up-pb", "alias": ["uppastebin"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-up-pb": "up-pb", "rimuru-up-pb": "up-pb", "rimuru-uppastebin": "uppastebin", "up-pb": "up-pb", "uppastebin": "uppastebin"}
export default handler
