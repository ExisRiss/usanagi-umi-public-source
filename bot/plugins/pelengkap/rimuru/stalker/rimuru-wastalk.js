/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/wastalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wastalk", "category": "stalker", "aliasMap": {"rimuru-stalker-wastalk": "wastalk", "rimuru-wastalk": "wastalk", "rimuru-whatsappstalk": "whatsappstalk", "rimuru-stalkwa": "stalkwa", "wastalk": "wastalk", "whatsappstalk": "whatsappstalk", "stalkwa": "stalkwa"}, "description": "Stalk profile WhatsApp", "usage": ".wastalk <nomor/tag>", "example": ".wastalk 6281234567890", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/wastalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-wastalk <nomor/tag>"]
handler.command = ["rimuru-stalker-wastalk", "rimuru-wastalk", "rimuru-whatsappstalk", "rimuru-stalkwa", "wastalk", "whatsappstalk", "stalkwa"]
handler.tags = ["stalker"]
handler.description = "Stalk profile WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wastalk", "alias": ["whatsappstalk", "stalkwa"], "category": "stalker", "description": "Stalk profile WhatsApp", "usage": ".wastalk <nomor/tag>", "example": ".wastalk 6281234567890", "isGroup": false, "isBotAdmin": false, "isAdmin": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-wastalk": "wastalk", "rimuru-wastalk": "wastalk", "rimuru-whatsappstalk": "whatsappstalk", "rimuru-stalkwa": "stalkwa", "wastalk": "wastalk", "whatsappstalk": "whatsappstalk", "stalkwa": "stalkwa"}
export default handler
