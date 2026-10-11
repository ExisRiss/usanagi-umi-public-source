/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/wasted.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wasted", "category": "maker", "aliasMap": {"rimuru-maker-wasted": "wasted", "rimuru-wasted": "wasted", "rimuru-gta": "gta", "rimuru-gtawasted": "gtawasted", "wasted": "wasted", "gta": "gta", "gtawasted": "gtawasted"}, "description": "Efek wasted GTA pada foto", "usage": ".wasted (reply foto)", "example": ".wasted", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/wasted.js", metadata, m, extra)
handler.help = ["rimuru-maker-wasted (reply foto)"]
handler.command = ["rimuru-maker-wasted", "rimuru-wasted", "rimuru-gta", "rimuru-gtawasted", "wasted", "gta", "gtawasted"]
handler.tags = ["maker"]
handler.description = "Efek wasted GTA pada foto"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wasted", "alias": ["gta", "gtawasted"], "category": "maker", "description": "Efek wasted GTA pada foto", "usage": ".wasted (reply foto)", "example": ".wasted", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-wasted": "wasted", "rimuru-wasted": "wasted", "rimuru-gta": "gta", "rimuru-gtawasted": "gtawasted", "wasted": "wasted", "gta": "gta", "gtawasted": "gtawasted"}
export default handler
