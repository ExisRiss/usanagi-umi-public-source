/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceksetia.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceksetia", "category": "cek", "aliasMap": {"rimuru-cek-ceksetia": "ceksetia", "rimuru-ceksetia": "ceksetia", "rimuru-setia": "setia", "rimuru-loyal": "loyal", "loyal": "loyal"}, "description": "Cek tingkat kesetiaan kamu", "usage": ".ceksetia <nama>", "example": ".ceksetia Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceksetia.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceksetia <nama>"]
handler.command = ["rimuru-cek-ceksetia", "rimuru-ceksetia", "rimuru-setia", "rimuru-loyal", "loyal"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kesetiaan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceksetia", "alias": ["setia", "loyal"], "category": "cek", "description": "Cek tingkat kesetiaan kamu", "usage": ".ceksetia <nama>", "example": ".ceksetia Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceksetia": "ceksetia", "rimuru-ceksetia": "ceksetia", "rimuru-setia": "setia", "rimuru-loyal": "loyal", "loyal": "loyal"}
export default handler
