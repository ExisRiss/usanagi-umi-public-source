/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetwelcome.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetwelcome", "category": "group", "aliasMap": {"rimuru-group-resetwelcome": "resetwelcome", "rimuru-resetwelcome": "resetwelcome", "rimuru-delwelcome": "delwelcome", "rimuru-clearwelcome": "clearwelcome", "delwelcome": "delwelcome", "clearwelcome": "clearwelcome"}, "description": "Reset welcome message ke default", "usage": ".resetwelcome", "example": ".resetwelcome", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetwelcome.js", metadata, m, extra)
handler.help = ["rimuru-group-resetwelcome"]
handler.command = ["rimuru-group-resetwelcome", "rimuru-resetwelcome", "rimuru-delwelcome", "rimuru-clearwelcome", "delwelcome", "clearwelcome"]
handler.tags = ["group"]
handler.description = "Reset welcome message ke default"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetwelcome", "alias": ["delwelcome", "clearwelcome"], "category": "group", "description": "Reset welcome message ke default", "usage": ".resetwelcome", "example": ".resetwelcome", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetwelcome": "resetwelcome", "rimuru-resetwelcome": "resetwelcome", "rimuru-delwelcome": "delwelcome", "rimuru-clearwelcome": "clearwelcome", "delwelcome": "delwelcome", "clearwelcome": "clearwelcome"}
export default handler
