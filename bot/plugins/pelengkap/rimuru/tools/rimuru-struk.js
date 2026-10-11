/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/struk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "struk", "category": "tools", "aliasMap": {"rimuru-tools-struk": "struk", "rimuru-struk": "struk", "rimuru-printstruk": "printstruk", "rimuru-buatstruk": "buatstruk", "rimuru-pdfstruk": "pdfstruk", "struk": "struk", "printstruk": "printstruk", "buatstruk": "buatstruk", "pdfstruk": "pdfstruk"}, "description": "Membuat struk belanja simpel (Nama Store, No Telp, Produk, Jumlah, Harga, Tanggal)", "usage": ".struk <Nama Store> | <No Telp> | <Produk> | <Jumlah> | <Harga>", "example": ".struk Toko Berkah | 08123456789 | Kopi Susu | 2 | 5000", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/struk.js", metadata, m, extra)
handler.help = ["rimuru-tools-struk <Nama Store> | <No Telp> | <Produk> | <Jumlah> | <Harga>"]
handler.command = ["rimuru-tools-struk", "rimuru-struk", "rimuru-printstruk", "rimuru-buatstruk", "rimuru-pdfstruk", "struk", "printstruk", "buatstruk", "pdfstruk"]
handler.tags = ["tools"]
handler.description = "Membuat struk belanja simpel (Nama Store, No Telp, Produk, Jumlah, Harga, Tanggal)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "struk", "alias": ["printstruk", "buatstruk", "pdfstruk"], "category": "tools", "description": "Membuat struk belanja simpel (Nama Store, No Telp, Produk, Jumlah, Harga, Tanggal)", "usage": ".struk <Nama Store> | <No Telp> | <Produk> | <Jumlah> | <Harga>", "example": ".struk Toko Berkah | 08123456789 | Kopi Susu | 2 | 5000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-struk": "struk", "rimuru-struk": "struk", "rimuru-printstruk": "printstruk", "rimuru-buatstruk": "buatstruk", "rimuru-pdfstruk": "pdfstruk", "struk": "struk", "printstruk": "printstruk", "buatstruk": "buatstruk", "pdfstruk": "pdfstruk"}
export default handler
