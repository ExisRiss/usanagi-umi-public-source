/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetgoodbye.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetgoodbye", "category": "group", "aliasMap": {"rimuru-group-resetgoodbye": "resetgoodbye", "rimuru-resetgoodbye": "resetgoodbye", "rimuru-delgoodbye": "delgoodbye", "rimuru-cleargoodbye": "cleargoodbye", "delgoodbye": "delgoodbye", "cleargoodbye": "cleargoodbye"}, "description": "Reset goodbye message ke default", "usage": ".resetgoodbye", "example": ".resetgoodbye", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetgoodbye.js", metadata, m, extra)
handler.help = ["rimuru-group-resetgoodbye"]
handler.command = ["rimuru-group-resetgoodbye", "rimuru-resetgoodbye", "rimuru-delgoodbye", "rimuru-cleargoodbye", "delgoodbye", "cleargoodbye"]
handler.tags = ["group"]
handler.description = "Reset goodbye message ke default"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetgoodbye", "alias": ["delgoodbye", "cleargoodbye"], "category": "group", "description": "Reset goodbye message ke default", "usage": ".resetgoodbye", "example": ".resetgoodbye", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetgoodbye": "resetgoodbye", "rimuru-resetgoodbye": "resetgoodbye", "rimuru-delgoodbye": "delgoodbye", "rimuru-cleargoodbye": "cleargoodbye", "delgoodbye": "delgoodbye", "cleargoodbye": "cleargoodbye"}
export default handler
