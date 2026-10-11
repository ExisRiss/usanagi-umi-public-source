/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antitagsw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antitagsw", "category": "group", "aliasMap": {"rimuru-group-antitagsw": "antitagsw", "rimuru-antitagsw": "antitagsw", "rimuru-antitag": "antitag", "rimuru-antistatustag": "antistatustag"}, "description": "Mengaktifkan/menonaktifkan anti tag status di grup", "usage": ".antitagsw <on/off>", "example": ".antitagsw on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antitagsw.js", metadata, m, extra)
handler.help = ["rimuru-group-antitagsw <on/off>"]
handler.command = ["rimuru-group-antitagsw", "rimuru-antitagsw", "rimuru-antitag", "rimuru-antistatustag"]
handler.tags = ["group"]
handler.description = "Mengaktifkan/menonaktifkan anti tag status di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antitagsw", "alias": ["antitag", "antistatustag"], "category": "group", "description": "Mengaktifkan/menonaktifkan anti tag status di grup", "usage": ".antitagsw <on/off>", "example": ".antitagsw on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antitagsw": "antitagsw", "rimuru-antitagsw": "antitagsw", "rimuru-antitag": "antitag", "rimuru-antistatustag": "antistatustag"}
export default handler
