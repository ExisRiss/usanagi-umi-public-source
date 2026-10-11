/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/use.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "use", "category": "rpg", "aliasMap": {"rimuru-rpg-use": "use", "rimuru-use": "use", "rimuru-pake": "pake", "rimuru-makan": "makan"}, "description": "Menggunakan item consumable atau membuka crate", "usage": ".use <item>", "example": ".use potion", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/use.js", metadata, m, extra)
handler.help = ["rimuru-rpg-use <item>"]
handler.command = ["rimuru-rpg-use", "rimuru-use", "rimuru-pake", "rimuru-makan"]
handler.tags = ["rpg"]
handler.description = "Menggunakan item consumable atau membuka crate"
handler.importSource = "rimuru"
handler.importConfig = {"name": "use", "alias": ["pake", "makan", "open"], "category": "rpg", "description": "Menggunakan item consumable atau membuka crate", "usage": ".use <item>", "example": ".use potion", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-use": "use", "rimuru-use": "use", "rimuru-pake": "pake", "rimuru-makan": "makan"}
export default handler
