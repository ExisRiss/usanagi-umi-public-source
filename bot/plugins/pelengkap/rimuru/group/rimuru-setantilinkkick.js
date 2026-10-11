/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setantilinkkick.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setantilinkkick", "category": "group", "aliasMap": {"rimuru-group-setantilinkkick": "setantilinkkick", "rimuru-setantilinkkick": "setantilinkkick", "rimuru-setalkick": "setalkick", "rimuru-setlinkkick": "setlinkkick", "rimuru-setantlinkkick": "setantlinkkick", "setantilinkkick": "setantilinkkick", "setalkick": "setalkick", "setlinkkick": "setlinkkick", "setantlinkkick": "setantlinkkick"}, "description": "Mengubah batas peringatan AntiLinkKick", "usage": ".setantilinkkick <1-20>", "example": ".setantilinkkick 5", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setantilinkkick.js", metadata, m, extra)
handler.help = ["rimuru-group-setantilinkkick <1-20>"]
handler.command = ["rimuru-group-setantilinkkick", "rimuru-setantilinkkick", "rimuru-setalkick", "rimuru-setlinkkick", "rimuru-setantlinkkick", "setantilinkkick", "setalkick", "setlinkkick", "setantlinkkick"]
handler.tags = ["group"]
handler.description = "Mengubah batas peringatan AntiLinkKick"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setantilinkkick", "alias": ["setalkick", "setlinkkick", "setantlinkkick"], "category": "group", "description": "Mengubah batas peringatan AntiLinkKick", "usage": ".setantilinkkick <1-20>", "example": ".setantilinkkick 5", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-setantilinkkick": "setantilinkkick", "rimuru-setantilinkkick": "setantilinkkick", "rimuru-setalkick": "setalkick", "rimuru-setlinkkick": "setlinkkick", "rimuru-setantlinkkick": "setantlinkkick", "setantilinkkick": "setantilinkkick", "setalkick": "setalkick", "setlinkkick": "setlinkkick", "setantlinkkick": "setantlinkkick"}
export default handler
