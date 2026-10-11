/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeffduo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeffduo", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeffduo": "fakeffduo", "rimuru-fakeffduo": "fakeffduo"}, "description": "Bikin gambar banner Fake FF (Duo)", "usage": ".fakeffduo <nama1>|<nama2>|[bgNum]", "example": ".fakeffduo Fauzan|Bot|1", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeffduo.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeffduo <nama1>|<nama2>|[bgNum]"]
handler.command = ["rimuru-canvas-fakeffduo", "rimuru-fakeffduo"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar banner Fake FF (Duo)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeffduo", "alias": [], "category": "canvas", "description": "Bikin gambar banner Fake FF (Duo)", "usage": ".fakeffduo <nama1>|<nama2>|[bgNum]", "example": ".fakeffduo Fauzan|Bot|1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeffduo": "fakeffduo", "rimuru-fakeffduo": "fakeffduo"}
export default handler
