/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/sharetext.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "shareteks", "category": "tools", "aliasMap": {"rimuru-tools-shareteks": "shareteks", "rimuru-shareteks": "shareteks", "rimuru-bagiteks": "bagiteks", "shareteks": "shareteks", "bagiteks": "bagiteks"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/sharetext.js", metadata, m, extra)
handler.help = ["rimuru-tools-shareteks"]
handler.command = ["rimuru-tools-shareteks", "rimuru-shareteks", "rimuru-bagiteks", "shareteks", "bagiteks"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "shareteks", "alias": ["bagiteks"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-shareteks": "shareteks", "rimuru-shareteks": "shareteks", "rimuru-bagiteks": "bagiteks", "shareteks": "shareteks", "bagiteks": "bagiteks"}
export default handler
