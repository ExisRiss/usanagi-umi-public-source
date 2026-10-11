/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ptv.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ptv", "category": "tools", "aliasMap": {"rimuru-tools-ptv": "ptv", "rimuru-ptv": "ptv", "rimuru-pvideo": "pvideo", "rimuru-circlevideo": "circlevideo", "ptv": "ptv", "pvideo": "pvideo", "circlevideo": "circlevideo"}, "description": "Kirim video sebagai PTV (circle video)", "usage": ".ptv (reply video)", "example": ".ptv", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ptv.js", metadata, m, extra)
handler.help = ["rimuru-tools-ptv (reply video)"]
handler.command = ["rimuru-tools-ptv", "rimuru-ptv", "rimuru-pvideo", "rimuru-circlevideo", "ptv", "pvideo", "circlevideo"]
handler.tags = ["tools"]
handler.description = "Kirim video sebagai PTV (circle video)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ptv", "alias": ["pvideo", "circlevideo"], "category": "tools", "description": "Kirim video sebagai PTV (circle video)", "usage": ".ptv (reply video)", "example": ".ptv", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ptv": "ptv", "rimuru-ptv": "ptv", "rimuru-pvideo": "pvideo", "rimuru-circlevideo": "circlevideo", "ptv": "ptv", "pvideo": "pvideo", "circlevideo": "circlevideo"}
export default handler
