/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekyandere.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekyandere", "category": "cek", "aliasMap": {"rimuru-cek-cekyandere": "cekyandere", "rimuru-cekyandere": "cekyandere", "rimuru-yandere": "yandere"}, "description": "Cek tingkat yandere kamu", "usage": ".cekyandere <nama>", "example": ".cekyandere Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekyandere.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekyandere <nama>"]
handler.command = ["rimuru-cek-cekyandere", "rimuru-cekyandere", "rimuru-yandere"]
handler.tags = ["cek"]
handler.description = "Cek tingkat yandere kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekyandere", "alias": ["yandere"], "category": "cek", "description": "Cek tingkat yandere kamu", "usage": ".cekyandere <nama>", "example": ".cekyandere Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekyandere": "cekyandere", "rimuru-cekyandere": "cekyandere", "rimuru-yandere": "yandere"}
export default handler
