/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/potensipenyakit.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "potensipenyakit", "category": "primbon", "aliasMap": {"rimuru-primbon-potensipenyakit": "potensipenyakit", "rimuru-potensipenyakit": "potensipenyakit", "rimuru-cekpenyakit": "cekpenyakit", "rimuru-penyakit": "penyakit", "potensipenyakit": "potensipenyakit", "cekpenyakit": "cekpenyakit", "penyakit": "penyakit"}, "description": "Cek potensi penyakit berdasarkan tanggal lahir", "usage": ".potensipenyakit <tgl> <bln> <thn>", "example": ".potensipenyakit 12 05 1998", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/potensipenyakit.js", metadata, m, extra)
handler.help = ["rimuru-primbon-potensipenyakit <tgl> <bln> <thn>"]
handler.command = ["rimuru-primbon-potensipenyakit", "rimuru-potensipenyakit", "rimuru-cekpenyakit", "rimuru-penyakit", "potensipenyakit", "cekpenyakit", "penyakit"]
handler.tags = ["primbon"]
handler.description = "Cek potensi penyakit berdasarkan tanggal lahir"
handler.importSource = "rimuru"
handler.importConfig = {"name": "potensipenyakit", "alias": ["cekpenyakit", "penyakit"], "category": "primbon", "description": "Cek potensi penyakit berdasarkan tanggal lahir", "usage": ".potensipenyakit <tgl> <bln> <thn>", "example": ".potensipenyakit 12 05 1998", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-potensipenyakit": "potensipenyakit", "rimuru-potensipenyakit": "potensipenyakit", "rimuru-cekpenyakit": "cekpenyakit", "rimuru-penyakit": "penyakit", "potensipenyakit": "potensipenyakit", "cekpenyakit": "cekpenyakit", "penyakit": "penyakit"}
export default handler
