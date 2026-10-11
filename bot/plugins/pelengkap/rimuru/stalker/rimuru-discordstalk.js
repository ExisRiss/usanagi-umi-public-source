/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/discordstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "discordstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-discordstalk": "discordstalk", "rimuru-dcstalk": "dcstalk", "rimuru-dsstalk": "dsstalk", "discordstalk": "discordstalk", "dcstalk": "dcstalk", "dsstalk": "dsstalk", "stalkdc": "stalkdc", "stalkdiscord": "stalkdiscord"}, "description": "Stalk akun Discord berdasarkan User ID", "usage": ".discordstalk <userid>", "example": ".discordstalk 297574907510784000", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/discordstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-discordstalk <userid>"]
handler.command = ["rimuru-stalker-discordstalk", "rimuru-dcstalk", "rimuru-dsstalk", "discordstalk", "dcstalk", "dsstalk", "stalkdc", "stalkdiscord"]
handler.tags = ["stalker"]
handler.description = "Stalk akun Discord berdasarkan User ID"
handler.importSource = "rimuru"
handler.importConfig = {"name": "discordstalk", "alias": ["dcstalk", "dsstalk", "stalkdc", "stalkdiscord"], "category": "stalker", "description": "Stalk akun Discord berdasarkan User ID", "usage": ".discordstalk <userid>", "example": ".discordstalk 297574907510784000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-discordstalk": "discordstalk", "rimuru-dcstalk": "dcstalk", "rimuru-dsstalk": "dsstalk", "discordstalk": "discordstalk", "dcstalk": "dcstalk", "dsstalk": "dsstalk", "stalkdc": "stalkdc", "stalkdiscord": "stalkdiscord"}
export default handler
