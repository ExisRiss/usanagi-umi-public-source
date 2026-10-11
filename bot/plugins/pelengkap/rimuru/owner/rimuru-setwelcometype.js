/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setwelcometype.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setwelcometype", "category": "owner", "aliasMap": {"rimuru-owner-setwelcometype": "setwelcometype", "rimuru-setwelcometype": "setwelcometype", "rimuru-welcometype": "welcometype", "rimuru-welcomevariant": "welcomevariant", "rimuru-welcomestyle": "welcomestyle", "setwelcometype": "setwelcometype", "welcometype": "welcometype", "welcomevariant": "welcomevariant", "welcomestyle": "welcomestyle"}, "description": "Mengatur variant tampilan welcome message", "usage": ".setwelcometype", "example": ".setwelcometype", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setwelcometype.js", metadata, m, extra)
handler.help = ["rimuru-owner-setwelcometype"]
handler.command = ["rimuru-owner-setwelcometype", "rimuru-setwelcometype", "rimuru-welcometype", "rimuru-welcomevariant", "rimuru-welcomestyle", "setwelcometype", "welcometype", "welcomevariant", "welcomestyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan welcome message"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setwelcometype", "alias": ["welcometype", "welcomevariant", "welcomestyle"], "category": "owner", "description": "Mengatur variant tampilan welcome message", "usage": ".setwelcometype", "example": ".setwelcometype", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setwelcometype": "setwelcometype", "rimuru-setwelcometype": "setwelcometype", "rimuru-welcometype": "welcometype", "rimuru-welcomevariant": "welcomevariant", "rimuru-welcomestyle": "welcomestyle", "setwelcometype": "setwelcometype", "welcometype": "welcometype", "welcomevariant": "welcomevariant", "welcomestyle": "welcomestyle"}
export default handler
