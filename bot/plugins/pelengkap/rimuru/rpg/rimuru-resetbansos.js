/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/resetbansos.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetbansos", "category": "rpg", "aliasMap": {"rimuru-rpg-resetbansos": "resetbansos", "rimuru-resetbansos": "resetbansos", "resetbansos": "resetbansos"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/resetbansos.js", metadata, m, extra)
handler.help = ["rimuru-rpg-resetbansos"]
handler.command = ["rimuru-rpg-resetbansos", "rimuru-resetbansos", "resetbansos"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetbansos", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-resetbansos": "resetbansos", "rimuru-resetbansos": "resetbansos", "resetbansos": "resetbansos"}
export default handler
