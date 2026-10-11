/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekprocastinator.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekprocastinator", "category": "cek", "aliasMap": {"rimuru-cek-cekprocastinator": "cekprocastinator", "rimuru-cekprocastinator": "cekprocastinator", "rimuru-procrastinator": "procrastinator", "rimuru-nunda": "nunda", "nunda": "nunda"}, "description": "Cek tingkat suka menunda", "usage": ".cekprocastinator <nama>", "example": ".cekprocastinator Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekprocastinator.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekprocastinator <nama>"]
handler.command = ["rimuru-cek-cekprocastinator", "rimuru-cekprocastinator", "rimuru-procrastinator", "rimuru-nunda", "nunda"]
handler.tags = ["cek"]
handler.description = "Cek tingkat suka menunda"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekprocastinator", "alias": ["procrastinator", "nunda"], "category": "cek", "description": "Cek tingkat suka menunda", "usage": ".cekprocastinator <nama>", "example": ".cekprocastinator Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekprocastinator": "cekprocastinator", "rimuru-cekprocastinator": "cekprocastinator", "rimuru-procrastinator": "procrastinator", "rimuru-nunda": "nunda", "nunda": "nunda"}
export default handler
