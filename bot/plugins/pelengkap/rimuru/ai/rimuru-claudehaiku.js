/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/claudehaiku.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "claudehaiku", "category": "ai", "aliasMap": {"rimuru-ai-claudehaiku": "claudehaiku", "rimuru-claudehaiku": "claudehaiku", "rimuru-claude": "claude", "rimuru-haiku": "haiku", "rimuru-chiku": "chiku", "claudehaiku": "claudehaiku", "claude": "claude", "haiku": "haiku", "chiku": "chiku"}, "description": "Chat dengan Claude Haiku 4.5 via OverChat", "usage": ".claudehaiku <pertanyaan>", "example": ".claudehaiku Jelaskan teori relativitas", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/claudehaiku.js", metadata, m, extra)
handler.help = ["rimuru-ai-claudehaiku <pertanyaan>"]
handler.command = ["rimuru-ai-claudehaiku", "rimuru-claudehaiku", "rimuru-claude", "rimuru-haiku", "rimuru-chiku", "claudehaiku", "claude", "haiku", "chiku"]
handler.tags = ["ai"]
handler.description = "Chat dengan Claude Haiku 4.5 via OverChat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "claudehaiku", "alias": ["claude", "haiku", "chiku"], "category": "ai", "description": "Chat dengan Claude Haiku 4.5 via OverChat", "usage": ".claudehaiku <pertanyaan>", "example": ".claudehaiku Jelaskan teori relativitas", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-claudehaiku": "claudehaiku", "rimuru-claudehaiku": "claudehaiku", "rimuru-claude": "claude", "rimuru-haiku": "haiku", "rimuru-chiku": "chiku", "claudehaiku": "claudehaiku", "claude": "claude", "haiku": "haiku", "chiku": "chiku"}
export default handler
