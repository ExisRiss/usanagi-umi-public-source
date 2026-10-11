/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setlimitdefault.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setlimitdefault", "category": "owner", "aliasMap": {"rimuru-owner-setlimitdefault": "setlimitdefault", "rimuru-setlimitdefault": "setlimitdefault", "rimuru-setdefaultlimit": "setdefaultlimit", "rimuru-limitdefault": "limitdefault", "setlimitdefault": "setlimitdefault", "setdefaultlimit": "setdefaultlimit", "limitdefault": "limitdefault"}, "description": "Set default limit untuk user baru", "usage": ".setlimitdefault <jumlah>", "example": ".setlimitdefault 50", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setlimitdefault.js", metadata, m, extra)
handler.help = ["rimuru-owner-setlimitdefault <jumlah>"]
handler.command = ["rimuru-owner-setlimitdefault", "rimuru-setlimitdefault", "rimuru-setdefaultlimit", "rimuru-limitdefault", "setlimitdefault", "setdefaultlimit", "limitdefault"]
handler.tags = ["owner"]
handler.description = "Set default limit untuk user baru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setlimitdefault", "alias": ["setdefaultlimit", "limitdefault"], "category": "owner", "description": "Set default limit untuk user baru", "usage": ".setlimitdefault <jumlah>", "example": ".setlimitdefault 50", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setlimitdefault": "setlimitdefault", "rimuru-setlimitdefault": "setlimitdefault", "rimuru-setdefaultlimit": "setdefaultlimit", "rimuru-limitdefault": "limitdefault", "setlimitdefault": "setlimitdefault", "setdefaultlimit": "setdefaultlimit", "limitdefault": "limitdefault"}
export default handler
