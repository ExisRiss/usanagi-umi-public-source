/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/mobinime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mobinime", "category": "anime", "aliasMap": {"rimuru-anime-mobinime": "mobinime", "rimuru-mobinime": "mobinime", "mobinime": "mobinime"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/mobinime.js", metadata, m, extra)
handler.help = ["rimuru-anime-mobinime"]
handler.command = ["rimuru-anime-mobinime", "rimuru-mobinime", "mobinime"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mobinime", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-mobinime": "mobinime", "rimuru-mobinime": "mobinime", "mobinime": "mobinime"}
export default handler
