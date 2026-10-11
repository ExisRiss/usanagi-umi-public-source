/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/grammary.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "grammarly", "category": "tools", "aliasMap": {"rimuru-tools-grammarly": "grammarly", "rimuru-grammarly": "grammarly", "rimuru-aidetector": "aidetector", "rimuru-checkai": "checkai", "rimuru-grammarlyai": "grammarlyai", "grammarly": "grammarly", "aidetector": "aidetector", "checkai": "checkai", "grammarlyai": "grammarlyai"}, "description": "Mengecek persentase teks AI menggunakan Grammarly AI Detector", "usage": ".grammarly <teks yang ingin dicek>", "example": ".grammarly Hello world, this is a test text to check AI score.", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/grammary.js", metadata, m, extra)
handler.help = ["rimuru-tools-grammarly <teks yang ingin dicek>"]
handler.command = ["rimuru-tools-grammarly", "rimuru-grammarly", "rimuru-aidetector", "rimuru-checkai", "rimuru-grammarlyai", "grammarly", "aidetector", "checkai", "grammarlyai"]
handler.tags = ["tools"]
handler.description = "Mengecek persentase teks AI menggunakan Grammarly AI Detector"
handler.importSource = "rimuru"
handler.importConfig = {"name": "grammarly", "alias": ["aidetector", "checkai", "grammarlyai"], "category": "tools", "description": "Mengecek persentase teks AI menggunakan Grammarly AI Detector", "usage": ".grammarly <teks yang ingin dicek>", "example": ".grammarly Hello world, this is a test text to check AI score.", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-grammarly": "grammarly", "rimuru-grammarly": "grammarly", "rimuru-aidetector": "aidetector", "rimuru-checkai": "checkai", "rimuru-grammarlyai": "grammarlyai", "grammarly": "grammarly", "aidetector": "aidetector", "checkai": "checkai", "grammarlyai": "grammarlyai"}
export default handler
