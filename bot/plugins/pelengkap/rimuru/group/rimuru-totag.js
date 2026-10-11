/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/totag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "totag", "category": "group", "aliasMap": {"rimuru-group-totag": "totag", "rimuru-totag": "totag", "rimuru-tagall2": "tagall2", "rimuru-mentionall": "mentionall", "tagall2": "tagall2", "mentionall": "mentionall"}, "description": "Tag semua member dengan reply pesan", "usage": ".totag (reply pesan)", "example": ".totag", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/totag.js", metadata, m, extra)
handler.help = ["rimuru-group-totag (reply pesan)"]
handler.command = ["rimuru-group-totag", "rimuru-totag", "rimuru-tagall2", "rimuru-mentionall", "tagall2", "mentionall"]
handler.tags = ["group"]
handler.description = "Tag semua member dengan reply pesan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "totag", "alias": ["tagall2", "mentionall"], "category": "group", "description": "Tag semua member dengan reply pesan", "usage": ".totag (reply pesan)", "example": ".totag", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-totag": "totag", "rimuru-totag": "totag", "rimuru-tagall2": "tagall2", "rimuru-mentionall": "mentionall", "tagall2": "tagall2", "mentionall": "mentionall"}
export default handler
