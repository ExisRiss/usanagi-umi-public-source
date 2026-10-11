/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/moveon.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "moveon", "category": "fun", "aliasMap": {"rimuru-fun-moveon": "moveon", "rimuru-moveon": "moveon", "moveon": "moveon"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/moveon.js", metadata, m, extra)
handler.help = ["rimuru-fun-moveon"]
handler.command = ["rimuru-fun-moveon", "rimuru-moveon", "moveon"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "moveon", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-moveon": "moveon", "rimuru-moveon": "moveon", "moveon": "moveon"}
export default handler
