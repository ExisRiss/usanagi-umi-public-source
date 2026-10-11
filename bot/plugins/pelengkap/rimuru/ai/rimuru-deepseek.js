/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/deepseek.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "deepseek", "category": "ai", "aliasMap": {"rimuru-ai-deepseek": "deepseek", "rimuru-deepseek": "deepseek", "rimuru-ds": "ds", "rimuru-dsv4": "dsv4", "rimuru-deepthink": "deepthink", "ds": "ds", "dsv4": "dsv4", "deepthink": "deepthink"}, "description": "Chat dengan DeepSeek V4 (thinking/reasoning)", "usage": ".deepseek <pertanyaan>", "example": ".deepseek Jelaskan black hole", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/deepseek.js", metadata, m, extra)
handler.help = ["rimuru-ai-deepseek <pertanyaan>"]
handler.command = ["rimuru-ai-deepseek", "rimuru-deepseek", "rimuru-ds", "rimuru-dsv4", "rimuru-deepthink", "ds", "dsv4", "deepthink"]
handler.tags = ["ai"]
handler.description = "Chat dengan DeepSeek V4 (thinking/reasoning)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "deepseek", "alias": ["ds", "dsv4", "deepthink"], "category": "ai", "description": "Chat dengan DeepSeek V4 (thinking/reasoning)", "usage": ".deepseek <pertanyaan>", "example": ".deepseek Jelaskan black hole", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-deepseek": "deepseek", "rimuru-deepseek": "deepseek", "rimuru-ds": "ds", "rimuru-dsv4": "dsv4", "rimuru-deepthink": "deepthink", "ds": "ds", "dsv4": "dsv4", "deepthink": "deepthink"}
export default handler
