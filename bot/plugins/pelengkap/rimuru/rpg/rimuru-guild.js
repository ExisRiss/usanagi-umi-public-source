/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/guild.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "guild", "category": "rpg", "aliasMap": {"rimuru-rpg-guild": "guild", "rimuru-guild": "guild", "rimuru-clan": "clan", "rimuru-team": "team", "rimuru-kelompok": "kelompok"}, "description": "Sistem guild/clan", "usage": ".guild <create/join/leave/info>", "example": ".guild create DragonSlayers", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/guild.js", metadata, m, extra)
handler.help = ["rimuru-rpg-guild <create/join/leave/info>"]
handler.command = ["rimuru-rpg-guild", "rimuru-guild", "rimuru-clan", "rimuru-team", "rimuru-kelompok"]
handler.tags = ["rpg"]
handler.description = "Sistem guild/clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "guild", "alias": ["clan", "team", "kelompok"], "category": "rpg", "description": "Sistem guild/clan", "usage": ".guild <create/join/leave/info>", "example": ".guild create DragonSlayers", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-guild": "guild", "rimuru-guild": "guild", "rimuru-clan": "clan", "rimuru-team": "team", "rimuru-kelompok": "kelompok"}
export default handler
