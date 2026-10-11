/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/patrickmeme.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "patrickmeme", "category": "canvas", "aliasMap": {"rimuru-canvas-patrickmeme": "patrickmeme", "rimuru-patrickmeme": "patrickmeme", "rimuru-pmeme": "pmeme", "rimuru-memepatrick": "memepatrick", "patrickmeme": "patrickmeme", "pmeme": "pmeme", "memepatrick": "memepatrick"}, "description": "Membuat meme patrick dengan teks kustom", "usage": ".patrickmeme nama|teks", "example": ".patrickmeme Rin|Katanya just friend kok manggil sayang", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/patrickmeme.js", metadata, m, extra)
handler.help = ["rimuru-canvas-patrickmeme nama|teks"]
handler.command = ["rimuru-canvas-patrickmeme", "rimuru-patrickmeme", "rimuru-pmeme", "rimuru-memepatrick", "patrickmeme", "pmeme", "memepatrick"]
handler.tags = ["canvas"]
handler.description = "Membuat meme patrick dengan teks kustom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "patrickmeme", "alias": ["pmeme", "memepatrick"], "category": "canvas", "description": "Membuat meme patrick dengan teks kustom", "usage": ".patrickmeme nama|teks", "example": ".patrickmeme Rin|Katanya just friend kok manggil sayang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-patrickmeme": "patrickmeme", "rimuru-patrickmeme": "patrickmeme", "rimuru-pmeme": "pmeme", "rimuru-memepatrick": "memepatrick", "patrickmeme": "patrickmeme", "pmeme": "pmeme", "memepatrick": "memepatrick"}
export default handler
