/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/freelance.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "freelance", "category": "rpg", "aliasMap": {"rimuru-rpg-freelance": "freelance", "rimuru-freelance": "freelance", "rimuru-desain": "desain", "rimuru-koding": "koding"}, "description": "Mengerjakan project online klien bule", "usage": ".freelance", "example": ".freelance", "cooldown": 200, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/freelance.js", metadata, m, extra)
handler.help = ["rimuru-rpg-freelance"]
handler.command = ["rimuru-rpg-freelance", "rimuru-freelance", "rimuru-desain", "rimuru-koding"]
handler.tags = ["rpg"]
handler.description = "Mengerjakan project online klien bule"
handler.importSource = "rimuru"
handler.importConfig = {"name": "freelance", "alias": ["desain", "koding"], "category": "rpg", "description": "Mengerjakan project online klien bule", "usage": ".freelance", "example": ".freelance", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 200, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-freelance": "freelance", "rimuru-freelance": "freelance", "rimuru-desain": "desain", "rimuru-koding": "koding"}
export default handler
