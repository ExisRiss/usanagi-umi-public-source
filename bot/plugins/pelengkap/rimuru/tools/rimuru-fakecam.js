/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/fakecam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakecam", "category": "tools", "aliasMap": {"rimuru-tools-fakecam": "fakecam", "rimuru-fakecam": "fakecam", "rimuru-paplive": "paplive", "rimuru-fakekamera": "fakekamera", "rimuru-iphonecam": "iphonecam", "fakecam": "fakecam", "paplive": "paplive", "fakekamera": "fakekamera", "iphonecam": "iphonecam"}, "description": "Menimpa UI Kamera iOS iPhone Klasik Presisi", "usage": ".fakecam (reply/kirim foto)", "example": ".fakecam"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/fakecam.js", metadata, m, extra)
handler.help = ["rimuru-tools-fakecam (reply/kirim foto)"]
handler.command = ["rimuru-tools-fakecam", "rimuru-fakecam", "rimuru-paplive", "rimuru-fakekamera", "rimuru-iphonecam", "fakecam", "paplive", "fakekamera", "iphonecam"]
handler.tags = ["tools"]
handler.description = "Menimpa UI Kamera iOS iPhone Klasik Presisi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakecam", "alias": ["paplive", "fakekamera", "iphonecam"], "category": "tools", "description": "Menimpa UI Kamera iOS iPhone Klasik Presisi", "usage": ".fakecam (reply/kirim foto)", "example": ".fakecam", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-fakecam": "fakecam", "rimuru-fakecam": "fakecam", "rimuru-paplive": "paplive", "rimuru-fakekamera": "fakekamera", "rimuru-iphonecam": "iphonecam", "fakecam": "fakecam", "paplive": "paplive", "fakekamera": "fakekamera", "iphonecam": "iphonecam"}
export default handler
