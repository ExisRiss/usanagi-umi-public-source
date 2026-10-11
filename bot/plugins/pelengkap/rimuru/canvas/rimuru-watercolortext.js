/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/watercolortext.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "watercolortext", "category": "canvas", "aliasMap": {"rimuru-canvas-watercolortext": "watercolortext", "rimuru-watercolortext": "watercolortext", "rimuru-watercolor": "watercolor", "rimuru-wctext": "wctext", "watercolortext": "watercolortext", "watercolor": "watercolor", "wctext": "wctext"}, "description": "Buat gambar teks dengan efek watercolor", "usage": ".watercolortext <teks>", "example": ".watercolortext RIMURU", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/watercolortext.js", metadata, m, extra)
handler.help = ["rimuru-canvas-watercolortext <teks>"]
handler.command = ["rimuru-canvas-watercolortext", "rimuru-watercolortext", "rimuru-watercolor", "rimuru-wctext", "watercolortext", "watercolor", "wctext"]
handler.tags = ["canvas"]
handler.description = "Buat gambar teks dengan efek watercolor"
handler.importSource = "rimuru"
handler.importConfig = {"name": "watercolortext", "alias": ["watercolor", "wctext"], "category": "canvas", "description": "Buat gambar teks dengan efek watercolor", "usage": ".watercolortext <teks>", "example": ".watercolortext RIMURU", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-watercolortext": "watercolortext", "rimuru-watercolortext": "watercolortext", "rimuru-watercolor": "watercolor", "rimuru-wctext": "wctext", "watercolortext": "watercolortext", "watercolor": "watercolor", "wctext": "wctext"}
export default handler
