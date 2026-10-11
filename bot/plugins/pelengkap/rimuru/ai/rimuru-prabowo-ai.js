/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/prabowo-ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "prabowo-ai", "category": "ai", "aliasMap": {"rimuru-ai-prabowo-ai": "prabowo-ai", "rimuru-prabowo-ai": "prabowo-ai", "rimuru-prabowoi": "prabowoi", "rimuru-prabowo": "prabowo", "rimuru-pakprabowo": "pakprabowo", "prabowo-ai": "prabowo-ai", "prabowoi": "prabowoi", "prabowo": "prabowo", "pakprabowo": "pakprabowo"}, "description": "Chat dengan Pak Prabowo — Pria Sawit", "usage": ".prabowo-ai <pertanyaan>", "example": ".prabowo-ai Saudara, kita harus berdaulat!", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/prabowo-ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-prabowo-ai <pertanyaan>"]
handler.command = ["rimuru-ai-prabowo-ai", "rimuru-prabowo-ai", "rimuru-prabowoi", "rimuru-prabowo", "rimuru-pakprabowo", "prabowo-ai", "prabowoi", "prabowo", "pakprabowo"]
handler.tags = ["ai"]
handler.description = "Chat dengan Pak Prabowo — Pria Sawit"
handler.importSource = "rimuru"
handler.importConfig = {"name": "prabowo-ai", "alias": ["prabowoi", "prabowo", "pakprabowo"], "category": "ai", "description": "Chat dengan Pak Prabowo — Pria Sawit", "usage": ".prabowo-ai <pertanyaan>", "example": ".prabowo-ai Saudara, kita harus berdaulat!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-prabowo-ai": "prabowo-ai", "rimuru-prabowo-ai": "prabowo-ai", "rimuru-prabowoi": "prabowoi", "rimuru-prabowo": "prabowo", "rimuru-pakprabowo": "pakprabowo", "prabowo-ai": "prabowo-ai", "prabowoi": "prabowoi", "prabowo": "prabowo", "pakprabowo": "pakprabowo"}
export default handler
