/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanxp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanxp", "category": "clan", "aliasMap": {"rimuru-clan-clanxp": "clanxp", "rimuru-clanxp": "clanxp", "rimuru-xpclan": "xpclan", "rimuru-clanexp": "clanexp", "clanxp": "clanxp", "xpclan": "xpclan", "clanexp": "clanexp"}, "description": "Lihat XP clan dan kontribusi member", "usage": ".clanxp", "example": ".clanxp", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanxp.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanxp"]
handler.command = ["rimuru-clan-clanxp", "rimuru-clanxp", "rimuru-xpclan", "rimuru-clanexp", "clanxp", "xpclan", "clanexp"]
handler.tags = ["clan"]
handler.description = "Lihat XP clan dan kontribusi member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanxp", "alias": ["xpclan", "clanexp"], "category": "clan", "description": "Lihat XP clan dan kontribusi member", "usage": ".clanxp", "example": ".clanxp", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanxp": "clanxp", "rimuru-clanxp": "clanxp", "rimuru-xpclan": "xpclan", "rimuru-clanexp": "clanexp", "clanxp": "clanxp", "xpclan": "xpclan", "clanexp": "clanexp"}
export default handler
