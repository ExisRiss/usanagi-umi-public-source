/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecanvietnam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecanvietnam", "category": "cecan", "aliasMap": {"rimuru-cecan-cecanvietnam": "cecanvietnam", "rimuru-cecanvietnam": "cecanvietnam", "rimuru-cewekvietnam": "cewekvietnam", "rimuru-cewekvn": "cewekvn", "cecanvietnam": "cecanvietnam", "cewekvietnam": "cewekvietnam", "cewekvn": "cewekvn"}, "description": "Random gambar cewek cantik Vietnam", "usage": ".cecanvietnam", "example": ".cecanvietnam", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecanvietnam.js", metadata, m, extra)
handler.help = ["rimuru-cecan-cecanvietnam"]
handler.command = ["rimuru-cecan-cecanvietnam", "rimuru-cecanvietnam", "rimuru-cewekvietnam", "rimuru-cewekvn", "cecanvietnam", "cewekvietnam", "cewekvn"]
handler.tags = ["cecan"]
handler.description = "Random gambar cewek cantik Vietnam"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecanvietnam", "alias": ["cewekvietnam", "cewekvn"], "category": "cecan", "description": "Random gambar cewek cantik Vietnam", "usage": ".cecanvietnam", "example": ".cecanvietnam", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-cecan-cecanvietnam": "cecanvietnam", "rimuru-cecanvietnam": "cecanvietnam", "rimuru-cewekvietnam": "cewekvietnam", "rimuru-cewekvn": "cewekvn", "cecanvietnam": "cecanvietnam", "cewekvietnam": "cewekvietnam", "cewekvn": "cewekvn"}
export default handler
