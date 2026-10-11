/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setwelcome.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setwelcome", "category": "group", "aliasMap": {"rimuru-group-setwelcome": "setwelcome", "rimuru-setwelcome": "setwelcome", "rimuru-customwelcome": "customwelcome", "customwelcome": "customwelcome"}, "description": "Set custom welcome message", "usage": ".setwelcome <pesan>", "example": ".setwelcome Halo {user}, selamat datang di {group}!", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setwelcome.js", metadata, m, extra)
handler.help = ["rimuru-group-setwelcome <pesan>"]
handler.command = ["rimuru-group-setwelcome", "rimuru-setwelcome", "rimuru-customwelcome", "customwelcome"]
handler.tags = ["group"]
handler.description = "Set custom welcome message"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setwelcome", "alias": ["customwelcome"], "category": "group", "description": "Set custom welcome message", "usage": ".setwelcome <pesan>", "example": ".setwelcome Halo {user}, selamat datang di {group}!", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-setwelcome": "setwelcome", "rimuru-setwelcome": "setwelcome", "rimuru-customwelcome": "customwelcome", "customwelcome": "customwelcome"}
export default handler
