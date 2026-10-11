/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/luffy_ai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "luffyai", "category": "ai", "aliasMap": {"rimuru-ai-luffyai": "luffyai", "rimuru-luffyai": "luffyai", "rimuru-luffy": "luffy", "rimuru-monkeydluffy": "monkeydluffy", "rimuru-mugiwara": "mugiwara", "luffyai": "luffyai", "luffy": "luffy", "monkeydluffy": "monkeydluffy", "mugiwara": "mugiwara"}, "description": "Chat dengan Monkey D. Luffy — Calon Raja Bajak Laut dari Topi Jerami! 🏴‍☠️", "usage": ".luffyai <pertanyaan>", "example": ".luffyai Halo Luffy!", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/luffy_ai.js", metadata, m, extra)
handler.help = ["rimuru-ai-luffyai <pertanyaan>"]
handler.command = ["rimuru-ai-luffyai", "rimuru-luffyai", "rimuru-luffy", "rimuru-monkeydluffy", "rimuru-mugiwara", "luffyai", "luffy", "monkeydluffy", "mugiwara"]
handler.tags = ["ai"]
handler.description = "Chat dengan Monkey D. Luffy — Calon Raja Bajak Laut dari Topi Jerami! 🏴‍☠️"
handler.importSource = "rimuru"
handler.importConfig = {"name": "luffyai", "alias": ["luffy", "monkeydluffy", "mugiwara"], "category": "ai", "description": "Chat dengan Monkey D. Luffy — Calon Raja Bajak Laut dari Topi Jerami! 🏴‍☠️", "usage": ".luffyai <pertanyaan>", "example": ".luffyai Halo Luffy!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-luffyai": "luffyai", "rimuru-luffyai": "luffyai", "rimuru-luffy": "luffy", "rimuru-monkeydluffy": "monkeydluffy", "rimuru-mugiwara": "mugiwara", "luffyai": "luffyai", "luffy": "luffy", "monkeydluffy": "monkeydluffy", "mugiwara": "mugiwara"}
export default handler
