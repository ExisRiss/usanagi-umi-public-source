/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/rules.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rules", "category": "main", "aliasMap": {"rimuru-main-rules": "rules", "rimuru-rules": "rules", "rimuru-aturanbot": "aturanbot", "rimuru-botrules": "botrules", "rimuru-peraturanbot": "peraturanbot", "aturanbot": "aturanbot", "botrules": "botrules", "peraturanbot": "peraturanbot"}, "description": "Menampilkan rules dan aturan penggunaan bot secara lengkap", "usage": ".rules", "example": ".rules", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/rules.js", metadata, m, extra)
handler.help = ["rimuru-main-rules"]
handler.command = ["rimuru-main-rules", "rimuru-rules", "rimuru-aturanbot", "rimuru-botrules", "rimuru-peraturanbot", "aturanbot", "botrules", "peraturanbot"]
handler.tags = ["main"]
handler.description = "Menampilkan rules dan aturan penggunaan bot secara lengkap"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rules", "alias": ["aturanbot", "botrules", "peraturanbot"], "category": "main", "description": "Menampilkan rules dan aturan penggunaan bot secara lengkap", "usage": ".rules", "example": ".rules", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-rules": "rules", "rimuru-rules": "rules", "rimuru-aturanbot": "aturanbot", "rimuru-botrules": "botrules", "rimuru-peraturanbot": "peraturanbot", "aturanbot": "aturanbot", "botrules": "botrules", "peraturanbot": "peraturanbot"}
export default handler
