/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/stopbcpc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stopbcpc", "category": "owner", "aliasMap": {"rimuru-owner-stopbcpc": "stopbcpc", "rimuru-stopbcpc": "stopbcpc", "rimuru-stopbroadcastpc": "stopbroadcastpc", "stopbcpc": "stopbcpc", "stopbroadcastpc": "stopbroadcastpc"}, "description": "Hentikan broadcast private yang sedang berjalan", "usage": ".stopbcpc", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/stopbcpc.js", metadata, m, extra)
handler.help = ["rimuru-owner-stopbcpc"]
handler.command = ["rimuru-owner-stopbcpc", "rimuru-stopbcpc", "rimuru-stopbroadcastpc", "stopbcpc", "stopbroadcastpc"]
handler.tags = ["owner"]
handler.description = "Hentikan broadcast private yang sedang berjalan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stopbcpc", "alias": ["stopbroadcastpc"], "category": "owner", "description": "Hentikan broadcast private yang sedang berjalan", "usage": ".stopbcpc", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-stopbcpc": "stopbcpc", "rimuru-stopbcpc": "stopbcpc", "rimuru-stopbroadcastpc": "stopbroadcastpc", "stopbcpc": "stopbcpc", "stopbroadcastpc": "stopbroadcastpc"}
export default handler
