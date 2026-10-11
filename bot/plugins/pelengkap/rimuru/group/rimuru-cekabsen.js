/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/cekabsen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekabsen", "category": "group", "aliasMap": {"rimuru-group-cekabsen": "cekabsen", "rimuru-cekabsen": "cekabsen", "rimuru-listabsen": "listabsen", "rimuru-daftarabsen": "daftarabsen", "rimuru-lihathadir": "lihathadir", "cekabsen": "cekabsen", "daftarabsen": "daftarabsen", "lihathadir": "lihathadir"}, "description": "Lihat daftar peserta yang sudah absen", "usage": ".cekabsen", "example": ".cekabsen", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/cekabsen.js", metadata, m, extra)
handler.help = ["rimuru-group-cekabsen"]
handler.command = ["rimuru-group-cekabsen", "rimuru-cekabsen", "rimuru-listabsen", "rimuru-daftarabsen", "rimuru-lihathadir", "cekabsen", "daftarabsen", "lihathadir"]
handler.tags = ["group"]
handler.description = "Lihat daftar peserta yang sudah absen"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekabsen", "alias": ["listabsen", "daftarabsen", "lihathadir"], "category": "group", "description": "Lihat daftar peserta yang sudah absen", "usage": ".cekabsen", "example": ".cekabsen", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-cekabsen": "cekabsen", "rimuru-cekabsen": "cekabsen", "rimuru-listabsen": "listabsen", "rimuru-daftarabsen": "daftarabsen", "rimuru-lihathadir": "lihathadir", "cekabsen": "cekabsen", "daftarabsen": "daftarabsen", "lihathadir": "lihathadir"}
export default handler
