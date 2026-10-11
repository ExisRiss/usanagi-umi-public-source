/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/leaderboard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "leaderboard", "category": "main", "aliasMap": {"rimuru-main-leaderboard": "leaderboard", "rimuru-lb": "lb", "rimuru-ranking": "ranking", "rimuru-rank": "rank", "rimuru-topglobal": "topglobal", "rimuru-topbalance": "topbalance", "rimuru-topbal": "topbal", "rimuru-topkoin": "topkoin", "rimuru-topcoin": "topcoin", "rimuru-topmoney": "topmoney", "rimuru-toplimit": "toplimit", "rimuru-topexp": "topexp", "rimuru-topxp": "topxp", "rimuru-toplevel": "toplevel", "rimuru-topenergi": "topenergi", "rimuru-topenergy": "topenergy", "ranking": "ranking", "topglobal": "topglobal", "topbalance": "topbalance", "topbal": "topbal", "topkoin": "topkoin", "topcoin": "topcoin", "topmoney": "topmoney", "toplimit": "toplimit", "topexp": "topexp", "topxp": "topxp", "toplevel": "toplevel", "topenergi": "topenergi", "topenergy": "topenergy"}, "description": "Lihat leaderboard global (koin, exp, energi)", "usage": ".leaderboard", "example": ".topkoin", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/leaderboard.js", metadata, m, extra)
handler.help = ["rimuru-main-leaderboard"]
handler.command = ["rimuru-main-leaderboard", "rimuru-lb", "rimuru-ranking", "rimuru-rank", "rimuru-topglobal", "rimuru-topbalance", "rimuru-topbal", "rimuru-topkoin", "rimuru-topcoin", "rimuru-topmoney", "rimuru-toplimit", "rimuru-topexp", "rimuru-topxp", "rimuru-toplevel", "rimuru-topenergi", "rimuru-topenergy", "ranking", "topglobal", "topbalance", "topbal", "topkoin", "topcoin", "topmoney", "toplimit", "topexp", "topxp", "toplevel", "topenergi", "topenergy"]
handler.tags = ["main"]
handler.description = "Lihat leaderboard global (koin, exp, energi)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "leaderboard", "alias": ["lb", "top", "leaderboard", "ranking", "rank", "topglobal", "topbalance", "topbal", "topkoin", "topcoin", "topmoney", "toplimit", "topexp", "topxp", "toplevel", "topenergi", "topenergy"], "category": "main", "description": "Lihat leaderboard global (koin, exp, energi)", "usage": ".leaderboard", "example": ".topkoin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-leaderboard": "leaderboard", "rimuru-lb": "lb", "rimuru-ranking": "ranking", "rimuru-rank": "rank", "rimuru-topglobal": "topglobal", "rimuru-topbalance": "topbalance", "rimuru-topbal": "topbal", "rimuru-topkoin": "topkoin", "rimuru-topcoin": "topcoin", "rimuru-topmoney": "topmoney", "rimuru-toplimit": "toplimit", "rimuru-topexp": "topexp", "rimuru-topxp": "topxp", "rimuru-toplevel": "toplevel", "rimuru-topenergi": "topenergi", "rimuru-topenergy": "topenergy", "ranking": "ranking", "topglobal": "topglobal", "topbalance": "topbalance", "topbal": "topbal", "topkoin": "topkoin", "topcoin": "topcoin", "topmoney": "topmoney", "toplimit": "toplimit", "topexp": "topexp", "topxp": "topxp", "toplevel": "toplevel", "topenergi": "topenergi", "topenergy": "topenergy"}
export default handler
