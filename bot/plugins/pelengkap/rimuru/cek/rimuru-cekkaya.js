/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekkaya.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkaya", "category": "cek", "aliasMap": {"rimuru-cek-cekkaya": "cekkaya", "rimuru-cekkaya": "cekkaya", "rimuru-kaya": "kaya", "rimuru-rich": "rich", "rich": "rich"}, "description": "Cek seberapa kaya kamu", "usage": ".cekkaya <nama>", "example": ".cekkaya Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekkaya.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekkaya <nama>"]
handler.command = ["rimuru-cek-cekkaya", "rimuru-cekkaya", "rimuru-kaya", "rimuru-rich", "rich"]
handler.tags = ["cek"]
handler.description = "Cek seberapa kaya kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkaya", "alias": ["kaya", "rich"], "category": "cek", "description": "Cek seberapa kaya kamu", "usage": ".cekkaya <nama>", "example": ".cekkaya Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekkaya": "cekkaya", "rimuru-cekkaya": "cekkaya", "rimuru-kaya": "kaya", "rimuru-rich": "rich", "rich": "rich"}
export default handler
