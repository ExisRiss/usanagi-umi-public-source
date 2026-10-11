/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ytsummarize.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ytsummarize", "category": "tools", "aliasMap": {"rimuru-tools-ytsummarize": "ytsummarize", "rimuru-ytsummarize": "ytsummarize", "rimuru-ytsummary": "ytsummary", "rimuru-summarizeyt": "summarizeyt", "rimuru-ringkasyt": "ringkasyt", "ytsummarize": "ytsummarize", "ytsummary": "ytsummary", "summarizeyt": "summarizeyt", "ringkasyt": "ringkasyt"}, "description": "Ringkasan video YouTube dengan AI", "usage": ".ytsummarize <url>", "example": ".ytsummarize https://youtu.be/xxxxx", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ytsummarize.js", metadata, m, extra)
handler.help = ["rimuru-tools-ytsummarize <url>"]
handler.command = ["rimuru-tools-ytsummarize", "rimuru-ytsummarize", "rimuru-ytsummary", "rimuru-summarizeyt", "rimuru-ringkasyt", "ytsummarize", "ytsummary", "summarizeyt", "ringkasyt"]
handler.tags = ["tools"]
handler.description = "Ringkasan video YouTube dengan AI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ytsummarize", "alias": ["ytsummary", "summarizeyt", "ringkasyt"], "category": "tools", "description": "Ringkasan video YouTube dengan AI", "usage": ".ytsummarize <url>", "example": ".ytsummarize https://youtu.be/xxxxx", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ytsummarize": "ytsummarize", "rimuru-ytsummarize": "ytsummarize", "rimuru-ytsummary": "ytsummary", "rimuru-summarizeyt": "summarizeyt", "rimuru-ringkasyt": "ringkasyt", "ytsummarize": "ytsummarize", "ytsummary": "ytsummary", "summarizeyt": "summarizeyt", "ringkasyt": "ringkasyt"}
export default handler
