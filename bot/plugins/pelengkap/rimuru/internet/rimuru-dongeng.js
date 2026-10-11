/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/internet/dongeng.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dongeng", "category": "internet", "aliasMap": {"rimuru-internet-dongeng": "dongeng", "rimuru-dongeng": "dongeng", "rimuru-cerita": "cerita", "rimuru-dongengku": "dongengku", "dongeng": "dongeng", "cerita": "cerita", "dongengku": "dongengku"}, "description": "Cari dan baca dongeng dari 1000dongeng.com", "usage": ".dongeng <judul>", "example": ".dongeng Pahlawan", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/internet/dongeng.js", metadata, m, extra)
handler.help = ["rimuru-internet-dongeng <judul>"]
handler.command = ["rimuru-internet-dongeng", "rimuru-dongeng", "rimuru-cerita", "rimuru-dongengku", "dongeng", "cerita", "dongengku"]
handler.tags = ["internet"]
handler.description = "Cari dan baca dongeng dari 1000dongeng.com"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dongeng", "alias": ["cerita", "dongengku"], "category": "internet", "description": "Cari dan baca dongeng dari 1000dongeng.com", "usage": ".dongeng <judul>", "example": ".dongeng Pahlawan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-internet-dongeng": "dongeng", "rimuru-dongeng": "dongeng", "rimuru-cerita": "cerita", "rimuru-dongengku": "dongengku", "dongeng": "dongeng", "cerita": "cerita", "dongengku": "dongengku"}
export default handler
