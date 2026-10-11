/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeff.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeff", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeff": "fakeff", "rimuru-fakeff": "fakeff", "fakeff": "fakeff"}, "description": "Bikin gambar banner Fake FF (Solo)", "usage": ".fakeff <teks>|[bgNum]", "example": ".fakeff Fauzan|2", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeff.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeff <teks>|[bgNum]"]
handler.command = ["rimuru-canvas-fakeff", "rimuru-fakeff", "fakeff"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar banner Fake FF (Solo)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeff", "alias": [], "category": "canvas", "description": "Bikin gambar banner Fake FF (Solo)", "usage": ".fakeff <teks>|[bgNum]", "example": ".fakeff Fauzan|2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeff": "fakeff", "rimuru-fakeff": "fakeff", "fakeff": "fakeff"}
export default handler
