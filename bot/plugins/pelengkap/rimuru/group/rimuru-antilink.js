/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antilink.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antilink", "category": "group", "aliasMap": {"rimuru-group-antilink": "antilink", "rimuru-antilink": "antilink", "rimuru-al": "al", "rimuru-antilinkgroup": "antilinkgroup", "rimuru-nolink": "nolink", "al": "al", "antilinkgroup": "antilinkgroup", "nolink": "nolink"}, "description": "Hapus otomatis semua link yang dikirim member grup", "usage": ".antilink <on/off>", "example": ".antilink on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antilink.js", metadata, m, extra)
handler.help = ["rimuru-group-antilink <on/off>"]
handler.command = ["rimuru-group-antilink", "rimuru-antilink", "rimuru-al", "rimuru-antilinkgroup", "rimuru-nolink", "al", "antilinkgroup", "nolink"]
handler.tags = ["group"]
handler.description = "Hapus otomatis semua link yang dikirim member grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antilink", "alias": ["al", "antilinkgroup", "nolink"], "category": "group", "description": "Hapus otomatis semua link yang dikirim member grup", "usage": ".antilink <on/off>", "example": ".antilink on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antilink": "antilink", "rimuru-antilink": "antilink", "rimuru-al": "al", "rimuru-antilinkgroup": "antilinkgroup", "rimuru-nolink": "nolink", "al": "al", "antilinkgroup": "antilinkgroup", "nolink": "nolink"}
export default handler
