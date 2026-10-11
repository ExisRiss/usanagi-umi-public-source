/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanwarscore.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanwarscore", "category": "clan", "aliasMap": {"rimuru-clan-clanwarscore": "clanwarscore", "rimuru-clanwarscore": "clanwarscore", "rimuru-warscores": "warscores", "rimuru-scorewar": "scorewar", "rimuru-skorwar": "skorwar", "clanwarscore": "clanwarscore", "warscores": "warscores", "scorewar": "scorewar", "skorwar": "skorwar"}, "description": "Lihat skor clan war", "usage": ".clanwarscore", "example": ".clanwarscore", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanwarscore.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanwarscore"]
handler.command = ["rimuru-clan-clanwarscore", "rimuru-clanwarscore", "rimuru-warscores", "rimuru-scorewar", "rimuru-skorwar", "clanwarscore", "warscores", "scorewar", "skorwar"]
handler.tags = ["clan"]
handler.description = "Lihat skor clan war"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanwarscore", "alias": ["warscores", "scorewar", "skorwar"], "category": "clan", "description": "Lihat skor clan war", "usage": ".clanwarscore", "example": ".clanwarscore", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanwarscore": "clanwarscore", "rimuru-clanwarscore": "clanwarscore", "rimuru-warscores": "warscores", "rimuru-scorewar": "scorewar", "rimuru-skorwar": "skorwar", "clanwarscore": "clanwarscore", "warscores": "warscores", "scorewar": "scorewar", "skorwar": "skorwar"}
export default handler
