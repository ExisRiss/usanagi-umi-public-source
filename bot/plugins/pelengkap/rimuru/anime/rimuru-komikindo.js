/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/komikindo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "komikindo", "category": "anime", "aliasMap": {"rimuru-anime-komikindo": "komikindo", "rimuru-komikindo": "komikindo"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/komikindo.js", metadata, m, extra)
handler.help = ["rimuru-anime-komikindo"]
handler.command = ["rimuru-anime-komikindo", "rimuru-komikindo"]
handler.tags = ["anime"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "komikindo", "alias": [], "category": "anime", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-komikindo": "komikindo", "rimuru-komikindo": "komikindo"}
export default handler
