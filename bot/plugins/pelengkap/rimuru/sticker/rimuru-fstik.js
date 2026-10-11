/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/fstik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fstik", "category": "sticker", "aliasMap": {"rimuru-sticker-fstik": "fstik", "rimuru-fstik": "fstik", "rimuru-stickerinfo": "stickerinfo", "fstik": "fstik", "stickerinfo": "stickerinfo"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/fstik.js", metadata, m, extra)
handler.help = ["rimuru-sticker-fstik"]
handler.command = ["rimuru-sticker-fstik", "rimuru-fstik", "rimuru-stickerinfo", "fstik", "stickerinfo"]
handler.tags = ["sticker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fstik", "alias": ["stickerinfo"], "category": "sticker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-fstik": "fstik", "rimuru-fstik": "fstik", "rimuru-stickerinfo": "stickerinfo", "fstik": "fstik", "stickerinfo": "stickerinfo"}
export default handler
