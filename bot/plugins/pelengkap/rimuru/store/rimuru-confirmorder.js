/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/confirmorder.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "confirmorder", "category": "store", "aliasMap": {"rimuru-store-confirmorder": "confirmorder", "rimuru-confirmorder": "confirmorder", "rimuru-konfirmorder": "konfirmorder", "rimuru-selesaiorder": "selesaiorder", "rimuru-doneorder": "doneorder", "confirmorder": "confirmorder", "konfirmorder": "konfirmorder", "selesaiorder": "selesaiorder", "doneorder": "doneorder"}, "description": "Konfirmasi order (Admin)", "usage": ".confirmorder <order_id>", "example": ".confirmorder ORD20260111ABC123", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/confirmorder.js", metadata, m, extra)
handler.help = ["rimuru-store-confirmorder <order_id>"]
handler.command = ["rimuru-store-confirmorder", "rimuru-confirmorder", "rimuru-konfirmorder", "rimuru-selesaiorder", "rimuru-doneorder", "confirmorder", "konfirmorder", "selesaiorder", "doneorder"]
handler.tags = ["store"]
handler.description = "Konfirmasi order (Admin)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "confirmorder", "alias": ["konfirmorder", "selesaiorder", "doneorder"], "category": "store", "description": "Konfirmasi order (Admin)", "usage": ".confirmorder <order_id>", "example": ".confirmorder ORD20260111ABC123", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-confirmorder": "confirmorder", "rimuru-confirmorder": "confirmorder", "rimuru-konfirmorder": "konfirmorder", "rimuru-selesaiorder": "selesaiorder", "rimuru-doneorder": "doneorder", "confirmorder": "confirmorder", "konfirmorder": "konfirmorder", "selesaiorder": "selesaiorder", "doneorder": "doneorder"}
export default handler
