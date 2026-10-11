/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanleave.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanleave", "category": "clan", "aliasMap": {"rimuru-clan-clanleave": "clanleave", "rimuru-clanleave": "clanleave", "rimuru-leaveclan": "leaveclan", "rimuru-guildleave": "guildleave", "clanleave": "clanleave", "leaveclan": "leaveclan", "guildleave": "guildleave"}, "description": "Keluar dari clan", "usage": ".clanleave", "example": ".clanleave", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanleave.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanleave"]
handler.command = ["rimuru-clan-clanleave", "rimuru-clanleave", "rimuru-leaveclan", "rimuru-guildleave", "clanleave", "leaveclan", "guildleave"]
handler.tags = ["clan"]
handler.description = "Keluar dari clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanleave", "alias": ["leaveclan", "guildleave"], "category": "clan", "description": "Keluar dari clan", "usage": ".clanleave", "example": ".clanleave", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanleave": "clanleave", "rimuru-clanleave": "clanleave", "rimuru-leaveclan": "leaveclan", "rimuru-guildleave": "guildleave", "clanleave": "clanleave", "leaveclan": "leaveclan", "guildleave": "guildleave"}
export default handler
