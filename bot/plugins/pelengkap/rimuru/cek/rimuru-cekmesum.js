/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekmesum.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekmesum", "category": "cek", "aliasMap": {"rimuru-cek-cekmesum": "cekmesum", "rimuru-cekmesum": "cekmesum", "rimuru-mesum": "mesum"}, "description": "Cek seberapa mesum kamu", "usage": ".cekmesum <nama>", "example": ".cekmesum Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekmesum.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekmesum <nama>"]
handler.command = ["rimuru-cek-cekmesum", "rimuru-cekmesum", "rimuru-mesum"]
handler.tags = ["cek"]
handler.description = "Cek seberapa mesum kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekmesum", "alias": ["mesum"], "category": "cek", "description": "Cek seberapa mesum kamu", "usage": ".cekmesum <nama>", "example": ".cekmesum Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekmesum": "cekmesum", "rimuru-cekmesum": "cekmesum", "rimuru-mesum": "mesum"}
export default handler
