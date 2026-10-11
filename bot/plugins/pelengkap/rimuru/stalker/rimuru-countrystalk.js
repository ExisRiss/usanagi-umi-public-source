/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/countrystalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "countrystalk", "category": "stalker  ", "aliasMap": {"rimuru-stalker---countrystalk": "countrystalk", "rimuru-countrystalk": "countrystalk", "rimuru-stalknegara": "stalknegara", "rimuru-infonegara": "infonegara", "countrystalk": "countrystalk", "stalknegara": "stalknegara", "infonegara": "infonegara"}, "description": "Mencari informasi detail tentang suatu negara", "usage": ".country <nama negara>", "example": ".country indonesia", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/countrystalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker---countrystalk <nama negara>"]
handler.command = ["rimuru-stalker---countrystalk", "rimuru-countrystalk", "rimuru-stalknegara", "rimuru-infonegara", "countrystalk", "stalknegara", "infonegara"]
handler.tags = ["stalker  "]
handler.description = "Mencari informasi detail tentang suatu negara"
handler.importSource = "rimuru"
handler.importConfig = {"name": "countrystalk", "alias": ["stalknegara", "infonegara"], "category": "stalker  ", "description": "Mencari informasi detail tentang suatu negara", "usage": ".country <nama negara>", "example": ".country indonesia", "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker---countrystalk": "countrystalk", "rimuru-countrystalk": "countrystalk", "rimuru-stalknegara": "stalknegara", "rimuru-infonegara": "infonegara", "countrystalk": "countrystalk", "stalknegara": "stalknegara", "infonegara": "infonegara"}
export default handler
