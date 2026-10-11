/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/premium/bataljadibot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bataljadibot", "category": "premium", "aliasMap": {"rimuru-premium-bataljadibot": "bataljadibot", "rimuru-bataljadibot": "bataljadibot", "rimuru-canceljadibot": "canceljadibot", "rimuru-stopjadibotstart": "stopjadibotstart", "bataljadibot": "bataljadibot", "canceljadibot": "canceljadibot", "stopjadibotstart": "stopjadibotstart"}, "description": "Batalkan proses jadibot yang sedang dimulai", "usage": ".bataljadibot", "example": ".bataljadibot", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/premium/bataljadibot.js", metadata, m, extra)
handler.help = ["rimuru-premium-bataljadibot"]
handler.command = ["rimuru-premium-bataljadibot", "rimuru-bataljadibot", "rimuru-canceljadibot", "rimuru-stopjadibotstart", "bataljadibot", "canceljadibot", "stopjadibotstart"]
handler.tags = ["premium"]
handler.description = "Batalkan proses jadibot yang sedang dimulai"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bataljadibot", "alias": ["canceljadibot", "stopjadibotstart"], "category": "premium", "description": "Batalkan proses jadibot yang sedang dimulai", "usage": ".bataljadibot", "example": ".bataljadibot", "isOwner": false, "isPremium": true, "isGroup": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-premium-bataljadibot": "bataljadibot", "rimuru-bataljadibot": "bataljadibot", "rimuru-canceljadibot": "canceljadibot", "rimuru-stopjadibotstart": "stopjadibotstart", "bataljadibot": "bataljadibot", "canceljadibot": "canceljadibot", "stopjadibotstart": "stopjadibotstart"}
export default handler
