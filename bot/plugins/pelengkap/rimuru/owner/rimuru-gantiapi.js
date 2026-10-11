/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/gantiapi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gantiapi", "category": "owner", "aliasMap": {"rimuru-owner-gantiapi": "gantiapi", "rimuru-gantiapi": "gantiapi", "rimuru-setapi": "setapi", "gantiapi": "gantiapi", "setapi": "setapi"}, "description": "Mengganti API di plugin tertentu", "usage": ".gantiapi <plugin> <api>", "example": ".gantiapi tomediafire sk-xxxx", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/gantiapi.js", metadata, m, extra)
handler.help = ["rimuru-owner-gantiapi <plugin> <api>"]
handler.command = ["rimuru-owner-gantiapi", "rimuru-gantiapi", "rimuru-setapi", "gantiapi", "setapi"]
handler.tags = ["owner"]
handler.description = "Mengganti API di plugin tertentu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gantiapi", "alias": ["setapi"], "category": "owner", "description": "Mengganti API di plugin tertentu", "usage": ".gantiapi <plugin> <api>", "example": ".gantiapi tomediafire sk-xxxx", "isOwner": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-gantiapi": "gantiapi", "rimuru-gantiapi": "gantiapi", "rimuru-setapi": "setapi", "gantiapi": "gantiapi", "setapi": "setapi"}
export default handler
