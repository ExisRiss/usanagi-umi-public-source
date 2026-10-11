/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanjoinraid.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanraidjoin", "category": "clan", "aliasMap": {"rimuru-clan-clanraidjoin": "clanraidjoin", "rimuru-clanraidjoin": "clanraidjoin", "rimuru-raidjoin": "raidjoin", "rimuru-raidkill": "raidkill", "clanraidjoin": "clanraidjoin", "raidjoin": "raidjoin", "raidkill": "raidkill"}, "description": "Join raid clan dan kill monster", "usage": ".clanraidjoin", "example": ".clanraidjoin", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanjoinraid.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanraidjoin"]
handler.command = ["rimuru-clan-clanraidjoin", "rimuru-clanraidjoin", "rimuru-raidjoin", "rimuru-raidkill", "clanraidjoin", "raidjoin", "raidkill"]
handler.tags = ["clan"]
handler.description = "Join raid clan dan kill monster"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanraidjoin", "alias": ["raidjoin", "raidkill"], "category": "clan", "description": "Join raid clan dan kill monster", "usage": ".clanraidjoin", "example": ".clanraidjoin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-clan-clanraidjoin": "clanraidjoin", "rimuru-clanraidjoin": "clanraidjoin", "rimuru-raidjoin": "raidjoin", "rimuru-raidkill": "raidkill", "clanraidjoin": "clanraidjoin", "raidjoin": "raidjoin", "raidkill": "raidkill"}
export default handler
