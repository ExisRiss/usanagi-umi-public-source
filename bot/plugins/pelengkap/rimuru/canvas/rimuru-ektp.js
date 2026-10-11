/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/ektp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ektp", "category": "canvas", "aliasMap": {"rimuru-canvas-ektp": "ektp", "rimuru-ektp": "ektp", "rimuru-ktp": "ktp", "ektp": "ektp", "ktp": "ktp"}, "description": "Bikin gambar e-KTP palsu", "usage": ".ektp <nik>|<nama>|<tanggalLahir> (reply/kirim foto)", "example": ".ektp 123456789|Fauzan|01-01-2000", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/ektp.js", metadata, m, extra)
handler.help = ["rimuru-canvas-ektp <nik>|<nama>|<tanggalLahir> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-ektp", "rimuru-ektp", "rimuru-ktp", "ektp", "ktp"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar e-KTP palsu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ektp", "alias": ["ktp"], "category": "canvas", "description": "Bikin gambar e-KTP palsu", "usage": ".ektp <nik>|<nama>|<tanggalLahir> (reply/kirim foto)", "example": ".ektp 123456789|Fauzan|01-01-2000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-ektp": "ektp", "rimuru-ektp": "ektp", "rimuru-ktp": "ktp", "ektp": "ektp", "ktp": "ktp"}
export default handler
