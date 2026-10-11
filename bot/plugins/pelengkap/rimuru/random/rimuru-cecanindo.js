/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/cecanindo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cecanindo", "category": "cecan", "aliasMap": {"rimuru-cecan-cecanindo": "cecanindo", "rimuru-cecanindo": "cecanindo", "rimuru-cewekindo": "cewekindo", "rimuru-cewekindonesia": "cewekindonesia", "cecanindo": "cecanindo", "cewekindo": "cewekindo", "cewekindonesia": "cewekindonesia"}, "description": "Random gambar cewek cantik Indonesia", "usage": ".cecanindo", "example": ".cecanindo", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/cecanindo.js", metadata, m, extra)
handler.help = ["rimuru-cecan-cecanindo"]
handler.command = ["rimuru-cecan-cecanindo", "rimuru-cecanindo", "rimuru-cewekindo", "rimuru-cewekindonesia", "cecanindo", "cewekindo", "cewekindonesia"]
handler.tags = ["cecan"]
handler.description = "Random gambar cewek cantik Indonesia"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cecanindo", "alias": ["cewekindo", "cewekindonesia"], "category": "cecan", "description": "Random gambar cewek cantik Indonesia", "usage": ".cecanindo", "example": ".cecanindo", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-cecan-cecanindo": "cecanindo", "rimuru-cecanindo": "cecanindo", "rimuru-cewekindo": "cewekindo", "rimuru-cewekindonesia": "cewekindonesia", "cecanindo": "cecanindo", "cewekindo": "cewekindo", "cewekindonesia": "cewekindonesia"}
export default handler
