/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addkoin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addkoin", "category": "owner", "aliasMap": {"rimuru-owner-addkoin": "addkoin", "rimuru-addkoin": "addkoin", "rimuru-tambahkoin": "tambahkoin", "rimuru-givekoin": "givekoin", "rimuru-addcoin": "addcoin", "rimuru-adddcoin": "adddcoin", "addkoin": "addkoin", "tambahkoin": "tambahkoin", "givekoin": "givekoin", "addcoin": "addcoin", "adddcoin": "adddcoin"}, "description": "Tambah koin user (max 9 Triliun)", "usage": ".addkoin <jumlah> @user", "example": ".addkoin 100000 @user", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addkoin.js", metadata, m, extra)
handler.help = ["rimuru-owner-addkoin <jumlah> @user"]
handler.command = ["rimuru-owner-addkoin", "rimuru-addkoin", "rimuru-tambahkoin", "rimuru-givekoin", "rimuru-addcoin", "rimuru-adddcoin", "addkoin", "tambahkoin", "givekoin", "addcoin", "adddcoin"]
handler.tags = ["owner"]
handler.description = "Tambah koin user (max 9 Triliun)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addkoin", "alias": ["tambahkoin", "givekoin", "addcoin", "adddcoin"], "category": "owner", "description": "Tambah koin user (max 9 Triliun)", "usage": ".addkoin <jumlah> @user", "example": ".addkoin 100000 @user", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addkoin": "addkoin", "rimuru-addkoin": "addkoin", "rimuru-tambahkoin": "tambahkoin", "rimuru-givekoin": "givekoin", "rimuru-addcoin": "addcoin", "rimuru-adddcoin": "adddcoin", "addkoin": "addkoin", "tambahkoin": "tambahkoin", "givekoin": "givekoin", "addcoin": "addcoin", "adddcoin": "adddcoin"}
export default handler
