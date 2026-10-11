/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/ship.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ship", "category": "canvas", "aliasMap": {"rimuru-canvas-ship": "ship"}, "description": "Buat gambar persentase jodoh", "usage": ".ship @tag1 @tag2", "example": ".ship @tag1 @tag2", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/ship.js", metadata, m, extra)
handler.help = ["rimuru-canvas-ship @tag1 @tag2"]
handler.command = ["rimuru-canvas-ship"]
handler.tags = ["canvas"]
handler.description = "Buat gambar persentase jodoh"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ship", "alias": ["ship", "jodoh"], "category": "canvas", "description": "Buat gambar persentase jodoh", "usage": ".ship @tag1 @tag2", "example": ".ship @tag1 @tag2", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-ship": "ship"}
export default handler
