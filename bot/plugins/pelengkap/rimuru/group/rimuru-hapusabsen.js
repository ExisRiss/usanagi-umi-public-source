/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/hapusabsen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hapusabsen", "category": "group", "aliasMap": {"rimuru-group-hapusabsen": "hapusabsen", "rimuru-hapusabsen": "hapusabsen", "rimuru-deleteabsen": "deleteabsen", "rimuru-tutupabsen": "tutupabsen", "rimuru-closeabsen": "closeabsen", "rimuru-resetabsen": "resetabsen", "hapusabsen": "hapusabsen", "deleteabsen": "deleteabsen", "tutupabsen": "tutupabsen", "closeabsen": "closeabsen"}, "description": "Hapus/tutup sesi absen (admin only)", "usage": ".hapusabsen", "example": ".hapusabsen", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/hapusabsen.js", metadata, m, extra)
handler.help = ["rimuru-group-hapusabsen"]
handler.command = ["rimuru-group-hapusabsen", "rimuru-hapusabsen", "rimuru-deleteabsen", "rimuru-tutupabsen", "rimuru-closeabsen", "rimuru-resetabsen", "hapusabsen", "deleteabsen", "tutupabsen", "closeabsen"]
handler.tags = ["group"]
handler.description = "Hapus/tutup sesi absen (admin only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hapusabsen", "alias": ["deleteabsen", "tutupabsen", "closeabsen", "resetabsen"], "category": "group", "description": "Hapus/tutup sesi absen (admin only)", "usage": ".hapusabsen", "example": ".hapusabsen", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-hapusabsen": "hapusabsen", "rimuru-hapusabsen": "hapusabsen", "rimuru-deleteabsen": "deleteabsen", "rimuru-tutupabsen": "tutupabsen", "rimuru-closeabsen": "closeabsen", "rimuru-resetabsen": "resetabsen", "hapusabsen": "hapusabsen", "deleteabsen": "deleteabsen", "tutupabsen": "tutupabsen", "closeabsen": "closeabsen"}
export default handler
