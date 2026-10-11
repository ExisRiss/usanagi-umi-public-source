/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/kannabrat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kannabrat", "category": "sticker", "aliasMap": {"rimuru-sticker-kannabrat": "kannabrat", "rimuru-kannabrat": "kannabrat", "rimuru-kanna": "kanna", "rimuru-kannagen": "kannagen", "kannabrat": "kannabrat", "kanna": "kanna", "kannagen": "kannagen"}, "description": "Membuat sticker Kanna dengan teks", "usage": ".kannabrat <teks>", "example": ".kannabrat Hello World", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/kannabrat.js", metadata, m, extra)
handler.help = ["rimuru-sticker-kannabrat <teks>"]
handler.command = ["rimuru-sticker-kannabrat", "rimuru-kannabrat", "rimuru-kanna", "rimuru-kannagen", "kannabrat", "kanna", "kannagen"]
handler.tags = ["sticker"]
handler.description = "Membuat sticker Kanna dengan teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kannabrat", "alias": ["kanna", "kannagen"], "category": "sticker", "description": "Membuat sticker Kanna dengan teks", "usage": ".kannabrat <teks>", "example": ".kannabrat Hello World", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-kannabrat": "kannabrat", "rimuru-kannabrat": "kannabrat", "rimuru-kanna": "kanna", "rimuru-kannagen": "kannagen", "kannabrat": "kannabrat", "kanna": "kanna", "kannagen": "kannagen"}
export default handler
