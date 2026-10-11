/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/risetsider.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "risetsider", "category": "group", "aliasMap": {"rimuru-group-risetsider": "risetsider", "rimuru-risetsider": "risetsider", "risetsider": "risetsider"}, "cooldown": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/risetsider.js", metadata, m, extra)
handler.help = ["rimuru-group-risetsider"]
handler.command = ["rimuru-group-risetsider", "rimuru-risetsider", "risetsider"]
handler.tags = ["group"]
handler.description = ""
handler.importSource = "rimuru"
handler.importConfig = {"name": "risetsider", "alias": [], "category": "group", "isGroup": true, "isAdmin": true, "cooldown": 10, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-risetsider": "risetsider", "rimuru-risetsider": "risetsider", "risetsider": "risetsider"}
export default handler
