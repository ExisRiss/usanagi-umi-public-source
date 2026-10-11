/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanwar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanwar", "category": "clan", "aliasMap": {"rimuru-clan-clanwar": "clanwar", "rimuru-clanwar": "clanwar", "rimuru-war": "war", "rimuru-guildwar": "guildwar", "clanwar": "clanwar", "war": "war", "guildwar": "guildwar"}, "description": "War melawan clan lain", "usage": ".clanwar <clan_id>", "example": ".clanwar clan_123456", "cooldown": 3600, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanwar.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanwar <clan_id>"]
handler.command = ["rimuru-clan-clanwar", "rimuru-clanwar", "rimuru-war", "rimuru-guildwar", "clanwar", "war", "guildwar"]
handler.tags = ["clan"]
handler.description = "War melawan clan lain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanwar", "alias": ["war", "guildwar"], "category": "clan", "description": "War melawan clan lain", "usage": ".clanwar <clan_id>", "example": ".clanwar clan_123456", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3600, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanwar": "clanwar", "rimuru-clanwar": "clanwar", "rimuru-war": "war", "rimuru-guildwar": "guildwar", "clanwar": "clanwar", "war": "war", "guildwar": "guildwar"}
export default handler
