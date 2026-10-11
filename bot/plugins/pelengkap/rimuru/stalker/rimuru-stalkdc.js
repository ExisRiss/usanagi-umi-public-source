/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/stalkdc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stalkdc", "category": "stalker", "aliasMap": {"rimuru-stalker-stalkdc": "stalkdc", "rimuru-cekkdc": "cekkdc", "cekkdc": "cekkdc"}, "description": "Mengetahui info profil akun Discord berdasarkan ID", "usage": ".stalkdc <id_discord>", "example": ".stalkdc 1280009524941426700", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/stalkdc.js", metadata, m, extra)
handler.help = ["rimuru-stalker-stalkdc <id_discord>"]
handler.command = ["rimuru-stalker-stalkdc", "rimuru-cekkdc", "cekkdc"]
handler.tags = ["stalker"]
handler.description = "Mengetahui info profil akun Discord berdasarkan ID"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stalkdc", "alias": ["discordstalk", "cekkdc", "stalkdiscord"], "category": "stalker", "description": "Mengetahui info profil akun Discord berdasarkan ID", "usage": ".stalkdc <id_discord>", "example": ".stalkdc 1280009524941426700", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-stalkdc": "stalkdc", "rimuru-cekkdc": "cekkdc", "cekkdc": "cekkdc"}
export default handler
