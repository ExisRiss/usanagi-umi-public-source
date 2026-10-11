/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antijudol.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antijudol", "category": "group", "aliasMap": {"rimuru-group-antijudol": "antijudol", "rimuru-antijudol": "antijudol", "rimuru-antijudi": "antijudi", "rimuru-nojudi": "nojudi", "rimuru-antislot": "antislot", "antijudol": "antijudol", "antijudi": "antijudi", "nojudi": "nojudi", "antislot": "antislot"}, "description": "Deteksi konten judol di grup", "usage": ".antijudol <on/off/metode> [kick/remove]", "example": ".antijudol on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antijudol.js", metadata, m, extra)
handler.help = ["rimuru-group-antijudol <on/off/metode> [kick/remove]"]
handler.command = ["rimuru-group-antijudol", "rimuru-antijudol", "rimuru-antijudi", "rimuru-nojudi", "rimuru-antislot", "antijudol", "antijudi", "nojudi", "antislot"]
handler.tags = ["group"]
handler.description = "Deteksi konten judol di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antijudol", "alias": ["antijudi", "nojudi", "antislot"], "category": "group", "description": "Deteksi konten judol di grup", "usage": ".antijudol <on/off/metode> [kick/remove]", "example": ".antijudol on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antijudol": "antijudol", "rimuru-antijudol": "antijudol", "rimuru-antijudi": "antijudi", "rimuru-nojudi": "nojudi", "rimuru-antislot": "antislot", "antijudol": "antijudol", "antijudi": "antijudi", "nojudi": "nojudi", "antislot": "antislot"}
export default handler
