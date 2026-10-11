/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setrules.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setrules", "category": "owner", "aliasMap": {"rimuru-owner-setrules": "setrules", "rimuru-setrules": "setrules", "rimuru-setbotrules": "setbotrules", "rimuru-setaturanbot": "setaturanbot", "setrules": "setrules", "setbotrules": "setbotrules", "setaturanbot": "setaturanbot"}, "description": "Set rules/aturan bot custom", "usage": ".setrules <text>", "example": ".setrules 1. Jangan spam\n2. Hormati sesama", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setrules.js", metadata, m, extra)
handler.help = ["rimuru-owner-setrules <text>"]
handler.command = ["rimuru-owner-setrules", "rimuru-setrules", "rimuru-setbotrules", "rimuru-setaturanbot", "setrules", "setbotrules", "setaturanbot"]
handler.tags = ["owner"]
handler.description = "Set rules/aturan bot custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setrules", "alias": ["setbotrules", "setaturanbot"], "category": "owner", "description": "Set rules/aturan bot custom", "usage": ".setrules <text>", "example": ".setrules 1. Jangan spam\n2. Hormati sesama", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setrules": "setrules", "rimuru-setrules": "setrules", "rimuru-setbotrules": "setbotrules", "rimuru-setaturanbot": "setaturanbot", "setrules": "setrules", "setbotrules": "setbotrules", "setaturanbot": "setaturanbot"}
export default handler
