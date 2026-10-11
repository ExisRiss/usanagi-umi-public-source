/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/amsend.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "amsend", "category": "tools", "aliasMap": {"rimuru-tools-amsend": "amsend", "rimuru-amsend": "amsend", "rimuru-sendam": "sendam", "rimuru-amremlink": "amremlink", "amsend": "amsend", "sendam": "sendam", "amremlink": "amremlink"}, "description": "Alias: kirim link AM (pakai .amprem)", "usage": ".amsend <email>  (redirect ke alur .amprem)", "example": ".amsend email@gmail.com", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/amsend.js", metadata, m, extra)
handler.help = ["rimuru-tools-amsend <email>  (redirect ke alur .amprem)"]
handler.command = ["rimuru-tools-amsend", "rimuru-amsend", "rimuru-sendam", "rimuru-amremlink", "amsend", "sendam", "amremlink"]
handler.tags = ["tools"]
handler.description = "Alias: kirim link AM (pakai .amprem)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "amsend", "alias": ["sendam", "amremlink"], "category": "tools", "description": "Alias: kirim link AM (pakai .amprem)", "usage": ".amsend <email>  (redirect ke alur .amprem)", "example": ".amsend email@gmail.com", "isOwner": false, "isPremium": false, "isEnabled": true, "cooldown": 5}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-amsend": "amsend", "rimuru-amsend": "amsend", "rimuru-sendam": "sendam", "rimuru-amremlink": "amremlink", "amsend": "amsend", "sendam": "sendam", "amremlink": "amremlink"}
export default handler
