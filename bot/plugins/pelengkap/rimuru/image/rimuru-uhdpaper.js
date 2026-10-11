/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/image/uhdpaper.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "uhdpaper", "category": "image", "aliasMap": {"rimuru-image-uhdpaper": "uhdpaper", "rimuru-uhdpaper": "uhdpaper", "uhdpaper": "uhdpaper"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/image/uhdpaper.js", metadata, m, extra)
handler.help = ["rimuru-image-uhdpaper"]
handler.command = ["rimuru-image-uhdpaper", "rimuru-uhdpaper", "uhdpaper"]
handler.tags = ["image"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "uhdpaper", "alias": [], "category": "image", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-image-uhdpaper": "uhdpaper", "rimuru-uhdpaper": "uhdpaper", "uhdpaper": "uhdpaper"}
export default handler
