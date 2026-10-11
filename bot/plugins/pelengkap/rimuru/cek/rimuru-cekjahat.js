/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekjahat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekjahat", "category": "cek", "aliasMap": {"rimuru-cek-cekjahat": "cekjahat", "rimuru-cekjahat": "cekjahat", "rimuru-evil": "evil", "evil": "evil"}, "description": "Cek seberapa jahat kamu", "usage": ".cekjahat <nama>", "example": ".cekjahat Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekjahat.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekjahat <nama>"]
handler.command = ["rimuru-cek-cekjahat", "rimuru-cekjahat", "rimuru-evil", "evil"]
handler.tags = ["cek"]
handler.description = "Cek seberapa jahat kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekjahat", "alias": ["jahat", "evil"], "category": "cek", "description": "Cek seberapa jahat kamu", "usage": ".cekjahat <nama>", "example": ".cekjahat Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekjahat": "cekjahat", "rimuru-cekjahat": "cekjahat", "rimuru-evil": "evil", "evil": "evil"}
export default handler
