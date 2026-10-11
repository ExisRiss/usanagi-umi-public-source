/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/tembak.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tembak", "category": "fun", "aliasMap": {"rimuru-fun-tembak": "tembak", "rimuru-tembak": "tembak", "rimuru-nembak": "nembak"}, "description": "Menembak seseorang untuk pacaran", "usage": ".tembak @tag", "example": ".tembak @628xxx", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/tembak.js", metadata, m, extra)
handler.help = ["rimuru-fun-tembak @tag"]
handler.command = ["rimuru-fun-tembak", "rimuru-tembak", "rimuru-nembak"]
handler.tags = ["fun"]
handler.description = "Menembak seseorang untuk pacaran"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tembak", "alias": ["nembak", "propose"], "category": "fun", "description": "Menembak seseorang untuk pacaran", "usage": ".tembak @tag", "example": ".tembak @628xxx", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-tembak": "tembak", "rimuru-tembak": "tembak", "rimuru-nembak": "nembak"}
export default handler
