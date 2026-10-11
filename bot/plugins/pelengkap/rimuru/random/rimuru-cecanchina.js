/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecanchina.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecanchina", "category": "cecan", "aliasMap": {"rimuru-cecan-cecanchina": "cecanchina", "rimuru-cecanchina": "cecanchina", "rimuru-cewekchina": "cewekchina", "rimuru-cewekcina": "cewekcina", "cecanchina": "cecanchina", "cewekchina": "cewekchina", "cewekcina": "cewekcina"}, "description": "Random gambar cewek cantik China", "usage": ".cecanchina", "example": ".cecanchina", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecanchina.js", metadata, m, extra)
handler.help = ["rimuru-cecan-cecanchina"]
handler.command = ["rimuru-cecan-cecanchina", "rimuru-cecanchina", "rimuru-cewekchina", "rimuru-cewekcina", "cecanchina", "cewekchina", "cewekcina"]
handler.tags = ["cecan"]
handler.description = "Random gambar cewek cantik China"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecanchina", "alias": ["cewekchina", "cewekcina"], "category": "cecan", "description": "Random gambar cewek cantik China", "usage": ".cecanchina", "example": ".cecanchina", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-cecan-cecanchina": "cecanchina", "rimuru-cecanchina": "cecanchina", "rimuru-cewekchina": "cewekchina", "rimuru-cewekcina": "cewekcina", "cecanchina": "cecanchina", "cewekchina": "cewekchina", "cewekcina": "cewekcina"}
export default handler
