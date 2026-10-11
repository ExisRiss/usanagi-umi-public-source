/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setppsaluran.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setppsaluran", "category": "owner", "aliasMap": {"rimuru-owner-setppsaluran": "setppsaluran", "rimuru-setppsaluran": "setppsaluran", "rimuru-setppchannel": "setppchannel", "rimuru-ppchannel": "ppchannel", "setppsaluran": "setppsaluran", "setppchannel": "setppchannel", "ppchannel": "ppchannel"}, "description": "Ganti PP channel dan kirim notifikasi ke channel", "usage": ".setppsaluran (reply gambar)", "example": ".setppsaluran", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setppsaluran.js", metadata, m, extra)
handler.help = ["rimuru-owner-setppsaluran (reply gambar)"]
handler.command = ["rimuru-owner-setppsaluran", "rimuru-setppsaluran", "rimuru-setppchannel", "rimuru-ppchannel", "setppsaluran", "setppchannel", "ppchannel"]
handler.tags = ["owner"]
handler.description = "Ganti PP channel dan kirim notifikasi ke channel"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setppsaluran", "alias": ["setppchannel", "ppchannel"], "category": "owner", "description": "Ganti PP channel dan kirim notifikasi ke channel", "usage": ".setppsaluran (reply gambar)", "example": ".setppsaluran", "isOwner": true, "cooldown": 5, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setppsaluran": "setppsaluran", "rimuru-setppsaluran": "setppsaluran", "rimuru-setppchannel": "setppchannel", "rimuru-ppchannel": "ppchannel", "setppsaluran": "setppsaluran", "setppchannel": "setppchannel", "ppchannel": "ppchannel"}
export default handler
