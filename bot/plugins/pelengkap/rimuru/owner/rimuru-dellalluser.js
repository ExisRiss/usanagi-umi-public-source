/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/dellalluser.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "deluserall", "category": "owner", "aliasMap": {"rimuru-owner-deluserall": "deluserall", "rimuru-deluserall": "deluserall", "rimuru-deletealluser": "deletealluser", "rimuru-hapussemua": "hapussemua", "rimuru-delalluser": "delalluser", "rimuru-resetuser": "resetuser", "rimuru-clearuser": "clearuser", "deluserall": "deluserall", "deletealluser": "deletealluser", "hapussemua": "hapussemua", "delalluser": "delalluser", "resetuser": "resetuser", "clearuser": "clearuser"}, "description": "Hapus SEMUA user dari database (LANGSUNG HAPUS)", "usage": ".deluserall", "example": ".deluserall", "cooldown": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/dellalluser.js", metadata, m, extra)
handler.help = ["rimuru-owner-deluserall"]
handler.command = ["rimuru-owner-deluserall", "rimuru-deluserall", "rimuru-deletealluser", "rimuru-hapussemua", "rimuru-delalluser", "rimuru-resetuser", "rimuru-clearuser", "deluserall", "deletealluser", "hapussemua", "delalluser", "resetuser", "clearuser"]
handler.tags = ["owner"]
handler.description = "Hapus SEMUA user dari database (LANGSUNG HAPUS)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "deluserall", "alias": ["deletealluser", "hapussemua", "delalluser", "resetuser", "clearuser"], "category": "owner", "description": "Hapus SEMUA user dari database (LANGSUNG HAPUS)", "usage": ".deluserall", "example": ".deluserall", "isOwner": true, "cooldown": 10, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-deluserall": "deluserall", "rimuru-deluserall": "deluserall", "rimuru-deletealluser": "deletealluser", "rimuru-hapussemua": "hapussemua", "rimuru-delalluser": "delalluser", "rimuru-resetuser": "resetuser", "rimuru-clearuser": "clearuser", "deluserall": "deluserall", "deletealluser": "deletealluser", "hapussemua": "hapussemua", "delalluser": "delalluser", "resetuser": "resetuser", "clearuser": "clearuser"}
export default handler
