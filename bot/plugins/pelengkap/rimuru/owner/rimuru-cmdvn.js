/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/cmdvn.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cmdvn", "category": "owner", "aliasMap": {"rimuru-owner-cmdvn": "cmdvn", "rimuru-cmdvn": "cmdvn", "rimuru-voicecommand": "voicecommand", "rimuru-vncmd": "vncmd", "cmdvn": "cmdvn", "voicecommand": "voicecommand", "vncmd": "vncmd"}, "description": "Aktifkan command via voice note", "usage": ".cmdvn <on/off>", "example": ".cmdvn on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/cmdvn.js", metadata, m, extra)
handler.help = ["rimuru-owner-cmdvn <on/off>"]
handler.command = ["rimuru-owner-cmdvn", "rimuru-cmdvn", "rimuru-voicecommand", "rimuru-vncmd", "cmdvn", "voicecommand", "vncmd"]
handler.tags = ["owner"]
handler.description = "Aktifkan command via voice note"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cmdvn", "alias": ["voicecommand", "vncmd"], "category": "owner", "description": "Aktifkan command via voice note", "usage": ".cmdvn <on/off>", "example": ".cmdvn on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-cmdvn": "cmdvn", "rimuru-cmdvn": "cmdvn", "rimuru-voicecommand": "voicecommand", "rimuru-vncmd": "vncmd", "cmdvn": "cmdvn", "voicecommand": "voicecommand", "vncmd": "vncmd"}
export default handler
