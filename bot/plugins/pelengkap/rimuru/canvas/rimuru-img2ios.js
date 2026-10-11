/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/img2ios.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "img2ios", "category": "canvas", "aliasMap": {"rimuru-canvas-img2ios": "img2ios", "rimuru-img2ios": "img2ios", "rimuru-toios": "toios", "img2ios": "img2ios", "toios": "toios"}, "description": "Bikin gambarmu menjadi gaya foto iOS", "usage": ".img2ios (reply/kirim foto)", "example": ".img2ios", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/img2ios.js", metadata, m, extra)
handler.help = ["rimuru-canvas-img2ios (reply/kirim foto)"]
handler.command = ["rimuru-canvas-img2ios", "rimuru-img2ios", "rimuru-toios", "img2ios", "toios"]
handler.tags = ["canvas"]
handler.description = "Bikin gambarmu menjadi gaya foto iOS"
handler.importSource = "rimuru"
handler.importConfig = {"name": "img2ios", "alias": ["toios"], "category": "canvas", "description": "Bikin gambarmu menjadi gaya foto iOS", "usage": ".img2ios (reply/kirim foto)", "example": ".img2ios", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-img2ios": "img2ios", "rimuru-img2ios": "img2ios", "rimuru-toios": "toios", "img2ios": "img2ios", "toios": "toios"}
export default handler
