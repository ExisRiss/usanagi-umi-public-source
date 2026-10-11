/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekoverpower.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekoverpower", "category": "cek", "aliasMap": {"rimuru-cek-cekoverpower": "cekoverpower", "rimuru-cekoverpower": "cekoverpower", "rimuru-overpower": "overpower", "rimuru-op": "op"}, "description": "Cek tingkat overpower kamu", "usage": ".cekoverpower <nama>", "example": ".cekoverpower Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekoverpower.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekoverpower <nama>"]
handler.command = ["rimuru-cek-cekoverpower", "rimuru-cekoverpower", "rimuru-overpower", "rimuru-op"]
handler.tags = ["cek"]
handler.description = "Cek tingkat overpower kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekoverpower", "alias": ["overpower", "op"], "category": "cek", "description": "Cek tingkat overpower kamu", "usage": ".cekoverpower <nama>", "example": ".cekoverpower Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekoverpower": "cekoverpower", "rimuru-cekoverpower": "cekoverpower", "rimuru-overpower": "overpower", "rimuru-op": "op"}
export default handler
