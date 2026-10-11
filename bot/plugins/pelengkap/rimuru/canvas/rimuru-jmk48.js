/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/jmk48.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jmk48", "category": "canvas", "aliasMap": {"rimuru-canvas-jmk48": "jmk48", "rimuru-jmk48": "jmk48", "jmk48": "jmk48"}, "description": "Bikin gambarmu jadi member JMK48", "usage": ".jmk48 (reply/kirim foto)", "example": ".jmk48", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/jmk48.js", metadata, m, extra)
handler.help = ["rimuru-canvas-jmk48 (reply/kirim foto)"]
handler.command = ["rimuru-canvas-jmk48", "rimuru-jmk48", "jmk48"]
handler.tags = ["canvas"]
handler.description = "Bikin gambarmu jadi member JMK48"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jmk48", "alias": [], "category": "canvas", "description": "Bikin gambarmu jadi member JMK48", "usage": ".jmk48 (reply/kirim foto)", "example": ".jmk48", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-jmk48": "jmk48", "rimuru-jmk48": "jmk48", "jmk48": "jmk48"}
export default handler
