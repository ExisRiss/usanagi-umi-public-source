/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/tambahsaldo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tambahsaldo", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-tambahsaldo": "tambahsaldo", "rimuru-tambahsaldo": "tambahsaldo", "rimuru-addsaldo": "addsaldo", "tambahsaldo": "tambahsaldo", "addsaldo": "addsaldo"}, "description": "💰 Menambah saldo pengguna secara manual", "usage": ".tambahsaldo @user <nominal>", "example": ".tambahsaldo @user 10000", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/tambahsaldo.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-tambahsaldo @user <nominal>"]
handler.command = ["rimuru-store_autoorder-tambahsaldo", "rimuru-tambahsaldo", "rimuru-addsaldo", "tambahsaldo", "addsaldo"]
handler.tags = ["store_autoorder"]
handler.description = "💰 Menambah saldo pengguna secara manual"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tambahsaldo", "alias": ["addsaldo"], "category": "store_autoorder", "description": "💰 Menambah saldo pengguna secara manual", "usage": ".tambahsaldo @user <nominal>", "example": ".tambahsaldo @user 10000", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-tambahsaldo": "tambahsaldo", "rimuru-tambahsaldo": "tambahsaldo", "rimuru-addsaldo": "addsaldo", "tambahsaldo": "tambahsaldo", "addsaldo": "addsaldo"}
export default handler
