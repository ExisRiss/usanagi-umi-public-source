/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/ngamen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ngamen", "category": "rpg", "aliasMap": {"rimuru-rpg-ngamen": "ngamen", "rimuru-ngamen": "ngamen", "rimuru-nyanyi": "nyanyi", "rimuru-konser": "konser"}, "description": "Ngamen di jalanan untuk mencari koin", "usage": ".ngamen", "example": ".ngamen", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/ngamen.js", metadata, m, extra)
handler.help = ["rimuru-rpg-ngamen"]
handler.command = ["rimuru-rpg-ngamen", "rimuru-ngamen", "rimuru-nyanyi", "rimuru-konser"]
handler.tags = ["rpg"]
handler.description = "Ngamen di jalanan untuk mencari koin"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ngamen", "alias": ["nyanyi", "konser"], "category": "rpg", "description": "Ngamen di jalanan untuk mencari koin", "usage": ".ngamen", "example": ".ngamen", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-ngamen": "ngamen", "rimuru-ngamen": "ngamen", "rimuru-nyanyi": "nyanyi", "rimuru-konser": "konser"}
export default handler
