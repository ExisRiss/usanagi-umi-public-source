/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/ttqc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ttqc", "category": "canvas", "aliasMap": {"rimuru-canvas-ttqc": "ttqc", "rimuru-ttqc": "ttqc", "rimuru-tiktokquote": "tiktokquote", "rimuru-ttq": "ttq", "tiktokquote": "tiktokquote", "ttq": "ttq"}, "description": "Buat fake quote chat ala TikTok", "usage": ".ttqc <teks> (atau reply teks)", "example": ".ttqc Hallo Dunia", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/ttqc.js", metadata, m, extra)
handler.help = ["rimuru-canvas-ttqc <teks> (atau reply teks)"]
handler.command = ["rimuru-canvas-ttqc", "rimuru-ttqc", "rimuru-tiktokquote", "rimuru-ttq", "tiktokquote", "ttq"]
handler.tags = ["canvas"]
handler.description = "Buat fake quote chat ala TikTok"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ttqc", "alias": ["tiktokquote", "ttq"], "category": "canvas", "description": "Buat fake quote chat ala TikTok", "usage": ".ttqc <teks> (atau reply teks)", "example": ".ttqc Hallo Dunia", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-ttqc": "ttqc", "rimuru-ttqc": "ttqc", "rimuru-tiktokquote": "tiktokquote", "rimuru-ttq": "ttq", "tiktokquote": "tiktokquote", "ttq": "ttq"}
export default handler
