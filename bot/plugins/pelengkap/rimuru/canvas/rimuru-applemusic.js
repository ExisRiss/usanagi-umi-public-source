/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/applemusic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "applemusic-canvas", "category": "canvas", "aliasMap": {"rimuru-canvas-applemusic-canvas": "applemusic-canvas", "rimuru-applemusic-canvas": "applemusic-canvas", "rimuru-applecanvas": "applecanvas", "applemusic-canvas": "applemusic-canvas", "applemusic": "applemusic", "applecanvas": "applecanvas"}, "description": "Buat gambar pemutar Apple Music dari foto", "usage": ".applemusic-canvas judul | artis (reply gambar)", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/applemusic.js", metadata, m, extra)
handler.help = ["rimuru-canvas-applemusic-canvas judul | artis (reply gambar)"]
handler.command = ["rimuru-canvas-applemusic-canvas", "rimuru-applemusic-canvas", "rimuru-applecanvas", "applemusic-canvas", "applemusic", "applecanvas"]
handler.tags = ["canvas"]
handler.description = "Buat gambar pemutar Apple Music dari foto"
handler.importSource = "rimuru"
handler.importConfig = {"name": "applemusic-canvas", "alias": ["applemusic", "applecanvas"], "category": "canvas", "description": "Buat gambar pemutar Apple Music dari foto", "usage": ".applemusic-canvas judul | artis (reply gambar)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-applemusic-canvas": "applemusic-canvas", "rimuru-applemusic-canvas": "applemusic-canvas", "rimuru-applecanvas": "applecanvas", "applemusic-canvas": "applemusic-canvas", "applemusic": "applemusic", "applecanvas": "applecanvas"}
export default handler
