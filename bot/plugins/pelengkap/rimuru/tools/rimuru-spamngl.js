/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/spamngl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spamngl", "category": "tools", "aliasMap": {"rimuru-tools-spamngl": "spamngl", "rimuru-spamngl": "spamngl", "spamngl": "spamngl"}, "description": "Send NGL Spam", "usage": ".spamngl <url> | <text> | <jumlah>", "example": ".spamngl https://ngl.link/xxxx | hai | 10", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/spamngl.js", metadata, m, extra)
handler.help = ["rimuru-tools-spamngl <url> | <text> | <jumlah>"]
handler.command = ["rimuru-tools-spamngl", "rimuru-spamngl", "spamngl"]
handler.tags = ["tools"]
handler.description = "Send NGL Spam"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spamngl", "alias": [], "category": "tools", "description": "Send NGL Spam", "usage": ".spamngl <url> | <text> | <jumlah>", "example": ".spamngl https://ngl.link/xxxx | hai | 10", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-spamngl": "spamngl", "rimuru-spamngl": "spamngl", "spamngl": "spamngl"}
export default handler
