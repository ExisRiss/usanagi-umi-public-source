/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/mcstatus.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mcstatus", "category": "general", "aliasMap": {"rimuru-general-mcstatus": "mcstatus", "rimuru-mcstatus": "mcstatus", "rimuru-mcstat": "mcstat", "mcstatus": "mcstatus", "mcstat": "mcstat"}, "description": "Mengecek status server Minecraft Java", "usage": ".mcstatus <ip/domain[:port]>", "example": ".mcstatus play.example.net", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/mcstatus.js", metadata, m, extra)
handler.help = ["rimuru-general-mcstatus <ip/domain[:port]>"]
handler.command = ["rimuru-general-mcstatus", "rimuru-mcstatus", "rimuru-mcstat", "mcstatus", "mcstat"]
handler.tags = ["general"]
handler.description = "Mengecek status server Minecraft Java"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mcstatus", "alias": ["mcstat"], "category": "general", "description": "Mengecek status server Minecraft Java", "usage": ".mcstatus <ip/domain[:port]>", "example": ".mcstatus play.example.net", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-general-mcstatus": "mcstatus", "rimuru-mcstatus": "mcstatus", "rimuru-mcstat": "mcstat", "mcstatus": "mcstatus", "mcstat": "mcstat"}
export default handler
