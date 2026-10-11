/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/bratvid2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bratvid2", "category": "sticker", "aliasMap": {"rimuru-sticker-bratvid2": "bratvid2", "rimuru-bratvid2": "bratvid2", "rimuru-bratv2": "bratv2", "bratv2": "bratv2"}, "description": "Generate brat video v2", "usage": ".bratvid2 <text>", "example": ".bratvid2 hello world", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/bratvid2.js", metadata, m, extra)
handler.help = ["rimuru-sticker-bratvid2 <text>"]
handler.command = ["rimuru-sticker-bratvid2", "rimuru-bratvid2", "rimuru-bratv2", "bratv2"]
handler.tags = ["sticker"]
handler.description = "Generate brat video v2"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bratvid2", "alias": ["bratv2"], "category": "sticker", "description": "Generate brat video v2", "usage": ".bratvid2 <text>", "example": ".bratvid2 hello world", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-bratvid2": "bratvid2", "rimuru-bratvid2": "bratvid2", "rimuru-bratv2": "bratv2", "bratv2": "bratv2"}
export default handler
