/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/createchannel.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "createchannel", "category": "owner", "aliasMap": {"rimuru-owner-createchannel": "createchannel", "rimuru-createchannel": "createchannel", "rimuru-createch": "createch", "createchannel": "createchannel", "createch": "createch"}, "description": "Membuat WhatsApp Channel/newsletter baru", "usage": ".createchannel <nama>|<deskripsi>", "example": ".createchannel Rimuru MD|Channel resmi bot", "cooldown": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/createchannel.js", metadata, m, extra)
handler.help = ["rimuru-owner-createchannel <nama>|<deskripsi>"]
handler.command = ["rimuru-owner-createchannel", "rimuru-createchannel", "rimuru-createch", "createchannel", "createch"]
handler.tags = ["owner"]
handler.description = "Membuat WhatsApp Channel/newsletter baru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "createchannel", "alias": ["createch"], "category": "owner", "description": "Membuat WhatsApp Channel/newsletter baru", "usage": ".createchannel <nama>|<deskripsi>", "example": ".createchannel Rimuru MD|Channel resmi bot", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-createchannel": "createchannel", "rimuru-createchannel": "createchannel", "rimuru-createch": "createch", "createchannel": "createchannel", "createch": "createch"}
export default handler
