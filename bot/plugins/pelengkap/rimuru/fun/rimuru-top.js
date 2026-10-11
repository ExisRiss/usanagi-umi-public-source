/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/top.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "top", "category": "fun", "aliasMap": {"rimuru-fun-top": "top", "rimuru-top5": "top5", "rimuru-toplist": "toplist"}, "description": "Random top 5 member untuk kategori tertentu", "usage": ".top <kategori>", "example": ".top orang pintar", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/top.js", metadata, m, extra)
handler.help = ["rimuru-fun-top <kategori>"]
handler.command = ["rimuru-fun-top", "rimuru-top5", "rimuru-toplist"]
handler.tags = ["fun"]
handler.description = "Random top 5 member untuk kategori tertentu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "top", "alias": ["top5", "toplist"], "category": "fun", "description": "Random top 5 member untuk kategori tertentu", "usage": ".top <kategori>", "example": ".top orang pintar", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-top": "top", "rimuru-top5": "top5", "rimuru-toplist": "toplist"}
export default handler
