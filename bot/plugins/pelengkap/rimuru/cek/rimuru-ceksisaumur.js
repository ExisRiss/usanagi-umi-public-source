/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceksisaumur.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceksisaumur", "category": "cek", "aliasMap": {"rimuru-cek-ceksisaumur": "ceksisaumur", "rimuru-ceksisaumur": "ceksisaumur", "rimuru-sisaumur": "sisaumur"}, "description": "Cek sisa umur kamu", "usage": ".ceksisaumur <nama>", "example": ".ceksisaumur Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceksisaumur.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceksisaumur <nama>"]
handler.command = ["rimuru-cek-ceksisaumur", "rimuru-ceksisaumur", "rimuru-sisaumur"]
handler.tags = ["cek"]
handler.description = "Cek sisa umur kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceksisaumur", "alias": ["sisaumur", "umur"], "category": "cek", "description": "Cek sisa umur kamu", "usage": ".ceksisaumur <nama>", "example": ".ceksisaumur Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceksisaumur": "ceksisaumur", "rimuru-ceksisaumur": "ceksisaumur", "rimuru-sisaumur": "sisaumur"}
export default handler
