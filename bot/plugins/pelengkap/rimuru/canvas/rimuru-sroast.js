/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/sroast.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sroast", "category": "canvas", "aliasMap": {"rimuru-canvas-sroast": "sroast", "rimuru-sroast": "sroast", "rimuru-stickerroast": "stickerroast", "sroast": "sroast", "stickerroast": "stickerroast"}, "description": "Buat stiker roast", "usage": ".sroast <teks1> | <teks2> | <teks3>", "example": ".sroast kamu | JELEK | banget", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/sroast.js", metadata, m, extra)
handler.help = ["rimuru-canvas-sroast <teks1> | <teks2> | <teks3>"]
handler.command = ["rimuru-canvas-sroast", "rimuru-sroast", "rimuru-stickerroast", "sroast", "stickerroast"]
handler.tags = ["canvas"]
handler.description = "Buat stiker roast"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sroast", "alias": ["stickerroast", "sroast"], "category": "canvas", "description": "Buat stiker roast", "usage": ".sroast <teks1> | <teks2> | <teks3>", "example": ".sroast kamu | JELEK | banget", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-sroast": "sroast", "rimuru-sroast": "sroast", "rimuru-stickerroast": "stickerroast", "sroast": "sroast", "stickerroast": "stickerroast"}
export default handler
