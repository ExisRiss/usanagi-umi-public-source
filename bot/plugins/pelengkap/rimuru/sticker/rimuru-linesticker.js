/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/linesticker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "linesticker", "category": "sticker", "aliasMap": {"rimuru-sticker-linesticker": "linesticker", "rimuru-linesticker": "linesticker", "rimuru-linepack": "linepack", "rimuru-line": "line", "linesticker": "linesticker", "linepack": "linepack", "line": "line"}, "description": "Download sticker pack LINE", "usage": ".linesticker <url>", "example": ".linesticker https://store.line.me/stickershop/product/9801/en", "cooldown": 25, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/linesticker.js", metadata, m, extra)
handler.help = ["rimuru-sticker-linesticker <url>"]
handler.command = ["rimuru-sticker-linesticker", "rimuru-linesticker", "rimuru-linepack", "rimuru-line", "linesticker", "linepack", "line"]
handler.tags = ["sticker"]
handler.description = "Download sticker pack LINE"
handler.importSource = "rimuru"
handler.importConfig = {"name": "linesticker", "alias": ["linepack", "line"], "category": "sticker", "description": "Download sticker pack LINE", "usage": ".linesticker <url>", "example": ".linesticker https://store.line.me/stickershop/product/9801/en", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 25, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-linesticker": "linesticker", "rimuru-linesticker": "linesticker", "rimuru-linepack": "linepack", "rimuru-line": "line", "linesticker": "linesticker", "linepack": "linepack", "line": "line"}
export default handler
