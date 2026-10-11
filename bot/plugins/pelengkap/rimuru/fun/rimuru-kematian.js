/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/kematian.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kematian", "category": "fun", "aliasMap": {"rimuru-fun-kematian": "kematian", "rimuru-kematian": "kematian", "kematian": "kematian"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/kematian.js", metadata, m, extra)
handler.help = ["rimuru-fun-kematian"]
handler.command = ["rimuru-fun-kematian", "rimuru-kematian", "kematian"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kematian", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-kematian": "kematian", "rimuru-kematian": "kematian", "kematian": "kematian"}
export default handler
