/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/ai-models.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "webpilot", "category": "ai", "aliasMap": {"rimuru-ai-webpilot": "webpilot", "rimuru-webpilot": "webpilot", "rimuru-gpt-oss2b": "gpt-oss2b", "rimuru-glm47": "glm47", "rimuru-meta-ai": "meta-ai", "rimuru-deepseek-pro": "deepseek-pro", "rimuru-claude-45": "claude-45", "webpilot": "webpilot", "gpt-oss2b": "gpt-oss2b", "glm47": "glm47", "meta-ai": "meta-ai", "deepseek-pro": "deepseek-pro", "claude-45": "claude-45"}, "description": "Model AI tambahan yang dipindahkan dari Aqua", "usage": ".webpilot <pertanyaan>", "example": ".webpilot apa berita terbaru tentang teknologi", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/ai-models.js", metadata, m, extra)
handler.help = ["rimuru-ai-webpilot <pertanyaan>"]
handler.command = ["rimuru-ai-webpilot", "rimuru-webpilot", "rimuru-gpt-oss2b", "rimuru-glm47", "rimuru-meta-ai", "rimuru-deepseek-pro", "rimuru-claude-45", "webpilot", "gpt-oss2b", "glm47", "meta-ai", "deepseek-pro", "claude-45"]
handler.tags = ["ai"]
handler.description = "Model AI tambahan yang dipindahkan dari Aqua"
handler.importSource = "rimuru"
handler.importConfig = {"name": "webpilot", "alias": ["gpt-oss2b", "glm47", "meta-ai", "deepseek-pro", "claude-45"], "category": "ai", "description": "Model AI tambahan yang dipindahkan dari Aqua", "usage": ".webpilot <pertanyaan>", "example": ".webpilot apa berita terbaru tentang teknologi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-webpilot": "webpilot", "rimuru-webpilot": "webpilot", "rimuru-gpt-oss2b": "gpt-oss2b", "rimuru-glm47": "glm47", "rimuru-meta-ai": "meta-ai", "rimuru-deepseek-pro": "deepseek-pro", "rimuru-claude-45": "claude-45", "webpilot": "webpilot", "gpt-oss2b": "gpt-oss2b", "glm47": "glm47", "meta-ai": "meta-ai", "deepseek-pro": "deepseek-pro", "claude-45": "claude-45"}
export default handler
