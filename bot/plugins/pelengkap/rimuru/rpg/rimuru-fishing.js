/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/fishing.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fishing", "category": "rpg", "aliasMap": {"rimuru-rpg-fishing": "fishing", "rimuru-fishing": "fishing", "rimuru-rpgfish": "rpgfish", "rimuru-mancing": "mancing"}, "description": "Memancing untuk mendapatkan ikan (RPG)", "usage": ".fishing", "example": ".fishing", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/fishing.js", metadata, m, extra)
handler.help = ["rimuru-rpg-fishing"]
handler.command = ["rimuru-rpg-fishing", "rimuru-fishing", "rimuru-rpgfish", "rimuru-mancing"]
handler.tags = ["rpg"]
handler.description = "Memancing untuk mendapatkan ikan (RPG)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fishing", "alias": ["rpgfish", "mancing"], "category": "rpg", "description": "Memancing untuk mendapatkan ikan (RPG)", "usage": ".fishing", "example": ".fishing", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-fishing": "fishing", "rimuru-fishing": "fishing", "rimuru-rpgfish": "rpgfish", "rimuru-mancing": "mancing"}
export default handler
