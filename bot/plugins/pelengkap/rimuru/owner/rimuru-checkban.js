/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/checkban.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "checkban", "category": "owner", "aliasMap": {"rimuru-owner-checkban": "checkban", "rimuru-checkban": "checkban", "checkban": "checkban"}, "description": "Check actual ban state", "usage": ".checkban"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/checkban.js", metadata, m, extra)
handler.help = ["rimuru-owner-checkban"]
handler.command = ["rimuru-owner-checkban", "rimuru-checkban", "checkban"]
handler.tags = ["owner"]
handler.description = "Check actual ban state"
handler.importSource = "rimuru"
handler.importConfig = {"name": "checkban", "alias": [], "category": "owner", "description": "Check actual ban state", "usage": ".checkban", "isOwner": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-checkban": "checkban", "rimuru-checkban": "checkban", "checkban": "checkban"}
export default handler
