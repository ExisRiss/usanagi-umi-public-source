/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/leaderboardorkismin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "leaderboard-orang-miskin", "category": "economy", "aliasMap": {"rimuru-economy-leaderboard-orang-miskin": "leaderboard-orang-miskin", "rimuru-leaderboard-orang-miskin": "leaderboard-orang-miskin", "rimuru-topmiskin": "topmiskin", "rimuru-orangmiskin": "orangmiskin", "rimuru-lbmiskin": "lbmiskin", "rimuru-poorest": "poorest", "rimuru-toppoor": "toppoor", "leaderboard-orang-miskin": "leaderboard-orang-miskin", "topmiskin": "topmiskin", "orangmiskin": "orangmiskin", "lbmiskin": "lbmiskin", "poorest": "poorest", "toppoor": "toppoor"}, "description": "Ranking orang paling miskin versi Rimuru 🗿💸", "usage": ".topmiskin", "example": ".topmiskin", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/leaderboardorkismin.js", metadata, m, extra)
handler.help = ["rimuru-economy-leaderboard-orang-miskin"]
handler.command = ["rimuru-economy-leaderboard-orang-miskin", "rimuru-leaderboard-orang-miskin", "rimuru-topmiskin", "rimuru-orangmiskin", "rimuru-lbmiskin", "rimuru-poorest", "rimuru-toppoor", "leaderboard-orang-miskin", "topmiskin", "orangmiskin", "lbmiskin", "poorest", "toppoor"]
handler.tags = ["economy"]
handler.description = "Ranking orang paling miskin versi Rimuru 🗿💸"
handler.importSource = "rimuru"
handler.importConfig = {"name": "leaderboard-orang-miskin", "alias": ["topmiskin", "orangmiskin", "lbmiskin", "poorest", "toppoor"], "category": "economy", "description": "Ranking orang paling miskin versi Rimuru 🗿💸", "usage": ".topmiskin", "example": ".topmiskin", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-economy-leaderboard-orang-miskin": "leaderboard-orang-miskin", "rimuru-leaderboard-orang-miskin": "leaderboard-orang-miskin", "rimuru-topmiskin": "topmiskin", "rimuru-orangmiskin": "orangmiskin", "rimuru-lbmiskin": "lbmiskin", "rimuru-poorest": "poorest", "rimuru-toppoor": "toppoor", "leaderboard-orang-miskin": "leaderboard-orang-miskin", "topmiskin": "topmiskin", "orangmiskin": "orangmiskin", "lbmiskin": "lbmiskin", "poorest": "poorest", "toppoor": "toppoor"}
export default handler
