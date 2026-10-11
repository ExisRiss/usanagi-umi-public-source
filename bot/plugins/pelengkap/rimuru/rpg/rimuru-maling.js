/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/maling.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "maling", "category": "rpg", "aliasMap": {"rimuru-rpg-maling": "maling", "rimuru-maling": "maling", "rimuru-copet": "copet", "rimuru-pickpocket": "pickpocket", "pickpocket": "pickpocket"}, "description": "Mencopet orang di pasar (lebih berisiko dari crime)", "usage": ".maling", "example": ".maling", "cooldown": 180, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/maling.js", metadata, m, extra)
handler.help = ["rimuru-rpg-maling"]
handler.command = ["rimuru-rpg-maling", "rimuru-maling", "rimuru-copet", "rimuru-pickpocket", "pickpocket"]
handler.tags = ["rpg"]
handler.description = "Mencopet orang di pasar (lebih berisiko dari crime)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "maling", "alias": ["copet", "pickpocket"], "category": "rpg", "description": "Mencopet orang di pasar (lebih berisiko dari crime)", "usage": ".maling", "example": ".maling", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-maling": "maling", "rimuru-maling": "maling", "rimuru-copet": "copet", "rimuru-pickpocket": "pickpocket", "pickpocket": "pickpocket"}
export default handler
