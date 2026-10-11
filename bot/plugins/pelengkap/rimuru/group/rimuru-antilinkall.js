/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antilinkall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antilinkall", "category": "group", "aliasMap": {"rimuru-group-antilinkall": "antilinkall", "rimuru-antilinkall": "antilinkall", "rimuru-alall": "alall", "rimuru-antialllink": "antialllink", "antilinkall": "antilinkall", "alall": "alall", "antialllink": "antialllink"}, "description": "Anti semua jenis link (deteksi domain extension)", "usage": ".antilinkall <on/off/metode> [kick/remove]", "example": ".antilinkall on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antilinkall.js", metadata, m, extra)
handler.help = ["rimuru-group-antilinkall <on/off/metode> [kick/remove]"]
handler.command = ["rimuru-group-antilinkall", "rimuru-antilinkall", "rimuru-alall", "rimuru-antialllink", "antilinkall", "alall", "antialllink"]
handler.tags = ["group"]
handler.description = "Anti semua jenis link (deteksi domain extension)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antilinkall", "alias": ["alall", "antialllink"], "category": "group", "description": "Anti semua jenis link (deteksi domain extension)", "usage": ".antilinkall <on/off/metode> [kick/remove]", "example": ".antilinkall on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antilinkall": "antilinkall", "rimuru-antilinkall": "antilinkall", "rimuru-alall": "alall", "rimuru-antialllink": "antialllink", "antilinkall": "antilinkall", "alall": "alall", "antialllink": "antialllink"}
export default handler
