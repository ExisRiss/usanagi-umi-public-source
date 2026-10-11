/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/fliptext.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fliptext", "category": "tools", "aliasMap": {"rimuru-tools-fliptext": "fliptext", "rimuru-fliptext": "fliptext", "rimuru-baliktext": "baliktext", "fliptext": "fliptext", "baliktext": "baliktext"}, "description": "Membalik susunan teks", "usage": ".fliptext <teks>", "example": ".fliptext Rimuru MD", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/fliptext.js", metadata, m, extra)
handler.help = ["rimuru-tools-fliptext <teks>"]
handler.command = ["rimuru-tools-fliptext", "rimuru-fliptext", "rimuru-baliktext", "fliptext", "baliktext"]
handler.tags = ["tools"]
handler.description = "Membalik susunan teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fliptext", "alias": ["baliktext"], "category": "tools", "description": "Membalik susunan teks", "usage": ".fliptext <teks>", "example": ".fliptext Rimuru MD", "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-fliptext": "fliptext", "rimuru-fliptext": "fliptext", "rimuru-baliktext": "baliktext", "fliptext": "fliptext", "baliktext": "baliktext"}
export default handler
