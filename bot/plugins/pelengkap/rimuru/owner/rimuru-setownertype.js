/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setownertype.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setownertype", "category": "owner", "aliasMap": {"rimuru-owner-setownertype": "setownertype", "rimuru-setownertype": "setownertype", "rimuru-ownertype": "ownertype", "rimuru-ownervariant": "ownervariant", "rimuru-ownerstyle": "ownerstyle", "setownertype": "setownertype", "ownertype": "ownertype", "ownervariant": "ownervariant", "ownerstyle": "ownerstyle"}, "description": "Mengatur variant tampilan owner message", "usage": ".setownertype", "example": ".setownertype", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setownertype.js", metadata, m, extra)
handler.help = ["rimuru-owner-setownertype"]
handler.command = ["rimuru-owner-setownertype", "rimuru-setownertype", "rimuru-ownertype", "rimuru-ownervariant", "rimuru-ownerstyle", "setownertype", "ownertype", "ownervariant", "ownerstyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan owner message"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setownertype", "alias": ["ownertype", "ownervariant", "ownerstyle"], "category": "owner", "description": "Mengatur variant tampilan owner message", "usage": ".setownertype", "example": ".setownertype", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setownertype": "setownertype", "rimuru-setownertype": "setownertype", "rimuru-ownertype": "ownertype", "rimuru-ownervariant": "ownervariant", "rimuru-ownerstyle": "ownerstyle", "setownertype": "setownertype", "ownertype": "ownertype", "ownervariant": "ownervariant", "ownerstyle": "ownerstyle"}
export default handler
