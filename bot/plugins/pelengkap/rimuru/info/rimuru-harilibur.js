/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/harilibur.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "harilibur", "category": "info", "aliasMap": {"rimuru-info-harilibur": "harilibur", "rimuru-harilibur": "harilibur", "rimuru-libur": "libur", "rimuru-harinasional": "harinasional", "harilibur": "harilibur", "libur": "libur", "harinasional": "harinasional"}, "description": "Menampilkan informasi hari libur dan hari nasional mendatang", "usage": ".harilibur", "example": ".harilibur", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/harilibur.js", metadata, m, extra)
handler.help = ["rimuru-info-harilibur"]
handler.command = ["rimuru-info-harilibur", "rimuru-harilibur", "rimuru-libur", "rimuru-harinasional", "harilibur", "libur", "harinasional"]
handler.tags = ["info"]
handler.description = "Menampilkan informasi hari libur dan hari nasional mendatang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "harilibur", "alias": ["libur", "harinasional"], "category": "info", "description": "Menampilkan informasi hari libur dan hari nasional mendatang", "usage": ".harilibur", "example": ".harilibur", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-harilibur": "harilibur", "rimuru-harilibur": "harilibur", "rimuru-libur": "libur", "rimuru-harinasional": "harinasional", "harilibur": "harilibur", "libur": "libur", "harinasional": "harinasional"}
export default handler
