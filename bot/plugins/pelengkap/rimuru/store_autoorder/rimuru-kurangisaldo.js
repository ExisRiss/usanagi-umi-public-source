/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/kurangisaldo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kurangisaldo", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-kurangisaldo": "kurangisaldo", "rimuru-kurangisaldo": "kurangisaldo", "rimuru-delsaldo": "delsaldo", "rimuru-minussaldo": "minussaldo", "kurangisaldo": "kurangisaldo", "delsaldo": "delsaldo", "minussaldo": "minussaldo"}, "description": "💰 Mengurangi saldo pengguna secara manual", "usage": ".kurangisaldo @user <nominal>", "example": ".kurangisaldo @user 10000", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/kurangisaldo.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-kurangisaldo @user <nominal>"]
handler.command = ["rimuru-store_autoorder-kurangisaldo", "rimuru-kurangisaldo", "rimuru-delsaldo", "rimuru-minussaldo", "kurangisaldo", "delsaldo", "minussaldo"]
handler.tags = ["store_autoorder"]
handler.description = "💰 Mengurangi saldo pengguna secara manual"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kurangisaldo", "alias": ["delsaldo", "minussaldo"], "category": "store_autoorder", "description": "💰 Mengurangi saldo pengguna secara manual", "usage": ".kurangisaldo @user <nominal>", "example": ".kurangisaldo @user 10000", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-kurangisaldo": "kurangisaldo", "rimuru-kurangisaldo": "kurangisaldo", "rimuru-delsaldo": "delsaldo", "rimuru-minussaldo": "minussaldo", "kurangisaldo": "kurangisaldo", "delsaldo": "delsaldo", "minussaldo": "minussaldo"}
export default handler
