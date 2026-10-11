/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/humanizer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "humanize", "category": "ai", "aliasMap": {"rimuru-ai-humanize": "humanize", "rimuru-humanize": "humanize", "rimuru-humanizer": "humanizer", "rimuru-aihumanize": "aihumanize", "rimuru-zerogpt": "zerogpt", "humanize": "humanize", "humanizer": "humanizer", "aihumanize": "aihumanize", "zerogpt": "zerogpt"}, "description": "Ubah teks AI-generated jadi lebih natural (Humanized)", "usage": ".humanize <teks> (atau reply teks)", "example": ".humanize Berdasarkan analisis yang mendalam...", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/humanizer.js", metadata, m, extra)
handler.help = ["rimuru-ai-humanize <teks> (atau reply teks)"]
handler.command = ["rimuru-ai-humanize", "rimuru-humanize", "rimuru-humanizer", "rimuru-aihumanize", "rimuru-zerogpt", "humanize", "humanizer", "aihumanize", "zerogpt"]
handler.tags = ["ai"]
handler.description = "Ubah teks AI-generated jadi lebih natural (Humanized)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "humanize", "alias": ["humanizer", "aihumanize", "zerogpt"], "category": "ai", "description": "Ubah teks AI-generated jadi lebih natural (Humanized)", "usage": ".humanize <teks> (atau reply teks)", "example": ".humanize Berdasarkan analisis yang mendalam...", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-humanize": "humanize", "rimuru-humanize": "humanize", "rimuru-humanizer": "humanizer", "rimuru-aihumanize": "aihumanize", "rimuru-zerogpt": "zerogpt", "humanize": "humanize", "humanizer": "humanizer", "aihumanize": "aihumanize", "zerogpt": "zerogpt"}
export default handler
