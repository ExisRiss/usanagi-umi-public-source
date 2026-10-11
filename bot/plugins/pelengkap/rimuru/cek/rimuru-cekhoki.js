/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekhoki.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekhoki", "category": "cek", "aliasMap": {"rimuru-cek-cekhoki": "cekhoki", "rimuru-cekhoki": "cekhoki", "rimuru-hoki": "hoki", "lucky": "lucky"}, "description": "Cek seberapa hoki kamu", "usage": ".cekhoki <nama>", "example": ".cekhoki Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekhoki.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekhoki <nama>"]
handler.command = ["rimuru-cek-cekhoki", "rimuru-cekhoki", "rimuru-hoki", "lucky"]
handler.tags = ["cek"]
handler.description = "Cek seberapa hoki kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekhoki", "alias": ["hoki", "lucky"], "category": "cek", "description": "Cek seberapa hoki kamu", "usage": ".cekhoki <nama>", "example": ".cekhoki Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekhoki": "cekhoki", "rimuru-cekhoki": "cekhoki", "rimuru-hoki": "hoki", "lucky": "lucky"}
export default handler
