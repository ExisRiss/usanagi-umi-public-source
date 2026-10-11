/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addexp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addexp", "category": "owner", "aliasMap": {"rimuru-owner-addexp": "addexp", "rimuru-addexp": "addexp", "rimuru-tambahexp": "tambahexp", "rimuru-giveexp": "giveexp", "rimuru-addxp": "addxp", "tambahexp": "tambahexp", "giveexp": "giveexp", "addxp": "addxp"}, "description": "Tambah exp user (max 9 Miliar)", "usage": ".addexp <jumlah> @user", "example": ".addexp 10000 @user", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addexp.js", metadata, m, extra)
handler.help = ["rimuru-owner-addexp <jumlah> @user"]
handler.command = ["rimuru-owner-addexp", "rimuru-addexp", "rimuru-tambahexp", "rimuru-giveexp", "rimuru-addxp", "tambahexp", "giveexp", "addxp"]
handler.tags = ["owner"]
handler.description = "Tambah exp user (max 9 Miliar)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addexp", "alias": ["tambahexp", "giveexp", "addxp"], "category": "owner", "description": "Tambah exp user (max 9 Miliar)", "usage": ".addexp <jumlah> @user", "example": ".addexp 10000 @user", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addexp": "addexp", "rimuru-addexp": "addexp", "rimuru-tambahexp": "tambahexp", "rimuru-giveexp": "giveexp", "rimuru-addxp": "addxp", "tambahexp": "tambahexp", "giveexp": "giveexp", "addxp": "addxp"}
export default handler
