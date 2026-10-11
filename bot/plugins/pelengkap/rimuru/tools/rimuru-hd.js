/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hd.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "remini", "category": "tools", "aliasMap": {"rimuru-tools-remini": "remini", "rimuru-remini": "remini", "rimuru-hd": "hd", "rimuru-upscale": "upscale"}, "description": "Enhance gambar jadi HD", "usage": ".remini (reply gambar)", "example": ".remini", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hd.js", metadata, m, extra)
handler.help = ["rimuru-tools-remini (reply gambar)"]
handler.command = ["rimuru-tools-remini", "rimuru-remini", "rimuru-hd", "rimuru-upscale"]
handler.tags = ["tools"]
handler.description = "Enhance gambar jadi HD"
handler.importSource = "rimuru"
handler.importConfig = {"name": "remini", "alias": ["hd", "enhance", "upscale"], "category": "tools", "description": "Enhance gambar jadi HD", "usage": ".remini (reply gambar)", "example": ".remini", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-remini": "remini", "rimuru-remini": "remini", "rimuru-hd": "hd", "rimuru-upscale": "upscale"}
export default handler
