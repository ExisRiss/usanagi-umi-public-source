/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/swm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "swm", "category": "sticker", "aliasMap": {"rimuru-sticker-swm": "swm", "rimuru-swm": "swm", "rimuru-wm": "wm", "rimuru-stickerwm": "stickerwm", "rimuru-stickermark": "stickermark", "rimuru-colong": "colong", "swm": "swm", "stickerwm": "stickerwm", "stickermark": "stickermark", "colong": "colong"}, "description": "Mengganti packname dan author pada sticker", "usage": ".swm <packname> atau .swm <packname>|<author>", "example": ".swm BotName", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/swm.js", metadata, m, extra)
handler.help = ["rimuru-sticker-swm <packname> atau .swm <packname>|<author>"]
handler.command = ["rimuru-sticker-swm", "rimuru-swm", "rimuru-wm", "rimuru-stickerwm", "rimuru-stickermark", "rimuru-colong", "swm", "stickerwm", "stickermark", "colong"]
handler.tags = ["sticker"]
handler.description = "Mengganti packname dan author pada sticker"
handler.importSource = "rimuru"
handler.importConfig = {"name": "swm", "alias": ["wm", "stickerwm", "stickermark", "colong"], "category": "sticker", "description": "Mengganti packname dan author pada sticker", "usage": ".swm <packname> atau .swm <packname>|<author>", "example": ".swm BotName", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-swm": "swm", "rimuru-swm": "swm", "rimuru-wm": "wm", "rimuru-stickerwm": "stickerwm", "rimuru-stickermark": "stickermark", "rimuru-colong": "colong", "swm": "swm", "stickerwm": "stickerwm", "stickermark": "stickermark", "colong": "colong"}
export default handler
