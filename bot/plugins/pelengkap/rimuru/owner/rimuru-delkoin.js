/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/delkoin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delkoin", "category": "owner", "aliasMap": {"rimuru-owner-delkoin": "delkoin", "rimuru-delkoin": "delkoin", "rimuru-kurangkoin": "kurangkoin", "rimuru-removekoin": "removekoin", "rimuru-delcoin": "delcoin", "rimuru-delmoney": "delmoney", "delkoin": "delkoin", "kurangkoin": "kurangkoin", "removekoin": "removekoin", "delcoin": "delcoin", "delmoney": "delmoney"}, "description": "Kurangi koin user", "usage": ".delkoin <jumlah> @user", "example": ".delkoin 50000 @user", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/delkoin.js", metadata, m, extra)
handler.help = ["rimuru-owner-delkoin <jumlah> @user"]
handler.command = ["rimuru-owner-delkoin", "rimuru-delkoin", "rimuru-kurangkoin", "rimuru-removekoin", "rimuru-delcoin", "rimuru-delmoney", "delkoin", "kurangkoin", "removekoin", "delcoin", "delmoney"]
handler.tags = ["owner"]
handler.description = "Kurangi koin user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delkoin", "alias": ["kurangkoin", "removekoin", "delcoin", "delmoney"], "category": "owner", "description": "Kurangi koin user", "usage": ".delkoin <jumlah> @user", "example": ".delkoin 50000 @user", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-delkoin": "delkoin", "rimuru-delkoin": "delkoin", "rimuru-kurangkoin": "kurangkoin", "rimuru-removekoin": "removekoin", "rimuru-delcoin": "delcoin", "rimuru-delmoney": "delmoney", "delkoin": "delkoin", "kurangkoin": "kurangkoin", "removekoin": "removekoin", "delcoin": "delcoin", "delmoney": "delmoney"}
export default handler
