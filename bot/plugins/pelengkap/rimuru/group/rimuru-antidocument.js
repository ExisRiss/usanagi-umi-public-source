/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antidocument.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antidocument", "category": "group", "aliasMap": {"rimuru-group-antidocument": "antidocument", "rimuru-antidocument": "antidocument", "rimuru-antidoc": "antidoc", "rimuru-nodocument": "nodocument", "rimuru-nodoc": "nodoc", "antidocument": "antidocument", "antidoc": "antidoc", "nodocument": "nodocument", "nodoc": "nodoc"}, "description": "Mengatur antidocument di grup", "usage": ".antidocument <on/off>", "example": ".antidocument on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antidocument.js", metadata, m, extra)
handler.help = ["rimuru-group-antidocument <on/off>"]
handler.command = ["rimuru-group-antidocument", "rimuru-antidocument", "rimuru-antidoc", "rimuru-nodocument", "rimuru-nodoc", "antidocument", "antidoc", "nodocument", "nodoc"]
handler.tags = ["group"]
handler.description = "Mengatur antidocument di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antidocument", "alias": ["antidoc", "nodocument", "nodoc"], "category": "group", "description": "Mengatur antidocument di grup", "usage": ".antidocument <on/off>", "example": ".antidocument on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antidocument": "antidocument", "rimuru-antidocument": "antidocument", "rimuru-antidoc": "antidoc", "rimuru-nodocument": "nodocument", "rimuru-nodoc": "nodoc", "antidocument": "antidocument", "antidoc": "antidoc", "nodocument": "nodocument", "nodoc": "nodoc"}
export default handler
