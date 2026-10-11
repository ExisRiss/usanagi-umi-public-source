/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/bcpcjeda.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bcpcjeda", "category": "owner", "aliasMap": {"rimuru-owner-bcpcjeda": "bcpcjeda", "rimuru-bcpcjeda": "bcpcjeda", "rimuru-delaybcpc": "delaybcpc", "rimuru-jedabcpc": "jedabcpc", "rimuru-setjedabcpc": "setjedabcpc", "bcpcjeda": "bcpcjeda", "delaybcpc": "delaybcpc", "jedabcpc": "jedabcpc", "setjedabcpc": "setjedabcpc"}, "description": "Atur jeda broadcast private chat", "usage": ".bcpcjeda <waktu> (contoh: 5s, 2m, 1h)", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/bcpcjeda.js", metadata, m, extra)
handler.help = ["rimuru-owner-bcpcjeda <waktu> (contoh: 5s, 2m, 1h)"]
handler.command = ["rimuru-owner-bcpcjeda", "rimuru-bcpcjeda", "rimuru-delaybcpc", "rimuru-jedabcpc", "rimuru-setjedabcpc", "bcpcjeda", "delaybcpc", "jedabcpc", "setjedabcpc"]
handler.tags = ["owner"]
handler.description = "Atur jeda broadcast private chat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bcpcjeda", "alias": ["delaybcpc", "jedabcpc", "setjedabcpc"], "category": "owner", "description": "Atur jeda broadcast private chat", "usage": ".bcpcjeda <waktu> (contoh: 5s, 2m, 1h)", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-bcpcjeda": "bcpcjeda", "rimuru-bcpcjeda": "bcpcjeda", "rimuru-delaybcpc": "delaybcpc", "rimuru-jedabcpc": "jedabcpc", "rimuru-setjedabcpc": "setjedabcpc", "bcpcjeda": "bcpcjeda", "delaybcpc": "delaybcpc", "jedabcpc": "jedabcpc", "setjedabcpc": "setjedabcpc"}
export default handler
