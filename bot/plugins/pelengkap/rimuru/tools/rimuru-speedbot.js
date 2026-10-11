/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/speedbot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "speedbot", "category": "tools", "aliasMap": {"rimuru-tools-speedbot": "speedbot", "rimuru-speedbot": "speedbot", "rimuru-speed-bot": "speed-bot", "rimuru-serverinfo": "serverinfo", "speedbot": "speedbot", "speed-bot": "speed-bot", "serverinfo": "serverinfo"}, "description": "Menampilkan statistik performa server bot", "usage": ".speedbot", "example": ".speedbot", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/speedbot.js", metadata, m, extra)
handler.help = ["rimuru-tools-speedbot"]
handler.command = ["rimuru-tools-speedbot", "rimuru-speedbot", "rimuru-speed-bot", "rimuru-serverinfo", "speedbot", "speed-bot", "serverinfo"]
handler.tags = ["tools"]
handler.description = "Menampilkan statistik performa server bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "speedbot", "alias": ["speed-bot", "serverinfo"], "category": "tools", "description": "Menampilkan statistik performa server bot", "usage": ".speedbot", "example": ".speedbot", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-speedbot": "speedbot", "rimuru-speedbot": "speedbot", "rimuru-speed-bot": "speed-bot", "rimuru-serverinfo": "serverinfo", "speedbot": "speedbot", "speed-bot": "speed-bot", "serverinfo": "serverinfo"}
export default handler
