/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/soulmatch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "soulmatch", "category": "fun", "aliasMap": {"rimuru-fun-soulmatch": "soulmatch", "rimuru-soulmatch": "soulmatch"}, "description": "Cek kecocokan jiwa dengan seseorang", "usage": ".soulmatch nama1|nama2", "example": ".soulmatch Raiden|Mei", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/soulmatch.js", metadata, m, extra)
handler.help = ["rimuru-fun-soulmatch nama1|nama2"]
handler.command = ["rimuru-fun-soulmatch", "rimuru-soulmatch"]
handler.tags = ["fun"]
handler.description = "Cek kecocokan jiwa dengan seseorang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "soulmatch", "alias": [], "category": "fun", "description": "Cek kecocokan jiwa dengan seseorang", "usage": ".soulmatch nama1|nama2", "example": ".soulmatch Raiden|Mei", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-soulmatch": "soulmatch", "rimuru-soulmatch": "soulmatch"}
export default handler
