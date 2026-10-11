/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekkarma.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkarma", "category": "cek", "aliasMap": {"rimuru-cek-cekkarma": "cekkarma", "rimuru-cekkarma": "cekkarma", "rimuru-karma": "karma"}, "description": "Cek tingkat karma kamu", "usage": ".cekkarma <nama>", "example": ".cekkarma Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekkarma.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekkarma <nama>"]
handler.command = ["rimuru-cek-cekkarma", "rimuru-cekkarma", "rimuru-karma"]
handler.tags = ["cek"]
handler.description = "Cek tingkat karma kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkarma", "alias": ["karma"], "category": "cek", "description": "Cek tingkat karma kamu", "usage": ".cekkarma <nama>", "example": ".cekkarma Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekkarma": "cekkarma", "rimuru-cekkarma": "cekkarma", "rimuru-karma": "karma"}
export default handler
