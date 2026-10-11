/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/nomerhoki.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nomerhoki", "category": "primbon", "aliasMap": {"rimuru-primbon-nomerhoki": "nomerhoki", "rimuru-nomerhoki": "nomerhoki", "rimuru-nomorhoki": "nomorhoki", "rimuru-ceknomor": "ceknomor", "nomerhoki": "nomerhoki", "nomorhoki": "nomorhoki", "ceknomor": "ceknomor"}, "description": "Cek keberuntungan nomor HP", "usage": ".nomerhoki <nomor>", "example": ".nomerhoki 6281234567890", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/nomerhoki.js", metadata, m, extra)
handler.help = ["rimuru-primbon-nomerhoki <nomor>"]
handler.command = ["rimuru-primbon-nomerhoki", "rimuru-nomerhoki", "rimuru-nomorhoki", "rimuru-ceknomor", "nomerhoki", "nomorhoki", "ceknomor"]
handler.tags = ["primbon"]
handler.description = "Cek keberuntungan nomor HP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nomerhoki", "alias": ["nomorhoki", "ceknomor"], "category": "primbon", "description": "Cek keberuntungan nomor HP", "usage": ".nomerhoki <nomor>", "example": ".nomerhoki 6281234567890", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-nomerhoki": "nomerhoki", "rimuru-nomerhoki": "nomerhoki", "rimuru-nomorhoki": "nomorhoki", "rimuru-ceknomor": "ceknomor", "nomerhoki": "nomerhoki", "nomorhoki": "nomorhoki", "ceknomor": "ceknomor"}
export default handler
