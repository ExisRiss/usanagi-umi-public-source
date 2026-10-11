/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekjomblo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekjomblo", "category": "cek", "aliasMap": {"rimuru-cek-cekjomblo": "cekjomblo", "rimuru-cekjomblo": "cekjomblo", "rimuru-jomblo": "jomblo", "rimuru-single": "single", "single": "single"}, "description": "Cek tingkat kejombloan kamu", "usage": ".cekjomblo <nama>", "example": ".cekjomblo Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekjomblo.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekjomblo <nama>"]
handler.command = ["rimuru-cek-cekjomblo", "rimuru-cekjomblo", "rimuru-jomblo", "rimuru-single", "single"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kejombloan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekjomblo", "alias": ["jomblo", "single"], "category": "cek", "description": "Cek tingkat kejombloan kamu", "usage": ".cekjomblo <nama>", "example": ".cekjomblo Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekjomblo": "cekjomblo", "rimuru-cekjomblo": "cekjomblo", "rimuru-jomblo": "jomblo", "rimuru-single": "single", "single": "single"}
export default handler
