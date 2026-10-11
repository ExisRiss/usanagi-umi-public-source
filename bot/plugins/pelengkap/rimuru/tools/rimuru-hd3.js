/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hd3.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hd3", "category": "tools", "aliasMap": {"rimuru-tools-hd3": "hd3", "rimuru-hd3": "hd3", "rimuru-enhance3": "enhance3", "rimuru-upscale3": "upscale3", "rimuru-unblur": "unblur"}, "description": "Memperjelas gambar blur menjadi tajam dengan AI (Unblur)", "usage": ".hd3 (reply gambar)", "example": ".hd3", "cooldown": 20, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hd3.js", metadata, m, extra)
handler.help = ["rimuru-tools-hd3 (reply gambar)"]
handler.command = ["rimuru-tools-hd3", "rimuru-hd3", "rimuru-enhance3", "rimuru-upscale3", "rimuru-unblur"]
handler.tags = ["tools"]
handler.description = "Memperjelas gambar blur menjadi tajam dengan AI (Unblur)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hd3", "alias": ["enhance3", "upscale3", "unblur"], "category": "tools", "description": "Memperjelas gambar blur menjadi tajam dengan AI (Unblur)", "usage": ".hd3 (reply gambar)", "example": ".hd3", "cooldown": 20, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-hd3": "hd3", "rimuru-hd3": "hd3", "rimuru-enhance3": "enhance3", "rimuru-upscale3": "upscale3", "rimuru-unblur": "unblur"}
export default handler
