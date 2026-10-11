/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/terima.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "terima", "category": "fun", "aliasMap": {"rimuru-fun-terima": "terima", "rimuru-terima": "terima", "rimuru-accept": "accept", "rimuru-yes": "yes", "yes": "yes"}, "description": "Menerima tembakan dari seseorang", "usage": ".terima @tag", "example": ".terima @628xxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/terima.js", metadata, m, extra)
handler.help = ["rimuru-fun-terima @tag"]
handler.command = ["rimuru-fun-terima", "rimuru-terima", "rimuru-accept", "rimuru-yes", "yes"]
handler.tags = ["fun"]
handler.description = "Menerima tembakan dari seseorang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "terima", "alias": ["accept", "yes"], "category": "fun", "description": "Menerima tembakan dari seseorang", "usage": ".terima @tag", "example": ".terima @628xxx", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-terima": "terima", "rimuru-terima": "terima", "rimuru-accept": "accept", "rimuru-yes": "yes", "yes": "yes"}
export default handler
