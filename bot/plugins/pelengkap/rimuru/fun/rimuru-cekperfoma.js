/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekperfoma.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekperforma", "category": "fun", "aliasMap": {"rimuru-fun-cekperforma": "cekperforma", "rimuru-cekperforma": "cekperforma", "rimuru-performa": "performa", "rimuru-cekperf": "cekperf", "cekperforma": "cekperforma", "performa": "performa", "cekperf": "cekperf"}, "description": "Cek performa secara random (bercanda)", "usage": ".cekperforma <nama>", "example": ".cekperforma Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekperfoma.js", metadata, m, extra)
handler.help = ["rimuru-fun-cekperforma <nama>"]
handler.command = ["rimuru-fun-cekperforma", "rimuru-cekperforma", "rimuru-performa", "rimuru-cekperf", "cekperforma", "performa", "cekperf"]
handler.tags = ["fun"]
handler.description = "Cek performa secara random (bercanda)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekperforma", "alias": ["performa", "cekperf"], "category": "fun", "description": "Cek performa secara random (bercanda)", "usage": ".cekperforma <nama>", "example": ".cekperforma Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-cekperforma": "cekperforma", "rimuru-cekperforma": "cekperforma", "rimuru-performa": "performa", "rimuru-cekperf": "cekperf", "cekperforma": "cekperforma", "performa": "performa", "cekperf": "cekperf"}
export default handler
