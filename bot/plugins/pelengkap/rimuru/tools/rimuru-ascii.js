/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ascii.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "imagetoasci", "category": "tools", "aliasMap": {"rimuru-tools-imagetoasci": "imagetoasci", "rimuru-imagetoasci": "imagetoasci", "rimuru-imgascii": "imgascii", "rimuru-ascii": "ascii", "imagetoasci": "imagetoasci", "imgascii": "imgascii", "ascii": "ascii"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ascii.js", metadata, m, extra)
handler.help = ["rimuru-tools-imagetoasci"]
handler.command = ["rimuru-tools-imagetoasci", "rimuru-imagetoasci", "rimuru-imgascii", "rimuru-ascii", "imagetoasci", "imgascii", "ascii"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "imagetoasci", "alias": ["imgascii", "ascii"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-imagetoasci": "imagetoasci", "rimuru-imagetoasci": "imagetoasci", "rimuru-imgascii": "imgascii", "rimuru-ascii": "ascii", "imagetoasci": "imagetoasci", "imgascii": "imgascii", "ascii": "ascii"}
export default handler
