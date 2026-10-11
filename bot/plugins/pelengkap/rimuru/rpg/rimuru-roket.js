/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/roket.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "roket", "category": "rpg", "aliasMap": {"rimuru-rpg-roket": "roket", "rimuru-roket": "roket", "rimuru-ngroket": "ngroket", "rimuru-groket": "groket", "rimuru-jadiroket": "jadiroket", "roket": "roket", "ngroket": "ngroket", "groket": "groket", "jadiroket": "jadiroket"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/roket.js", metadata, m, extra)
handler.help = ["rimuru-rpg-roket"]
handler.command = ["rimuru-rpg-roket", "rimuru-roket", "rimuru-ngroket", "rimuru-groket", "rimuru-jadiroket", "roket", "ngroket", "groket", "jadiroket"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "roket", "alias": ["ngroket", "groket", "jadiroket"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-roket": "roket", "rimuru-roket": "roket", "rimuru-ngroket": "ngroket", "rimuru-groket": "groket", "rimuru-jadiroket": "jadiroket", "roket": "roket", "ngroket": "ngroket", "groket": "groket", "jadiroket": "jadiroket"}
export default handler
