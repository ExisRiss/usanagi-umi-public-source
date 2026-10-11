/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/delexp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delexp", "category": "owner", "aliasMap": {"rimuru-owner-delexp": "delexp", "rimuru-delexp": "delexp", "rimuru-kurangexp": "kurangexp", "rimuru-removeexp": "removeexp", "rimuru-delxp": "delxp", "delexp": "delexp", "kurangexp": "kurangexp", "removeexp": "removeexp", "delxp": "delxp"}, "description": "Kurangi exp user", "usage": ".delexp <jumlah> @user", "example": ".delexp 5000 @user", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/delexp.js", metadata, m, extra)
handler.help = ["rimuru-owner-delexp <jumlah> @user"]
handler.command = ["rimuru-owner-delexp", "rimuru-delexp", "rimuru-kurangexp", "rimuru-removeexp", "rimuru-delxp", "delexp", "kurangexp", "removeexp", "delxp"]
handler.tags = ["owner"]
handler.description = "Kurangi exp user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delexp", "alias": ["kurangexp", "removeexp", "delxp"], "category": "owner", "description": "Kurangi exp user", "usage": ".delexp <jumlah> @user", "example": ".delexp 5000 @user", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-delexp": "delexp", "rimuru-delexp": "delexp", "rimuru-kurangexp": "kurangexp", "rimuru-removeexp": "removeexp", "rimuru-delxp": "delxp", "delexp": "delexp", "kurangexp": "kurangexp", "removeexp": "removeexp", "delxp": "delxp"}
export default handler
