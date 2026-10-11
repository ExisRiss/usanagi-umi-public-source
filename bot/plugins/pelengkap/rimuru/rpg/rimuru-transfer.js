/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/transfer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "transfer", "category": "rpg", "aliasMap": {"rimuru-rpg-transfer": "transfer", "rimuru-transfer": "transfer", "rimuru-tf": "tf", "rimuru-pay": "pay"}, "description": "Transfer uang atau item ke user lain", "usage": ".transfer <money/nama_item> <jumlah> @user", "example": ".transfer money 10000 @tag", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/transfer.js", metadata, m, extra)
handler.help = ["rimuru-rpg-transfer <money/nama_item> <jumlah> @user"]
handler.command = ["rimuru-rpg-transfer", "rimuru-transfer", "rimuru-tf", "rimuru-pay"]
handler.tags = ["rpg"]
handler.description = "Transfer uang atau item ke user lain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "transfer", "alias": ["tf", "kirim", "pay"], "category": "rpg", "description": "Transfer uang atau item ke user lain", "usage": ".transfer <money/nama_item> <jumlah> @user", "example": ".transfer money 10000 @tag", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-transfer": "transfer", "rimuru-transfer": "transfer", "rimuru-tf": "tf", "rimuru-pay": "pay"}
export default handler
