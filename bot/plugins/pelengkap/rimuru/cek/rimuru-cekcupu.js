/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekcupu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekcupu", "category": "cek", "aliasMap": {"rimuru-cek-cekcupu": "cekcupu", "rimuru-cekcupu": "cekcupu", "rimuru-cupu": "cupu", "rimuru-noob": "noob"}, "description": "Cek tingkat kecupuan kamu", "usage": ".cekcupu <nama>", "example": ".cekcupu Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekcupu.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekcupu <nama>"]
handler.command = ["rimuru-cek-cekcupu", "rimuru-cekcupu", "rimuru-cupu", "rimuru-noob"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kecupuan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekcupu", "alias": ["cupu", "noob"], "category": "cek", "description": "Cek tingkat kecupuan kamu", "usage": ".cekcupu <nama>", "example": ".cekcupu Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekcupu": "cekcupu", "rimuru-cekcupu": "cekcupu", "rimuru-cupu": "cupu", "rimuru-noob": "noob"}
export default handler
