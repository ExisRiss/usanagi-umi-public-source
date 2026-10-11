/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/fakegroupv2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakegroupv2", "category": "maker", "aliasMap": {"rimuru-maker-fakegroupv2": "fakegroupv2", "rimuru-fakegroupv2": "fakegroupv2", "fakegroupv2": "fakegroupv2"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/fakegroupv2.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakegroupv2"]
handler.command = ["rimuru-maker-fakegroupv2", "rimuru-fakegroupv2", "fakegroupv2"]
handler.tags = ["maker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakegroupv2", "alias": [], "category": "maker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-fakegroupv2": "fakegroupv2", "rimuru-fakegroupv2": "fakegroupv2", "fakegroupv2": "fakegroupv2"}
export default handler
