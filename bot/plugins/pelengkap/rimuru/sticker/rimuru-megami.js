/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/megami.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ryo", "category": "sticker", "aliasMap": {"rimuru-sticker-ryo": "ryo", "rimuru-ryo": "ryo", "ryo": "ryo"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/megami.js", metadata, m, extra)
handler.help = ["rimuru-sticker-ryo"]
handler.command = ["rimuru-sticker-ryo", "rimuru-ryo", "ryo"]
handler.tags = ["sticker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ryo", "alias": [], "category": "sticker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-sticker-ryo": "ryo", "rimuru-ryo": "ryo", "ryo": "ryo"}
export default handler
