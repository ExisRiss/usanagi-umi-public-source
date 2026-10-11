/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakestory.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakestory", "category": "canvas", "aliasMap": {"rimuru-canvas-fakestory": "fakestory", "rimuru-fakestory": "fakestory", "rimuru-fstory": "fstory", "rimuru-fakeinsta": "fakeinsta", "fstory": "fstory", "fakeinsta": "fakeinsta"}, "description": "Membuat fake Instagram story dengan 2 gambar", "usage": ".fakestory <nama>", "example": ".fakestory Misaki (reply 2 gambar)", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakestory.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakestory <nama>"]
handler.command = ["rimuru-canvas-fakestory", "rimuru-fakestory", "rimuru-fstory", "rimuru-fakeinsta", "fstory", "fakeinsta"]
handler.tags = ["canvas"]
handler.description = "Membuat fake Instagram story dengan 2 gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakestory", "alias": ["fstory", "fakeinsta", "igstory"], "category": "canvas", "description": "Membuat fake Instagram story dengan 2 gambar", "usage": ".fakestory <nama>", "example": ".fakestory Misaki (reply 2 gambar)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakestory": "fakestory", "rimuru-fakestory": "fakestory", "rimuru-fstory": "fstory", "rimuru-fakeinsta": "fakeinsta", "fstory": "fstory", "fakeinsta": "fakeinsta"}
export default handler
