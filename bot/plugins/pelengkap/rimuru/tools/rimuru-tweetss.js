/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/tweetss.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tweetss", "category": "tools", "aliasMap": {"rimuru-tools-tweetss": "tweetss", "rimuru-tweetss": "tweetss", "rimuru-orshot": "orshot", "rimuru-tweetimage": "tweetimage", "rimuru-tweetimg": "tweetimg", "tweetss": "tweetss", "orshot": "orshot", "tweetimage": "tweetimage", "tweetimg": "tweetimg"}, "description": "Membuat gambar screenshot aesthetic dari link postingan X (Twitter)", "usage": ".tweetss <url tweet>", "example": ".tweetss https://x.com/i/status/2026539641311199692", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/tweetss.js", metadata, m, extra)
handler.help = ["rimuru-tools-tweetss <url tweet>"]
handler.command = ["rimuru-tools-tweetss", "rimuru-tweetss", "rimuru-orshot", "rimuru-tweetimage", "rimuru-tweetimg", "tweetss", "orshot", "tweetimage", "tweetimg"]
handler.tags = ["tools"]
handler.description = "Membuat gambar screenshot aesthetic dari link postingan X (Twitter)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tweetss", "alias": ["orshot", "tweetimage", "tweetimg"], "category": "tools", "description": "Membuat gambar screenshot aesthetic dari link postingan X (Twitter)", "usage": ".tweetss <url tweet>", "example": ".tweetss https://x.com/i/status/2026539641311199692", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-tweetss": "tweetss", "rimuru-tweetss": "tweetss", "rimuru-orshot": "orshot", "rimuru-tweetimage": "tweetimage", "rimuru-tweetimg": "tweetimg", "tweetss": "tweetss", "orshot": "orshot", "tweetimage": "tweetimage", "tweetimg": "tweetimg"}
export default handler
