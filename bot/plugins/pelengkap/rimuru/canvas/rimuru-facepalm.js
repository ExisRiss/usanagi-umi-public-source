/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/facepalm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "facepalm", "category": "canvas", "aliasMap": {"rimuru-canvas-facepalm": "facepalm", "rimuru-facepalm": "facepalm", "facepalm": "facepalm"}, "description": "Bikin gambar facepalm dari fotomu", "usage": ".facepalm (reply/kirim foto)", "example": ".facepalm", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/facepalm.js", metadata, m, extra)
handler.help = ["rimuru-canvas-facepalm (reply/kirim foto)"]
handler.command = ["rimuru-canvas-facepalm", "rimuru-facepalm", "facepalm"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar facepalm dari fotomu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "facepalm", "alias": [], "category": "canvas", "description": "Bikin gambar facepalm dari fotomu", "usage": ".facepalm (reply/kirim foto)", "example": ".facepalm", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-facepalm": "facepalm", "rimuru-facepalm": "facepalm", "facepalm": "facepalm"}
export default handler
