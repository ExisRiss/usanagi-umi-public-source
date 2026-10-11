/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/mulaiabsen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mulaiabsen", "category": "group", "aliasMap": {"rimuru-group-mulaiabsen": "mulaiabsen", "rimuru-mulaiabsen": "mulaiabsen", "rimuru-startabsen": "startabsen", "rimuru-bukaabsen": "bukaabsen", "rimuru-openabsen": "openabsen", "startabsen": "startabsen", "bukaabsen": "bukaabsen", "openabsen": "openabsen"}, "description": "Mulai sesi absen di grup (admin only)", "usage": ".mulaiabsen [keterangan]", "example": ".mulaiabsen Rapat Mingguan", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/mulaiabsen.js", metadata, m, extra)
handler.help = ["rimuru-group-mulaiabsen [keterangan]"]
handler.command = ["rimuru-group-mulaiabsen", "rimuru-mulaiabsen", "rimuru-startabsen", "rimuru-bukaabsen", "rimuru-openabsen", "startabsen", "bukaabsen", "openabsen"]
handler.tags = ["group"]
handler.description = "Mulai sesi absen di grup (admin only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mulaiabsen", "alias": ["startabsen", "bukaabsen", "openabsen"], "category": "group", "description": "Mulai sesi absen di grup (admin only)", "usage": ".mulaiabsen [keterangan]", "example": ".mulaiabsen Rapat Mingguan", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-mulaiabsen": "mulaiabsen", "rimuru-mulaiabsen": "mulaiabsen", "rimuru-startabsen": "startabsen", "rimuru-bukaabsen": "bukaabsen", "rimuru-openabsen": "openabsen", "startabsen": "startabsen", "bukaabsen": "bukaabsen", "openabsen": "openabsen"}
export default handler
