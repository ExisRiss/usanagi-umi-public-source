/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/koin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "koin", "category": "user", "aliasMap": {"rimuru-user-koin": "koin", "rimuru-koin": "koin", "rimuru-saldo": "saldo", "rimuru-money": "money", "rimuru-cash": "cash", "rimuru-coin": "coin", "rimuru-coins": "coins", "koin": "koin", "saldo": "saldo", "money": "money", "cash": "cash", "coin": "coin", "coins": "coins"}, "description": "Cek koin user", "usage": ".koin [@user]", "example": ".koin", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/koin.js", metadata, m, extra)
handler.help = ["rimuru-user-koin [@user]"]
handler.command = ["rimuru-user-koin", "rimuru-koin", "rimuru-saldo", "rimuru-money", "rimuru-cash", "rimuru-coin", "rimuru-coins", "koin", "saldo", "money", "cash", "coin", "coins"]
handler.tags = ["user"]
handler.description = "Cek koin user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "koin", "alias": ["saldo", "money", "cash", "coin", "coins"], "category": "user", "description": "Cek koin user", "usage": ".koin [@user]", "example": ".koin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-koin": "koin", "rimuru-koin": "koin", "rimuru-saldo": "saldo", "rimuru-money": "money", "rimuru-cash": "cash", "rimuru-coin": "coin", "rimuru-coins": "coins", "koin": "koin", "saldo": "saldo", "money": "money", "cash": "cash", "coin": "coin", "coins": "coins"}
export default handler
