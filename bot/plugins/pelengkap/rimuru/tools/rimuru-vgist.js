/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/vgist.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "vgist", "category": "tools", "aliasMap": {"rimuru-tools-vgist": "vgist", "rimuru-vgist": "vgist", "vgist": "vgist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/vgist.js", metadata, m, extra)
handler.help = ["rimuru-tools-vgist"]
handler.command = ["rimuru-tools-vgist", "rimuru-vgist", "vgist"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "vgist", "alias": [], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-vgist": "vgist", "rimuru-vgist": "vgist", "vgist": "vgist"}
export default handler
