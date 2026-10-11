/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/bypass.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bypass", "category": "tools", "aliasMap": {"rimuru-tools-bypass": "bypass", "rimuru-bypass": "bypass", "rimuru-linkbypass": "linkbypass", "rimuru-unlocklink": "unlocklink", "rimuru-bypasser": "bypasser", "linkbypass": "linkbypass", "unlocklink": "unlocklink", "bypasser": "bypasser"}, "description": "Bypass shortlink / locked URL", "usage": ".bypass <url>", "example": ".bypass sfl.gl/lqOU0", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/bypass.js", metadata, m, extra)
handler.help = ["rimuru-tools-bypass <url>"]
handler.command = ["rimuru-tools-bypass", "rimuru-bypass", "rimuru-linkbypass", "rimuru-unlocklink", "rimuru-bypasser", "linkbypass", "unlocklink", "bypasser"]
handler.tags = ["tools"]
handler.description = "Bypass shortlink / locked URL"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bypass", "alias": ["linkbypass", "unlocklink", "bypasser"], "category": "tools", "description": "Bypass shortlink / locked URL", "usage": ".bypass <url>", "example": ".bypass sfl.gl/lqOU0", "isOwner": false, "isPremium": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-bypass": "bypass", "rimuru-bypass": "bypass", "rimuru-linkbypass": "linkbypass", "rimuru-unlocklink": "unlocklink", "rimuru-bypasser": "bypasser", "linkbypass": "linkbypass", "unlocklink": "unlocklink", "bypasser": "bypasser"}
export default handler
