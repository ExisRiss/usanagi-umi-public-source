/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeff2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeff2", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeff2": "fakeff2", "rimuru-fakeff2": "fakeff2", "fakeff2": "fakeff2"}, "description": "Bikin gambar banner Fake FF (Solo 2)", "usage": ".fakeff2 <teks>|[bgNum]", "example": ".fakeff2 Fauzan|2", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeff2.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeff2 <teks>|[bgNum]"]
handler.command = ["rimuru-canvas-fakeff2", "rimuru-fakeff2", "fakeff2"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar banner Fake FF (Solo 2)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeff2", "alias": [], "category": "canvas", "description": "Bikin gambar banner Fake FF (Solo 2)", "usage": ".fakeff2 <teks>|[bgNum]", "example": ".fakeff2 Fauzan|2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeff2": "fakeff2", "rimuru-fakeff2": "fakeff2", "fakeff2": "fakeff2"}
export default handler
