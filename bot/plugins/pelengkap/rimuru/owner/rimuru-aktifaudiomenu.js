/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/aktifaudiomenu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "aktifaudiomenu", "category": "owner", "aliasMap": {"rimuru-owner-aktifaudiomenu": "aktifaudiomenu", "rimuru-aktifaudiomenu": "aktifaudiomenu", "rimuru-audiomenu": "audiomenu", "rimuru-setaudiomenu": "setaudiomenu", "rimuru-toggleaudiomenu": "toggleaudiomenu", "aktifaudiomenu": "aktifaudiomenu", "audiomenu": "audiomenu", "setaudiomenu": "setaudiomenu", "toggleaudiomenu": "toggleaudiomenu"}, "description": "Toggle audio saat menampilkan menu", "usage": ".aktifaudiomenu ya/gak", "example": ".aktifaudiomenu ya", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/aktifaudiomenu.js", metadata, m, extra)
handler.help = ["rimuru-owner-aktifaudiomenu ya/gak"]
handler.command = ["rimuru-owner-aktifaudiomenu", "rimuru-aktifaudiomenu", "rimuru-audiomenu", "rimuru-setaudiomenu", "rimuru-toggleaudiomenu", "aktifaudiomenu", "audiomenu", "setaudiomenu", "toggleaudiomenu"]
handler.tags = ["owner"]
handler.description = "Toggle audio saat menampilkan menu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "aktifaudiomenu", "alias": ["audiomenu", "setaudiomenu", "toggleaudiomenu"], "category": "owner", "description": "Toggle audio saat menampilkan menu", "usage": ".aktifaudiomenu ya/gak", "example": ".aktifaudiomenu ya", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-aktifaudiomenu": "aktifaudiomenu", "rimuru-aktifaudiomenu": "aktifaudiomenu", "rimuru-audiomenu": "audiomenu", "rimuru-setaudiomenu": "setaudiomenu", "rimuru-toggleaudiomenu": "toggleaudiomenu", "aktifaudiomenu": "aktifaudiomenu", "audiomenu": "audiomenu", "setaudiomenu": "setaudiomenu", "toggleaudiomenu": "toggleaudiomenu"}
export default handler
