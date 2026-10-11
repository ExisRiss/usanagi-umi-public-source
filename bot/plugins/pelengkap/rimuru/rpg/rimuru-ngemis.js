/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/ngemis.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ngemis", "category": "rpg", "aliasMap": {"rimuru-rpg-ngemis": "ngemis", "rimuru-gembel": "gembel"}, "description": "Ngemis di jalanan dengan peluang dapat Nasi Bungkus (Tambah stamina)", "usage": ".ngemis", "example": ".ngemis", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/ngemis.js", metadata, m, extra)
handler.help = ["rimuru-rpg-ngemis"]
handler.command = ["rimuru-rpg-ngemis", "rimuru-gembel"]
handler.tags = ["rpg"]
handler.description = "Ngemis di jalanan dengan peluang dapat Nasi Bungkus (Tambah stamina)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ngemis", "alias": ["minta", "gembel"], "category": "rpg", "description": "Ngemis di jalanan dengan peluang dapat Nasi Bungkus (Tambah stamina)", "usage": ".ngemis", "example": ".ngemis", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-ngemis": "ngemis", "rimuru-gembel": "gembel"}
export default handler
