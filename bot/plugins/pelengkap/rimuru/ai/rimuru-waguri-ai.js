/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/waguri-ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "waguri-ai", "category": "ai", "aliasMap": {"rimuru-ai-waguri-ai": "waguri-ai", "rimuru-waguri-ai": "waguri-ai", "rimuru-waguriai": "waguriai", "rimuru-waguri": "waguri", "waguri-ai": "waguri-ai", "waguriai": "waguriai", "waguri": "waguri"}, "description": "Chat dengan Waguri-san — Gadis pemalu yang lupa kacamata", "usage": ".waguri-ai <pertanyaan>", "example": ".waguri-ai Waguri-san, halo!", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/waguri-ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-waguri-ai <pertanyaan>"]
handler.command = ["rimuru-ai-waguri-ai", "rimuru-waguri-ai", "rimuru-waguriai", "rimuru-waguri", "waguri-ai", "waguriai", "waguri"]
handler.tags = ["ai"]
handler.description = "Chat dengan Waguri-san — Gadis pemalu yang lupa kacamata"
handler.importSource = "rimuru"
handler.importConfig = {"name": "waguri-ai", "alias": ["waguriai", "waguri"], "category": "ai", "description": "Chat dengan Waguri-san — Gadis pemalu yang lupa kacamata", "usage": ".waguri-ai <pertanyaan>", "example": ".waguri-ai Waguri-san, halo!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-waguri-ai": "waguri-ai", "rimuru-waguri-ai": "waguri-ai", "rimuru-waguriai": "waguriai", "rimuru-waguri": "waguri", "waguri-ai": "waguri-ai", "waguriai": "waguriai", "waguri": "waguri"}
export default handler
