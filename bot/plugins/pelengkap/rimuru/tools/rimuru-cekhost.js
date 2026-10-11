/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/cekhost.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "checkhost", "category": "tools", "aliasMap": {"rimuru-tools-checkhost": "checkhost", "rimuru-checkhost": "checkhost", "rimuru-cekhost": "cekhost", "rimuru-check": "check", "checkhost": "checkhost", "cekhost": "cekhost", "check": "check"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/cekhost.js", metadata, m, extra)
handler.help = ["rimuru-tools-checkhost"]
handler.command = ["rimuru-tools-checkhost", "rimuru-checkhost", "rimuru-cekhost", "rimuru-check", "checkhost", "cekhost", "check"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "checkhost", "alias": ["cekhost", "check"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-checkhost": "checkhost", "rimuru-checkhost": "checkhost", "rimuru-cekhost": "cekhost", "rimuru-check": "check", "checkhost": "checkhost", "cekhost": "cekhost", "check": "check"}
export default handler
