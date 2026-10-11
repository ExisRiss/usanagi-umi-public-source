/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/level.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "level", "category": "user", "aliasMap": {"rimuru-user-level": "level", "rimuru-level": "level", "rimuru-lvl": "lvl", "rimuru-ceklevel": "ceklevel", "level": "level", "lvl": "lvl", "ceklevel": "ceklevel"}, "description": "Cek level user", "usage": ".level [@user]", "example": ".level", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/level.js", metadata, m, extra)
handler.help = ["rimuru-user-level [@user]"]
handler.command = ["rimuru-user-level", "rimuru-level", "rimuru-lvl", "rimuru-ceklevel", "level", "lvl", "ceklevel"]
handler.tags = ["user"]
handler.description = "Cek level user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "level", "alias": ["lvl", "ceklevel"], "category": "user", "description": "Cek level user", "usage": ".level [@user]", "example": ".level", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-level": "level", "rimuru-level": "level", "rimuru-lvl": "lvl", "rimuru-ceklevel": "ceklevel", "level": "level", "lvl": "lvl", "ceklevel": "ceklevel"}
export default handler
