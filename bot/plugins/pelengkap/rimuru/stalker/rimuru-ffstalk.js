/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/ffstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ffstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-ffstalk": "ffstalk", "rimuru-ffstalk": "ffstalk", "rimuru-freefireid": "freefireid", "rimuru-stalkff": "stalkff", "rimuru-ff": "ff", "ffstalk": "ffstalk", "freefireid": "freefireid", "stalkff": "stalkff", "ff": "ff"}, "description": "Melihat informasi lengkap akun Free Fire berdasarkan ID.", "usage": ".ffstalk <id>", "example": ".ffstalk 470699855", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/ffstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-ffstalk <id>"]
handler.command = ["rimuru-stalker-ffstalk", "rimuru-ffstalk", "rimuru-freefireid", "rimuru-stalkff", "rimuru-ff", "ffstalk", "freefireid", "stalkff", "ff"]
handler.tags = ["stalker"]
handler.description = "Melihat informasi lengkap akun Free Fire berdasarkan ID."
handler.importSource = "rimuru"
handler.importConfig = {"name": "ffstalk", "alias": ["freefireid", "stalkff", "ff"], "category": "stalker", "description": "Melihat informasi lengkap akun Free Fire berdasarkan ID.", "usage": ".ffstalk <id>", "example": ".ffstalk 470699855", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-ffstalk": "ffstalk", "rimuru-ffstalk": "ffstalk", "rimuru-freefireid": "freefireid", "rimuru-stalkff": "stalkff", "rimuru-ff": "ff", "ffstalk": "ffstalk", "freefireid": "freefireid", "stalkff": "stalkff", "ff": "ff"}
export default handler
