/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/goodbyeall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "goodbyeall", "category": "owner", "aliasMap": {"rimuru-owner-goodbyeall": "goodbyeall", "rimuru-goodbyeall": "goodbyeall", "rimuru-gball": "gball", "rimuru-globalgoodbye": "globalgoodbye", "rimuru-leaveall": "leaveall", "goodbyeall": "goodbyeall", "gball": "gball", "globalgoodbye": "globalgoodbye", "leaveall": "leaveall"}, "description": "Aktifkan/nonaktifkan goodbye di semua grup", "usage": ".goodbyeall <on/off>", "example": ".goodbyeall on", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/goodbyeall.js", metadata, m, extra)
handler.help = ["rimuru-owner-goodbyeall <on/off>"]
handler.command = ["rimuru-owner-goodbyeall", "rimuru-goodbyeall", "rimuru-gball", "rimuru-globalgoodbye", "rimuru-leaveall", "goodbyeall", "gball", "globalgoodbye", "leaveall"]
handler.tags = ["owner"]
handler.description = "Aktifkan/nonaktifkan goodbye di semua grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "goodbyeall", "alias": ["gball", "globalgoodbye", "leaveall"], "category": "owner", "description": "Aktifkan/nonaktifkan goodbye di semua grup", "usage": ".goodbyeall <on/off>", "example": ".goodbyeall on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-goodbyeall": "goodbyeall", "rimuru-goodbyeall": "goodbyeall", "rimuru-gball": "gball", "rimuru-globalgoodbye": "globalgoodbye", "rimuru-leaveall": "leaveall", "goodbyeall": "goodbyeall", "gball": "gball", "globalgoodbye": "globalgoodbye", "leaveall": "leaveall"}
export default handler
