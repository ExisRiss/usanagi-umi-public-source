/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/getppgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getppgc", "category": "group", "aliasMap": {"rimuru-group-getppgc": "getppgc", "rimuru-getppgc": "getppgc", "rimuru-ppgc": "ppgc", "getppgc": "getppgc", "ppgc": "ppgc"}, "description": "Mengambil foto profile group", "usage": ".getppgc", "example": ".getppgc", "cooldown": 10, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/getppgc.js", metadata, m, extra)
handler.help = ["rimuru-group-getppgc"]
handler.command = ["rimuru-group-getppgc", "rimuru-getppgc", "rimuru-ppgc", "getppgc", "ppgc"]
handler.tags = ["group"]
handler.description = "Mengambil foto profile group"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getppgc", "alias": ["ppgc"], "category": "group", "description": "Mengambil foto profile group", "usage": ".getppgc", "example": ".getppgc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-getppgc": "getppgc", "rimuru-getppgc": "getppgc", "rimuru-ppgc": "ppgc", "getppgc": "getppgc", "ppgc": "ppgc"}
export default handler
