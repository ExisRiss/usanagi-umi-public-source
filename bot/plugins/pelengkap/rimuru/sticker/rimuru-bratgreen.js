/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/bratgreen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bratgreen", "category": "sticker", "aliasMap": {"rimuru-sticker-bratgreen": "bratgreen", "rimuru-bratgreen": "bratgreen", "rimuru-brat2": "brat2", "bratgreen": "bratgreen"}, "description": "Membuat sticker brat ijo", "usage": ".brat2 <text>", "example": ".brat2 Hai semua", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/bratgreen.js", metadata, m, extra)
handler.help = ["rimuru-sticker-bratgreen <text>"]
handler.command = ["rimuru-sticker-bratgreen", "rimuru-bratgreen", "rimuru-brat2", "bratgreen"]
handler.tags = ["sticker"]
handler.description = "Membuat sticker brat ijo"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bratgreen", "alias": ["brat2"], "category": "sticker", "description": "Membuat sticker brat ijo", "usage": ".brat2 <text>", "example": ".brat2 Hai semua", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-bratgreen": "bratgreen", "rimuru-bratgreen": "bratgreen", "rimuru-brat2": "brat2", "bratgreen": "bratgreen"}
export default handler
