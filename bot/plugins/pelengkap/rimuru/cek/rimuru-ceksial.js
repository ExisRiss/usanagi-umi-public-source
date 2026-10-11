/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceksial.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceksial", "category": "cek", "aliasMap": {"rimuru-cek-ceksial": "ceksial", "rimuru-ceksial": "ceksial", "rimuru-sial": "sial", "rimuru-apes": "apes", "apes": "apes"}, "description": "Cek seberapa sial kamu", "usage": ".ceksial <nama>", "example": ".ceksial Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceksial.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceksial <nama>"]
handler.command = ["rimuru-cek-ceksial", "rimuru-ceksial", "rimuru-sial", "rimuru-apes", "apes"]
handler.tags = ["cek"]
handler.description = "Cek seberapa sial kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceksial", "alias": ["sial", "apes"], "category": "cek", "description": "Cek seberapa sial kamu", "usage": ".ceksial <nama>", "example": ".ceksial Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceksial": "ceksial", "rimuru-ceksial": "ceksial", "rimuru-sial": "sial", "rimuru-apes": "apes", "apes": "apes"}
export default handler
