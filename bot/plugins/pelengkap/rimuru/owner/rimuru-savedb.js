/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/savedb.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "savedb", "category": "owner", "aliasMap": {"rimuru-owner-savedb": "savedb", "rimuru-savedb": "savedb", "rimuru-downloaddb": "downloaddb", "rimuru-getdb": "getdb", "savedb": "savedb", "downloaddb": "downloaddb", "getdb": "getdb"}, "description": "Download file database", "usage": ".savedb", "example": ".savedb", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/savedb.js", metadata, m, extra)
handler.help = ["rimuru-owner-savedb"]
handler.command = ["rimuru-owner-savedb", "rimuru-savedb", "rimuru-downloaddb", "rimuru-getdb", "savedb", "downloaddb", "getdb"]
handler.tags = ["owner"]
handler.description = "Download file database"
handler.importSource = "rimuru"
handler.importConfig = {"name": "savedb", "alias": ["backupdb", "downloaddb", "getdb"], "category": "owner", "description": "Download file database", "usage": ".savedb", "example": ".savedb", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-savedb": "savedb", "rimuru-savedb": "savedb", "rimuru-downloaddb": "downloaddb", "rimuru-getdb": "getdb", "savedb": "savedb", "downloaddb": "downloaddb", "getdb": "getdb"}
export default handler
