/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/igqc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "igqc", "category": "maker", "aliasMap": {"rimuru-maker-igqc": "igqc", "rimuru-igqc": "igqc", "rimuru-igquote": "igquote", "rimuru-qcinstagram": "qcinstagram", "igqc": "igqc", "igquote": "igquote", "qcinstagram": "qcinstagram"}, "description": "Membuat gambar Instagram Quote Chat / IGQC", "usage": ".igqc <teks> (opsional reply/kirim foto)", "example": ".igqc Ini tuh namanya pap dari my mbg yh 🌹🌹", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/igqc.js", metadata, m, extra)
handler.help = ["rimuru-maker-igqc <teks> (opsional reply/kirim foto)"]
handler.command = ["rimuru-maker-igqc", "rimuru-igqc", "rimuru-igquote", "rimuru-qcinstagram", "igqc", "igquote", "qcinstagram"]
handler.tags = ["maker"]
handler.description = "Membuat gambar Instagram Quote Chat / IGQC"
handler.importSource = "rimuru"
handler.importConfig = {"name": "igqc", "alias": ["igquote", "qcinstagram"], "category": "maker", "description": "Membuat gambar Instagram Quote Chat / IGQC", "usage": ".igqc <teks> (opsional reply/kirim foto)", "example": ".igqc Ini tuh namanya pap dari my mbg yh 🌹🌹", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-igqc": "igqc", "rimuru-igqc": "igqc", "rimuru-igquote": "igquote", "rimuru-qcinstagram": "qcinstagram", "igqc": "igqc", "igquote": "igquote", "qcinstagram": "qcinstagram"}
export default handler
