/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecanjepang.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecanjepang", "category": "cecan", "aliasMap": {"rimuru-cecan-cecanjepang": "cecanjepang", "rimuru-cecanjepang": "cecanjepang", "rimuru-cewekjepang": "cewekjepang", "rimuru-cewekjpn": "cewekjpn", "cecanjepang": "cecanjepang", "cewekjepang": "cewekjepang", "cewekjpn": "cewekjpn"}, "description": "Random gambar cewek cantik Jepang", "usage": ".cecanjepang", "example": ".cecanjepang", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecanjepang.js", metadata, m, extra)
handler.help = ["rimuru-cecan-cecanjepang"]
handler.command = ["rimuru-cecan-cecanjepang", "rimuru-cecanjepang", "rimuru-cewekjepang", "rimuru-cewekjpn", "cecanjepang", "cewekjepang", "cewekjpn"]
handler.tags = ["cecan"]
handler.description = "Random gambar cewek cantik Jepang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecanjepang", "alias": ["cewekjepang", "cewekjpn"], "category": "cecan", "description": "Random gambar cewek cantik Jepang", "usage": ".cecanjepang", "example": ".cecanjepang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-cecan-cecanjepang": "cecanjepang", "rimuru-cecanjepang": "cecanjepang", "rimuru-cewekjepang": "cewekjepang", "rimuru-cewekjpn": "cewekjpn", "cecanjepang": "cecanjepang", "cewekjepang": "cewekjepang", "cewekjpn": "cewekjpn"}
export default handler
