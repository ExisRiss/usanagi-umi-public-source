/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/izen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "izen", "category": "tools", "aliasMap": {"rimuru-tools-izen": "izen", "rimuru-izen": "izen", "rimuru-skiplink": "skiplink", "izen": "izen"}, "description": "Bypass shortlink / skiplink menggunakan izen", "usage": ".izen link", "example": ".izen https://sfl.gl/xxxxx", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/izen.js", metadata, m, extra)
handler.help = ["rimuru-tools-izen link"]
handler.command = ["rimuru-tools-izen", "rimuru-izen", "rimuru-skiplink", "izen"]
handler.tags = ["tools"]
handler.description = "Bypass shortlink / skiplink menggunakan izen"
handler.importSource = "rimuru"
handler.importConfig = {"name": "izen", "alias": ["skiplink", "izen"], "category": "tools", "description": "Bypass shortlink / skiplink menggunakan izen", "usage": ".izen link", "example": ".izen https://sfl.gl/xxxxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-izen": "izen", "rimuru-izen": "izen", "rimuru-skiplink": "skiplink", "izen": "izen"}
export default handler
