/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/telegramch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tgram", "category": "general", "aliasMap": {"rimuru-general-tgram": "tgram", "rimuru-tgram": "tgram", "tgram": "tgram"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/telegramch.js", metadata, m, extra)
handler.help = ["rimuru-general-tgram"]
handler.command = ["rimuru-general-tgram", "rimuru-tgram", "tgram"]
handler.tags = ["general"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tgram", "alias": [], "category": "general", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-general-tgram": "tgram", "rimuru-tgram": "tgram", "tgram": "tgram"}
export default handler
