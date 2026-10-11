/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetrulesgrup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetrulesgrup", "category": "group", "aliasMap": {"rimuru-group-resetrulesgrup": "resetrulesgrup", "rimuru-resetrulesgrup": "resetrulesgrup", "rimuru-resetgrouprules": "resetgrouprules", "resetrulesgrup": "resetrulesgrup", "resetgrouprules": "resetgrouprules"}, "description": "Reset rules grup ke default (admin only)", "usage": ".resetrulesgrup", "example": ".resetrulesgrup", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetrulesgrup.js", metadata, m, extra)
handler.help = ["rimuru-group-resetrulesgrup"]
handler.command = ["rimuru-group-resetrulesgrup", "rimuru-resetrulesgrup", "rimuru-resetgrouprules", "resetrulesgrup", "resetgrouprules"]
handler.tags = ["group"]
handler.description = "Reset rules grup ke default (admin only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetrulesgrup", "alias": ["resetgrouprules"], "category": "group", "description": "Reset rules grup ke default (admin only)", "usage": ".resetrulesgrup", "example": ".resetrulesgrup", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetrulesgrup": "resetrulesgrup", "rimuru-resetrulesgrup": "resetrulesgrup", "rimuru-resetgrouprules": "resetgrouprules", "resetrulesgrup": "resetrulesgrup", "resetgrouprules": "resetgrouprules"}
export default handler
