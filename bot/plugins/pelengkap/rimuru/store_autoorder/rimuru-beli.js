/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store_autoorder/beli.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autobeli", "category": "store_autoorder", "aliasMap": {"rimuru-store_autoorder-autobeli": "autobeli", "rimuru-autobeli": "autobeli", "rimuru-autoorder": "autoorder", "rimuru-autobuy": "autobuy", "autobeli": "autobeli", "autoorder": "autoorder", "autobuy": "autobuy"}, "description": "🛒 Membeli produk autoorder secara otomatis pakai saldo", "usage": ".autobeli <nomor/id_produk>", "example": ".autobeli 1", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store_autoorder/beli.js", metadata, m, extra)
handler.help = ["rimuru-store_autoorder-autobeli <nomor/id_produk>"]
handler.command = ["rimuru-store_autoorder-autobeli", "rimuru-autobeli", "rimuru-autoorder", "rimuru-autobuy", "autobeli", "autoorder", "autobuy"]
handler.tags = ["store_autoorder"]
handler.description = "🛒 Membeli produk autoorder secara otomatis pakai saldo"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autobeli", "alias": ["autoorder", "autobuy"], "category": "store_autoorder", "description": "🛒 Membeli produk autoorder secara otomatis pakai saldo", "usage": ".autobeli <nomor/id_produk>", "example": ".autobeli 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store_autoorder-autobeli": "autobeli", "rimuru-autobeli": "autobeli", "rimuru-autoorder": "autoorder", "rimuru-autobuy": "autobuy", "autobeli": "autobeli", "autoorder": "autoorder", "autobuy": "autobuy"}
export default handler
