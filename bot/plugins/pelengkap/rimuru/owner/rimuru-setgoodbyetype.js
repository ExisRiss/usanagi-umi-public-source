/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setgoodbyetype.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setgoodbyetype", "category": "owner", "aliasMap": {"rimuru-owner-setgoodbyetype": "setgoodbyetype", "rimuru-setgoodbyetype": "setgoodbyetype", "rimuru-goodbyetype": "goodbyetype", "rimuru-goodbyevariant": "goodbyevariant", "rimuru-goodbyestyle": "goodbyestyle", "setgoodbyetype": "setgoodbyetype", "goodbyetype": "goodbyetype", "goodbyevariant": "goodbyevariant", "goodbyestyle": "goodbyestyle"}, "description": "Mengatur variant tampilan goodbye message", "usage": ".setgoodbyetype", "example": ".setgoodbyetype", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setgoodbyetype.js", metadata, m, extra)
handler.help = ["rimuru-owner-setgoodbyetype"]
handler.command = ["rimuru-owner-setgoodbyetype", "rimuru-setgoodbyetype", "rimuru-goodbyetype", "rimuru-goodbyevariant", "rimuru-goodbyestyle", "setgoodbyetype", "goodbyetype", "goodbyevariant", "goodbyestyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan goodbye message"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setgoodbyetype", "alias": ["goodbyetype", "goodbyevariant", "goodbyestyle"], "category": "owner", "description": "Mengatur variant tampilan goodbye message", "usage": ".setgoodbyetype", "example": ".setgoodbyetype", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setgoodbyetype": "setgoodbyetype", "rimuru-setgoodbyetype": "setgoodbyetype", "rimuru-goodbyetype": "goodbyetype", "rimuru-goodbyevariant": "goodbyevariant", "rimuru-goodbyestyle": "goodbyestyle", "setgoodbyetype": "setgoodbyetype", "goodbyetype": "goodbyetype", "goodbyevariant": "goodbyevariant", "goodbyestyle": "goodbyestyle"}
export default handler
