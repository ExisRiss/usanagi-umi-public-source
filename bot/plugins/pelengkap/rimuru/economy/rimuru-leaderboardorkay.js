/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/leaderboardorkay.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "leaderboard-orang-kaya", "category": "economy", "aliasMap": {"rimuru-economy-leaderboard-orang-kaya": "leaderboard-orang-kaya", "rimuru-leaderboard-orang-kaya": "leaderboard-orang-kaya", "rimuru-topkaya": "topkaya", "rimuru-orangkaya": "orangkaya", "rimuru-lbkaya": "lbkaya", "rimuru-toprich": "toprich", "rimuru-leaderboardkaya": "leaderboardkaya", "leaderboard-orang-kaya": "leaderboard-orang-kaya", "topkaya": "topkaya", "orangkaya": "orangkaya", "lbkaya": "lbkaya", "toprich": "toprich", "leaderboardkaya": "leaderboardkaya"}, "description": "Ranking orang paling kaya ala Rimuru dengan dashboard keren 💰🔥", "usage": ".topkaya", "example": ".topkaya", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/leaderboardorkay.js", metadata, m, extra)
handler.help = ["rimuru-economy-leaderboard-orang-kaya"]
handler.command = ["rimuru-economy-leaderboard-orang-kaya", "rimuru-leaderboard-orang-kaya", "rimuru-topkaya", "rimuru-orangkaya", "rimuru-lbkaya", "rimuru-toprich", "rimuru-leaderboardkaya", "leaderboard-orang-kaya", "topkaya", "orangkaya", "lbkaya", "toprich", "leaderboardkaya"]
handler.tags = ["economy"]
handler.description = "Ranking orang paling kaya ala Rimuru dengan dashboard keren 💰🔥"
handler.importSource = "rimuru"
handler.importConfig = {"name": "leaderboard-orang-kaya", "alias": ["topkaya", "orangkaya", "lbkaya", "toprich", "leaderboardkaya"], "category": "economy", "description": "Ranking orang paling kaya ala Rimuru dengan dashboard keren 💰🔥", "usage": ".topkaya", "example": ".topkaya", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-economy-leaderboard-orang-kaya": "leaderboard-orang-kaya", "rimuru-leaderboard-orang-kaya": "leaderboard-orang-kaya", "rimuru-topkaya": "topkaya", "rimuru-orangkaya": "orangkaya", "rimuru-lbkaya": "lbkaya", "rimuru-toprich": "toprich", "rimuru-leaderboardkaya": "leaderboardkaya", "leaderboard-orang-kaya": "leaderboard-orang-kaya", "topkaya": "topkaya", "orangkaya": "orangkaya", "lbkaya": "lbkaya", "toprich": "toprich", "leaderboardkaya": "leaderboardkaya"}
export default handler
