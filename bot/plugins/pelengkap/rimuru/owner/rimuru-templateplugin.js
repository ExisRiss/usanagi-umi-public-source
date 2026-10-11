/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/templateplugin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "templateplugin", "category": "owner", "aliasMap": {"rimuru-owner-templateplugin": "templateplugin", "rimuru-templateplugin": "templateplugin", "rimuru-tplplugin": "tplplugin", "rimuru-plugin-template": "plugin-template", "templateplugin": "templateplugin", "tplplugin": "tplplugin", "plugin-template": "plugin-template"}, "description": "Generate plugin template (Owner Only)", "usage": ".templateplugin", "example": ".templateplugin", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/templateplugin.js", metadata, m, extra)
handler.help = ["rimuru-owner-templateplugin"]
handler.command = ["rimuru-owner-templateplugin", "rimuru-templateplugin", "rimuru-tplplugin", "rimuru-plugin-template", "templateplugin", "tplplugin", "plugin-template"]
handler.tags = ["owner"]
handler.description = "Generate plugin template (Owner Only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "templateplugin", "alias": ["tplplugin", "plugin-template"], "category": "owner", "description": "Generate plugin template (Owner Only)", "usage": ".templateplugin", "example": ".templateplugin", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-templateplugin": "templateplugin", "rimuru-templateplugin": "templateplugin", "rimuru-tplplugin": "tplplugin", "rimuru-plugin-template": "plugin-template", "templateplugin": "templateplugin", "tplplugin": "tplplugin", "plugin-template": "plugin-template"}
export default handler
