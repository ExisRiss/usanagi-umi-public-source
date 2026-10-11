/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/enlargerai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "enlargerai", "category": "tools", "aliasMap": {"rimuru-tools-enlargerai": "enlargerai", "rimuru-enlargerai": "enlargerai", "rimuru-enlargeraiphotos": "enlargeraiphotos", "rimuru-enlarger": "enlarger", "enlargerai": "enlargerai", "enlargeraiphotos": "enlargeraiphotos", "enlarger": "enlarger"}, "description": "Meningkatkan kualitas gambar (HD, Retouch, Sharpen) dengan Enlargerai", "usage": ".enlargerai [mode] [reply/kirim gambar]", "example": ".enlargerai upscale", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/enlargerai.js", metadata, m, extra)
handler.help = ["rimuru-tools-enlargerai [mode] [reply/kirim gambar]"]
handler.command = ["rimuru-tools-enlargerai", "rimuru-enlargerai", "rimuru-enlargeraiphotos", "rimuru-enlarger", "enlargerai", "enlargeraiphotos", "enlarger"]
handler.tags = ["tools"]
handler.description = "Meningkatkan kualitas gambar (HD, Retouch, Sharpen) dengan Enlargerai"
handler.importSource = "rimuru"
handler.importConfig = {"name": "enlargerai", "alias": ["enlargeraiphotos", "enlarger"], "category": "tools", "description": "Meningkatkan kualitas gambar (HD, Retouch, Sharpen) dengan Enlargerai", "usage": ".enlargerai [mode] [reply/kirim gambar]", "example": ".enlargerai upscale", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-enlargerai": "enlargerai", "rimuru-enlargerai": "enlargerai", "rimuru-enlargeraiphotos": "enlargeraiphotos", "rimuru-enlarger": "enlarger", "enlargerai": "enlargerai", "enlargeraiphotos": "enlargeraiphotos", "enlarger": "enlarger"}
export default handler
