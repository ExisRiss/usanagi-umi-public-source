/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hd5.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hd5", "category": "tools", "aliasMap": {"rimuru-tools-hd5": "hd5", "rimuru-hd5": "hd5", "rimuru-upscale5": "upscale5", "rimuru-hdlocal": "hdlocal", "hd5": "hd5", "upscale5": "upscale5", "hdlocal": "hdlocal"}, "description": "Memperjelas resolusi gambar (Local Sharp Engine)", "usage": ".hd5 <reply/kirim gambar atau dokumen foto>", "example": ".hd5", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hd5.js", metadata, m, extra)
handler.help = ["rimuru-tools-hd5 <reply/kirim gambar atau dokumen foto>"]
handler.command = ["rimuru-tools-hd5", "rimuru-hd5", "rimuru-upscale5", "rimuru-hdlocal", "hd5", "upscale5", "hdlocal"]
handler.tags = ["tools"]
handler.description = "Memperjelas resolusi gambar (Local Sharp Engine)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hd5", "alias": ["upscale5", "hdlocal"], "category": "tools", "description": "Memperjelas resolusi gambar (Local Sharp Engine)", "usage": ".hd5 <reply/kirim gambar atau dokumen foto>", "example": ".hd5", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-hd5": "hd5", "rimuru-hd5": "hd5", "rimuru-upscale5": "upscale5", "rimuru-hdlocal": "hdlocal", "hd5": "hd5", "upscale5": "upscale5", "hdlocal": "hdlocal"}
export default handler
