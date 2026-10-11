/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/listmember.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listmember", "category": "group", "aliasMap": {"rimuru-group-listmember": "listmember", "rimuru-listmember": "listmember", "rimuru-memberlist": "memberlist", "rimuru-daftarmember": "daftarmember", "rimuru-listanggota": "listanggota", "listmember": "listmember", "memberlist": "memberlist", "daftarmember": "daftarmember", "listanggota": "listanggota"}, "description": "Menampilkan daftar anggota grup", "usage": ".listmember", "example": ".listmember", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/listmember.js", metadata, m, extra)
handler.help = ["rimuru-group-listmember"]
handler.command = ["rimuru-group-listmember", "rimuru-listmember", "rimuru-memberlist", "rimuru-daftarmember", "rimuru-listanggota", "listmember", "memberlist", "daftarmember", "listanggota"]
handler.tags = ["group"]
handler.description = "Menampilkan daftar anggota grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listmember", "alias": ["memberlist", "daftarmember", "listanggota"], "category": "group", "description": "Menampilkan daftar anggota grup", "usage": ".listmember", "example": ".listmember", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-listmember": "listmember", "rimuru-listmember": "listmember", "rimuru-memberlist": "memberlist", "rimuru-daftarmember": "daftarmember", "rimuru-listanggota": "listanggota", "listmember": "listmember", "memberlist": "memberlist", "daftarmember": "daftarmember", "listanggota": "listanggota"}
export default handler
