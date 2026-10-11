/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/bmkggempa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bmkggempa", "category": "info", "aliasMap": {"rimuru-info-bmkggempa": "bmkggempa", "rimuru-bmkggempa": "bmkggempa", "bmkggempa": "bmkggempa"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/bmkggempa.js", metadata, m, extra)
handler.help = ["rimuru-info-bmkggempa"]
handler.command = ["rimuru-info-bmkggempa", "rimuru-bmkggempa", "bmkggempa"]
handler.tags = ["info"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bmkggempa", "alias": [], "category": "info", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-info-bmkggempa": "bmkggempa", "rimuru-bmkggempa": "bmkggempa", "bmkggempa": "bmkggempa"}
export default handler
