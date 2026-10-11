/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/hapususer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hapususer", "category": "owner", "aliasMap": {"rimuru-owner-hapususer": "hapususer", "rimuru-hapususer": "hapususer", "rimuru-deluser": "deluser", "rimuru-deleteuser": "deleteuser", "hapususer": "hapususer", "deluser": "deluser", "deleteuser": "deleteuser"}, "description": "Hapus user dari database", "usage": ".hapususer", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/hapususer.js", metadata, m, extra)
handler.help = ["rimuru-owner-hapususer"]
handler.command = ["rimuru-owner-hapususer", "rimuru-hapususer", "rimuru-deluser", "rimuru-deleteuser", "hapususer", "deluser", "deleteuser"]
handler.tags = ["owner"]
handler.description = "Hapus user dari database"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hapususer", "alias": ["deluser", "deleteuser"], "category": "owner", "description": "Hapus user dari database", "usage": ".hapususer", "isOwner": true, "cooldown": 5, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-hapususer": "hapususer", "rimuru-hapususer": "hapususer", "rimuru-deluser": "deluser", "rimuru-deleteuser": "deleteuser", "hapususer": "hapususer", "deluser": "deluser", "deleteuser": "deleteuser"}
export default handler
