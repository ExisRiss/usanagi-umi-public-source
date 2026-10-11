/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/claninfo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "claninfo", "category": "clan", "aliasMap": {"rimuru-clan-claninfo": "claninfo", "rimuru-claninfo": "claninfo", "rimuru-infoclan": "infoclan", "rimuru-myclan": "myclan", "rimuru-guildinfo": "guildinfo", "claninfo": "claninfo", "infoclan": "infoclan", "myclan": "myclan", "guildinfo": "guildinfo"}, "description": "Lihat info clan", "usage": ".claninfo [clan_id]", "example": ".claninfo", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/claninfo.js", metadata, m, extra)
handler.help = ["rimuru-clan-claninfo [clan_id]"]
handler.command = ["rimuru-clan-claninfo", "rimuru-claninfo", "rimuru-infoclan", "rimuru-myclan", "rimuru-guildinfo", "claninfo", "infoclan", "myclan", "guildinfo"]
handler.tags = ["clan"]
handler.description = "Lihat info clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "claninfo", "alias": ["infoclan", "myclan", "guildinfo"], "category": "clan", "description": "Lihat info clan", "usage": ".claninfo [clan_id]", "example": ".claninfo", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-claninfo": "claninfo", "rimuru-claninfo": "claninfo", "rimuru-infoclan": "infoclan", "rimuru-myclan": "myclan", "rimuru-guildinfo": "guildinfo", "claninfo": "claninfo", "infoclan": "infoclan", "myclan": "myclan", "guildinfo": "guildinfo"}
export default handler
