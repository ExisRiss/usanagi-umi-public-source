/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanmembers.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanmembers", "category": "clan", "aliasMap": {"rimuru-clan-clanmembers": "clanmembers", "rimuru-clanmembers": "clanmembers", "rimuru-clanmember": "clanmember", "rimuru-guildmembers": "guildmembers", "clanmembers": "clanmembers", "clanmember": "clanmember", "guildmembers": "guildmembers"}, "description": "Lihat daftar member clan", "usage": ".clanmembers", "example": ".clanmembers", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanmembers.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanmembers"]
handler.command = ["rimuru-clan-clanmembers", "rimuru-clanmembers", "rimuru-clanmember", "rimuru-guildmembers", "clanmembers", "clanmember", "guildmembers"]
handler.tags = ["clan"]
handler.description = "Lihat daftar member clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanmembers", "alias": ["clanmember", "guildmembers"], "category": "clan", "description": "Lihat daftar member clan", "usage": ".clanmembers", "example": ".clanmembers", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanmembers": "clanmembers", "rimuru-clanmembers": "clanmembers", "rimuru-clanmember": "clanmember", "rimuru-guildmembers": "guildmembers", "clanmembers": "clanmembers", "clanmember": "clanmember", "guildmembers": "guildmembers"}
export default handler
