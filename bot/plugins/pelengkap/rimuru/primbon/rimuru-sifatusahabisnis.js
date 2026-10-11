/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/sifatusahabisnis.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sifatusahabisnis", "category": "primbon", "aliasMap": {"rimuru-primbon-sifatusahabisnis": "sifatusahabisnis", "rimuru-sifatusahabisnis": "sifatusahabisnis", "rimuru-usahabisnis": "usahabisnis", "rimuru-sifatbisnis": "sifatbisnis", "sifatusahabisnis": "sifatusahabisnis", "usahabisnis": "usahabisnis", "sifatbisnis": "sifatbisnis"}, "description": "Cek sifat usaha/bisnis berdasarkan tanggal lahir", "usage": ".sifatusahabisnis <tgl> <bln> <thn>", "example": ".sifatusahabisnis 1 1 2000", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/sifatusahabisnis.js", metadata, m, extra)
handler.help = ["rimuru-primbon-sifatusahabisnis <tgl> <bln> <thn>"]
handler.command = ["rimuru-primbon-sifatusahabisnis", "rimuru-sifatusahabisnis", "rimuru-usahabisnis", "rimuru-sifatbisnis", "sifatusahabisnis", "usahabisnis", "sifatbisnis"]
handler.tags = ["primbon"]
handler.description = "Cek sifat usaha/bisnis berdasarkan tanggal lahir"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sifatusahabisnis", "alias": ["usahabisnis", "sifatbisnis"], "category": "primbon", "description": "Cek sifat usaha/bisnis berdasarkan tanggal lahir", "usage": ".sifatusahabisnis <tgl> <bln> <thn>", "example": ".sifatusahabisnis 1 1 2000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-sifatusahabisnis": "sifatusahabisnis", "rimuru-sifatusahabisnis": "sifatusahabisnis", "rimuru-usahabisnis": "usahabisnis", "rimuru-sifatbisnis": "sifatbisnis", "sifatusahabisnis": "sifatusahabisnis", "usahabisnis": "usahabisnis", "sifatbisnis": "sifatbisnis"}
export default handler
