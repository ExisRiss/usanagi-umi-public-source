/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/meditation.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "meditation", "category": "rpg", "aliasMap": {"rimuru-rpg-meditation": "meditation", "rimuru-meditation": "meditation", "rimuru-rest": "rest", "rimuru-istirahat": "istirahat", "rimuru-tidur": "tidur", "rimuru-sleep": "sleep"}, "description": "Istirahat untuk pulihkan HP dan stamina", "usage": ".meditation", "example": ".meditation", "cooldown": 600, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/meditation.js", metadata, m, extra)
handler.help = ["rimuru-rpg-meditation"]
handler.command = ["rimuru-rpg-meditation", "rimuru-meditation", "rimuru-rest", "rimuru-istirahat", "rimuru-tidur", "rimuru-sleep"]
handler.tags = ["rpg"]
handler.description = "Istirahat untuk pulihkan HP dan stamina"
handler.importSource = "rimuru"
handler.importConfig = {"name": "meditation", "alias": ["rest", "istirahat", "tidur", "sleep"], "category": "rpg", "description": "Istirahat untuk pulihkan HP dan stamina", "usage": ".meditation", "example": ".meditation", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 600, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-meditation": "meditation", "rimuru-meditation": "meditation", "rimuru-rest": "rest", "rimuru-istirahat": "istirahat", "rimuru-tidur": "tidur", "rimuru-sleep": "sleep"}
export default handler
