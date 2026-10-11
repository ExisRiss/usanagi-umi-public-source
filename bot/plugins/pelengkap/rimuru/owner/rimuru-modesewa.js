/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/modesewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "modesewa", "category": "owner", "aliasMap": {"rimuru-owner-modesewa": "modesewa", "rimuru-modesewa": "modesewa", "rimuru-ms": "ms", "rimuru-sewamode": "sewamode", "modesewa": "modesewa", "ms": "ms", "sewamode": "sewamode"}, "description": "Mode sewa bot - aktifkan/nonaktifkan sistem sewa", "usage": ".modesewa <on/off/check>", "example": ".modesewa on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/modesewa.js", metadata, m, extra)
handler.help = ["rimuru-owner-modesewa <on/off/check>"]
handler.command = ["rimuru-owner-modesewa", "rimuru-modesewa", "rimuru-ms", "rimuru-sewamode", "modesewa", "ms", "sewamode"]
handler.tags = ["owner"]
handler.description = "Mode sewa bot - aktifkan/nonaktifkan sistem sewa"
handler.importSource = "rimuru"
handler.importConfig = {"name": "modesewa", "alias": ["ms", "sewamode", "modesewa"], "category": "owner", "description": "Mode sewa bot - aktifkan/nonaktifkan sistem sewa", "usage": ".modesewa <on/off/check>", "example": ".modesewa on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-modesewa": "modesewa", "rimuru-modesewa": "modesewa", "rimuru-ms": "ms", "rimuru-sewamode": "sewamode", "modesewa": "modesewa", "ms": "ms", "sewamode": "sewamode"}
export default handler
