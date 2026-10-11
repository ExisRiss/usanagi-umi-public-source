/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecankorea.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecankorea", "category": "cecan", "aliasMap": {"rimuru-cecan-cecankorea": "cecankorea", "rimuru-cecankorea": "cecankorea", "rimuru-cewekkorea": "cewekkorea", "rimuru-cewekkor": "cewekkor", "cecankorea": "cecankorea", "cewekkorea": "cewekkorea", "cewekkor": "cewekkor"}, "description": "Random gambar cewek cantik Korea", "usage": ".cecankorea", "example": ".cecankorea", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecankorea.js", metadata, m, extra)
handler.help = ["rimuru-cecan-cecankorea"]
handler.command = ["rimuru-cecan-cecankorea", "rimuru-cecankorea", "rimuru-cewekkorea", "rimuru-cewekkor", "cecankorea", "cewekkorea", "cewekkor"]
handler.tags = ["cecan"]
handler.description = "Random gambar cewek cantik Korea"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecankorea", "alias": ["cewekkorea", "cewekkor"], "category": "cecan", "description": "Random gambar cewek cantik Korea", "usage": ".cecankorea", "example": ".cecankorea", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-cecan-cecankorea": "cecankorea", "rimuru-cecankorea": "cecankorea", "rimuru-cewekkorea": "cewekkorea", "rimuru-cewekkor": "cewekkor", "cecankorea": "cecankorea", "cewekkorea": "cewekkorea", "cewekkor": "cewekkor"}
export default handler
