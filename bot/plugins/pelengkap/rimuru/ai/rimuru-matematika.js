/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/matematika.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "matematika", "category": "ai", "aliasMap": {"rimuru-ai-matematika": "matematika", "rimuru-matematika": "matematika", "rimuru-mathgpt": "mathgpt", "rimuru-math": "math", "rimuru-mathsolver": "mathsolver", "matematika": "matematika", "mathgpt": "mathgpt", "math": "math", "mathsolver": "mathsolver"}, "description": "AI untuk menyelesaikan soal matematika", "usage": ".matematika <soal>", "example": ".matematika 2+2 berapa?", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/matematika.js", metadata, m, extra)
handler.help = ["rimuru-ai-matematika <soal>"]
handler.command = ["rimuru-ai-matematika", "rimuru-matematika", "rimuru-mathgpt", "rimuru-math", "rimuru-mathsolver", "matematika", "mathgpt", "math", "mathsolver"]
handler.tags = ["ai"]
handler.description = "AI untuk menyelesaikan soal matematika"
handler.importSource = "rimuru"
handler.importConfig = {"name": "matematika", "alias": ["mathgpt", "math", "mathsolver"], "category": "ai", "description": "AI untuk menyelesaikan soal matematika", "usage": ".matematika <soal>", "example": ".matematika 2+2 berapa?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-matematika": "matematika", "rimuru-matematika": "matematika", "rimuru-mathgpt": "mathgpt", "rimuru-math": "math", "rimuru-mathsolver": "mathsolver", "matematika": "matematika", "mathgpt": "mathgpt", "math": "math", "mathsolver": "mathsolver"}
export default handler
