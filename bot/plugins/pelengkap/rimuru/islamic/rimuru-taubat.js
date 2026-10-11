/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/taubat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "taubat", "category": "religi", "aliasMap": {"rimuru-religi-taubat": "taubat", "rimuru-taubat": "taubat", "rimuru-taubatnasuha": "taubatnasuha", "rimuru-taubat-nasuha": "taubat-nasuha", "rimuru-doataubat": "doataubat", "taubat": "taubat", "taubatnasuha": "taubatnasuha", "taubat-nasuha": "taubat-nasuha", "doataubat": "doataubat"}, "description": "Panduan taubat nasuha lengkap dengan doa, latin, arti, dan tata caranya", "usage": ".taubat", "example": ".taubat", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/taubat.js", metadata, m, extra)
handler.help = ["rimuru-religi-taubat"]
handler.command = ["rimuru-religi-taubat", "rimuru-taubat", "rimuru-taubatnasuha", "rimuru-taubat-nasuha", "rimuru-doataubat", "taubat", "taubatnasuha", "taubat-nasuha", "doataubat"]
handler.tags = ["religi"]
handler.description = "Panduan taubat nasuha lengkap dengan doa, latin, arti, dan tata caranya"
handler.importSource = "rimuru"
handler.importConfig = {"name": "taubat", "alias": ["taubatnasuha", "taubat-nasuha", "doataubat"], "category": "religi", "description": "Panduan taubat nasuha lengkap dengan doa, latin, arti, dan tata caranya", "usage": ".taubat", "example": ".taubat", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-taubat": "taubat", "rimuru-taubat": "taubat", "rimuru-taubatnasuha": "taubatnasuha", "rimuru-taubat-nasuha": "taubat-nasuha", "rimuru-doataubat": "doataubat", "taubat": "taubat", "taubatnasuha": "taubatnasuha", "taubat-nasuha": "taubat-nasuha", "doataubat": "doataubat"}
export default handler
