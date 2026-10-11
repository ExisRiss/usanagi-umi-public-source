/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/jualan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jualan", "category": "rpg", "aliasMap": {"rimuru-rpg-jualan": "jualan", "rimuru-jualan": "jualan", "rimuru-dagang": "dagang", "rimuru-pedagang": "pedagang"}, "description": "Dagang asongan keliling", "usage": ".jualan", "example": ".jualan", "cooldown": 180, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/jualan.js", metadata, m, extra)
handler.help = ["rimuru-rpg-jualan"]
handler.command = ["rimuru-rpg-jualan", "rimuru-jualan", "rimuru-dagang", "rimuru-pedagang"]
handler.tags = ["rpg"]
handler.description = "Dagang asongan keliling"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jualan", "alias": ["dagang", "pedagang"], "category": "rpg", "description": "Dagang asongan keliling", "usage": ".jualan", "example": ".jualan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-jualan": "jualan", "rimuru-jualan": "jualan", "rimuru-dagang": "dagang", "rimuru-pedagang": "pedagang"}
export default handler
