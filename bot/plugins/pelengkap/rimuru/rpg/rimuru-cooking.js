/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/cooking.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cooking", "category": "rpg", "aliasMap": {"rimuru-rpg-cooking": "cooking", "rimuru-cooking": "cooking", "rimuru-chef": "chef"}, "description": "Masak makanan untuk stamina dan HP", "usage": ".cooking <recipe>", "example": ".cooking friedrice", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/cooking.js", metadata, m, extra)
handler.help = ["rimuru-rpg-cooking <recipe>"]
handler.command = ["rimuru-rpg-cooking", "rimuru-cooking", "rimuru-chef"]
handler.tags = ["rpg"]
handler.description = "Masak makanan untuk stamina dan HP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cooking", "alias": ["chef"], "category": "rpg", "description": "Masak makanan untuk stamina dan HP", "usage": ".cooking <recipe>", "example": ".cooking friedrice", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-cooking": "cooking", "rimuru-cooking": "cooking", "rimuru-chef": "chef"}
export default handler
