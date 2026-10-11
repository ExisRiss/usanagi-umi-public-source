/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekberat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekberat", "category": "cek", "aliasMap": {"rimuru-cek-cekberat": "cekberat", "rimuru-cekberat": "cekberat", "rimuru-berat": "berat", "rimuru-weight": "weight", "weight": "weight"}, "description": "Cek berat badan random", "usage": ".cekberat <nama>", "example": ".cekberat Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekberat.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekberat <nama>"]
handler.command = ["rimuru-cek-cekberat", "rimuru-cekberat", "rimuru-berat", "rimuru-weight", "weight"]
handler.tags = ["cek"]
handler.description = "Cek berat badan random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekberat", "alias": ["berat", "weight"], "category": "cek", "description": "Cek berat badan random", "usage": ".cekberat <nama>", "example": ".cekberat Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekberat": "cekberat", "rimuru-cekberat": "cekberat", "rimuru-berat": "berat", "rimuru-weight": "weight", "weight": "weight"}
export default handler
