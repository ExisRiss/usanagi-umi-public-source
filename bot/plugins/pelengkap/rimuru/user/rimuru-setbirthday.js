/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/setbirthday.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setbirthday", "category": "user", "aliasMap": {"rimuru-user-setbirthday": "setbirthday", "rimuru-setbirthday": "setbirthday", "rimuru-setbday": "setbday", "rimuru-setultah": "setultah", "rimuru-settgl": "settgl", "setbday": "setbday", "settgl": "settgl"}, "description": "Set tanggal ulang tahun", "usage": ".setbirthday <DD-MM>", "example": ".setbirthday 25-12", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/setbirthday.js", metadata, m, extra)
handler.help = ["rimuru-user-setbirthday <DD-MM>"]
handler.command = ["rimuru-user-setbirthday", "rimuru-setbirthday", "rimuru-setbday", "rimuru-setultah", "rimuru-settgl", "setbday", "settgl"]
handler.tags = ["user"]
handler.description = "Set tanggal ulang tahun"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setbirthday", "alias": ["setbday", "setultah", "settgl"], "category": "user", "description": "Set tanggal ulang tahun", "usage": ".setbirthday <DD-MM>", "example": ".setbirthday 25-12", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-setbirthday": "setbirthday", "rimuru-setbirthday": "setbirthday", "rimuru-setbday": "setbday", "rimuru-setultah": "setultah", "rimuru-settgl": "settgl", "setbday": "setbday", "settgl": "settgl"}
export default handler
