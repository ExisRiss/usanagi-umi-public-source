/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/suppbypass.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "suppbypass", "category": "tools", "aliasMap": {"rimuru-tools-suppbypass": "suppbypass", "rimuru-suppbypass": "suppbypass", "rimuru-supportbypass": "supportbypass", "rimuru-bypasslist": "bypasslist", "rimuru-listbypass": "listbypass", "suppbypass": "suppbypass", "supportbypass": "supportbypass", "bypasslist": "bypasslist", "listbypass": "listbypass"}, "description": "List shortlink yang bisa di-bypass", "usage": ".suppbypass", "example": ".suppbypass", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/suppbypass.js", metadata, m, extra)
handler.help = ["rimuru-tools-suppbypass"]
handler.command = ["rimuru-tools-suppbypass", "rimuru-suppbypass", "rimuru-supportbypass", "rimuru-bypasslist", "rimuru-listbypass", "suppbypass", "supportbypass", "bypasslist", "listbypass"]
handler.tags = ["tools"]
handler.description = "List shortlink yang bisa di-bypass"
handler.importSource = "rimuru"
handler.importConfig = {"name": "suppbypass", "alias": ["supportbypass", "bypasslist", "listbypass"], "category": "tools", "description": "List shortlink yang bisa di-bypass", "usage": ".suppbypass", "example": ".suppbypass", "isOwner": false, "isPremium": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-suppbypass": "suppbypass", "rimuru-suppbypass": "suppbypass", "rimuru-supportbypass": "supportbypass", "rimuru-bypasslist": "bypasslist", "rimuru-listbypass": "listbypass", "suppbypass": "suppbypass", "supportbypass": "supportbypass", "bypasslist": "bypasslist", "listbypass": "listbypass"}
export default handler
