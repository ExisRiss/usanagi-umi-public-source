/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/invoicemaker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "invoicemaker", "category": "tools", "aliasMap": {"rimuru-tools-invoicemaker": "invoicemaker", "rimuru-invoicemaker": "invoicemaker", "rimuru-invoice": "invoice", "rimuru-faktur": "faktur", "rimuru-nota": "nota", "invoicemaker": "invoicemaker", "invoice": "invoice", "faktur": "faktur", "nota": "nota"}, "description": "Membuat invoice/nota penjualan", "usage": ".invoicemaker <toko>|<invoice>|<tanggal>|<status>|<items>|<total>", "example": ".invoicemaker TokoKu|INV001|15/01/2026|paid|Nasi Goreng:1x:15000,Es Teh:2x:6000|21000", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/invoicemaker.js", metadata, m, extra)
handler.help = ["rimuru-tools-invoicemaker <toko>|<invoice>|<tanggal>|<status>|<items>|<total>"]
handler.command = ["rimuru-tools-invoicemaker", "rimuru-invoicemaker", "rimuru-invoice", "rimuru-faktur", "rimuru-nota", "invoicemaker", "invoice", "faktur", "nota"]
handler.tags = ["tools"]
handler.description = "Membuat invoice/nota penjualan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "invoicemaker", "alias": ["invoice", "faktur", "nota"], "category": "tools", "description": "Membuat invoice/nota penjualan", "usage": ".invoicemaker <toko>|<invoice>|<tanggal>|<status>|<items>|<total>", "example": ".invoicemaker TokoKu|INV001|15/01/2026|paid|Nasi Goreng:1x:15000,Es Teh:2x:6000|21000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-invoicemaker": "invoicemaker", "rimuru-invoicemaker": "invoicemaker", "rimuru-invoice": "invoice", "rimuru-faktur": "faktur", "rimuru-nota": "nota", "invoicemaker": "invoicemaker", "invoice": "invoice", "faktur": "faktur", "nota": "nota"}
export default handler
