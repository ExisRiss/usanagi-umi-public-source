/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/pinchat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pinchat", "category": "group", "aliasMap": {"rimuru-group-pinchat": "pinchat", "rimuru-pinchat": "pinchat", "rimuru-pinmsg": "pinmsg", "rimuru-pinpesan": "pinpesan", "pinmsg": "pinmsg"}, "description": "Pin pesan penting di grup", "usage": ".pinchat (reply pesan)", "example": ".pinchat", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/pinchat.js", metadata, m, extra)
handler.help = ["rimuru-group-pinchat (reply pesan)"]
handler.command = ["rimuru-group-pinchat", "rimuru-pinchat", "rimuru-pinmsg", "rimuru-pinpesan", "pinmsg"]
handler.tags = ["group"]
handler.description = "Pin pesan penting di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pinchat", "alias": ["pinmsg", "pinpesan"], "category": "group", "description": "Pin pesan penting di grup", "usage": ".pinchat (reply pesan)", "example": ".pinchat", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-pinchat": "pinchat", "rimuru-pinchat": "pinchat", "rimuru-pinmsg": "pinmsg", "rimuru-pinpesan": "pinpesan", "pinmsg": "pinmsg"}
export default handler
