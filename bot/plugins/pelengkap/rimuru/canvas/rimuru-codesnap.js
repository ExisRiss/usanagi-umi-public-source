/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/codesnap.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "codesnap", "category": "canvas", "aliasMap": {"rimuru-canvas-codesnap": "codesnap", "rimuru-codesnap": "codesnap"}, "description": "Bikin gambar cuplikan code", "usage": ".codesnap <code>", "example": ".codesnap console.log('hello')", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/codesnap.js", metadata, m, extra)
handler.help = ["rimuru-canvas-codesnap <code>"]
handler.command = ["rimuru-canvas-codesnap", "rimuru-codesnap"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar cuplikan code"
handler.importSource = "rimuru"
handler.importConfig = {"name": "codesnap", "alias": [], "category": "canvas", "description": "Bikin gambar cuplikan code", "usage": ".codesnap <code>", "example": ".codesnap console.log('hello')", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-codesnap": "codesnap", "rimuru-codesnap": "codesnap"}
export default handler
