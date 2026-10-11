/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/igstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "igstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-igstalk": "igstalk", "rimuru-igstalk": "igstalk", "rimuru-instagramstalk": "instagramstalk", "rimuru-stalking": "stalking", "igstalk": "igstalk", "instagramstalk": "instagramstalk", "stalking": "stalking"}, "description": "Stalk akun Instagram", "usage": ".igstalk <username>", "example": ".igstalk cristiano", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/igstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-igstalk <username>"]
handler.command = ["rimuru-stalker-igstalk", "rimuru-igstalk", "rimuru-instagramstalk", "rimuru-stalking", "igstalk", "instagramstalk", "stalking"]
handler.tags = ["stalker"]
handler.description = "Stalk akun Instagram"
handler.importSource = "rimuru"
handler.importConfig = {"name": "igstalk", "alias": ["instagramstalk", "stalking"], "category": "stalker", "description": "Stalk akun Instagram", "usage": ".igstalk <username>", "example": ".igstalk cristiano", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-igstalk": "igstalk", "rimuru-igstalk": "igstalk", "rimuru-instagramstalk": "instagramstalk", "rimuru-stalking": "stalking", "igstalk": "igstalk", "instagramstalk": "instagramstalk", "stalking": "stalking"}
export default handler
