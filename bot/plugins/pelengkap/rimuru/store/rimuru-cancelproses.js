/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/cancelproses.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cancelproses", "category": "store", "aliasMap": {"rimuru-store-cancelproses": "cancelproses", "rimuru-cancelproses": "cancelproses", "rimuru-batalproses": "batalproses", "rimuru-canceltrx": "canceltrx", "cancelproses": "cancelproses", "batalproses": "batalproses", "canceltrx": "canceltrx"}, "description": "Batalkan proses transaksi", "usage": ".cancelproses @buyer", "example": ".cancelproses @628xxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/cancelproses.js", metadata, m, extra)
handler.help = ["rimuru-store-cancelproses @buyer"]
handler.command = ["rimuru-store-cancelproses", "rimuru-cancelproses", "rimuru-batalproses", "rimuru-canceltrx", "cancelproses", "batalproses", "canceltrx"]
handler.tags = ["store"]
handler.description = "Batalkan proses transaksi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cancelproses", "alias": ["batalproses", "canceltrx"], "category": "store", "description": "Batalkan proses transaksi", "usage": ".cancelproses @buyer", "example": ".cancelproses @628xxx", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-cancelproses": "cancelproses", "rimuru-cancelproses": "cancelproses", "rimuru-batalproses": "batalproses", "rimuru-canceltrx": "canceltrx", "cancelproses": "cancelproses", "batalproses": "batalproses", "canceltrx": "canceltrx"}
export default handler
