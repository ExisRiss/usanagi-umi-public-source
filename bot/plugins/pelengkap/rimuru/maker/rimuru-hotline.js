/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/hotline.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hotline", "category": "maker", "aliasMap": {"rimuru-maker-hotline": "hotline", "rimuru-hotline": "hotline", "hotline": "hotline"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/hotline.js", metadata, m, extra)
handler.help = ["rimuru-maker-hotline"]
handler.command = ["rimuru-maker-hotline", "rimuru-hotline", "hotline"]
handler.tags = ["maker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hotline", "alias": [], "category": "maker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-hotline": "hotline", "rimuru-hotline": "hotline", "hotline": "hotline"}
export default handler
