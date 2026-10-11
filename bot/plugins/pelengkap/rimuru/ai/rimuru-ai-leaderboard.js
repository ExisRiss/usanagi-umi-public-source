/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/ai-leaderboard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ai-leaderboard", "category": "ai", "aliasMap": {"rimuru-ai-ai-leaderboard": "ai-leaderboard", "rimuru-ai-leaderboard": "ai-leaderboard", "rimuru-aileaderboard": "aileaderboard", "rimuru-aiboard": "aiboard", "rimuru-ailb": "ailb", "rimuru-lmarena": "lmarena", "ai-leaderboard": "ai-leaderboard", "aileaderboard": "aileaderboard", "aiboard": "aiboard", "ailb": "ailb", "lmarena": "lmarena"}, "description": "Lihat leaderboard AI model terbaik dari LMArena", "usage": ".ai-leaderboard [category]", "example": ".ai-leaderboard text", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/ai-leaderboard.js", metadata, m, extra)
handler.help = ["rimuru-ai-ai-leaderboard [category]"]
handler.command = ["rimuru-ai-ai-leaderboard", "rimuru-ai-leaderboard", "rimuru-aileaderboard", "rimuru-aiboard", "rimuru-ailb", "rimuru-lmarena", "ai-leaderboard", "aileaderboard", "aiboard", "ailb", "lmarena"]
handler.tags = ["ai"]
handler.description = "Lihat leaderboard AI model terbaik dari LMArena"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ai-leaderboard", "alias": ["aileaderboard", "aiboard", "ailb", "lmarena"], "category": "ai", "description": "Lihat leaderboard AI model terbaik dari LMArena", "usage": ".ai-leaderboard [category]", "example": ".ai-leaderboard text", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-ai-leaderboard": "ai-leaderboard", "rimuru-ai-leaderboard": "ai-leaderboard", "rimuru-aileaderboard": "aileaderboard", "rimuru-aiboard": "aiboard", "rimuru-ailb": "ailb", "rimuru-lmarena": "lmarena", "ai-leaderboard": "ai-leaderboard", "aileaderboard": "aileaderboard", "aiboard": "aiboard", "ailb": "ailb", "lmarena": "lmarena"}
export default handler
