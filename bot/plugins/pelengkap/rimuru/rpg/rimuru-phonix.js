/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/phonix.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fightphonix", "category": "rpg", "aliasMap": {"rimuru-rpg-fightphonix": "fightphonix", "rimuru-fightphonix": "fightphonix", "fightphonix": "fightphonix"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/phonix.js", metadata, m, extra)
handler.help = ["rimuru-rpg-fightphonix"]
handler.command = ["rimuru-rpg-fightphonix", "rimuru-fightphonix", "fightphonix"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fightphonix", "alias": [], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-fightphonix": "fightphonix", "rimuru-fightphonix": "fightphonix", "fightphonix": "fightphonix"}
export default handler
