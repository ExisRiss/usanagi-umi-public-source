/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/oh-no.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "oh-no", "category": "canvas", "aliasMap": {"rimuru-canvas-oh-no": "oh-no", "rimuru-oh-no": "oh-no", "rimuru-ohno": "ohno", "rimuru-ohnomeme": "ohnomeme", "oh-no": "oh-no", "ohno": "ohno", "ohnomeme": "ohnomeme"}, "description": "Membuat meme oh no", "usage": ".oh-no <teks>", "example": ".oh-no Aku lupa ngerjain PR", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/oh-no.js", metadata, m, extra)
handler.help = ["rimuru-canvas-oh-no <teks>"]
handler.command = ["rimuru-canvas-oh-no", "rimuru-oh-no", "rimuru-ohno", "rimuru-ohnomeme", "oh-no", "ohno", "ohnomeme"]
handler.tags = ["canvas"]
handler.description = "Membuat meme oh no"
handler.importSource = "rimuru"
handler.importConfig = {"name": "oh-no", "alias": ["ohno", "ohnomeme"], "category": "canvas", "description": "Membuat meme oh no", "usage": ".oh-no <teks>", "example": ".oh-no Aku lupa ngerjain PR", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-oh-no": "oh-no", "rimuru-oh-no": "oh-no", "rimuru-ohno": "ohno", "rimuru-ohnomeme": "ohnomeme", "oh-no": "oh-no", "ohno": "ohno", "ohnomeme": "ohnomeme"}
export default handler
