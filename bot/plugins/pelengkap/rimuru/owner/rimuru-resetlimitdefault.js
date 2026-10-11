/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/resetlimitdefault.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetlimitdefault", "category": "owner", "aliasMap": {"rimuru-owner-resetlimitdefault": "resetlimitdefault", "rimuru-resetlimitdefault": "resetlimitdefault", "rimuru-defaultlimitreset": "defaultlimitreset", "resetlimitdefault": "resetlimitdefault", "defaultlimitreset": "defaultlimitreset"}, "description": "Reset default limit ke config asli", "usage": ".resetlimitdefault", "example": ".resetlimitdefault", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/resetlimitdefault.js", metadata, m, extra)
handler.help = ["rimuru-owner-resetlimitdefault"]
handler.command = ["rimuru-owner-resetlimitdefault", "rimuru-resetlimitdefault", "rimuru-defaultlimitreset", "resetlimitdefault", "defaultlimitreset"]
handler.tags = ["owner"]
handler.description = "Reset default limit ke config asli"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetlimitdefault", "alias": ["defaultlimitreset"], "category": "owner", "description": "Reset default limit ke config asli", "usage": ".resetlimitdefault", "example": ".resetlimitdefault", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-resetlimitdefault": "resetlimitdefault", "rimuru-resetlimitdefault": "resetlimitdefault", "rimuru-defaultlimitreset": "defaultlimitreset", "resetlimitdefault": "resetlimitdefault", "defaultlimitreset": "defaultlimitreset"}
export default handler
