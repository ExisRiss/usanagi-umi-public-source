/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antitoxic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antitoxic", "category": "group", "aliasMap": {"rimuru-group-antitoxic": "antitoxic", "rimuru-antitoxic": "antitoxic", "rimuru-toxic": "toxic", "rimuru-antitoxik": "antitoxik", "toxic": "toxic", "antitoxik": "antitoxik"}, "description": "Mengatur antitoxic di grup", "usage": ".antitoxic <on/off/warn/metode>", "example": ".antitoxic on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antitoxic.js", metadata, m, extra)
handler.help = ["rimuru-group-antitoxic <on/off/warn/metode>"]
handler.command = ["rimuru-group-antitoxic", "rimuru-antitoxic", "rimuru-toxic", "rimuru-antitoxik", "toxic", "antitoxik"]
handler.tags = ["group"]
handler.description = "Mengatur antitoxic di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antitoxic", "alias": ["toxic", "antitoxik"], "category": "group", "description": "Mengatur antitoxic di grup", "usage": ".antitoxic <on/off/warn/metode>", "example": ".antitoxic on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antitoxic": "antitoxic", "rimuru-antitoxic": "antitoxic", "rimuru-toxic": "toxic", "rimuru-antitoxik": "antitoxik", "toxic": "toxic", "antitoxik": "antitoxik"}
export default handler
