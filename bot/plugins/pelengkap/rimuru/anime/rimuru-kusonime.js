/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/kusonime.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kusonime", "category": "anime", "aliasMap": {"rimuru-anime-kusonime": "kusonime", "rimuru-kusonime": "kusonime", "rimuru-animeku": "animeku", "rimuru-nimeku": "nimeku", "rimuru-animebatch": "animebatch", "kusonime": "kusonime", "animeku": "animeku", "nimeku": "nimeku", "animebatch": "animebatch"}, "description": "Cari anime dari kusonime.com (batch download)", "usage": ".kusonime <search|latest|genre>", "example": ".kusonime search naruto\n.kusonime latest\n.kusonime genre action", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/kusonime.js", metadata, m, extra)
handler.help = ["rimuru-anime-kusonime <search|latest|genre>"]
handler.command = ["rimuru-anime-kusonime", "rimuru-kusonime", "rimuru-animeku", "rimuru-nimeku", "rimuru-animebatch", "kusonime", "animeku", "nimeku", "animebatch"]
handler.tags = ["anime"]
handler.description = "Cari anime dari kusonime.com (batch download)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kusonime", "alias": ["animeku", "kusonime", "nimeku", "animebatch"], "category": "anime", "description": "Cari anime dari kusonime.com (batch download)", "usage": ".kusonime <search|latest|genre>", "example": ".kusonime search naruto\n.kusonime latest\n.kusonime genre action", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-kusonime": "kusonime", "rimuru-kusonime": "kusonime", "rimuru-animeku": "animeku", "rimuru-nimeku": "nimeku", "rimuru-animebatch": "animebatch", "kusonime": "kusonime", "animeku": "animeku", "nimeku": "nimeku", "animebatch": "animebatch"}
export default handler
