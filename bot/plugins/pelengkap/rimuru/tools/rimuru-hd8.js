/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hd8.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hd8", "category": "tools", "aliasMap": {"rimuru-tools-hd8": "hd8", "rimuru-hd8": "hd8", "rimuru-remini8": "remini8", "rimuru-upscale1": "upscale1", "rimuru-enhance8": "enhance8", "hd8": "hd8", "remini8": "remini8", "upscale1": "upscale1", "enhance8": "enhance8"}, "description": "Meningkatkan resolusi gambar hingga 4x lipat (Upscale v1)", "usage": ".hd8 [resolusi 2|4] (balas/kirim gambar)", "example": ".hd8 4", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hd8.js", metadata, m, extra)
handler.help = ["rimuru-tools-hd8 [resolusi 2|4] (balas/kirim gambar)"]
handler.command = ["rimuru-tools-hd8", "rimuru-hd8", "rimuru-remini8", "rimuru-upscale1", "rimuru-enhance8", "hd8", "remini8", "upscale1", "enhance8"]
handler.tags = ["tools"]
handler.description = "Meningkatkan resolusi gambar hingga 4x lipat (Upscale v1)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hd8", "alias": ["remini8", "upscale1", "enhance8"], "category": "tools", "description": "Meningkatkan resolusi gambar hingga 4x lipat (Upscale v1)", "usage": ".hd8 [resolusi 2|4] (balas/kirim gambar)", "example": ".hd8 4", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-hd8": "hd8", "rimuru-hd8": "hd8", "rimuru-remini8": "remini8", "rimuru-upscale1": "upscale1", "rimuru-enhance8": "enhance8", "hd8": "hd8", "remini8": "remini8", "upscale1": "upscale1", "enhance8": "enhance8"}
export default handler
