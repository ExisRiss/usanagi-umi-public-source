/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/tebalteks.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tebalteks", "category": "tools", "aliasMap": {"rimuru-tools-tebalteks": "tebalteks", "rimuru-tebalteks": "tebalteks", "rimuru-boldtext": "boldtext", "tebalteks": "tebalteks", "boldtext": "boldtext"}, "description": "Teks tebal ala Rimuru 😈💗 (4 style)", "usage": ".tebalteks <teks>", "example": ".tebalteks rimuruWangy", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/tebalteks.js", metadata, m, extra)
handler.help = ["rimuru-tools-tebalteks <teks>"]
handler.command = ["rimuru-tools-tebalteks", "rimuru-tebalteks", "rimuru-boldtext", "tebalteks", "boldtext"]
handler.tags = ["tools"]
handler.description = "Teks tebal ala Rimuru 😈💗 (4 style)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tebalteks", "alias": ["boldtext"], "category": "tools", "description": "Teks tebal ala Rimuru 😈💗 (4 style)", "usage": ".tebalteks <teks>", "example": ".tebalteks rimuruWangy", "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-tebalteks": "tebalteks", "rimuru-tebalteks": "tebalteks", "rimuru-boldtext": "boldtext", "tebalteks": "tebalteks", "boldtext": "boldtext"}
export default handler
