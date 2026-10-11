/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/wmp1.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wmp1", "category": "maker", "aliasMap": {"rimuru-maker-wmp1": "wmp1", "rimuru-wmp1": "wmp1", "rimuru-canvaswmp1": "canvaswmp1", "rimuru-wmp1meme": "wmp1meme", "wmp1": "wmp1", "canvaswmp1": "canvaswmp1", "wmp1meme": "wmp1meme"}, "description": "Membuat gambar Canvas WMP1 dengan teks custom", "usage": ".wmp1 <teks1|teks2|teks3|teks4>", "example": ".wmp1 ngapain cemburu|kan|cuman sebatas|teman", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/wmp1.js", metadata, m, extra)
handler.help = ["rimuru-maker-wmp1 <teks1|teks2|teks3|teks4>"]
handler.command = ["rimuru-maker-wmp1", "rimuru-wmp1", "rimuru-canvaswmp1", "rimuru-wmp1meme", "wmp1", "canvaswmp1", "wmp1meme"]
handler.tags = ["maker"]
handler.description = "Membuat gambar Canvas WMP1 dengan teks custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wmp1", "alias": ["canvaswmp1", "wmp1meme"], "category": "maker", "description": "Membuat gambar Canvas WMP1 dengan teks custom", "usage": ".wmp1 <teks1|teks2|teks3|teks4>", "example": ".wmp1 ngapain cemburu|kan|cuman sebatas|teman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-wmp1": "wmp1", "rimuru-wmp1": "wmp1", "rimuru-canvaswmp1": "canvaswmp1", "rimuru-wmp1meme": "wmp1meme", "wmp1": "wmp1", "canvaswmp1": "canvaswmp1", "wmp1meme": "wmp1meme"}
export default handler
