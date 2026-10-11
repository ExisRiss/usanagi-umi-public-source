/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cektinggi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cektinggi", "category": "cek", "aliasMap": {"rimuru-cek-cektinggi": "cektinggi", "rimuru-cektinggi": "cektinggi", "rimuru-tinggi": "tinggi", "rimuru-tall": "tall", "tall": "tall"}, "description": "Cek tinggi badan random", "usage": ".cektinggi <nama>", "example": ".cektinggi Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cektinggi.js", metadata, m, extra)
handler.help = ["rimuru-cek-cektinggi <nama>"]
handler.command = ["rimuru-cek-cektinggi", "rimuru-cektinggi", "rimuru-tinggi", "rimuru-tall", "tall"]
handler.tags = ["cek"]
handler.description = "Cek tinggi badan random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cektinggi", "alias": ["tinggi", "tall"], "category": "cek", "description": "Cek tinggi badan random", "usage": ".cektinggi <nama>", "example": ".cektinggi Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cektinggi": "cektinggi", "rimuru-cektinggi": "cektinggi", "rimuru-tinggi": "tinggi", "rimuru-tall": "tall", "tall": "tall"}
export default handler
