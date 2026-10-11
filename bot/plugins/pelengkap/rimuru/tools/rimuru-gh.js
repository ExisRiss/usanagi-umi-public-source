/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/gh.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ghuser", "category": "tools", "aliasMap": {"rimuru-tools-ghuser": "ghuser", "rimuru-ghuser": "ghuser", "rimuru-ghsearch": "ghsearch", "rimuru-ghgist": "ghgist", "ghuser": "ghuser", "ghsearch": "ghsearch", "ghgist": "ghgist"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/gh.js", metadata, m, extra)
handler.help = ["rimuru-tools-ghuser"]
handler.command = ["rimuru-tools-ghuser", "rimuru-ghuser", "rimuru-ghsearch", "rimuru-ghgist", "ghuser", "ghsearch", "ghgist"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ghuser", "alias": ["ghsearch", "ghgist"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-ghuser": "ghuser", "rimuru-ghuser": "ghuser", "rimuru-ghsearch": "ghsearch", "rimuru-ghgist": "ghgist", "ghuser": "ghuser", "ghsearch": "ghsearch", "ghgist": "ghgist"}
export default handler
