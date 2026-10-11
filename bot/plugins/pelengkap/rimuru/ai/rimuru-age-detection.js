/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/age-detection.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "age-detection", "category": "tools", "aliasMap": {"rimuru-tools-age-detection": "age-detection", "rimuru-age-detection": "age-detection", "rimuru-detectage": "detectage", "rimuru-age-detect": "age-detect", "age-detection": "age-detection", "detectage": "detectage", "age-detect": "age-detect"}, "description": "Deteksi perkiraan usia dari foto", "usage": ".age-detection (reply gambar)", "example": ".age-detection", "cooldown": 30, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/age-detection.js", metadata, m, extra)
handler.help = ["rimuru-tools-age-detection (reply gambar)"]
handler.command = ["rimuru-tools-age-detection", "rimuru-age-detection", "rimuru-detectage", "rimuru-age-detect", "age-detection", "detectage", "age-detect"]
handler.tags = ["tools"]
handler.description = "Deteksi perkiraan usia dari foto"
handler.importSource = "rimuru"
handler.importConfig = {"name": "age-detection", "alias": ["detectage", "age-detect"], "category": "tools", "description": "Deteksi perkiraan usia dari foto", "usage": ".age-detection (reply gambar)", "example": ".age-detection", "isPremium": true, "cooldown": 30, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-age-detection": "age-detection", "rimuru-age-detection": "age-detection", "rimuru-detectage": "detectage", "rimuru-age-detect": "age-detect", "age-detection": "age-detection", "detectage": "detectage", "age-detect": "age-detect"}
export default handler
