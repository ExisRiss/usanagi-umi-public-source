/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/blacksmith.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "blacksmith", "category": "rpg", "aliasMap": {"rimuru-rpg-blacksmith": "blacksmith", "rimuru-blacksmith": "blacksmith", "rimuru-tempa": "tempa", "rimuru-forge": "forge", "rimuru-pandai": "pandai"}, "description": "Tempa senjata dan armor dari material", "usage": ".blacksmith <item>", "example": ".blacksmith sword", "cooldown": 120, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/blacksmith.js", metadata, m, extra)
handler.help = ["rimuru-rpg-blacksmith <item>"]
handler.command = ["rimuru-rpg-blacksmith", "rimuru-blacksmith", "rimuru-tempa", "rimuru-forge", "rimuru-pandai"]
handler.tags = ["rpg"]
handler.description = "Tempa senjata dan armor dari material"
handler.importSource = "rimuru"
handler.importConfig = {"name": "blacksmith", "alias": ["tempa", "forge", "pandai"], "category": "rpg", "description": "Tempa senjata dan armor dari material", "usage": ".blacksmith <item>", "example": ".blacksmith sword", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-blacksmith": "blacksmith", "rimuru-blacksmith": "blacksmith", "rimuru-tempa": "tempa", "rimuru-forge": "forge", "rimuru-pandai": "pandai"}
export default handler
