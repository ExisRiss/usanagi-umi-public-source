/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/backupdb.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "backupdb", "category": "owner", "aliasMap": {"rimuru-owner-backupdb": "backupdb", "rimuru-dbbackup": "dbbackup", "rimuru-backupstore": "backupstore", "rimuru-storebackup": "storebackup", "backupdb": "backupdb", "dbbackup": "dbbackup", "backupstore": "backupstore", "storebackup": "storebackup"}, "description": "Backup database/store dan kirim ke owner", "usage": ".backupdb"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/backupdb.js", metadata, m, extra)
handler.help = ["rimuru-owner-backupdb"]
handler.command = ["rimuru-owner-backupdb", "rimuru-dbbackup", "rimuru-backupstore", "rimuru-storebackup", "backupdb", "dbbackup", "backupstore", "storebackup"]
handler.tags = ["owner"]
handler.description = "Backup database/store dan kirim ke owner"
handler.importSource = "rimuru"
handler.importConfig = {"name": "backupdb", "alias": ["dbbackup", "backupstore", "storebackup"], "category": "owner", "description": "Backup database/store dan kirim ke owner", "usage": ".backupdb", "isOwner": true, "isGroup": false, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-backupdb": "backupdb", "rimuru-dbbackup": "dbbackup", "rimuru-backupstore": "backupstore", "rimuru-storebackup": "storebackup", "backupdb": "backupdb", "dbbackup": "dbbackup", "backupstore": "backupstore", "storebackup": "storebackup"}
export default handler
