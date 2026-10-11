/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/ewepaksa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ewepaksa", "category": "rpg", "aliasMap": {"rimuru-rpg-ewepaksa": "ewepaksa", "rimuru-ewepaksa": "ewepaksa", "rimuru-perkosa": "perkosa", "ewepaksa": "ewepaksa", "perkosa": "perkosa"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/ewepaksa.js", metadata, m, extra)
handler.help = ["rimuru-rpg-ewepaksa"]
handler.command = ["rimuru-rpg-ewepaksa", "rimuru-ewepaksa", "rimuru-perkosa", "ewepaksa", "perkosa"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ewepaksa", "alias": ["perkosa"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": true, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-ewepaksa": "ewepaksa", "rimuru-ewepaksa": "ewepaksa", "rimuru-perkosa": "perkosa", "ewepaksa": "ewepaksa", "perkosa": "perkosa"}
export default handler
