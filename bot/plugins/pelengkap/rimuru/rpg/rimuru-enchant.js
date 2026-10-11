/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/enchant.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "enchant", "category": "rpg", "aliasMap": {"rimuru-rpg-enchant": "enchant", "rimuru-enchant": "enchant", "rimuru-upgrade": "upgrade", "rimuru-tingkatkan": "tingkatkan"}, "description": "Upgrade equipment dengan enchantment", "usage": ".enchant <item>", "example": ".enchant sword", "cooldown": 120, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/enchant.js", metadata, m, extra)
handler.help = ["rimuru-rpg-enchant <item>"]
handler.command = ["rimuru-rpg-enchant", "rimuru-enchant", "rimuru-upgrade", "rimuru-tingkatkan"]
handler.tags = ["rpg"]
handler.description = "Upgrade equipment dengan enchantment"
handler.importSource = "rimuru"
handler.importConfig = {"name": "enchant", "alias": ["upgrade", "enhance", "tingkatkan"], "category": "rpg", "description": "Upgrade equipment dengan enchantment", "usage": ".enchant <item>", "example": ".enchant sword", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-enchant": "enchant", "rimuru-enchant": "enchant", "rimuru-upgrade": "upgrade", "rimuru-tingkatkan": "tingkatkan"}
export default handler
