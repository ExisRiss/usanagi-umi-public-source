/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/genshinstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "genshinstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-genshinstalk": "genshinstalk", "rimuru-genshinstalk": "genshinstalk", "rimuru-genshin": "genshin", "rimuru-stalkgenshin": "stalkgenshin", "rimuru-gi": "gi", "genshinstalk": "genshinstalk", "genshin": "genshin", "stalkgenshin": "stalkgenshin", "gi": "gi"}, "description": "Melihat informasi akun Genshin Impact berdasarkan UID.", "usage": ".genshinstalk <uid>", "example": ".genshinstalk 856012067", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/genshinstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-genshinstalk <uid>"]
handler.command = ["rimuru-stalker-genshinstalk", "rimuru-genshinstalk", "rimuru-genshin", "rimuru-stalkgenshin", "rimuru-gi", "genshinstalk", "genshin", "stalkgenshin", "gi"]
handler.tags = ["stalker"]
handler.description = "Melihat informasi akun Genshin Impact berdasarkan UID."
handler.importSource = "rimuru"
handler.importConfig = {"name": "genshinstalk", "alias": ["genshin", "stalkgenshin", "gi"], "category": "stalker", "description": "Melihat informasi akun Genshin Impact berdasarkan UID.", "usage": ".genshinstalk <uid>", "example": ".genshinstalk 856012067", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-genshinstalk": "genshinstalk", "rimuru-genshinstalk": "genshinstalk", "rimuru-genshin": "genshin", "rimuru-stalkgenshin": "stalkgenshin", "rimuru-gi": "gi", "genshinstalk": "genshinstalk", "genshin": "genshin", "stalkgenshin": "stalkgenshin", "gi": "gi"}
export default handler
