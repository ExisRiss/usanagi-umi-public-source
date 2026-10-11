/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/heal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "heal", "category": "rpg", "aliasMap": {"rimuru-rpg-heal": "heal", "rimuru-heal": "heal", "rimuru-sembuh": "sembuh", "rimuru-recover": "recover"}, "description": "Pulihkan health dengan istirahat (gratis tapi lama)", "usage": ".heal", "example": ".heal", "cooldown": 600, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/heal.js", metadata, m, extra)
handler.help = ["rimuru-rpg-heal"]
handler.command = ["rimuru-rpg-heal", "rimuru-heal", "rimuru-sembuh", "rimuru-recover"]
handler.tags = ["rpg"]
handler.description = "Pulihkan health dengan istirahat (gratis tapi lama)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "heal", "alias": ["sembuh", "recover"], "category": "rpg", "description": "Pulihkan health dengan istirahat (gratis tapi lama)", "usage": ".heal", "example": ".heal", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 600, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-heal": "heal", "rimuru-heal": "heal", "rimuru-sembuh": "sembuh", "rimuru-recover": "recover"}
export default handler
