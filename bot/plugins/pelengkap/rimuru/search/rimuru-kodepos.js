/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/kodepos.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kodepos", "category": "search", "aliasMap": {"rimuru-search-kodepos": "kodepos", "rimuru-kodepos": "kodepos", "kodepos": "kodepos"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/kodepos.js", metadata, m, extra)
handler.help = ["rimuru-search-kodepos"]
handler.command = ["rimuru-search-kodepos", "rimuru-kodepos", "kodepos"]
handler.tags = ["search"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kodepos", "alias": [], "category": "search", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-kodepos": "kodepos", "rimuru-kodepos": "kodepos", "kodepos": "kodepos"}
export default handler
