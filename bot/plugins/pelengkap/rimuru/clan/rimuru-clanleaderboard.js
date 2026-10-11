/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanleaderboard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanleaderboard", "category": "clan", "aliasMap": {"rimuru-clan-clanleaderboard": "clanleaderboard", "rimuru-clanleaderboard": "clanleaderboard", "rimuru-clanlb": "clanlb", "rimuru-topclan": "topclan", "rimuru-guildrank": "guildrank", "clanleaderboard": "clanleaderboard", "clanlb": "clanlb", "topclan": "topclan", "guildrank": "guildrank"}, "description": "Lihat ranking clan", "usage": ".clanleaderboard", "example": ".clanleaderboard", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanleaderboard.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanleaderboard"]
handler.command = ["rimuru-clan-clanleaderboard", "rimuru-clanleaderboard", "rimuru-clanlb", "rimuru-topclan", "rimuru-guildrank", "clanleaderboard", "clanlb", "topclan", "guildrank"]
handler.tags = ["clan"]
handler.description = "Lihat ranking clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanleaderboard", "alias": ["clanlb", "topclan", "guildrank"], "category": "clan", "description": "Lihat ranking clan", "usage": ".clanleaderboard", "example": ".clanleaderboard", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanleaderboard": "clanleaderboard", "rimuru-clanleaderboard": "clanleaderboard", "rimuru-clanlb": "clanlb", "rimuru-topclan": "topclan", "rimuru-guildrank": "guildrank", "clanleaderboard": "clanleaderboard", "clanlb": "clanlb", "topclan": "topclan", "guildrank": "guildrank"}
export default handler
